export const foundationItems = [
  { number: "14+ years", title: "Total Years of Professional Experience", bullets: ["Boreal Education | 2025–Present", "Fruit Suite | 2024–2025", "CI Global Asset Management | 2012–2024"] },
  { number: "13", title: "Customer Onboarding & Implementation", bullets: ["Complete lead-to-enrolment onboarding process | Boreal Education, 2025–present", "New-account engagement and onboarding | Fruit Suite, 2024–2025", "Nine-figure product launches and key-account partnerships | CI Global Asset Management, 2017–2024", "Internal onboarding and curriculum development for 150+ contact-centre agents | CI Global Asset Management, 2013–2017"] },
  { number: "9", title: "Multi-Stakeholder Onboarding", bullets: ["Enrolment and onboarding of 50+ concurrent prospective students | Boreal Education, 2025–present", "Sales enablement and customer success for 75 concurrent clients | Fruit Suite, 2024–2025", "Client due diligence covering 25+ products and 10+ dealerships | CI Global Asset Management, 2017–2024"] },
  { number: "5", title: "Bridging the Technical Enablement Gap", bullets: ["Presented technical software concepts to non-technical stakeholders | CI Global Asset Management, 2013–2017", "Software Engineering graduate | General Assembly Toronto, 2021", "Built rennermccreath.com with React, Vite, Tailwind CSS, and Vercel"] },
  { number: "3+", title: "Professional Accreditations", bullets: ["Project Management Professional (PMP)", "Software Engineering (MERN Stack)", "Digital Product Management"] },
  { number: "5+", title: "Critical Skills", bullets: ["Pipeline ownership", "Salesforce and CRM software", "Listening and delivering on unique client needs", "Internal collaboration", "Continuous improvement through colleagues, data, and company context"] },
];

export const experienceItems = [
  { label: "Student Success Advisor — Boreal Education", title: "Student Success Advisor", organization: "Boreal Education | 2025–Present", summary: "I provide enrolment advice across undergraduate and postgraduate programs and remain the primary point of contact throughout the learning journey.", bullets: ["Complete pipeline ownership from lead to enrolment", "Program-engagement plans tailored to individual student needs", "Monthly webinars for student engagement and program education"] },
  { label: "Distribution Logistics & Customer Success — Fruit Suite", title: "Distribution Logistics, Customer Success", organization: "Fruit Suite | 2024–2025", summary: "Working with a small team passionate about its craft, I implemented customer-success practices that contributed to stronger trial conversion and overall sales.", bullets: ["Helped achieve the strongest financial year in company history", "Company leader in trial conversion and new-client onboarding", "Implemented customer-success procedures that increased positive client feedback"] },
  { label: "Senior Business Analyst & Project Manager — CI GAM", title: "Senior Business Analyst and Project Manager", organization: "CI Global Asset Management | 2017–2024", summary: "My team supported more than $100M in annual sales through new-product approvals and promotion of existing investment solutions.", bullets: ["Oversaw on-time project delivery for retail and institutional clients", "Managed concurrent sales-enablement programs for 25+ funds across 10+ dealerships", "Led cross-functional project teams of approximately 5–10 members"] },
  { label: "Business Analyst, Client Services — CI GAM", title: "Business Analyst, Client Services", organization: "CI Global Asset Management | 2013–2017", summary: "I designed operational improvements and feedback loops for colleagues handling approximately 10,000 client inquiries daily.", bullets: ["Redesigned a contact-centre software curriculum that remained in place through 2024", "Onboarded and trained more than 200 agents through in-person, virtual, and asynchronous methods"] },
];

function createLegacyRoutes(prefix, welcomeSuffix = 1, lastSuffix = 8, firstSectionIndex = 0) {
  const routes = {};
  const sectionIds = ["welcome", "foundation", "experience", "why"];
  for (let suffix = welcomeSuffix; suffix <= lastSuffix; suffix += 1) {
    const sectionIndex = Math.min(firstSectionIndex + suffix - welcomeSuffix, sectionIds.length - 1);
    routes[`/${prefix}${suffix}`] = sectionIds[sectionIndex];
  }
  return routes;
}

export function createApplication({ slug, company, role, accent, gradient, portraitOpacity = 0.52, welcomeVideo, whyVideo, legacyPrefix, legacyWelcomeSuffix = 1, legacyLastSuffix = 8, legacyFirstSectionIndex = 0, legacyWelcomePath }) {
  const legacyRoutes = createLegacyRoutes(legacyPrefix, legacyWelcomeSuffix, legacyLastSuffix, legacyFirstSectionIndex);
  if (legacyWelcomePath) legacyRoutes[legacyWelcomePath] = "welcome";
  return {
    slug,
    company,
    role,
    accent,
    theme: { gradient, portraitOpacity },
    sections: [
      { id: "welcome", type: "video", heading: `Renner McCreath 🤝 ${company}`, subheading: `Candidate Presentation — ${role}`, videoUrl: welcomeVideo, compact: true },
      { id: "foundation", type: "metrics", heading: "The Foundation to Deliver Results", items: foundationItems },
      { id: "experience", type: "timeline", heading: "Experience Highlights", items: experienceItems },
      { id: "why", type: "video", heading: "The “Why?” | X Factors", videoUrl: whyVideo },
    ],
    legacyRoutes,
  };
}
