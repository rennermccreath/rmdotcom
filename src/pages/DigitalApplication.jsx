import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import ChevronNav from "../components/ChevronNav";
import { applicationsBySlug } from "../data/applications";
import { normalizeVideo } from "../utils/video";

const headingMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.15, ease: "easeOut" },
};

function SectionHeading({ children, accent }) {
  return (
    <motion.h1
      {...headingMotion}
      className="mx-auto mb-6 max-w-6xl text-center text-4xl font-semibold opacity-90 drop-shadow-lg sm:text-5xl md:text-7xl"
      style={{ color: `${accent}d9`, textShadow: `0 0 12px ${accent}` }}
    >
      {children}
    </motion.h1>
  );
}

function VideoSection({ section, application }) {
  const video = normalizeVideo(section.videoUrl);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-10 text-white">
      <SectionHeading accent={application.accent}>{section.heading}</SectionHeading>
      <motion.div
        className={`relative mx-auto w-full ${section.compact ? "max-w-2xl" : "max-w-4xl"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/60 shadow-2xl">
          {["loom", "youtube", "vimeo"].includes(video.provider) ? (
            <iframe
              src={video.embedUrl}
              title={`${application.company} ${application.role} candidate video`}
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="h-full w-full"
            />
          ) : video.provider === "file" ? (
            <video className="h-full w-full" controls preload="metadata">
              <source src={video.src} />
              Your browser does not support embedded video.
            </video>
          ) : (
            <a className="flex h-full items-center justify-center underline" href={video.href}>
              Watch candidate video
            </a>
          )}
        </div>
      </motion.div>
      {section.subheading && (
        <motion.p
          {...headingMotion}
          className="mx-auto mt-6 max-w-5xl text-center text-3xl font-semibold md:text-5xl"
          style={{ color: `${application.accent}d9`, textShadow: `0 0 12px ${application.accent}` }}
        >
          {section.subheading}
        </motion.p>
      )}
    </section>
  );
}

function MetricsSection({ section, application }) {
  return (
    <section className="relative min-h-screen px-3 py-10 text-white">
      <SectionHeading accent={application.accent}>{section.heading}</SectionHeading>
      <div className="mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <article key={item.title} className="group relative min-h-72 overflow-hidden border border-white/10 bg-black/60 p-6">
            <span
              aria-hidden="true"
              className="absolute bottom-2 right-2 select-none text-7xl font-bold leading-none opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-80 lg:text-8xl"
              style={{ color: application.accent }}
            >
              {item.number}
            </span>
            <div className="relative z-10">
              <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">{item.title}</h2>
              <ul className="list-inside list-square space-y-1 text-base text-white/75 sm:text-lg">
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TimelineSection({ section, application }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = section.items[activeIndex];

  return (
    <section className="relative min-h-screen px-4 py-10 text-white">
      <SectionHeading accent={application.accent}>{section.heading}</SectionHeading>
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          {section.items.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
              className="min-h-28 border border-white/10 bg-black/60 px-5 py-4 text-center text-xl font-bold transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2"
              style={{ color: application.accent, outlineColor: application.accent }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <motion.article
          key={activeItem.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="self-start border border-white/10 bg-black/70 p-6 shadow-xl md:sticky md:top-24"
          style={{ boxShadow: `0 0 18px ${application.accent}40` }}
        >
          <h2 className="text-center text-3xl font-bold">{activeItem.title}</h2>
          <p className="mt-2 text-center text-xl font-bold" style={{ color: application.accent }}>{activeItem.organization}</p>
          <p className="py-5 text-lg leading-relaxed text-white/80">{activeItem.summary}</p>
          <ul className="list-inside list-square space-y-2 text-lg" style={{ color: application.accent }}>
            {activeItem.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}

export default function DigitalApplication({ legacySlug, legacySection }) {
  const params = useParams();
  const slug = legacySlug ?? params.slug;
  const application = applicationsBySlug[slug];
  const requestedSection = legacySection ?? params.section;
  const activeIndex = useMemo(
    () => application?.sections.findIndex((section) => section.id === requestedSection) ?? -1,
    [application, requestedSection],
  );
  const sectionIndex = activeIndex >= 0 ? activeIndex : 0;
  const section = application?.sections[sectionIndex];

  useEffect(() => {
    if (!application) return;
    document.title = `${application.company} — ${application.role} | Renner McCreath`;
  }, [application]);

  if (!application) return <Navigate to="/" replace />;

  const routeFor = (index) => `/applications/${application.slug}/${application.sections[index].id}`;
  const previousIndex = (sectionIndex - 1 + application.sections.length) % application.sections.length;
  const nextIndex = (sectionIndex + 1) % application.sections.length;

  let content;
  if (section.type === "metrics") content = <MetricsSection section={section} application={application} />;
  else if (section.type === "timeline") content = <TimelineSection section={section} application={application} />;
  else content = <VideoSection section={section} application={application} />;

  return (
    <div style={{ "--application-accent": application.accent }}>
      <Link className="sr-only focus:not-sr-only" to={`/applications/${application.slug}/welcome`}>Application introduction</Link>
      {content}
      <ChevronNav prev={routeFor(previousIndex)} next={routeFor(nextIndex)} />
    </div>
  );
}
