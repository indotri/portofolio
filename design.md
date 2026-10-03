# GitBook-Style Website Design Specification

> Design reference synthesized from the three supplied screenshots:
> `gitbook-3-01.webp`, `gitbook-3.webp`, and `gitbook-3-02.webp`.

## 1. Design direction

Create a premium developer/SaaS knowledge-platform website with a dark, atmospheric visual system.

Core characteristics:

- Dark charcoal/near-black canvas with cool blue-green ambient lighting.
- Large editorial headlines with strong contrast and generous whitespace.
- Product UI screenshots are treated as visual focal points, often floating inside soft glows.
- Thin borders, subtle grids, glassy surfaces, and low-contrast dividers create a technical feel.
- Rounded corners are restrained: mostly small-to-medium radii rather than highly rounded cards.
- CTAs use compact pill buttons with a pale mint/ice fill.
- Decorative lighting should feel like diffused light, not hard gradients.
- Typography is clean, geometric, and modern; headings are bold while supporting text is compact and muted.

The experience should feel like: **technical documentation + premium developer product + editorial landing page**.

---

## 2. Visual tokens

### Color palette

Use these as starting tokens and tune against the reference screenshots.

```css
:root {
  --bg-0: #0a0f11;
  --bg-1: #0d1416;
  --surface-0: #11191c;
  --surface-1: #151e21;
  --surface-2: #1b2528;

  --text-strong: #f3f7f6;
  --text: #d5dddd;
  --text-muted: #8f9b9d;
  --text-faint: #657174;

  --line: rgba(220, 245, 242, 0.12);
  --line-strong: rgba(220, 245, 242, 0.20);

  --ice: #e9f7f5;
  --ice-text: #0d1719;

  --aqua: #9fe6e0;
  --cyan: #79dce0;
  --teal: #3caeb1;
  --violet: #b597ff;
  --pink: #e8a7c7;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --container: 1120px;
  --gutter: 24px;
}
```

### Lighting

Use large blurred radial gradients behind major sections:

```css
background:
  radial-gradient(circle at 50% 55%, rgba(95, 183, 180, 0.20), transparent 32%),
  radial-gradient(circle at 50% 80%, rgba(84, 147, 184, 0.13), transparent 40%),
  var(--bg-0);
```

Keep opacity low. The screenshot aesthetic depends on dark space remaining dominant.

---

## 3. Typography

Recommended stack:

```css
font-family:
  Inter,
  ui-sans-serif,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

Optional display face:

- Use a geometric grotesk/display font for large headlines if available.
- Keep body/UI text in a neutral sans-serif.

### Type scale

```text
Hero title:       56–76px / 0.95–1.02 line-height / 650–750 weight
Section title:    40–52px / 0.98–1.05 / 650–750
Subsection:       28–36px / 1.05 / 650–700
Card title:       18–22px / 1.15 / 600–700
Body:             14–16px / 1.45–1.60 / 400–500
Small UI:         11–13px / 1.30–1.45 / 500
Eyebrow:          10–12px / uppercase / 0.08em tracking
```

Headlines should use tight tracking, while eyebrows and metadata use increased letter spacing.

---

## 4. Global layout

### Header

A slim fixed/sticky header sits on the dark canvas.

Structure:

```text
[ logo ]                    Solutions Integrations Resources Pricing Company    Log in [ Start for free → ]
```

Properties:

- Height: approximately 64–72px desktop.
- Content max-width: `1120px`.
- Transparent or nearly transparent background.
- Logo at left.
- Navigation centered/right.
- Primary CTA at far right.
- Small typography.
- No heavy shadow.

On mobile:

- Keep logo + compact menu trigger.
- Hide desktop navigation.
- Preserve CTA only when space allows.

### Page container

```css
.page-container {
  width: min(calc(100% - 48px), var(--container));
  margin-inline: auto;
}
```

Major sections should typically use `min-height` values or large vertical padding rather than dense stacking.

Recommended section rhythm:

```text
Hero:                  120–180px top padding
Major section:         120–180px vertical padding
Feature subsection:     80–120px vertical padding
CTA banner:             80–120px
Footer:                 90–130px
```

---

## 5. Shared background system

The screenshots use a consistent dark background with:

- faint technical grid lines;
- soft blue/green glow;
- occasional cyan/purple bloom around product imagery;
- hard-edged content panels over atmospheric backgrounds.

### Grid

```css
.tech-grid {
  background-image:
    linear-gradient(rgba(180,220,220,.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(180,220,220,.06) 1px, transparent 1px);
  background-size: 64px 64px;
}
```

Fade the grid toward section edges with masks or an overlay.

### Glow

Use blurred pseudo-elements:

```css
.glow {
  filter: blur(50px);
  opacity: .55;
  pointer-events: none;
}
```

Avoid sharp neon edges.

---

# 6. Page 01 — Product / Knowledge Management landing page

Reference: `gitbook-3-01.webp`

## Hero

Composition:

- Small outlined pill/eyebrow above the headline.
- Main headline centered.
- Second line or phrase visually emphasized with a cool mint/aqua tint.
- 1–2 lines of supporting copy.
- Compact circular/play-style CTA followed by a small label.
- Large atmospheric glow behind the lower half of the hero.

Example hierarchy:

```text
[ ENTERPRISE KNOWLEDGE BASE ]

All your team's knowledge.
One source of truth.

Turn scattered technical knowledge into...
[ ○ GET STARTED ]
```

### Hero treatment

Use a large transparent geometric/grid background behind the heading. Add a wide, soft teal bloom below the CTA.

---

## Knowledge management section

Two-column visual hierarchy:

```text
Knowledge
management tools
for your whole team

[feature 1]   [feature 2]   [feature 3]

            [large product screenshot]
```

Feature columns use:

- compact uppercase eyebrow;
- one-sentence title/body;
- no heavy card background;
- vertical spacing and thin separators only when needed.

Product screenshot:

- large centered image;
- subtle border;
- faint shadow;
- slight corner radius;
- background glow underneath.

---

## Smart insights section

Dark section with:

```text
[small line/idea icon]

Keep docs up to date with
smart insights

short supporting copy

             [glowing abstract product/light shape]
```

The screenshot shows the content deliberately separated from the illustration. Keep the right/lower visual soft and atmospheric instead of turning it into a conventional card.

---

## Git-like collaboration

Use an editorial feature grid:

```text
Git-like collaboration

[ large screenshot / left visual ]    [ Change requests ]
                                      [ Comments for feedback ]
```

Characteristics:

- asymmetric layout;
- one dominant screenshot;
- two smaller text blocks on the right;
- faint teal glow behind the composition.

---

## Editor feature

Use a split layout:

```text
A simple,
intuitive editor

[ visual / editor mockup ]            [ text ]
                                      A modern, block-based
                                      editor
```

The visual should feel like a partially abstracted editor canvas, with dark panels and a small bright icon/object.

---

## Scale section

Use a three-column feature row:

```text
Ready to scale

[ Permission controls ]
[ A role for everyone ]
[ Single sign-on ]
```

Each column:

- top icon;
- short title;
- 2–3 lines of muted explanation;
- thin vertical borders between columns.

Finish with a large promotional banner:

```text
Create, search
and manage your
knowledge at
scale. Effortlessly.

[ product screenshot ]
```

Banner uses a light ice background on one side and the colorful product UI on the other.

---

# 7. Page 02 — Engineering / technical docs page

Reference: `gitbook-3.webp`

## Hero

Left-aligned hero on desktop:

```text
Engineering
knowledge.
Right where
you work.

short body copy

[ ○ GET STARTED ]
```

Right side:

- overlapping product UI windows;
- one large documentation screen;
- smaller floating panels behind it;
- strong cyan/blue glow underneath.

The image stack should extend slightly beyond the main container to create depth.

---

## Social-proof row

Immediately below the hero:

```text
Trusted by technical teams at organizations of all sizes

[ logo ] [ logo ] [ logo ] [ logo ] [ logo ]
```

Use low-contrast monochrome logos.

---

## Product capability cards

Three/four feature tiles arranged as an editorial collage.

Each card can contain:

- small category pill;
- title;
- 2–4 lines of copy;
- tiny product UI snippet;
- unique pastel glow.

Cards should feel like independent floating surfaces rather than a uniform dashboard grid.

---

## Docs + code sync banner

A centered dark panel:

```text
      [ icons ]

Keep your docs and codebase in sync

short supporting copy

[ ○ SEE HOW IT WORKS ]
```

Add a bright edge glow behind or beneath the panel.

---

## Technical docs

Section hierarchy:

```text
Technical docs
made easy

             [ large documentation UI ]

[ capability ] [ capability ] [ capability ]
```

The large UI screenshot is rectangular, lightly bordered, and bright enough to break the dark page.

The three feature blocks below should remain visually quiet so the screenshot stays dominant.

---

## Search section

Use a two-column layout:

```text
Discover the knowledge you need.
Fast.

[ search UI / command-style visual ]       [ Search smarter ]
                                            copy
```

The search visual can be blurred toward the outer edges to mimic the reference.

---

## Integrate with your stack

Full-width atmospheric section with:

- faint technical grid;
- centered heading;
- compact description;
- integration/logo icons distributed across a horizontal line;
- large teal/blue glow near the bottom.

This section is intentionally more visual than textual.

---

## Publish branded product docs

Use a split layout:

```text
Publish
branded
product docs

[ branded-doc card ] [ visually-customized card ]
```

Cards have pale backgrounds with very subtle gradient color blooms.

---

## Scale CTA

Use the same three-column pattern:

```text
Ready to scale up?

[ Permission groups ]
[ SSO and SAML ]
[ Domains / customization ]
```

Then reuse the large light promotional banner from Page 01 for visual consistency.

---

# 8. Page 03 — Integrations page

Reference: `gitbook-3-02.webp`

## Hero

Full-width grid background.

Centered:

```text
GitBook Integrations

Integrate with your stack and extend functionality with powerful
integrations built by us and our community.

[ ○ EXPLORE INTEGRATIONS ]   [ ○ BUILD YOUR OWN ]
```

Under the actions, place a horizontal row of small integration icons hovering above a wide pale-blue glow.

---

## Intro / build section

Atmospheric gradient panel:

```text
Build something brilliant

Create your own integrations and extend the way you work...

[ ○ START BUILDING FOR FREE ]

BUILD WORKFLOWS      EXTEND FUNCTIONALITY      ADD CUSTOMIZATIONS
```

Large amount of negative space is intentional.

---

## Integration gallery

Intro copy:

```text
We believe GitBook should work with all the tools
and services you use every day...
```

Then a featured two-card row:

```text
[ Featured: Linear ]      [ Featured: Slack (beta) ]
```

Follow with a 4-column grid of integration cards.

Examples visible in the reference:

```text
Arcade       Discord      Fathom       Figma
Formsparse   GitHub Files  GitHub Sync  GitLab Files
Google Analytics            Guideflow
Heap         Hotjar        Intercom     Jira
Mailchimp    Mermaid       Plausible     PostHog
RunKit       Segment       Sentry        Storylane
Supademo     Toucan Toco
```

Card design:

- 4-column desktop grid.
- dark surface;
- 1px translucent border;
- 8–12px radius;
- icon at top/left;
- integration name below;
- compact dimensions;
- subtle hover border/glow.

Featured cards are taller and show actual product imagery.

---

## Pre-installed apps row

A quieter compact grid:

```text
Pre-installed and ready to use

[ Airtable ] [ Canva ] [ CodePen ] [ GitHub Gist ]
[ Google Docs ] [ Google Drive ] [ Loom ] [ Lucidchart ]
[ Microsoft Office ] [ SlideShare ] [ Trello ] [ Typeform ]
[ YouTube ] [ ...and many more ]
```

Use smaller cards with less padding than the primary integration grid.

---

# 9. Cards and surfaces

### Standard dark card

```css
.card {
  background: rgba(22, 30, 33, .78);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, .20);
}
```

Hover:

```css
.card:hover {
  border-color: var(--line-strong);
  transform: translateY(-2px);
}
```

Use transitions around 180–240ms.

### Light promotional panel

```css
.promo {
  background: var(--ice);
  color: var(--ice-text);
  border-radius: var(--radius-md);
}
```

Use this surface sparingly so it remains visually meaningful.

---

# 10. Buttons

Primary button:

```text
[ Start for free → ]
```

Style:

- pale ice background;
- dark text;
- compact height around 32–38px;
- 999px radius;
- medium weight;
- small arrow/icon.

Secondary button:

- transparent;
- low-contrast border;
- white/mint text.

Circular icon CTA:

```text
[ ○ ] GET STARTED
```

Use a circular pale button with a small dark icon.

---

# 11. Product screenshot treatment

All product UI imagery should follow this treatment:

1. Preserve crisp UI detail.
2. Add 1px translucent border.
3. Apply a very soft shadow.
4. Keep corners around 6–12px.
5. Place a blurred cyan/teal glow behind the image.
6. Never over-saturate the glow enough to compete with the UI.
7. Allow some images to overlap section boundaries for depth.

---

# 12. Motion guidelines

Animations should be restrained.

Recommended:

- hero glow: slow 6–10s breathing animation;
- product screenshots: 150–250ms lift on hover;
- cards: 180–240ms border/transform transitions;
- integration icon row: very subtle floating motion;
- section reveal: 500–800ms opacity + translateY;
- avoid constant high-frequency movement.

The website should still look premium when all animation is disabled.

---

# 13. Responsive behavior

### Desktop: 1200px+

- Max-width content container around 1120–1200px.
- 3–4 column feature grids.
- Hero imagery may extend beyond container.
- Large display type.
- Strong asymmetric layouts.

### Tablet: 768–1199px

- Reduce headline size by ~15–20%.
- Move asymmetric image/text sections toward 50/50 layouts.
- Reduce integration grid to 3 columns.
- Keep atmospheric glows but reduce their area.

### Mobile: <768px

- Header collapses to logo + menu.
- Hero becomes centered.
- Headline around 40–48px.
- All multi-column feature grids become one column.
- Product screenshots become full-width and stacked.
- Integration gallery becomes 2 columns.
- Reduce decorative grid intensity.
- Keep only a few major glows so the page stays performant.

---

# 14. Footer

The reference footer uses a pale, almost-white blue-gray background.

Structure:

```text
[ GitBook logo ]

PRODUCT          SOLUTIONS          RESOURCES          COMPANY
Pricing          Internal Knowledge  Docs              About
Integrations     Public Docs         Blog              Careers
                                  Changelog            Contact and Support

[ legal / copyright ]                              [ social icons ]
```

Footer rules:

- Switch from dark to light surface.
- Use dark charcoal text.
- Keep typography small.
- Maintain generous horizontal spacing.
- Social icons are muted and compact.
- Avoid visually heavy separators.

---

# 15. Implementation priorities

Build in this order:

1. Global colors, typography, containers, header and footer.
2. Background grid + atmospheric lighting system.
3. Shared button/card/promo components.
4. Product screenshot frame component.
5. Hero patterns for each page.
6. Feature and editorial grid patterns.
7. Integration gallery.
8. Responsive behavior.
9. Motion and hover polish.
10. Final visual tuning against the screenshots.

The most important visual details to get right are **spacing, typography scale, dark-to-light contrast, product-image composition, and soft teal/cyan lighting**. These matter more than adding extra decorative elements.
