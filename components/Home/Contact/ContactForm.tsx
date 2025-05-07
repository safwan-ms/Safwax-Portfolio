const ContactForm = () => {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY;
  console.log(accessKey);
  return (
    <div className="bg-gray-900 rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&apos;s Work Together
      </h1>
      <p className="text-white ">
        Ready to bring your ideas to life? Whether you have a vision or need
        help shaping one, I am here to collaborate and deliver results that make
        an impact.
      </p>
      {/* Input Fields */}
      <form
        method="POST"
        action="https://api.web3forms.com/submit"
        className="mt-8 block w-full overflow-hidden"
      >
        <input type="hidden" name="access_key" value={accessKey} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-600 border-opacity-15 outline-none w-full"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-600 border-opacity-15 outline-none w-full"
            required
          />
        </div>

        <textarea
          className="w-full mt-5  bg-black text-white placeholder:text-gray-600 px-4 py-3.5 border-[1.5px] border-gray-600 border-opacity-15 outline-none"
          name="message"
          rows={7}
          placeholder="Message"
        ></textarea>
        <div className="mt-4">
          <button className="responsive-btn text-base py-2 px-2 btn-secondary hover:btn-secondary/90">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
