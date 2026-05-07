# System Architecture — Barangay Complaint System

## Overview
The Barangay Complaint System is a web-based application built using
a modern JAMstack architecture. It consists of a React frontend,
Firebase backend, and is deployed on Vercel.

## Architecture Diagram
┌─────────────────────────────────────────────────────┐
│                    CLIENT LAYER                      │
│                                                      │
│   ┌─────────────┐         ┌─────────────────────┐   │
│   │  Resident   │         │    Admin (Browser)   │   │
│   │  (Browser)  │         │                      │   │
│   └──────┬──────┘         └──────────┬──────────┘   │
└──────────┼──────────────────────────┼───────────────┘
│                          │
▼                          ▼
┌─────────────────────────────────────────────────────┐
│                   FRONTEND LAYER                     │
│                                                      │
│   React + Vite (Deployed on Vercel)                  │
│                                                      │
│   ┌──────────────┐  ┌───────────┐  ┌─────────────┐  │
│   │FileComplaint │  │ Dashboard │  │  Complaint  │  │
│   │    Page      │  │   Page    │  │ Details Page│  │
│   └──────────────┘  └───────────┘  └─────────────┘  │
│                                                      │
│   ┌──────────────┐  ┌───────────────────────────┐   │
│   │  Login Page  │  │   ProtectedRoute Component │   │
│   └──────────────┘  └───────────────────────────┘   │
└─────────────────────────────┬───────────────────────┘
│
▼
┌─────────────────────────────────────────────────────┐
│                   BACKEND LAYER                      │
│                                                      │
│   Firebase (Google Cloud - asia-southeast1)          │
│                                                      │
│   ┌──────────────────┐   ┌────────────────────────┐ │
│   │    Firestore     │   │  Firebase Auth         │ │
│   │                  │   │                        │ │
│   │  complaints/     │   │  Email/Password Auth   │ │
│   │  ├── id          │   │  Admin Account         │ │
│   │  ├── name        │   │                        │ │
│   │  ├── phone       │   └────────────────────────┘ │
│   │  ├── address     │                              │
│   │  ├── category    │                              │
│   │  ├── description │                              │
│   │  ├── status      │                              │
│   │  └── date        │                              │
│   └──────────────────┘                              │
└─────────────────────────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────┐
│                  CI/CD LAYER                         │
│                                                      │
│   GitHub Actions                                     │
│   push to main → Test → Build → Smoke Test           │
│                                                      │
│   Vercel                                             │
│   Auto-deploy on push to main branch                 │
└─────────────────────────────────────────────────────┘

## Data Flow

### Resident Filing a Complaint
1. Resident opens `/file-complaint` page
2. Fills out form (name, phone, address, category, description)
3. React sends `addDoc()` to Firestore
4. Complaint saved with unique ID and status "Pending"
5. Resident redirected to confirmation

### Admin Managing Complaints
1. Admin opens `/login` page
2. Firebase Auth verifies credentials
3. Auth token stored in browser session
4. Admin redirected to Dashboard
5. Dashboard fetches all complaints from Firestore
6. Admin updates status via dropdown
7. Firestore updated in real time

## Tech Stack Summary
| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite 6 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 7 |
| Database | Firebase Firestore |
| Authentication | Firebase Auth |
| Hosting | Vercel |
| CI/CD | GitHub Actions |
| Testing | Vitest + React Testing Library |
