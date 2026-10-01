# Bluewhale Portfolio — CLAUDE.md

## What This Project Is
Personal portfolio website for Chanon Boonsak (Bluewhale), a Bangkok-based live music producer and content strategist.
Its main job: be the link in the "Portfolio:" line of my resume, so recruiters in music, events and creative/content roles can see proof behind the resume bullets (photos, posters, numbers).

Audience: hiring managers and recruiters. They skim for 30 seconds, often on a phone. Every page must load fast and make the key numbers obvious.

## How We Work Together
- I talk casual Thai-English. Reply the same way, short and direct.
- Give me a clear recommendation, not a list of maybes. I will push back if I disagree.
- Build in small steps. After each step, tell me what changed and how to see it (which file to open or which command to run).
- Ask before: adding a framework or library, deleting files, or changing the design direction.
- Never invent facts, numbers, clients or quotes. Only use content from the "Content Source" section below or what I give you. If something is missing, leave a clear `TODO:` placeholder and tell me.
- Keep the English in the site natural and professional. No AI filler words ("passionate", "leverage", "delve", "journey").

## Tech Stack
- Plain HTML + CSS + a little vanilla JS (no build step), unless we agree to change it
- Mobile-first, responsive, no horizontal scroll at 360px width
- Images: compressed WebP/JPG, lazy-loaded, with alt text
- Hosting: GitHub Pages (free, gives a clean link for the resume)

## File Structure
```
portfolio/
  ├── CLAUDE.md
  ├── index.html          home: intro + key numbers + project cards
  ├── projects/
  │     ├── lagoon.html
  │     ├── pmg-dream-theater.html
  │     ├── magazound.html
  │     └── larn-folk-2.html
  ├── css/styles.css
  ├── js/main.js
  ├── assets/images/      one folder per project
  └── resume.pdf          downloadable copy of the resume
```

## Design Style
- Direction: TBD in session 1 (propose 2 options and let me pick)
- Must feel like the music/live-event world, not a generic corporate template
- Keep text readable: body 16px+, strong contrast, clear headings
- lagoon.livemusic has its own brand guidelines. Use them only on the Lagoon project page, not for the whole site
- Color palette: TBD
- Fonts: TBD (Google Fonts only)

## Content Source (verified — use exactly)
Master copy lives in my resume Google Doc: https://docs.google.com/document/d/1pUchhUoWB1VUrWYnHn09rRwuaGzH8WGaduhUP0lskpg/edit
Older visual portfolio: `Portfolio ODR.pdf` (images for Magazound and Larn Folk 2 come from here).

**Contact:** Bangkok, Thailand · bluewhale55470@gmail.com · IG @lagoon.livemusic
(Ask me before putting the phone number on the public site.)

**lagoon.livemusic — Founder & Project Manager (Aug 2025 – Jun 2026)**
- Pitched the concept solo to a venue owner, secured him as investor, built the founding team
- 4 live shows at ARTSPACE @Bantadthong, 9 acts incl. AYLA'S, The White Haircut, Yented, Landokmai
- Sold out a 400-capacity show: 200,000–300,000 THB ticket revenue (600–850 THB via Ticketmelon); ~200 attendance at other dates
- Owned budget, P&L tracking, production timeline, artist liaison
- Reclaimed-plastic set design became the brand's visual signature
- Partner creator reel reached 407K views organically

**Prat Music Global (PMG) — Project Coordinator, Creative & Content (Jan – May 2026)**
- Audience analysis + organic social content for Dream Theater's 40th Anniversary campaign
- Top post: 85,534 impressions, no paid spend; 1,408 interactions, 177 shares, 139 link clicks
- ~87% of engagement in the intended 25–54 age bracket
- On-ground operations for the Overdrive guitar contest

**MAGAZOUND — Project Manager & Creative, Silpakorn University (Mar 2024)**
- Elected PM by an 11-person team; fashion × music festival for a Sponsorship Management course
- Gantt timeline + 30-post PR plan (Facebook, Instagram, TikTok)
- Artists: Tofu, Playing Saliva, TU Folksong; 8 financial sponsors, 4 media partners incl. Fungjai; project closed without a loss
- ~600 attendees; upcycled-fashion show, fast-fashion talk, live music

**Thammasat University Folksong Club — Creative & PR, Larn Folk 2 (Nov 2023)**
- Pitched "The Atlantis" theme, voted #1 and adopted for the annual concert
- Promotion schedule, captions, part of the artwork, cross-university team

**Education:** Silpakorn University, Faculty of Music — BA Music Industry (Music & Entertainment Business), 2022–2026, GPAX 3.56
Thesis: small-scale concert management through Gen Z audience experience at Bangkok live houses

## Features Built
- (none yet)

## In Progress
- Set up project + pick design direction 🔄

## Still To Do
- ⬜ Home page: short intro, 3–4 headline numbers, project cards
- ⬜ One page per project (problem → what I did → result → photos)
- ⬜ Resume PDF download button
- ⬜ Contact section
- ⬜ SEO basics: title, meta description, Open Graph image for link previews
- ⬜ Deploy to GitHub Pages and put the live link into the resume
- ⬜ Final check on a real phone

## Known Issues / Bugs
- (none yet)

## GitHub
- Repo: TODO
- Live site: TODO
- Status: TODO

## How To Start Next Session
1. `cd ~/CLAUDE-PROJECT/portfolio`
2. `claude`
3. Claude reads this file automatically, no need to re-explain.

## Session Commands
When I say any of these: bye, done, cya, goodbye, update, end session, wrap up (or a typo of them)
→ Update this CLAUDE.md: move finished items to Features Built ✅, update In Progress 🔄, Still To Do ⬜ and Known Issues
→ Add a Session Log entry (below) with what was built, files changed, and next steps
→ Remind me to commit and push:
```
git add .
git commit -m "Session N - <what we built>"
git push
```
→ Then say bye. Never delete old entries.

## Session Log
(empty — first entry goes here)

## Last Updated
2026-09-30
