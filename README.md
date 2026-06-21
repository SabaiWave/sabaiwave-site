# Sabai Wave — Landing Page

This is the marketing site for **Sabai Wave LLC (SBW)**

## Stack
- Next.js 15 (App Router, static export)
- React 19
- Tailwind CSS 4
- Vercel Hosting

## Development
```bash
cp .env.development .env.local   # add NEXT_PUBLIC_FORMSPREE_ID=<your-id>
npm install
npm run dev     # http://localhost:3000
```

## Environment Variables
| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Yes (contact form) | Formspree endpoint ID from formspree.io |

## Deployment
Push to main auto-deploys to Vercel. Set `NEXT_PUBLIC_FORMSPREE_ID` in Vercel dashboard env vars.
