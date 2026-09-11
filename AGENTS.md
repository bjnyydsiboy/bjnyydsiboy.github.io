<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# Portfolio audience and editorial rules

- This portfolio is finished, interviewer-facing work. Write page copy as a clear account of the candidate's project context, decisions, execution details, and outcomes.
- Do not place editing advice, pending-confirmation notices, source-processing commentary, or proposed improvements in project-action sections. Keep such discussion in the assistant response or the separate review document.
- Treat the user's confirmed project framing as the source of truth. Do not recast execution details as hypothetical recommendations or a retrospective merely because they were added during editing.
- Preserve meaningful metric definitions, sample boundaries, and actual project learnings in natural case-study prose. Do not invent dates, measurements, ownership, or completed actions to make the page sound stronger.
- Before delivering copy changes, review the surrounding page and related entry-point labels for audience, tense, and voice consistency. These rules apply to subsequent edits as well.

# Desktop browser and wise/mobile verification

- After every change, verify the affected pages in both desktop browser and wise/mobile viewport sizes before delivery.
- Check narrow mobile widths, responsive breakpoints, text and image overflow, navigation, touch controls, and affected links. Use DOM measurements and visual inspection; a successful build alone is insufficient.
- For project additions or removals, audit the homepage, overview, detail routes, next-case navigation, guide answers, and dedicated assets. Avoid fixed array indices that assume a specific project count.
- State which viewport sizes and interactions were checked, and distinguish responsive browser testing from real-device/browser-engine testing.
