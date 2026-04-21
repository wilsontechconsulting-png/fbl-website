# FBL Website

Fellowship of Business Leaders website - built with Next.js 16, TypeScript, and Tailwind CSS.

## Live Site

🌐 **Production:** https://fbl-website-drab.vercel.app

## Pages

- **Homepage** - Core positioning, what FBL is/isn't, who it's for
- **About** - Mission, vision, structure, why FBL exists
- **Membership** - What's included, what's expected, investment details
- **Chapters** - National chapter network, current cities, starting a chapter
- **Apply** - Application process and membership information
- **Privacy Policy** - Data handling and member confidentiality
- **Terms of Service** - Membership terms and conditions

## Brand Identity

### Colors
- **Midnight Blue:** `#0F111E` (primary dark)
- **FBL Green:** `#22C55E` (accent, CTAs)
- **Secondary Green:** `#16A34A` (hover states)

### Typography
- **Font:** Inter (system-ui fallback)
- **Style:** Clean, professional, no-fluff

### Design Philosophy
- Grounded, not flashy
- Professional, not corporate
- Structured, not chaotic
- Timeless, not trendy

## Tech Stack

- **Framework:** Next.js 16.2.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Deployment:** Vercel (auto-deploy from `main` branch)
- **Repository:** https://github.com/wilsontechconsulting-png/fbl-website

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy (auto via Vercel)
git push origin main
```

## Deployment

All pushes to `main` branch automatically deploy to Vercel production.

**Build time:** ~30 seconds  
**Deploy URL:** https://fbl-website-drab.vercel.app

## Structure

```
fbl-website/
├── app/
│   ├── about/page.tsx
│   ├── apply/page.tsx
│   ├── chapters/page.tsx
│   ├── membership/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── layout.tsx
│   ├── page.tsx (homepage)
│   └── globals.css
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
└── public/
```

## Contact

**Email:** member@fblconnect.com

---

**Built by:** Maven (ProductiveBot AI)  
**Completed:** April 21, 2026
