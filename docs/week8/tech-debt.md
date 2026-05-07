# Technical Debt — Barangay Complaint System

## Tech Debt Items

| ID | Description | Priority | Status |
|---|---|---|---|
| TD-001 | No authentication system — anyone can access and modify complaints | High | Open |
| TD-002 | Firebase config hardcoded in firebase.js instead of fully using .env variables | High | Resolved |
| TD-003 | No pagination — all complaints load at once which will slow down with large data | Medium | Open |
| TD-004 | No error boundary — app crashes silently when Firebase is unreachable | Medium | Open |
| TD-005 | Duplicate code in Dashboard and ComplaintDetails for status badge styling | Low | Resolved |

## Resolved Items

### TD-002 — Firebase config uses .env variables
- **What was wrong:** API keys were hardcoded directly in `firebase.js`
- **Fix applied:** Moved all sensitive config to `.env` file and referenced via `import.meta.env`
- **Refactored by:** Glenn Richard Pepito

### TD-005 — Status badge styling extracted to reusable function
- **What was wrong:** Status badge className logic was duplicated in Dashboard and ComplaintDetails
- **Fix applied:** Extracted into a helper function `getStatusClass(status)`
- **Refactored by:** Gian Paolo Oga