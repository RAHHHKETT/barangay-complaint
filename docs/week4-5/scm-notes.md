# SCM Notes — Merge Conflict Resolution

## Branch Naming Convention
- `feature/<name>` — new features
- `bugfix/<name>` — bug fixes
- `hotfix/<name>` — urgent fixes

## Merge Conflict Simulation

### What Happened
Two team members edited `src/pages/Dashboard.jsx` on separate branches:
- `feature/filter-complaints` — Lawrence Enerio added filter dropdown
- `feature/stats-cards` — Keith Austria added statistics cards

### Conflict
When merging `feature/filter-complaints` into `dev`, Git detected a conflict in `Dashboard.jsx` because both branches modified the same section of the return statement.

### How We Resolved It
1. Ran `git merge feature/filter-complaints` on the `dev` branch
2. Git flagged conflict in `Dashboard.jsx`
3. Opened the file in VS Code
4. Manually kept both changes — stats cards on top, filter dropdown below
5. Removed Git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
6. Staged the resolved file with `git add`
7. Committed with message: `fix: resolve merge conflict in Dashboard.jsx`
8. Pushed to `dev` and opened PR to `main`

### Lesson Learned
- Always pull latest changes before starting a new branch
- Communicate with team when editing the same file
- Small frequent commits reduce merge conflicts