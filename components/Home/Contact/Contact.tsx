"use client";

import * as motion from "motion/react-client";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      className="relative bg-base-100 py-24 md:py-32 overflow-hidden"
      id="contact"
    >
      {/* ── Background accents ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-40 w-[400px] h-[400px] rounded-full bg-[#f72585]/8 blur-3xl" />
        <div className="absolute -bottom-20 -right-32 w-[350px] h-[350px] rounded-full bg-[#7209b7]/6 blur-3xl" />
      </div>

      <div className="relative z-10 w-[90%] xl:w-[80%] max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-content/5 border border-base-content/10 backdrop-blur-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f72585]" />
            <span className="text-xs font-medium text-base-content/60 uppercase tracking-[0.15em]">
              Get In Touch
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content tracking-tight">
            Let&apos;s{" "}
            <span className="bg-linear-to-r from-[#f72585] via-[#b5179e] to-[#7209b7] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-base-content/40 max-w-lg mx-auto">
            Have a project in mind? Let&apos;s discuss and build something
            amazing together
          </p>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-10 items-start">
          {/* Contact Form — takes more space */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="xl:col-span-3"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="xl:col-span-2"
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
