# Release Checklist — Barangay Complaint System

## Pre-Deployment Checklist

### Code Quality
- [ ] All unit tests passing (`npm run test`)
- [ ] No console errors or warnings
- [ ] Code reviewed and approved via PR
- [ ] No commented out or debug code

### Firebase
- [ ] Firestore rules configured correctly
- [ ] Firebase project is on correct plan
- [ ] All collections tested with real data

### Environment
- [ ] All environment variables added to Vercel dashboard
- [ ] `.env` file is in `.gitignore`
- [ ] No API keys exposed in source code

### Version Control
- [ ] Latest code merged into `main`
- [ ] Release tagged (e.g. `v0.5-scm`)
- [ ] Release notes updated in `docs/week4-5/release-notes.md`

### Deployment
- [ ] Vercel build succeeds with no errors
- [ ] Live URL is accessible
- [ ] All pages load correctly on live URL
- [ ] Complaint filing works on live URL
- [ ] Status update works on live URL

### Post Deployment
- [ ] Team notified of successful deployment
- [ ] Live URL shared with teacher
- [ ] Screenshot of live site taken