// ============================================================
// Google Apps Script — BizFlow Form Submissions to Google Sheets
// ============================================================
//
// SETUP INSTRUCTIONS:
// 1. Create a new Google Sheet named "BizFlow Leads"
// 2. Add headers in Row 1: Timestamp | Email | Property Type | Location | Source
// 3. Go to Extensions > Apps Script
// 4. Paste this entire script and save
// 5. Click Deploy > New deployment > Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 6. Copy the Web App URL
// 7. Add it as GOOGLE_SCRIPT_URL environment variable in Vercel:
//    vercel env add GOOGLE_SCRIPT_URL
//
// ============================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.email,
      data.propertyType,
      data.location || 'Not specified',
      'BizFlow Website'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'BizFlow Form API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
