---
description: "Task list for Bug Fix Phase — Navigation, Layout, Overflow (Verified)"
---

# Tasks: Bug Fixes — Navigation, Features Layout, Horizontal Scroll

**Input**: Verified analysis of codebase post Phase 5  
**Prerequisites**: All previous phases (T001–T023) complete

---

## Phase 1–5: Previously Completed

*(T001–T023 all marked complete — see previous task history)*

---

## Phase 6: Bug Fixes (Priority: P1 — Blocking) 🐛

**Goal**: Fix three regressions introduced in Phase 5, verified against actual source code.

**Independent Test**:
- Zero React key warnings in browser console
- No horizontal scrollbar at any viewport
- Nav links highlight correctly on scroll; mobile menu closes on link click

---

### Issue 1 — Duplicate React Keys in Header Navigation

**Verified Root Cause**:  
`src/constants.jsx/index.js`: "New account" and "Sign in" both have `id: "5"` after "Testimonials" was inserted with `id: "4"`. `Header.jsx` maps over `navigation` using `key={item.id}` — two identical keys (`"5"`) break React reconciliation, corrupt the GSAP linksRef array, and can cause animation/click issues.

**Affected files**: `src/constants.jsx/index.js`, `src/Components/Header.jsx`

- [x] T024 [US3] Fix duplicate navigation ids — change "New account" to `id: "6"` and "Sign in" to `id: "7"` in `src/constants.jsx/index.js` (lines 65–76)

---

### Issue 2 — handleClick Guard Prevents Mobile Menu from Closing

**Verified Root Cause**:  
`Header.jsx` line 42: `if (!e.target.hash) return` — when the user clicks the **text content** inside `<a>`, `e.target` is a child text node or inner element that doesn't carry `.hash`. The guard early-returns before calling `setOpenNav(false)`, so the mobile menu stays open after clicking a nav link.

**Affected file**: `src/Components/Header.jsx`

- [x] T025 [US3] Fix handleClick guard — replace `e.target.hash` with `e.currentTarget.hash` in `src/Components/Header.jsx` (line 42)

---

### Issue 3 — Benefits Grid Empty Space

**Verified Root Cause**:  
`Benefits.jsx` line 17: `flex flex-wrap gap-10` with `md:max-w-[24rem]` cards. At `xl` breakpoint the container is `87.5rem` wide; cards align `flex-start` leaving a large empty right column. Must switch to CSS grid with 3 columns at `xl`.

**Affected file**: `src/Components/Benefits.jsx`

- [x] T026 [P] [US3] Refactor Benefits card container from `flex flex-wrap` to `grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center` in `src/Components/Benefits.jsx` (line 17)

---

### Issue 4 — HowItWorks Placeholder Empty Space

**Verified Root Cause**:  
`HowItWorks.jsx` renders only a title and a single subtitle inside a full `Section` (inherits `py-10 lg:py-16 xl:py-20` default padding). No nav link points to `#how-it-works`. Removing it from `App.jsx` eliminates the gap safely. If real content is added later, it can be re-inserted.

**Affected files**: `src/App.jsx`, `src/Components/HowItWorks.jsx`

- [x] T027 [P] [US3] Remove `<HowItWorks />` from `src/App.jsx` render tree and its import to eliminate the empty spacing gap

---

### Issue 5 — Horizontal Scroll (Collaboration Circle Overflow)

**Verified Root Cause**:  
`Collaboration.jsx` line 34: `relative left-1/2 -translate-x-1/2` on a `w-[22rem]` div inside a `lg:flex` container. On small/medium viewports the `left-1/2` offset pushes the circle past the right edge of the parent, overflowing horizontally. The `overflow-hidden` on the App wrapper does not clip `position: relative` children that overflow their flex container.  

Fix in two layers: (1) remove `left-1/2 -translate-x-1/2` from the circle div and use `mx-auto` instead (correct semantic centering), (2) add `overflow-x: hidden` to `html, body` in `index.css` as a safety net.

**Affected files**: `src/Components/Collaboration.jsx`, `src/index.css`

- [x] T028 [US3] Fix Collaboration circle centering — replace `left-1/2 -translate-x-1/2` with `mx-auto` on the circle wrapper div in `src/Components/Collaboration.jsx` (line 34)
- [x] T029 [P] [US3] Add `overflow-x: hidden` to `html` and `body` selectors in `src/index.css` as a global overflow safety net

---

### Issue 6 — Benefits Cards GSAP Animation Enhancement

**New task requested by user.**

**Affected file**: `src/Components/Benefits.jsx`

- [x] T030 [P] [US3] Add GSAP `fromTo` entrance animation (opacity + y) with `scrollTrigger` and CSS hover transition (`hover:-translate-y-1 hover:shadow-xl hover:shadow-color-1/10`) to benefit cards in `src/Components/Benefits.jsx`

---

## Dependencies & Execution Order

### Phase 6 Task Dependencies

| Task | Depends On | Parallel? |
|------|-----------|-----------|
| T024 | — | Yes |
| T025 | — | Yes (different code block) |
| T026 | T024 (grid rebuild may be affected by linksRef count) | Yes |
| T027 | — | Yes |
| T028 | — | Yes |
| T029 | T028 (confirm overflow is fixed at source first) | After T028 |
| T030 | T026 (grid structure must be final) | After T026 |

### Recommended Execution Order

```
Stream A: T024 → T025 (same file, run sequentially)
Stream B: T026 → T030 (same file, run sequentially)
Stream C: T027 (App.jsx, independent)
Stream D: T028 → T029 (different files, Collaboration then CSS)
```

---

## Parallel Execution Summary

```bash
# Batch 1 (all independent):
T024  Fix duplicate nav ids in src/constants.jsx/index.js
T025  Fix handleClick guard in src/Components/Header.jsx
T027  Remove HowItWorks from src/App.jsx

# Batch 2 (after Batch 1):
T026  Refactor Benefits grid in src/Components/Benefits.jsx
T028  Fix Collaboration circle in src/Components/Collaboration.jsx

# Batch 3 (after Batch 2):
T029  Add overflow-x:hidden to src/index.css
T030  Add GSAP animations to Benefits cards in src/Components/Benefits.jsx
```

---

## Implementation Strategy

### Execution Order (MVP First)

1. **T024** — Fixes React key crash (highest priority, unblocks nav)
2. **T025** — Fixes mobile menu not closing (UX blocker)
3. **T027** — Removes empty section (visual)
4. **T028 + T029** — Fix horizontal scroll (layout)
5. **T026 + T030** — Improve Benefits grid + animations (enhancement)
6. **STOP and VALIDATE**: Open browser at all viewports, check console for zero warnings
