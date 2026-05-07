# Product Backlog — Barangay Complaint System

## User Stories

---

### US-01: File a Complaint
**As a** barangay resident, **I want** to file a complaint online **so that** I can report issues in my community without going to the barangay hall.

- **Priority:** High
- **Story Points:** 5
- **Acceptance Criteria:**
  - Resident can fill out a complaint form with name, phone, address, category, and description
  - Form validates all required fields before submission
  - Complaint is saved to the database with a unique ID
  - Resident is redirected to the dashboard after submission

---

### US-02: View All Complaints
**As a** barangay official, **I want** to view all filed complaints **so that** I can monitor and manage community issues.

- **Priority:** High
- **Story Points:** 5
- **Acceptance Criteria:**
  - Dashboard displays all complaints as cards
  - Each card shows complainant name, category, status, address, and date
  - Complaints are loaded from the database in real time
  - Empty state is shown when no complaints exist

---

### US-03: Update Complaint Status
**As a** barangay official, **I want** to update the status of a complaint **so that** residents know the progress of their complaint.

- **Priority:** High
- **Story Points:** 3
- **Acceptance Criteria:**
  - Official can change status to Pending, In Progress, or Resolved
  - Status change is saved to the database immediately
  - Status badge color updates to reflect the current status

---

### US-04: View Complaint Details
**As a** barangay official, **I want** to view the full details of a complaint **so that** I can understand the issue completely.

- **Priority:** High
- **Story Points:** 2
- **Acceptance Criteria:**
  - Clicking "View Details" navigates to the complaint detail page
  - Detail page shows all complaint information
  - Official can update status from the detail page

---

### US-05: Filter Complaints by Status
**As a** barangay official, **I want** to filter complaints by status **so that** I can focus on complaints that need attention.

- **Priority:** Medium
- **Story Points:** 2
- **Acceptance Criteria:**
  - Dropdown allows filtering by All, Pending, In Progress, Resolved
  - Complaint cards update instantly when filter changes
  - Filter persists during the session

---

### US-06: View Complaint Statistics
**As a** barangay official, **I want** to see a summary of complaint statistics **so that** I can quickly assess the situation.

- **Priority:** Medium
- **Story Points:** 2
- **Acceptance Criteria:**
  - Dashboard shows total, pending, in progress, and resolved counts
  - Counts update when complaint statuses change
  - Each stat has a distinct color indicator

---

### US-07: Categorize Complaints
**As a** resident, **I want** to select a category for my complaint **so that** the barangay can route it to the right department.

- **Priority:** Medium
- **Story Points:** 1
- **Acceptance Criteria:**
  - Form includes a dropdown with at least 5 categories
  - Selected category is saved with the complaint
  - Category is displayed on the complaint card

---

### US-08: Cancel Complaint Submission
**As a** resident, **I want** to cancel filing a complaint **so that** I can go back to the dashboard without submitting.

- **Priority:** Low
- **Story Points:** 1
- **Acceptance Criteria:**
  - Cancel button is visible on the complaint form
  - Clicking cancel redirects back to dashboard
  - No data is saved when cancelled

---

### US-09: Navigate Back from Details
**As a** barangay official, **I want** to navigate back to the dashboard from the detail page **so that** I can continue reviewing other complaints.

- **Priority:** Low
- **Story Points:** 1
- **Acceptance Criteria:**
  - Back button is visible on the detail page
  - Clicking back returns to the dashboard
  - Dashboard retains its previous filter state

---

### US-10: Responsive Complaint Cards
**As a** barangay official, **I want** complaint cards to display clearly **so that** I can read all information without confusion.

- **Priority:** Low
- **Story Points:** 1
- **Acceptance Criteria:**
  - Cards display in a 3-column grid on desktop
  - Long descriptions are truncated with ellipsis
  - Status badges are color coded correctly