# Manav Mehta — Creative Visual Designer Portfolio

An art-directed, high-contrast editorial portfolio crafted for **Manav Mehta**, Creative Visual Designer based in **Delhi, India**.

Designed with **React**, **Tailwind CSS**, **GSAP** (Smooth Scroll via Lenis), and **Framer Motion**.

---

## 🎨 Design System & Philosophy

- **Color Palette**:
  - **Off-White**: `#F8F7F4`, `#F2EFE9`, `#FAF8F5`
  - **Pitch Black**: `#121214`, `#18181B`
  - **Vibrant & Forest Greens**: `#064E3B`, `#047857`, `#22C55E`, `#DCFCE7`
  - **Cobalt & Electric Blues**: `#1D4ED8`, `#2563EB`, `#1E3A8A`, `#EFF6FF`
- **Zero Glassmorphism**: High-contrast solid architecture, crisp borders, and brutalist/editorial offset drop shadows (`shadow-[5px_5px_0px_#18181B]`).
- **Zero AI Artifacts**: Precision vector marks, technical print crosshairs (`⌖`, `+`, `⌝`), and human-crafted typography.
- **Architectural Empty Placeholders**: Custom `EmptyPlaceholder` component with aspect-ratio indicators, technical crop guides, and drop targets so you can seamlessly swap in your work.

---

## 🚀 Key Sections & Features

1. **Top Navigation Bar**:
   - Brand mark & title
   - Live **Delhi Time (IST: UTC+5:30)** clock
   - Commission availability indicator
   - Smooth scroll anchor links
   - Mobile responsive drawer

2. **Hero Section (Interactive Fan Deck)**:
   - Giant editorial headline: *"A Canvas for Visual Poetry, Form & Code"*
   - Social pill tags (`@manavmehta`, `@delhi_india`, `@frontend_ui`, `@35mm_lens`)
   - **5-card interactive fanned deck** (rotates, expands, and lifts on hover with spring physics)

3. **Modular Bento Grid**:
   - Profile card with arch placeholder, "I'm, Manav Mehta", sideways tabs, copyable email pill, and rotating circular stamp badge (`MANAV MEHTA • DELHI • 2026`)
   - Discipline highlights: Frontend, Graphics, Logos, 35mm Lens
   - Key stats (`04 Disciplines`, `45+ Projects`, `Delhi Base`)

4. **Selected Works Showcase**:
   - Filterable categories: *All Works*, *Frontend Landing*, *Graphic Design*, *Logos & Identity*, *Photography*
   - Toggle between **Bento Grid View** and **Editorial List View**
   - Click any card to open the **Full Project Inspection Drawer**

5. **Editorial Archive ("Visual Poetry")**:
   - Chronological repertory with arched placeholder shapes
   - Numbered index (`01`, `02`, `03`, `04`, etc.) with quick inspection triggers

6. **Photography Wing (Delhi Archive)**:
   - Dedicated 35mm documentary and architectural photography showcase
   - Delhi locations (Connaught Place, Humayun's Tomb, Yamuna Ghats, Daryaganj)
   - Film camera specs (`35mm · f/2.8 · 1/500s · ISO 100`)
   - Fullscreen **Lightbox Modal** with Next/Prev keyboard/touch navigation

7. **Design Methodology (4-Step Creative Workflow)**:
   - 01: Typographic & Visual Anchor
   - 02: Structural Architecture
   - 03: Code & Motion Choreography
   - 04: Visual Permanence & Precision

8. **Commission Intake & Contact**:
   - Massive editorial statement: *"Let's Shape Your Masterpiece."*
   - Interactive inquiry brief form with service selector pills
   - One-click email copy button (`manavmehtadesign@gmail.com`)
   - Coordinates & social links (Behance, GitHub, LinkedIn, Instagram)

---

## 🛠️ How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🖼️ How to Insert Your Real Images & Designs

All project data is cleanly organized in `src/data/portfolioData.ts`.

To replace an empty placeholder with your real image:
1. Place your image in `src/assets/` or `public/images/`.
2. In `src/components/EmptyPlaceholder.tsx`, you can simply add an optional `imageUrl` prop:
```tsx
{imageUrl ? (
  <img src={imageUrl} alt={label} className="w-full h-full object-cover" />
) : (
  // The existing artistic empty placeholder renders automatically
)}
```
