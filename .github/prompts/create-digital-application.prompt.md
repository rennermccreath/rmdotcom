---
mode: agent
description: Create a validated, data-driven job application from a posting
---

Create a standalone digital application in this repository.

Inputs:

- Job posting URL: `${input:jobUrl}`
- Full posting text, if the URL is inaccessible: `${input:jobText}`
- Video URL or Loom ID: `${input:videoUrl}`
- Optional notes: `${input:notes}`

## Preflight

Read the complete posting and inspect the existing application registry and verified career evidence. Before editing, report:

1. Exact company name and exact advertised job title
2. Proposed `{company}-{role}` slug
3. Five primary requirements
4. Five strongest verified evidence matches
5. Official brand-colour source and proposed accessible accent
6. Video provider and normalized ID
7. Any ambiguity

Stop if the company, title, posting, brand source, or evidence is ambiguous. Never guess or invent experience.

## Implementation

1. Add one `createApplication({...})` entry or a dedicated configuration file under `src/data/applications/`.
2. Register it in `src/data/applications/index.js`.
3. Reuse `welcome`, `foundation`, `experience`, and `why`; do not add a `numbers` section.
4. Keep application-specific facts in data and reusable behaviour in components/utilities.
5. Supply an ordinary provider share URL. Never manually build an embed query string.
6. Use the official employer colour only as an accent inside Renner's established portfolio design.
7. Do not add dates, quarters, or arbitrary numbers to the public URL.

## Video scripts

Create `docs/application-scripts/{slug}.md` containing:

- A natural 45–60 second personalized introduction
- A 60–90 second “Why this company / why this role” script
- A short Loom Variables version with `{company}` and `{role}` placeholders
- A pronunciation and fact-check list

The scripts must sound like Renner, use only verified evidence, and avoid generic enthusiasm or claims that could apply to any employer.

## Validation

- Search the new configuration and script for unrelated company names, roles, colours, assets, and video IDs.
- Confirm exact title consistency.
- Confirm the video URL normalizes successfully.
- Check responsive layout, keyboard access, metadata, and navigation.
- Run `npm run lint` and `npm run build`.
- Review the diff for unrelated changes.
- Do not push, merge, modify Vercel settings, or deploy.

Return the public route, files changed, evidence decisions, commands/results, and anything requiring manual review.
