// Vercel Serverless Function: Form Submission Handler
// Receives form data, forwards to Google Sheets, sends email notification

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const VALID_PROPERTY_TYPES = [
  'Office', 'Retail', 'Logistics', 'Industrial',
  'Mixed-Use', 'Hospitality', 'Healthcare', 'Residential'
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, propertyType, location } = req.body;

    if (!email || !propertyType) {
      return res.status(400).json({ error: 'Email and property type are required' });
    }

    if (!EMAIL_REGEX.test(email) || email.length > 254) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    if (!VALID_PROPERTY_TYPES.includes(propertyType)) {
      return res.status(400).json({ error: 'Invalid property type' });
    }

    if (location && location.length > 200) {
      return res.status(400).json({ error: 'Location too long' });
    }

    const timestamp = new Date().toISOString();
    const submission = { email, propertyType, location: location || 'Not specified', timestamp };

    // 1. Forward to Google Sheets via Apps Script Web App
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    if (GOOGLE_SCRIPT_URL) {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission),
        });
      } catch (err) {
        console.error('Google Sheets error:', err.message);
      }
    }

    // 2. Send email notification via Resend (or log if not configured)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'BizFlow <noreply@taurusai.io>',
            to: ['admin@taurusai.io'],
            subject: `New Assessment Request: ${escapeHtml(propertyType)} - ${escapeHtml(location) || 'No location'}`,
            html: `
              <h2>New Property Assessment Request</h2>
              <table style="border-collapse:collapse;width:100%;max-width:500px;">
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(email)}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Property Type</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(propertyType)}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Location</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(location) || 'Not specified'}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Submitted</td><td style="padding:8px;border:1px solid #ddd;">${timestamp}</td></tr>
              </table>
              <p style="margin-top:16px;color:#666;">— BizFlow™ by Taurus AI</p>
            `,
          }),
        });
      } catch (err) {
        console.error('Email notification error:', err.message);
      }
    }

    // 3. Log submission (no PII)
    console.log('SUBMISSION:', JSON.stringify({ propertyType, location: location || 'Not specified', timestamp }));

    return res.status(200).json({
      success: true,
      message: 'Assessment request received',
      timestamp,
    });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
