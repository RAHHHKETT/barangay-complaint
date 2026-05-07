# Privacy Note — Barangay Complaint System

## Data Collected
When a resident files a complaint, the following data is collected:
- Full name
- Phone number
- Home address
- Complaint category
- Complaint description
- Date of filing

## Why We Collect This Data
| Data | Reason |
|---|---|
| Full name | Identify the complainant |
| Phone number | Contact complainant for follow-up |
| Address | Locate and verify the complaint |
| Category | Route complaint to correct department |
| Description | Understand the nature of the complaint |
| Date | Track complaint timeline |

## Data Storage
- All data is stored in Firebase Firestore (Google Cloud)
- Data is stored in Singapore region (asia-southeast1)
- Data is retained until manually deleted by admin

## Who Can Access Your Data
- **Residents** — can only file complaints, cannot view others
- **Admin** — can view and manage all complaints
- **Development Team** — access only during development and maintenance

## User Rights
Even though this is a demo system, users have the right to:
- Request their complaint data be deleted
- Know what data is collected about them
- File complaints without discrimination

## Data Security
- Admin authentication required to access complaint data
- Firebase security rules protect data from unauthorized access
- All API keys stored securely in environment variables

## Note
This is an academic project. In a real deployment, a full privacy policy compliant with the Data Privacy Act of 2012 (Republic Act 10173) of the Philippines would be required.