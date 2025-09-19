# UI Component Plan

## Page-Level Components (app/pages)
- LoginPage (/login)
- DashboardPage (/dashboard)
- HomePage (/)

## Reusable Components (app/components)
- Navbar (top navigation, responsive)
- Footer (bottom section)
- DashboardLayout (sidebar + content area)
- Button (primary, secondary)
- Input (text, password, textarea)
- CourseCard (shows course title, description, tags)

## Layout
- Root layout wraps all pages (app/layout.js)
- Globals.css contains Tailwind and global styles

## Responsiveness
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navbar collapses on mobile
- Dashboard sidebar hidden on mobile
- Grid layouts adapt (1 col → 2 cols → 3 cols)
