import { caribouApplication } from "./caribou-senior-customer-success-associate.js";
import { whitecliffeApplication } from "./whitecliffe-college-admissions-lead-canada.js";
import { migratedApplications } from "./migratedApplications.js";

export const applications = [caribouApplication, whitecliffeApplication, ...migratedApplications];

export const applicationsBySlug = Object.fromEntries(
  applications.map((application) => [application.slug, application]),
);

export const legacyApplicationRoutes = Object.fromEntries(
  applications.flatMap((application) =>
    Object.entries(application.legacyRoutes ?? {}).map(([path, section]) => [
      path,
      { slug: application.slug, section },
    ]),
  ),
);
