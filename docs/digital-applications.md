# Digital applications

Digital applications are rendered from structured data rather than company-specific page components.

## Add an application

1. Copy an existing record in `src/data/applications/` and rename it using the public slug:
   `{company-name}-{exact-role-title}`.
2. Verify the exact company and role names against the job posting.
3. Add the record to `src/data/applications/index.js`.
4. Use an ordinary Loom share URL, embed URL, or raw video ID. The renderer creates the embed URL.
5. Run `npm run lint` and `npm run build`.

The application is available at:

```text
/applications/{slug}
/applications/{slug}/{section-id}
```

Supported section types are `video`, `metrics`, and `timeline`. Employer styling belongs in the
application record; reusable layout and behaviour belong in `DigitalApplication.jsx`.

## Content guardrails

- Preserve the job posting's exact company name and role title.
- Use only verified career evidence already present in the portfolio or supplied by Renner.
- Do not copy a target company, title, colour, asset, or video ID from another application.
- Keep old public links in `legacyRoutes` when migrating an existing application.
- Do not construct provider query strings inside application data or React components.
