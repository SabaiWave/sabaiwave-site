# DESIGN_BRIEF_RESPONSE.md

## Logo / Icon
**Format:** SVG
**Description:** Terminal-prompt wordmark — `>sabaiwave`, lowercase, no separate icon/mark in nav. Caret and "wave" in teal, "sabai" in off-white. JetBrains Mono Bold (700). Matches the Vercel-reference direction: text-only branding, no literal wave illustration.
**SVG code or file reference:** `logo-wordmark.svg` (attached)
**Wordmark font:** Distinct from display font. JetBrains Mono is reserved for the logo + code/technical labels only — not used for headings or body copy (readability at paragraph length).

**Favicon / app icon:** Full wordmark won't read at 16–32px. Compact mark — caret (`>`) alone, centered in a rounded near-black tile — `logo-mark-favicon.svg` (attached).

**Logo variants:** Site is dark-only (per brief), so one variant covers it — no separate light-bg version needed.

## Color Palette
Primary: `#2DD4BF`
Accent: `#2DD4BF`
Background: `#0B0D12`
Surface: `#13161C`
Text primary: `#EDEDED`
Text muted: `#8A8F98`
Border subtle: `#20242C`
**Color strategy note:** Single-accent system — teal carries primary, accent, CTA, and glow roles, no secondary color. Background is near-black with a faint cool tint (not pure `#000000`), keeps teal reading crisp against it.

**Note for dev:** primary CTA button uses teal background with `#0B0D12` text (not white-on-teal) — white text on `#2DD4BF` fails contrast at button-text size.

## Typography
Display: Geist — confirmed available natively via `next/font/google` (`import { Geist } from 'next/font/google'`), zero extra dependency since the stack is already Next.js. Direct match to the Vercel reference site.
Body: Geist, regular weight — same family as display
Mono: JetBrains Mono — logo wordmark + code snippets/stack labels only, not headings/body

## Case Studies
None for v1 — cutting this section entirely rather than padding with vague placeholders.

**Dev note:** replace the case-studies slot with a lightweight "What we build" section instead (copy below) — gives the page substance without fake specifics. Revisit case studies once there's real client work to show.

## Social / Contact
LinkedIn: none yet
GitHub: none yet
Twitter/X: none yet
Email: `info@sabaiwave.com` (confirmed)

**Dev note:** no social links yet — omit the social row entirely for now rather than showing empty/dead icons. Build the footer so social icons can be added later without a layout change (e.g. conditional render on a config array, not hardcoded JSX).

## Copy

### Hero Tagline
**A technical partner who actually shows up.**

### Hero Subheading
Sabai Wave designs and builds software for startups and growing teams — web apps, automation, cloud infrastructure — with direct communication and zero bureaucracy. You always know exactly what's happening and why.

### What We Build (new section, replaces case studies for v1)
**Heading:** What we build

- **Web apps & dashboards** — Next.js, modern cloud-native stacks
- **Workflow automation** — your tools, actually talking to each other
- **AI-assisted systems** — multi-agent pipelines, not gimmicks
- **Architecture & system design** — built right the first time, documented, maintainable

### Contact Section
**Heading:** Let's talk
**CTA button:** Get in touch (mailto:info@sabaiwave.com)

## Other Notes
- Mono font intentionally excluded from headings/body — terminal aesthetic lives in the logo and technical labels, not the whole UI. Keeps it closer to "calm, precise, confident" than "hacker terminal."
- No secondary accent color — resist adding one later without a specific functional reason (e.g. error states can use a semantic red, but that's UI-state color, not brand color).
- All copy avoids the banned buzzword list (seamless, world-class, cutting-edge, empower, leverage, transform) and avoids the previous tagline's own tired words (lean, scalable) for a clean break from the old copy.
- "What we build" section is a structural addition beyond the original brief — confirm before Claude Code treats it as locked scope.
