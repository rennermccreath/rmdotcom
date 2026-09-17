# Application intake

Use this when a job board blocks automated access.

```yaml
job_posting_url:
company:
exact_role_title:
job_id:
location:
posting_text: |
  Paste the complete posting here.
video_url:
optional_notes:
```

The reusable VS Code agent prompt is `.github/prompts/create-digital-application.prompt.md`.

## Video-provider boundary

The public portfolio accepts provider share URLs and normalizes supported embeds. Recording, AI correction,
voice cloning, and avatar generation remain in the provider account so API keys never enter the browser bundle.

- **Loom:** preferred current workflow; paste a share URL or raw ID.
- **Descript:** export or publish the finished video, then supply its public share URL.
- **HeyGen:** generate with a Digital Twin in HeyGen, then supply the published result.

Do not put provider API keys in `.env` variables prefixed with `VITE_`; those values are shipped to visitors.
An automated generation API should be implemented as a separate server-side or local script only after a
provider is selected and its API plan, avatar/voice identifiers, consent, and expected monthly usage are known.
