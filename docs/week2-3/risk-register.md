# Risk Register — Barangay Complaint System

| Risk | Likelihood (1-5) | Impact (1-5) | Score | Mitigation | Owner |
|---|---|---|---|---|---|
| Firebase quota exceeded due to high usage | 2 | 4 | 8 | Monitor usage on Firebase console, optimize queries | Glenn Richard Pepito |
| Team member unavailable due to personal reasons | 3 | 3 | 9 | Redistribute tasks, maintain updated documentation | Keith Austria |
| Data loss due to incorrect Firestore rules | 2 | 5 | 10 | Set proper security rules, test before deployment | Glenn Richard Pepito |
| Merge conflicts causing broken code on main branch | 3 | 4 | 12 | Enforce PR reviews, never push directly to main | Lawrence Enerio |
| UI not responsive on mobile devices | 3 | 3 | 9 | Use Tailwind responsive classes, test on multiple screen sizes | Gian Paolo Oga |
| Vercel deployment fails due to missing env variables | 2 | 4 | 8 | Document all env variables, add them to Vercel dashboard | Glenn Richard Pepito |
| Unit tests failing due to Firebase dependency | 3 | 3 | 9 | Mock Firebase calls in tests using vitest mock functions | Hans Saguilayan |
| Scope creep adding unnecessary features | 2 | 3 | 6 | Strictly follow backlog, any new feature needs team approval | Keith Austria |