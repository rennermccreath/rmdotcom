import React from "react";
import { FaEnvelope, FaLinkedin, FaMediumM, FaRss } from "react-icons/fa";
import logo from "../assets/Isolated black stag RM logo (1).png";

const contactLinks = [
  { label: "Email", href: "mailto:renner@rennermccreath.com", icon: FaEnvelope },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rennermccreath/", icon: FaLinkedin, external: true },
  { label: "Substack", href: "https://substack.com/@rennermccreath", icon: FaRss, external: true },
  { label: "Medium", href: "https://medium.com/@rennermccreath", icon: FaMediumM, external: true },
];

const desktopPositions = [
  "md:col-start-1 md:row-start-1 md:justify-self-end",
  "md:col-start-3 md:row-start-1 md:justify-self-start",
  "md:col-start-1 md:row-start-2 md:justify-self-end",
  "md:col-start-3 md:row-start-2 md:justify-self-start",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[calc(100svh-5rem)] items-center justify-center px-6 py-10 sm:px-10"
    >
      <h1 className="sr-only">Contact Renner McCreath</h1>
      <div className="flex w-full max-w-5xl flex-col items-center gap-7 md:grid md:grid-cols-[1fr_auto_1fr] md:grid-rows-2 md:items-center md:gap-x-12 md:gap-y-10">
        <div className="relative row-span-2 flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64 md:col-start-2 md:row-start-1 md:h-72 md:w-72 lg:h-80 lg:w-80">
          <span aria-hidden="true" className="absolute -inset-5 rounded-full border border-white/10" />
          <span aria-hidden="true" className="absolute -inset-2 rounded-full border border-[var(--brand-gold)]/25" />
          <img src={logo} alt="RM stag logo" className="brand-logo relative h-full w-full object-contain" />
        </div>

        <nav aria-label="Contact links" className="flex w-full max-w-xs flex-col items-center gap-3 md:contents">
          {contactLinks.map(({ label, href, icon, external }, index) => (
            <a
              key={label}
              href={href}
              className={`contact-link ${desktopPositions[index]}`}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="contact-link-icon">
                {React.createElement(icon, { "aria-hidden": true, size: 21 })}
              </span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
