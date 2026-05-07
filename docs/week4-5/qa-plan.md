# QA Plan — Barangay Complaint System

## Test Levels

### Unit Testing
- Test individual functions and components in isolation
- Tool: Vitest + React Testing Library
- Coverage target: All utility functions and key components

### Integration Testing
- Test how components interact with Firebase
- Tool: Vitest with mocked Firebase calls
- Coverage target: Complaint submission and retrieval flow

### System Testing
- Test the full application end to end
- Tool: Manual testing on browser
- Coverage target: All user stories in Sprint 1

## Entry Criteria
- All unit tests must pass before merging to main
- No S1 or S2 bugs open
- Feature branch must be reviewed by at least 1 member

## Exit Criteria
- All 5 unit tests passing
- No critical or major bugs open
- All acceptance criteria met for Sprint 1 stories
- Deployed successfully to Vercel

## Severity Levels

| Level | Name | Description |
|---|---|---|
| S1 | Critical | App crashes, data loss, cannot proceed |
| S2 | Major | Feature completely broken |
| S3 | Minor | Feature partially works |
| S4 | Trivial | Cosmetic or UI issue |

## Test Responsibilities

| Member | Responsibility |
|---|---|
| Hans Saguilayan | Write and run unit tests |
| Keith Austria | Manual system testing |
| Gian Paolo Oga | UI/visual testing |
| Lawrence Enerio | Document test results |
| Glenn Richard Pepito | Deployment testing |