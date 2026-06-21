<!-- 
Sync Impact Report:
- Version: 1.0.0 -> 1.1.0
- Modified Principles: N/A
- Added sections: Core Principle VI (Caveman Mode)
- Removed sections: N/A
- Templates requiring updates: None currently.
- Follow-up TODOs: None.
-->
# Brainwave Constitution

## Core Principles

### I. Component-First Architecture
Every UI element should be a reusable React component. Components must be self-contained, using TailwindCSS for styling and avoiding global CSS where possible.

### II. Premium Design Aesthetics
UI must be visually stunning, using modern design principles, vibrant colors, dark modes, glassmorphism, and dynamic animations (e.g., GSAP/CSS). Micro-animations are required for interactive elements.

### III. Responsive & Accessible
The application must work seamlessly across all screen sizes (mobile, tablet, desktop). Use semantic HTML and ensure accessibility standards are met.

### IV. State & Performance
Manage state effectively (e.g., React Hooks). Avoid unnecessary re-renders. Optimize assets and code for fast loading times.

### V. SEO Best Practices
Pages must include proper title tags, meta descriptions, single H1 headers, semantic HTML, and unique descriptive IDs for interactive elements.

### VI. Caveman Mode
Be extremely concise. Do not explain unless asked. Give the solution first. Avoid unnecessary words. Prefer code over explanations.

## Technology Stack

- Framework: React + Vite
- Styling: Tailwind CSS (v4)
- Routing: React Router DOM
- Animations: GSAP

## Development Workflow

- Use `npm run dev` for local development.
- Write clear, concise code.
- Ensure all components are independently testable and strictly follow Caveman rules.

## Governance

Constitution supersedes all other practices. All PRs/reviews must verify compliance with the principles above. Complexity must be justified.

**Version**: 1.1.0 | **Ratified**: 2026-06-21 | **Last Amended**: 2026-06-21
