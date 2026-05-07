# Ethics Impact Assessment — Barangay Complaint System

## Stakeholders

| Stakeholder | Role | Impact |
|---|---|---|
| Barangay Residents | File complaints | Primary users, directly affected by system quality |
| Barangay Officials | Manage complaints | Admin users, responsible for resolving issues |
| Barangay Captain | Oversight | Monitors complaint resolution performance |
| Development Team | Build & maintain | Responsible for security and reliability |

## Potential Harms

### 1. Privacy Violation
- **Risk:** Personal data (name, phone, address) could be exposed if Firebase rules are misconfigured
- **Mitigation:** Set strict Firestore security rules, only admin can read all complaints

### 2. False Complaints
- **Risk:** Residents could file false or malicious complaints against neighbors
- **Mitigation:** Require complete contact information, admin can flag and dismiss invalid complaints

### 3. Data Discrimination
- **Risk:** Complaints from certain areas could be deprioritized
- **Mitigation:** System treats all complaints equally, sorted by date filed

### 4. Digital Exclusion
- **Risk:** Elderly or non-tech-savvy residents may not be able to use the system
- **Mitigation:** Keep UI simple, maintain physical complaint filing as alternative

### 5. Data Retention
- **Risk:** Complaint data stored indefinitely without consent
- **Mitigation:** Inform users their data is stored, implement data deletion policy

## Ethical Principles Applied
- **Transparency** — residents know their complaint is filed and tracked
- **Fairness** — all complaints treated equally regardless of location
- **Privacy** — personal data protected behind admin authentication
- **Accountability** — admin actions are logged via Firebase