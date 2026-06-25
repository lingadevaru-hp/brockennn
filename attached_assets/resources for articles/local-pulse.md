---
title: LocalPulse
type: project
tags: [web, fullstack, nextjs, typescript, pwa]
status: active
last_updated: 2026-04-30
---

# LocalPulse

## Summary

Local-first event discovery and organiser platform. Built with Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS, and shadcn/ui. Uses local browser storage as a zero-cost database with PWA support for offline-first operation.

**GitHub:** [github.com/lingadevaru-hp/LocalPulse](https://github.com/lingadevaru-hp/LocalPulse) (1 star, TypeScript, 10 commits, Mar 2026)  
**Deploy targets:** Vercel or Netlify

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| UI | React 18, Tailwind CSS, shadcn/ui |
| Language | TypeScript |
| Auth | Clerk (`@clerk/nextjs`) — sign in, sign up, profile, password reset |
| Backend / DB | Firebase + local browser storage (zero-cost) |
| PWA | Service worker, offline support, install prompt, mobile icons |
| Deploy | Vercel or Netlify |

## Key Features

### Event Discovery
- Search and filter events
- Featured events section
- Smart recommendations: category + city + rating affinity scoring
- Access-controlled visibility: local, college, department events

### Auth (Clerk)
- Sign in / sign up
- Profile management
- Password reset

### Organiser Workflow
- Organiser verification: document upload (Aadhaar, PAN, GST, business docs)
- Status states: pending / approved / rejected

### Admin Panel
- Organiser approval management
- Platform analytics: user count, organiser count, total events, registrations
- Admin email configured via `NEXT_PUBLIC_ADMIN_EMAILS` env var (contact@lingadevaru.in)

### Ticketing
- Downloadable PDF tickets (named by event)
- Ticket history per user
- Reminder toggles

### User Tools
- Favorites tracking — persisted in local browser storage
- Recently viewed tracking — persisted in local browser storage
- Add-to-calendar export (.ics — Google Calendar, Outlook, Apple Calendar)

### Local Data Hub (`/database`)
- Inspect all locally stored data
- Export backup JSON
- Import data on another device
- Clear all data

## Main Routes

| Route | Purpose |
|-------|---------|
| `/` | Home / event discovery |
| `/events/[id]` | Event detail page |
| `/events/create` | Create new event |
| `/my-tickets` | Ticket history |
| `/profile` | User profile |
| `/organiser` | Organiser dashboard |
| `/organiser/apply` | Organiser verification application |
| `/admin` | Admin control panel |
| `/database` | Local Data Hub |

## Related Pages

- [[profile/projects]] — All projects overview
- [[profile/about]] — Skills and career context
- [[work-college-internship]] — Education and internship context
