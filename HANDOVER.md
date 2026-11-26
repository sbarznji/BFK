# British Friends of Kurdistan — developer handover

Prepared 12 September 2026. This package contains the complete editable source of the current BFK design preview, including the official logo at its revised, smaller size.

Current website: https://british-friends-of-kurdistan.rahabarznji.chatgpt.site

Source revision: `c0024b0c87e7b63fb321e087d92543a45717de4b`

## What is included

- `source/`: the complete tracked source, dependency lockfile, configuration, components, content, fonts, photographs and official logo. This is the directory to edit.
- `static-website/`: the current prebuilt static website, ready for a compatible static host. It includes HTML, browser JavaScript, CSS, fonts and images. Do not edit this as the primary source; rebuild after making source changes.
- This handover guide, covering local development, domain connection, content changes and outstanding launch work.

Installed dependencies, Git history, local caches, credentials and account access are not included. The existing public site has not been changed by creating this package.

## Stack and local development

React 19, TypeScript, Tailwind CSS 4 and Next.js App Router conventions, built using **Vinext 1.0.0-beta.5 on Vite 8**. This is a Vinext-based static export, not an unmodified standard Next.js project. Preserve the lockfile when reproducing it; migration to another framework should be a separate, tested change.

Use Node.js 22.13 or newer and pnpm 11.25.0 (as declared in package.json). From the extracted `source` directory:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The portable development runner requests port 5173; use the address printed by the terminal. The clean export defaults to the portable execution profile. It does not require access to the original ChatGPT workspace to edit the source.

To check and rebuild:

```sh
pnpm exec tsc --noEmit
pnpm build
```

`next.config.ts` sets `output: 'export'`. This project's build emits the public website under `dist/client/`. Deploy the contents of that public directory, not the source directory or server intermediates. The existing `pnpm start` script is a Worker-development command retained from the starter; it is not a generic static-file preview command. Use `pnpm dev` for local development.

The dependency install and build succeeded in the original environment. Installation on the recipient's machine has not been tested. Some dependencies are recent/beta releases; use the pinned package versions and investigate any registry availability or platform issues before changing them.

## Connecting the owner's domain

The actual domain name and registrar were not supplied, so no custom domain or DNS records have been configured as part of this handover.

Choose one hosting route with the owner:

1. **Keep the current Sites hosting:** add the custom domain through the existing site's domain settings/workflow and use the exact verification and DNS records it supplies. Existing-site editing or hosting access must be granted separately by the owner; possession of this ZIP does not confer that access.
2. **Move to another host:** deploy `static-website/` to inspect the current build, or build `source/` and deploy `dist/client/` after changes. Add the custom domain in that host's control panel, then apply the exact DNS records the host gives you at the registrar/DNS provider. The `.openai/hosting.json` in `source/` identifies the existing Sites project; it is not an API key and is not needed by an unrelated static host, although the supplied Vite configuration imports it during builds.

For either route:

- Decide whether the canonical address is the apex domain or `www`; redirect the other to it.
- Enable and verify HTTPS before launch.
- Preserve existing mail records (MX, SPF, DKIM and DMARC) when changing web DNS.
- Confirm that extensionless routes such as `/about` resolve to `about.html`, unknown routes serve `404.html` with a 404 response, and `.rsc` navigation payloads remain accessible. Test both direct entry and in-site navigation.
- Adapt the supplied `_headers` file to the host's format if needed. Do not apply a blanket SPA fallback that hides missing pages or rewrites asset requests to HTML.
- Test the home, About, Our Work, Events, Contact, Privacy and checklist pages after deployment.

The owner or developer must supply the domain name and appropriate hosting/DNS access. Do not send passwords inside the source archive.

## Where to make changes

| Area | Source file/directory |
| --- | --- |
| Homepage | `app/page.tsx` |
| Shared header and navigation | `components/bfk/header.tsx` |
| Shared footer | `components/bfk/footer.tsx` |
| Colours, type, spacing, responsive layout and logo sizing | `app/globals.css` |
| About and leadership | `app/about/page.tsx` |
| Expanded programme copy | `app/our-work/page.tsx` |
| Event page | `app/events/page.tsx` |
| Shared focus/event components | `components/bfk/content.tsx` |
| Core English copy | `content/en.ts` |
| Event records | `content/events.json` |
| Reserved news records | `content/news.json` |
| Contact page | `app/contact/page.tsx` |
| Preview-only contact form | `components/bfk/contact-form.tsx` |
| Draft privacy notice | `app/privacy/page.tsx` |
| Outstanding information | `app/launch-checklist/page.tsx` |
| Global metadata and Organisation JSON-LD | `app/layout.tsx` |
| Sitemap and crawling rules | `public/sitemap.xml`, `public/robots.txt` |
| Logo, images, fonts and licence notices | `public/` |

## Logo and design specifications

The official JPEG is `public/images/bfk-official-logo.jpeg`. It is an unmodified copy of the owner's supplied artwork. CSS hides excess white margins while preserving the proportions and colours of the artwork. Keep the white ground in the navy footer unless the owner supplies an approved alternative version.

Current logo frame sizes:

| View | Logo frame width | Header height |
| --- | ---: | ---: |
| Desktop | 140px | 94px |
| Tablet, up to 850px | 130px | 88px |
| Mobile, up to 540px | 120px | 82px |
| Footer | 160px desktop / 150px mobile | Not applicable |

The frame ratio is `684 / 384`; the source JPEG remains 1536 × 768. The difference is white-margin framing, not stretching. Relevant rules are at the end of `app/globals.css`. Change one dimension and preserve the aspect ratio. An approved SVG would improve future flexibility, but is not required to use this source.

Palette: Ink Navy `#0E1F3A`, Slate `#39424E`, Brass `#B4873A`, Mist `#E9ECF0`, Paper `#FBFBFA`. The official logo retains its own red, blue and gold. Typography is self-hosted Spectral and Inter. Keep the restrained institutional design, mobile drawer navigation and visible focus styles.

## Contact form: not connected

The form is explicitly a demonstration. It validates fields in the browser but does not send email, call an endpoint or store submissions. Its button reads “Preview enquiry”. Do not treat the validation message as confirmation of a delivered enquiry.

Before enabling it:

- Obtain the actual endpoint or choose a server-side email/form service with the owner.
- Add server-side validation, message-length limits, a honeypot and appropriate abuse/rate controls. Client-side Zod validation alone is insufficient.
- Route policy, business and community enquiries to the agreed recipients.
- Keep service credentials on the server; never bundle them in public JavaScript.
- Implement and test genuine success and failure states, including provider/network errors.
- Complete the privacy notice before collecting personal information.

A static export cannot run a server-side form handler by itself; it needs a separately hosted endpoint/service, or an intentional move to server-backed hosting.

## Content and launch work outstanding

- Confirm leadership names, titles, biographies and approved portraits.
- Supply the public BFK email and London correspondence address.
- Confirm the legal entity, registration information and privacy data controller.
- Approve the draft About and expanded Our Work text; comments mark provisional material.
- Supply confirmed events. Current events/news arrays are intentionally empty; no people, dates or meetings have been invented. Decide whether Events should be hidden at launch if none are ready.
- Add Event JSON-LD and detail routes when actual event records are published. The event listing/archive component and record fields are documented in `content/README.md`.
- Complete the privacy policy, retention periods, processors and privacy contact. No analytics or advertising code is installed.
- Replace the preview domain in `public/sitemap.xml`; it currently contains the original temporary origin and must be corrected even if retaining the current live URL.
- Set final canonical URLs and page-specific Open Graph/Twitter metadata; create approved social-sharing images. These launch requirements are not yet complete.
- Remove the preview checklist, draft notes and preview footer text once the owner has approved launch content.
- Remove `noindex` in `app/layout.tsx` and replace `Disallow: /` in `public/robots.txt` only when the site is ready to be indexed.
- The current favicon is a simple BFK text mark; an approved favicon derived from the official identity can be supplied later.
- English only. Future Sorani needs translated content/routes, `lang="ckb"`, `dir="rtl"`, a suitable font and RTL testing. The small locale map is preparation, not an implemented Kurdish version.

## Photography and licences

Fonts include OFL licence files in `public/fonts/`. Retain bundled third-party library notices.

Westminster photograph: Domob, 2025, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Palace_of_Westminster_and_Elizabeth_Tower_20250522.jpg

Erbil photograph: Osama Shukir Muhammed Amin FRCP(Glasg), 2014, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Panorama_view_of_the_Erbil_Citadel,_Erbil_Governorate,_Iraqi_Kurdistan.jpg

Both are resized/cropped for display; Westminster uses a CSS monochrome/navy treatment. Retain attribution, licence links and modification notices in the site. These adapted images remain under CC BY-SA 4.0. The supplied logo is the owner's official artwork; this package grants no additional rights to third parties beyond the owner's instructions.

## Verification and limits

The source built successfully, generated all eight page outputs including 404, and passed a whitespace/diff check after the latest logo size edit. The earlier full site also passed TypeScript checking; local asset references, one-H1 structure, language tags and principal palette contrast were checked. The official logo file was verified as unchanged and its header/footer references were checked across exported pages before the subsequent CSS-only size adjustment.

No claim is made that final browser, WCAG 2.2 AA or Lighthouse acceptance has passed. Before launch, test at 360/375px, tablet and desktop widths, keyboard navigation, focus, text zoom, form states, screen-reader labels, direct URLs and 404 behaviour. Run Lighthouse on the final host and verify the requested scores. The domain, live form, privacy arrangements and missing content remain outstanding.
