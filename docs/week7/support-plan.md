# Support Plan — Barangay Complaint System

## Support Process

### Step 1: Issue Reporting
- Users report issues via GitHub Issues
- Use the bug report template in `.github/ISSUE_TEMPLATE/bug_report.md`
- Include screenshots and steps to reproduce

### Step 2: Issue Triage
- QA Lead (Hans Saguilayan) reviews new issues within 24 hours
- Assigns severity level (S1-S4)
- Assigns to the responsible team member

### Step 3: Resolution
- Developer creates a `bugfix/<name>` branch
- Fix is implemented and tested locally
- PR opened, reviewed, and merged
- Issue closed with PR link

## Response Times

| Severity | Response Time | Resolution Time |
|---|---|---|
| S1 - Critical | 1 hour | 4 hours |
| S2 - Major | 4 hours | 24 hours |
| S3 - Minor | 24 hours | 3 days |
| S4 - Trivial | 3 days | 1 week |

## Common Issues & Solutions

| Issue | Solution |
|---|---|
| Complaint not saving | Check Firebase Firestore rules and internet connection |
| Page not loading | Clear browser cache, check Vercel deployment status |
| Status not updating | Refresh the page, check Firebase console for errors |
| Form not submitting | Ensure all required fields are filled |

## Escalation
If an issue cannot be resolved within the response time:
1. Notify PM (Keith Austria) immediately
2. PM escalates to the whole team
3. Emergency hotfix branch created
4. Fix deployed as hotfix release