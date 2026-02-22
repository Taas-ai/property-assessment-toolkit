# Client Property Assessment Questionnaire - Specification

**Purpose**: Collect comprehensive property information from clients to generate accurate Phase 1 Executive Summary reports.

**Delivery Method**: Email to client within 24 hours of contact form submission

**Completion Timeframe**: 7 days (client deadline to return completed questionnaire)

**Format**: Microsoft Excel spreadsheet (.xlsx) with dropdown validation, conditional formatting, and data validation rules

---

## Excel Workbook Structure

### Sheet 1: Instructions & Overview

**Content**:
```
BizFlow™ Property Assessment Questionnaire
Thank you for requesting our Phase 1 Executive Summary assessment.

This questionnaire collects essential information about your property to enable our team to conduct a comprehensive regulatory compliance and master plan impact analysis.

INSTRUCTIONS:
1. Complete all fields marked with * (required)
2. Use dropdown menus where provided
3. Attach supporting documents (see Document Checklist tab)
4. Return completed questionnaire to admin@taurusai.io within 7 days
5. Our team will deliver your 8-page Executive Summary within 5-7 business days after receiving your responses

SECTIONS:
- Section A: Client Information
- Section B: Property Details
- Section C: Intended Use
- Section D: Investment & Timeline
- Section E: Regulatory Concerns
- Section F: Document Checklist

For assistance: admin@taurusai.io | +971-XX-XXX-XXXX
```

### Sheet 2: Client Information

| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| **Full Name*** | Text | Required | Primary contact |
| **Company Name*** | Text | Required | Legal entity name |
| **Email Address*** | Email | Email format validation | Primary communication |
| **Phone Number*** | Text | UAE mobile format (+971-XX-XXX-XXXX) | |
| **Company Address** | Text | Optional | Registered office address |
| **Role/Title*** | Dropdown | CEO, CFO, COO, Investment Manager, Developer, Other | |
| **Decision Maker?*** | Yes/No | Required | Is this person authorized to proceed with purchase/development? |
| **Board Meeting Date** | Date | Optional | If assessment for Board presentation, when is meeting? |
| **Preferred Communication** | Dropdown | Email, WhatsApp, Phone Call | How should we reach you? |

### Sheet 3: Property Details

| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| **Property Address*** | Text | Required | Full street address |
| **Plot Number*** | Text | Required | Dubai Municipality plot number (e.g., 327-1156) |
| **Area/District*** | Dropdown | See "Area Dropdown Values" below | |
| **Coordinates (if known)** | Text | Lat/Long format (25.XXXX, 55.XXXX) | Optional but helpful |
| **Total Plot Size*** | Number | In square meters | |
| **Existing Buildings?*** | Yes/No | Required | Are there structures on the plot currently? |
| **If Yes: Existing Use** | Dropdown | Office, Retail, Industrial, Warehouse, Residential, Mixed-Use, Vacant/Under Construction | |
| **If Yes: Built-Up Area** | Number | In square meters | Total floor area of existing buildings |
| **Current Zoning*** | Dropdown | C1, C2, C3, C4, I1, I2, I3, MU, H, R, Unknown | Refer to Dubai Municipality title deed |
| **Ownership Status*** | Dropdown | Freehold, Leasehold, Considering Purchase | |
| **If Leasehold: Lease Expiry** | Date | Required if leasehold | When does current lease end? |
| **Free Zone?*** | Yes/No | Required | Is property in JAFZA, DMCC, DSO, or other free zone? |
| **If Yes: Which Free Zone** | Dropdown | JAFZA, DMCC, DSO, DAFZA, DIC, DPC, Other | |

**Area Dropdown Values**:
- Business Bay
- DIFC
- Downtown Dubai
- Dubai Marina
- JBR (Jumeirah Beach Residence)
- Palm Jumeirah
- Al Quoz Industrial Area 1
- Al Quoz Industrial Area 2
- Al Quoz Industrial Area 3
- Al Quoz Industrial Area 4
- Jebel Ali Industrial Area
- Dubai Investment Park
- Dubai Silicon Oasis
- Academic City
- Dubai Techno Park
- Deira
- Bur Dubai
- Jumeirah 1/2/3
- Ras Al Khor Industrial
- Al Barsha
- Sheikh Zayed Road Corridor
- Other (please specify)

### Sheet 4: Intended Use

| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| **Primary Intended Use*** | Dropdown | See "Intended Use Categories" below | What will you use this property for? |
| **Operational Scale*** | Conditional based on Primary Use | See "Operational Scale Questions" below | |
| **Number of Employees*** | Number | Integer, >0 | Peak occupancy (all shifts combined) |
| **Operating Hours*** | Dropdown | 8am-6pm (Business Hours), 7am-11pm (Extended), 24/7 | |
| **Parking Required*** | Number | Total parking spaces needed | RTA will verify this |
| **Expected Daily Visitors** | Number | Optional | Customers, suppliers, delivery drivers |
| **Truck/Delivery Access?*** | Yes/No | Required | Will large vehicles (trucks, trailers) access site? |
| **Hazardous Materials?*** | Yes/No | Required | Will you store/use flammable, toxic, or hazardous materials? |
| **If Yes: Material Types** | Text | Required if Yes | List specific materials (e.g., LPG, chemicals, fuel) |
| **Food Production/Service?*** | Yes/No | Required | Triggers ESMA compliance requirement |
| **If Yes: Meals per Day** | Number | Required if Yes | Daily meal production capacity |
| **Refrigeration Required?*** | Yes/No | Required | Cold storage, walk-in refrigerators, freezers? |
| **If Yes: Cold Storage Area** | Number | In square meters | |

**Intended Use Categories**:
- **Office** (Corporate headquarters, professional services, co-working space)
- **Retail** (Shopping center, supermarket, showroom, boutique)
- **Restaurant/Cafe** (Dining, food court, quick service)
- **Central Kitchen** (Catering, meal production, food processing)
- **Manufacturing** (Light industrial production, assembly, fabrication)
- **Warehouse/Logistics** (Storage, distribution center, fulfillment)
- **Hospitality** (Hotel, serviced apartments, resort)
- **Healthcare** (Clinic, hospital, medical center, diagnostic lab)
- **Education** (School, university, training center)
- **Mixed-Use** (Combination of above)
- **Other** (please specify)

**Operational Scale Questions** (conditional based on Primary Use):

**If Office**:
- Estimated number of workstations: [Number]
- Server room required? [Yes/No]
- Conference/meeting rooms: [Number, capacity]

**If Retail**:
- Gross Leasable Area (GLA): [sq m]
- Number of retail units: [Number]
- Anchor tenants (if known): [Text]

**If Central Kitchen**:
- Daily meal production capacity: [Number meals/day]
- Meal types: [Dropdown: Ambient, Chilled, Frozen, Hot]
- Delivery radius: [Dropdown: <5km, 5-10km, 10-20km, >20km]

**If Warehouse/Logistics**:
- Storage type: [Dropdown: Ambient, Cold Storage, Freezer, Mixed]
- Loading docks required: [Number]
- Heavy rack systems: [Yes/No]

**If Hospitality**:
- Number of rooms: [Number]
- Star rating target: [Dropdown: 3-star, 4-star, 5-star, Luxury]
- F&B outlets: [Number]

### Sheet 5: Investment & Timeline

| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| **Investment Type*** | Dropdown | Purchase + Development, Purchase Only, Lease + Fit-Out, Development on Owned Land | |
| **Total Investment (AED)*** | Number | Required | Purchase + development + fit-out costs |
| **Purchase Price (if buying)** | Number | Optional | Property acquisition cost |
| **Development Budget** | Number | Optional | Construction, fit-out, equipment costs |
| **Financing Status*** | Dropdown | Cash Purchase, Bank Financing Approved, Bank Financing Pending, Not Yet Arranged | |
| **Decision Deadline*** | Date | Required | When do you need to make go/no-go decision? |
| **Target Possession Date** | Date | Optional | When do you need to take possession? |
| **Target Operations Start** | Date | Optional | When do you plan to begin business operations? |
| **Board Presentation Date** | Date | Optional | If assessment for Board approval, when is meeting? |
| **ROI Expectations*** | Dropdown | <5 years payback, 5-10 years, >10 years, Not ROI-focused (strategic asset) | |

### Sheet 6: Regulatory Concerns

| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| **Specific Concerns (Select All That Apply)*** | Multi-select checkboxes | See list below | What are you most worried about? |
| **Known Issues** | Text area | Optional | Any known compliance gaps, violations, or pending actions |
| **Previous Assessments?** | Yes/No | Optional | Have you had prior property assessments or due diligence? |
| **If Yes: Attach Reports** | File upload | PDF, DOCX | We can review to avoid duplicating work |
| **Metro/Infrastructure Impact** | Yes/No | Required | Are you concerned about planned Metro, roads, utilities? |
| **Rezoning Risk** | Dropdown | Not Concerned, Somewhat Concerned, Very Concerned | How important is long-term zoning stability? |
| **Compliance Deadline** | Date | Optional | If you have a regulatory deadline (e.g., HACCP by XX date) |
| **Additional Questions/Comments** | Text area | Optional | Anything else we should know? |

**Specific Concerns Checkboxes**:
- ☐ Dubai Municipality zoning compliance
- ☐ ESMA food safety (HACCP) certification timeline
- ☐ Civil Defence fire safety requirements
- ☐ RTA parking sufficiency
- ☐ DEWA electrical capacity (grid upgrade costs)
- ☐ DEWA water availability
- ☐ Dubai 2040 Master Plan rezoning risk
- ☐ Metro/Tram construction disruption
- ☐ Free zone vs. mainland jurisdiction
- ☐ Building permit timeline
- ☐ Occupancy permit requirements
- ☐ Long-term lease viability (if rezoning occurs)
- ☐ Infrastructure upgrade costs (DEWA, RTA)
- ☐ Environmental compliance (waste, emissions)
- ☐ Other (please specify)

### Sheet 7: Document Checklist

**Instructions**: Please attach the following documents (if available) when returning this questionnaire. Documents marked with * are required; others are optional but highly recommended.

| Document | Required? | Notes |
|----------|-----------|-------|
| **Title Deed / Lease Agreement*** | ✅ Required | Proves plot number, zoning, ownership/lease terms |
| **Plot Location Map*** | ✅ Required | Google Maps screenshot or site plan showing exact location |
| **Architectural Drawings** | Optional | If available - helps us assess building permit compliance |
| **Dubai Municipality NOC** | Optional | If already obtained - we can verify status |
| **Existing ESMA License** | Optional | If food facility with current operations |
| **Civil Defence NOC** | Optional | If existing building with fire safety approval |
| **DEWA Connection Letter** | Optional | Shows contracted electrical/water capacity |
| **Traffic Impact Assessment** | Optional | If previously conducted for this site |
| **Environmental Impact Study** | Optional | If industrial or high-impact use |
| **Previous Property Assessments** | Optional | We can review to build on prior work |
| **Photographs** | Recommended | Exterior, interior, surrounding area (10-20 photos) |
| **Drone Aerial Imagery** | Optional | Helpful for large sites or complex layouts |

**Upload Instructions**:
- Compress all documents into a single ZIP file
- Maximum file size: 50 MB
- Email to: admin@taurusai.io
- Subject line: "[Your Company Name] - Property Assessment Documents"

---

## Data Validation Rules (Excel Implementation)

### Dropdown Lists
- Create named ranges for all dropdown values
- Enable "Show dropdown" and "Reject invalid data"

### Conditional Formatting
- Highlight required fields (*) in light yellow background
- Mark incomplete required fields with red border
- Show green checkmark icon for completed sections

### Formulas for Automated Calculations
- **Parking Sufficiency Check**: Compare "Parking Required" with RTA formula based on Intended Use
  - IF(Intended Use = "Office", Total Plot Size / 50, ...)
  - IF result < Parking Required: Show warning "RTA parking requirement may not be met"

- **Investment per Sq M**: Total Investment / Total Plot Size
  - Display in separate cell for client reference

- **Timeline Feasibility**: Compare "Decision Deadline" with "Target Operations Start"
  - IF difference < 6 months: Show warning "Timeline may be aggressive for permits"

### Conditional Questions (Show/Hide Based on Prior Answers)
- **Free Zone Questions**: Only show if "Free Zone?" = Yes
- **Leasehold Questions**: Only show if "Ownership Status" = Leasehold
- **Food Facility Questions**: Only show if "Food Production/Service?" = Yes
- **Hazardous Materials**: Only show if "Hazardous Materials?" = Yes

---

## Automated Email Template (Sent to Client After Form Submission)

**Subject**: BizFlow™ Property Assessment - Questionnaire & Next Steps

**Body**:
```
Dear [Client Name],

Thank you for requesting a Phase 1 Executive Summary from BizFlow™ Property Assessment Consultancy.

NEXT STEPS:
1. Complete the attached questionnaire (Excel file)
2. Gather the documents listed in the "Document Checklist" tab
3. Return the completed questionnaire + documents to admin@taurusai.io within 7 days
4. Our team will deliver your 8-page Executive Summary within 5-7 business days after receiving your submission

WHAT TO EXPECT IN YOUR REPORT:
- Overall Risk Rating (🟢 Green / 🟡 Yellow / 🔴 Red)
- Board Recommendation (✅ Proceed / ⚠️ Proceed with Conditions / ❌ Do Not Proceed)
- Regulatory Compliance Matrix (Dubai Municipality, ESMA, Civil Defence, RTA, DEWA)
- Dubai 2040 Master Plan Impact (rezoning probability, timeline)
- Infrastructure Risk Analysis (Metro, roads, utilities)
- Key Findings (4-6 critical issues with financial impacts)
- Next Steps (specific actions with deadlines)

QUESTIONS?
Reply to this email or call us at +971-XX-XXX-XXXX

Best regards,
BizFlow™ Property Assessment Team
admin@taurusai.io | www.bizflow-assessment.com (landing page URL)
```

---

## Internal Processing Workflow (After Receiving Completed Questionnaire)

### Step 1: Data Quality Check (1 day)
- Verify all required fields completed
- Check document attachments received
- Flag missing information, request from client if critical

### Step 2: Load Extraction & Cross-Reference (2 days)
- Input data into UAE Urban Planning Officer agent
- Cross-reference plot number with Dubai Municipality GIS portal
- Verify zoning classification against title deed
- Check DEWA grid capacity for area
- Review Dubai 2040 transformation zone maps

### Step 3: Regulatory Framework Analysis (2 days)
- Apply Dubai Municipality requirements (zoning, FAR, setbacks)
- Calculate ESMA compliance costs (if food facility)
- Assess Civil Defence fire safety requirements
- Verify RTA parking sufficiency
- Estimate DEWA connection costs and timeline

### Step 4: Risk Matrix Generation (1 day)
- Calculate rezoning probability using Dubai 2040 data
- Assess infrastructure risks (Metro construction, DEWA capacity)
- Quantify regulatory compliance gaps (cost + timeline)
- Assign overall risk rating (Green/Yellow/Red)

### Step 5: Executive Summary Drafting (1 day)
- Populate executive-summary-template.md with questionnaire data
- Write Board Recommendation with specific conditions (if Yellow)
- List key findings with quantified financial impacts
- Define next steps with actionable deadlines

### Step 6: Quality Review & Delivery (1 day)
- Internal review by senior consultant
- Export to PDF with BizFlow™ branding
- Email to client with cover letter
- Follow up within 48 hours for questions

**Total Timeline**: 5-7 business days (after receiving completed questionnaire)

---

## Excel File Metadata

**File Name**: BizFlow-Property-Assessment-Questionnaire-[Client-Name]-[Date].xlsx

**Author**: BizFlow™ Property Assessment Consultancy

**Version**: 1.0 (February 2026)

**Password Protection**: None (client needs to edit)

**Macro Security**: No macros (to avoid email filtering issues)

**Compatibility**: Excel 2016+ (or Google Sheets compatible)

**File Size**: <2 MB (to ensure email deliverability)

---

## Implementation Notes

**Build in Excel**:
1. Create 7 worksheets as specified above
2. Apply data validation, conditional formatting, formulas
3. Add BizFlow™ logo to header (all sheets)
4. Include footer: "BizFlow™ Property Assessment Consultancy | admin@taurusai.io | Page X of Y"

**Test Before Deployment**:
- Fill out sample questionnaire for ADNH Catering Al Quoz scenario
- Verify all dropdowns, validations, formulas work correctly
- Check file opens correctly in Excel 2016, Excel 365, Google Sheets

**Version Control**:
- Save master template as `BizFlow-Questionnaire-MASTER-v1.0.xlsx`
- When sending to clients, create dated copies: `BizFlow-Questionnaire-[ClientName]-[YYYY-MM-DD].xlsx`

**Accessibility**:
- Use high-contrast colors (black text on white background)
- Avoid relying solely on color coding (use icons + text labels)
- Include alt text for any images/logos
