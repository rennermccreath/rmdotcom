import { applications } from "../src/data/applications/index.js";
import { normalizeVideo } from "../src/utils/video.js";

const errors = [];
const slugs = new Set();
const legacyRoutes = new Set();
const requiredSections = ["welcome", "foundation", "experience", "why"];

for (const application of applications) {
  if (!application.company?.trim()) errors.push("Application is missing a company name.");
  if (!application.role?.trim()) errors.push(`${application.company}: missing exact role title.`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(application.slug)) errors.push(`${application.company}: invalid slug ${application.slug}.`);
  if (slugs.has(application.slug)) errors.push(`Duplicate slug: ${application.slug}.`);
  slugs.add(application.slug);

  if (!Array.isArray(application.theme?.gradient) || application.theme.gradient.length < 2) {
    errors.push(`${application.company}: theme requires at least two CSS gradient colours.`);
  } else if (application.theme.gradient.some((color) => !/^#[0-9a-f]{6}$/i.test(color))) {
    errors.push(`${application.company}: theme contains an invalid hex colour.`);
  }

  const sectionIds = application.sections.map(({ id }) => id);
  if (sectionIds.join(",") !== requiredSections.join(",")) {
    errors.push(`${application.company}: expected sections ${requiredSections.join(", ")}; received ${sectionIds.join(", ")}.`);
  }

  for (const section of application.sections.filter(({ type }) => type === "video")) {
    const video = normalizeVideo(section.videoUrl);
    if (!video.embedUrl && !video.src && !video.href) errors.push(`${application.company}/${section.id}: invalid video URL.`);
  }

  for (const legacyRoute of Object.keys(application.legacyRoutes ?? {})) {
    if (legacyRoutes.has(legacyRoute)) errors.push(`Duplicate legacy route: ${legacyRoute}.`);
    legacyRoutes.add(legacyRoute);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${applications.length} applications and ${legacyRoutes.size} legacy routes.`);
