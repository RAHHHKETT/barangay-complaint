# Defect Log — Barangay Complaint System

| Bug ID | Description | Severity | Status | PR Link |
|---|---|---|---|---|
| BUG-001 | Complaint form submits with empty fields | S2 | Closed | #1 |

## Bug Details

### BUG-001
- **Description:** Complaint form was submitting even when required fields were empty
- **Severity:** S2 - Major
- **Found by:** Hans Saguilayan
- **Date Found:** Sprint 1
- **Steps to Reproduce:**
  1. Go to File Complaint page
  2. Leave all fields empty
  3. Click Submit
  4. Form submits without validation
- **Fix Applied:** Added `required` attribute to all form fields and HTML5 validation
- **Status:** Closed
- **PR Link:** #1