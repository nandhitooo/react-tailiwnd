import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    emailjs.init("ZvEiQIJFkiCVwhE0j");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const { name, email, message } = e.target;

    try {
      await emailjs.send("service_65bxvuz", "template_21xq82v", {
        from_name: name.value,
        from_email: email.value,
        message: message.value,
        to_name: "Fernandhito",
        reply_to: email.value,
      });

      e.target.reset();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const Input = ({ label, name, type, placeholder }) => (
    <div className="mb-4">
      <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-500 text-sm sm:text-base"
      />
    </div>
  );

  const Textarea = ({ label, name, placeholder }) => (
    <div className="mb-6">
      <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        rows="5"
        required
        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-500 text-sm sm:text-base"
      ></textarea>
    </div>
  );

  const socialLinks = [
    { icon: "fab fa-github", link: "https://github.com/nandhitooo" },
    { icon: "fab fa-linkedin", link: "#" },
    {
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/nandh1tooo_/",
    },
    { icon: "fab fa-x-twitter", link: "https://x.com/Fernandhito8" },
    { icon: "fab fa-facebook", link: "https://www.facebook.com/Nandhitooo" },
    { icon: "fab fa-tiktok", link: "https://www.tiktok.com/@nandhitooo_" },
    { icon: "fab fa-discord", link: "https://discord.gg/hnrPCyt5n2" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent text-zinc-900 dark:text-white flex flex-col items-center px-6 py-24 transition-colors duration-300"
    >
      <Reveal animation="motion-preset-slide-up motion-duration-1000">
        <div className="max-w-4xl w-full text-center mb-12 sm:mb-16">
          <h5 className="font-bold text-yellow-500 dark:text-yellow-400 mb-2 flex items-center justify-center gap-2 text-sm sm:text-base">
            <span className="w-8 sm:w-12 h-[2px] bg-yellow-400"></span>
            005 / Get In Touch
          </h5>
          <h2 className="text-3xl sm:text-5xl font-black mb-6">
            Let's <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities, projects, or just a friendly
            chat.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 w-full max-w-6xl mb-24">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <Reveal animation="motion-preset-slide-right motion-delay-200 motion-duration-1000">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Your Name"
                  type="text"
                />
                <Input
                  label="Email"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <Textarea
                label="Message"
                placeholder="Your Message"
                name="message"
              />

              {success && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 text-green-500 rounded-2xl font-bold flex items-center gap-3 text-sm sm:text-base motion-preset-fade motion-duration-1000">
                  <i className="fa-solid fa-circle-check"></i>
                  Message sent successfully!
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 text-red-500 rounded-2xl font-bold flex items-center gap-3 text-sm sm:text-base motion-preset-fade motion-duration-1000">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 sm:py-5 bg-zinc-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest rounded-2xl hover:bg-yellow-400 dark:hover:bg-yellow-400 hover:text-black transition-all duration-500 disabled:opacity-50 shadow-xl hover:shadow-yellow-400/20 cursor-pointer flex items-center justify-center gap-3 group text-sm sm:text-base"
              >
                {loading ? "Sending..." : "Send Message"}
                <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              </button>
            </form>
          </Reveal>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-center gap-6 sm:gap-8 order-1 lg:order-2">
          <Reveal animation="motion-preset-slide-left motion-delay-300 motion-duration-1000">
            <div className="glass-card p-6 sm:p-8 rounded-[2rem]">
              <h4 className="text-lg sm:text-xl font-black mb-6">
                Social <span className="text-yellow-500">Connect</span>
              </h4>
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
                {socialLinks.map((item, index) => {
                  const delays = [
                    "motion-delay-0",
                    "motion-delay-75",
                    "motion-delay-150",
                    "motion-delay-225",
                    "motion-delay-300",
                    "motion-delay-375",
                    "motion-delay-450",
                  ];
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center glass-card rounded-2xl text-xl sm:text-2xl text-gray-500 hover:text-yellow-500 hover:scale-110 transition-all duration-300 motion-preset-fade ${delays[index] || "motion-delay-500"} motion-duration-1000`}
                    >
                      <i className={item.icon}></i>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal animation="motion-preset-slide-left motion-delay-500 motion-duration-1000">
            <div className="glass-card p-6 sm:p-8 rounded-[2rem] bg-linear-to-br from-yellow-400 to-orange-500 text-black">
              <h4 className="text-lg sm:text-xl font-black mb-2">Based in</h4>
              <p className="font-bold text-black/70">
                Nganjuk, East Java, Indonesia
              </p>
              <div className="mt-6 flex items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-tighter bg-black/10 px-4 py-2 rounded-full w-fit">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Open to Remote Work
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
