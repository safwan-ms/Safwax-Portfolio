import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY;
  return (
    <div className="relative rounded-2xl bg-base-content/[0.02] border border-base-content/5 p-6 sm:p-8 lg:p-10 overflow-hidden">
      {/* Subtle glow accent */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#f72585]/5 blur-[80px] pointer-events-none" />

      <h3 className="text-xl md:text-2xl font-bold text-base-content tracking-tight">
        Send a Message
      </h3>
      <p className="mt-2 text-sm text-base-content/40 leading-relaxed max-w-md">
        Ready to bring your ideas to life? Whether you have a vision or need
        help shaping one, I&apos;m here to collaborate.
      </p>

      {/* Form */}
      <form
        method="POST"
        action="https://api.web3forms.com/submit"
        className="mt-8 space-y-4"
      >
        <input type="hidden" name="access_key" value={accessKey} />

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-[11px] font-semibold text-base-content/40 uppercase tracking-wider mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-base-content/5 border border-base-content/5 text-base-content text-sm placeholder:text-base-content/25 outline-none focus:border-[#f72585]/30 focus:bg-base-content/[0.03] transition-all duration-300"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-[11px] font-semibold text-base-content/40 uppercase tracking-wider mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl bg-base-content/5 border border-base-content/5 text-base-content text-sm placeholder:text-base-content/25 outline-none focus:border-[#f72585]/30 focus:bg-base-content/[0.03] transition-all duration-300"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-base-content/40 uppercase tracking-wider mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 rounded-xl bg-base-content/5 border border-base-content/5 text-base-content text-sm placeholder:text-base-content/25 outline-none focus:border-[#f72585]/30 focus:bg-base-content/[0.03] transition-all duration-300 resize-none"
          />
        </div>

        <button
          type="submit"
          className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-[14px] font-semibold text-white bg-linear-to-r from-[#f72585] to-[#7209b7] shadow-[0_4px_20px_rgba(247,37,133,0.3)] hover:shadow-[0_6px_30px_rgba(247,37,133,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          Send Message
          <FaPaperPlane className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
