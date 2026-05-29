# Minimal Monochrome Portfolio — Design System

A minimalist editorial portfolio design system inspired by monochrome aesthetics, spacious layouts, circular geometry, and clean engineering-style interfaces.

---

# 1. Brand Personality

### Design Keywords

* Minimal
* Editorial
* Monochrome
* Professional
* Technical
* Soft Futuristic
* Spacious
* Scandinavian Inspired

---

# 2. Color System

## Primary Palette

| Token          | Value     | Usage                |
| -------------- | --------- | -------------------- |
| Background     | `#F4F4F4` | Main page background |
| Surface        | `#FFFFFF` | Cards & containers   |
| Primary Text   | `#111111` | Headings             |
| Secondary Text | `#6B7280` | Body content         |
| Border         | `#D9D9D9` | Rings & outlines     |
| Accent         | `#7C98A4` | Interactive elements |
| Muted          | `#B6B6B6` | Icons & labels       |

---

## CSS Variables

```css
:root{
  --bg:#F4F4F4;
  --surface:#FFFFFF;

  --text-primary:#111111;
  --text-secondary:#6B7280;

  --border:#D9D9D9;
  --accent:#7C98A4;
  --muted:#B6B6B6;
}
```

---

# 3. Typography System

## Font Stack

### Primary

```txt
Inter
Helvetica Neue
DM Sans
sans-serif
```

### Optional Display Font

```txt
Cormorant Garamond
Playfair Display
serif
```

---

## Typography Scale

| Element       | Size | Weight | Letter Spacing |
| ------------- | ---- | ------ | -------------- |
| Display       | 48px | 300    | 0.25em         |
| Section Title | 32px | 400    | 0.35em         |
| Card Heading  | 24px | 600    | -0.02em        |
| Large Body    | 18px | 400    | 0              |
| Body          | 16px | 400    | 0              |
| Caption       | 14px | 400    | 0.12em         |
| Navigation    | 12px | 500    | 0.20em         |

---

## Heading Style

```css
.section-title{
  font-size:32px;
  font-weight:300;
  letter-spacing:.35em;
  text-transform:uppercase;
  color:#6B7280;
}
```

---

# 4. Spacing System

Based on an **8px grid**.

| Token | Value |
| ----- | ----- |
| XS    | 8px   |
| SM    | 16px  |
| MD    | 24px  |
| LG    | 40px  |
| XL    | 64px  |
| XXL   | 96px  |
| XXXL  | 140px |

---

# 5. Layout System

## Container

```css
.container{
  max-width:1400px;
  margin:auto;
  padding:0 48px;
}
```

---

## Two Column Content Layout

```css
.content-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:80px;
  align-items:center;
}
```

---

## Hero Structure

```txt
Social Icons

(Circular Ring System)

Profile Image
Role Title
Navigation Links

Bottom Floating CTA
```

---

# 6. Component Library

## Circular Ring System

Core visual identity.

```css
.circle-ring{
  border:1px solid #D9D9D9;
  border-radius:50%;
  position:absolute;
  opacity:.75;
}
```

---

## Avatar Component

```css
.avatar{
  width:120px;
  height:120px;
  border-radius:50%;
  object-fit:cover;
}
```

---

## Navigation Links

```css
.nav-link{
  font-size:12px;
  font-weight:500;
  letter-spacing:.2em;
  text-transform:uppercase;
  color:#6B7280;
}
```

### Hover State

```css
.nav-link:hover{
  color:#111111;
}
```

---

## Social Icons

```css
.social-icon{
  font-size:22px;
  color:#909090;
}
```

### Hover Interaction

```css
.social-icon:hover{
  transform:translateY(-2px);
  color:#111111;
}
```

---

## Card Component

```css
.card{
  background:#FFFFFF;
  border-radius:16px;
  padding:32px;
}
```

---

## Primary Button

```css
.button-primary{
  background:#7C98A4;
  color:#FFFFFF;
  padding:12px 22px;
  border-radius:999px;
}
```

### Hover State

```css
.button-primary:hover{
  background:#6A8895;
}
```

---

## Floating Action Button

```css
.floating-button{
  width:54px;
  height:54px;
  border-radius:50%;
  background:#7C98A4;

  box-shadow:
  0 8px 24px rgba(0,0,0,.12);
}
```

---

# 7. Motion System

Optimized for **GSAP** and **Framer Motion**.

---

## Fade In

```txt
Opacity: 0 → 1
Duration: 0.8s
Ease: Power3.out
```

---

## Circle Reveal

```txt
Scale: 0.9 → 1
Opacity: 0 → 1
Duration: 1.2s
```

---

## Hover Motion

```txt
TranslateY(-4px)
Duration:0.3s
Ease: ease-out
```

---

## Scroll Reveal

```txt
Y:40px → 0
Opacity:0 → 1
```

---

# 8. Border Radius System

| Token | Value |
| ----- | ----- |
| SM    | 8px   |
| MD    | 16px  |
| LG    | 24px  |
| FULL  | 999px |

---

# 9. Shadow System

## Shadow Small

```css
0 4px 12px rgba(0,0,0,.04)
```

## Shadow Medium

```css
0 12px 30px rgba(0,0,0,.08)
```

---

# 10. Image Guidelines

### Style Rules

* Monochrome imagery
* Grayscale treatment
* Editorial photography
* Rounded corners
* Clean backgrounds
* Soft contrast

---

# 11. Design Tokens

```json
{
  "colors":{
    "bg":"#F4F4F4",
    "primary":"#111111",
    "secondary":"#6B7280",
    "accent":"#7C98A4",
    "border":"#D9D9D9"
  },

  "radius":{
    "sm":"8px",
    "md":"16px",
    "lg":"24px",
    "full":"999px"
  },

  "spacing":{
    "xs":"8px",
    "sm":"16px",
    "md":"24px",
    "lg":"40px",
    "xl":"64px"
  }
}
```

---

# 12. Tailwind Theme Extension

```js
theme:{
  extend:{
    colors:{
      bg:"#F4F4F4",
      accent:"#7C98A4",
      border:"#D9D9D9",
      text:"#111111"
    },

    borderRadius:{
      xl:"24px"
    },

    letterSpacing:{
      wide2:".2em",
      wide3:".35em"
    }
  }
}
```

---

# Design Style Summary

**Minimal Editorial Tech Portfolio**

Combines:

* Scandinavian Minimalism
* Engineering Aesthetic
* Editorial Layout Principles
* Monochrome Visual Language
* Soft Futuristic UI Patterns
* Geometric Circular Composition

Designed for:

* Personal Portfolios
* Creative Developers
* Software Engineers
* AI / ML Portfolios
* Modern Resume Websites
