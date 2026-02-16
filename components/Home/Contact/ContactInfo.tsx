import { contactData } from "@/Data/data";
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const contactItems = [
  {
    icon: FaGithub,
    label: "Github",
    value: contactData.github,
    href: `https://github.com/${contactData.github}`,
    color: "#f72585",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    color: "#7209b7",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: contactData.address,
    href: null,
    color: "#4361ee",
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-5">
      {/* Info heading */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-base-content tracking-tight">
          Contact Info
        </h3>
        <p className="mt-2 text-sm text-base-content/40 leading-relaxed">
          Feel free to reach out through any of these channels
        </p>
      </div>

      {/* Contact cards */}
      {contactItems.map((item, index) => {
        const content = (
          <div
            key={index}
            className="group flex items-center gap-4 p-4 rounded-2xl bg-base-content/[0.02] border border-base-content/5 hover:bg-base-content/5 hover:border-base-content/10 transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                backgroundColor: `${item.color}10`,
              }}
            >
              <item.icon
                className="w-5 h-5 transition-all duration-300"
                style={{ color: item.color }}
              />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-base-content/40 uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-sm font-medium text-base-content/70 group-hover:text-base-content truncate transition-colors duration-300 mt-0.5">
                {item.value}
              </p>
            </div>
          </div>
        );

        return item.href ? (
          <Link key={index} href={item.href} target="_blank">
            {content}
          </Link>
        ) : (
          <div key={index}>{content}</div>
        );
      })}

      {/* Availability badge */}
      {/* <div className="mt-8 p-5 rounded-2xl bg-base-content/[0.02] border border-base-content/5 overflow-hidden relative">
        <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-emerald-500/5 blur-[40px] pointer-events-none" />
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <div>
            <p className="text-sm font-semibold text-base-content">
              Currently Available
            </p>
            <p className="text-xs text-base-content/40 mt-0.5">
              Open for freelance & full-time opportunities
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ContactInfo;
