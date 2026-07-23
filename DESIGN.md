# emmazhang.dev — Design Doc

Personal résumé site for Emma Zhang, hosted at https://emmazhang.dev.

## Why this shape

The audience is US recruiters and hiring managers skimming for signal. One page,
top to bottom, tells the whole story: who Emma is → what she has shipped → what
she knows → how to reach her. No routing, no page loads, nothing to hunt for.

Apple's design language was chosen deliberately: it reads as calm and confident,
and it is built almost entirely from typography and whitespace — which keeps the
site fast and the maintenance surface tiny.

## Decisions

| Axis | Choice | Why |
|---|---|---|
| Stack | Vue 3 + Vite | Component structure, static output, one-step deploy; also a Vue line for the résumé |
| Structure | Single page, long scroll | Content volume fits one page; Apple's native form |
| Color | Light-first, auto dark via `prefers-color-scheme` | Recruiter-friendly; zero-JS theme switching |
| Language | English only | Matches the résumé and the audience |
| Type | System font stack (SF Pro on Apple devices) | The Apple look *is* the system font; zero font payload |
| Signature | Gradient "Emma Zhang." hero headline (blue→purple→pink, slow drift) | Nod to the macOS "hello" moment; the one loud element on an otherwise quiet page |
| Dev port | 5174 (strict) | 5173 is taken by another local project |

## Structure

```
SiteNav          sticky, frosted glass (backdrop-filter blur)
HeroSection      full-viewport greeting, gradient name, CTA pair
ExperienceSection  #f5f5f7 band, one white card per job
SkillsSection    2×2 category cards with chips
EducationSection centered, minimal
ContactSection   big gradient sign-off + email pill
SiteFooter       hairline + small print
```

All copy and data live in `src/data/resume.js` — components never hardcode
content. Scroll reveals are a single `v-reveal` directive
(`src/directives/reveal.js`, IntersectionObserver, fires once,
disabled under `prefers-reduced-motion`).

## Tokens

Light: bg `#ffffff` / alt `#f5f5f7`, text `#1d1d1f` / secondary `#6e6e73`,
accent `#0071e3`. Dark: bg `#000` / alt `#161617`, text `#f5f5f7`, accent
`#2997ff`. Radius 18px cards / 980px pills. Body 17px, letter-spacing
-0.022em; display sizes clamp() against viewport.

## Open items

- [ ] Résumé PDF: drop into `/public`, set `profile.resumeUrl`
- [ ] Real GitHub / LinkedIn URLs in `src/data/resume.js`
- [ ] Deploy to emmazhang.dev (Vercel or Cloudflare Pages)
- [ ] Optional: projects section (MailPilot, AccessMuse) if wanted later
