# Deployment Plan — Barangay Complaint System

## Target Environment
- **Platform:** Vercel
- **Frontend:** React + Vite
- **Backend:** Firebase Firestore
- **URL:** https://barangay-complaint-system.vercel.app

## Rollout Strategy
1. Developer tests locally using `npm run dev`
2. Changes pushed to `feature/<name>` branch
3. PR opened and reviewed by at least 1 team member
4. PR merged into `dev` branch
5. `dev` merged into `main` after final review
6. Vercel auto-deploys on push to `main`

## Rollback Steps
If deployment fails or causes issues:
1. Go to Vercel dashboard
2. Click on the project
3. Go to **Deployments** tab
4. Find the last stable deployment
5. Click **Promote to Production**
6. Notify team via group chat immediately
7. Create a `hotfix/<name>` branch to fix the issue
8. Test fix locally before redeploying

## Environment Variables
The following must be set in Vercel dashboard under **Settings > Environment Variables:**
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`