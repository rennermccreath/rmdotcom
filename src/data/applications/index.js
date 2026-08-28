import { caribouApplication } from "./caribou-senior-customer-success-associate";

export const applications = [caribouApplication];

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
