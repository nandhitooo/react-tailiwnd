import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
  { icon: "fab fa-github", link: "https://github.com/nandhitooo" },
  {
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/fernandhito-dian-pratama-657279417/",
  },
  { icon: "fab fa-instagram", link: "https://www.instagram.com/nandh1tooo_/" },
  { icon: "fab fa-x-twitter", link: "https://x.com/Fernandhito8" },
  { icon: "fab fa-facebook", link: "https://www.facebook.com/Nandhitooo" },
  { icon: "fab fa-tiktok", link: "https://www.tiktok.com/@nandhitooo_" },
  { icon: "fab fa-discord", link: "https://discord.gg/hnrPCyt5n2" },
];

const Contact = () => {
  const { t } = useLanguage();
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
    } catch {
      setError(t("contact.error"));
    } finally {
      setLoading(false);
    }
  };

  const Input = ({ label, name, type, placeholder }) => (
    <div className="mb-4">
      <label className="block mb-2 text-zinc-700 dark:text-zinc-300 font-medium text-sm sm:text-base">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 text-sm sm:text-base"
      />
    </div>
  );

  const Textarea = ({ label, name, placeholder }) => (
    <div className="mb-6">
      <label className="block mb-2 text-zinc-700 dark:text-zinc-300 font-medium text-sm sm:text-base">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        rows="5"
        required
        className="w-full px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 text-sm sm:text-base"
      ></textarea>
    </div>
  );

  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent text-zinc-900 dark:text-white flex flex-col items-center px-6 py-24 transition-colors duration-300"
    >
      <Reveal animation="motion-preset-slide-up motion-duration-700">
        <div className="max-w-4xl w-full text-center mb-12 sm:mb-16">
          <h5 className="font-bold text-amber-500 dark:text-amber-400 mb-2 flex items-center justify-center gap-2 text-sm sm:text-base uppercase tracking-[0.2em]">
            <span className="w-8 sm:w-12 h-[2px] bg-amber-400"></span>
            {t("contact.eyebrow")}
          </h5>
          <h2 className="text-3xl sm:text-5xl font-black mb-6">
            {t("contact.heading1")}{" "}
            <span className="text-gradient">{t("contact.heading2")}</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            {t("contact.subheading")}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 w-full max-w-6xl mb-24">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <Reveal animation="motion-preset-slide-right motion-delay-100 motion-duration-700">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-10 rounded-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  label={t("contact.nameLabel")}
                  name="name"
                  placeholder={t("contact.namePlaceholder")}
                  type="text"
                />
                <Input
                  label={t("contact.emailLabel")}
                  name="email"
                  placeholder={t("contact.emailPlaceholder")}
                  type="email"
                />
              </div>
              <Textarea
                label={t("contact.messageLabel")}
                placeholder={t("contact.messagePlaceholder")}
                name="message"
              />

              {success && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 text-green-600 dark:text-green-500 rounded-xl font-bold flex items-center gap-3 text-sm sm:text-base">
                  <Icon icon="fa-solid fa-circle-check" />
                  {t("contact.success")}
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 text-red-600 dark:text-red-500 rounded-xl font-bold flex items-center gap-3 text-sm sm:text-base">
                  <Icon icon="fa-solid fa-circle-exclamation" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 sm:py-5 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest rounded-xl hover:bg-amber-400 dark:hover:bg-amber-400 hover:text-black transition-all duration-300 disabled:opacity-50 shadow-lg cursor-pointer flex items-center justify-center gap-3 group text-sm sm:text-base"
              >
                {loading ? t("contact.sending") : t("contact.send")}
                <Icon icon="fa-solid fa-paper-plane group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </Reveal>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-center gap-6 sm:gap-8 order-1 lg:order-2">
          <Reveal animation="motion-preset-slide-left motion-delay-150 motion-duration-700">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h4 className="text-lg sm:text-xl font-black mb-6">
                {t("contact.socialConnect")}
              </h4>
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center glass-card rounded-xl text-xl sm:text-2xl text-zinc-500 hover:text-amber-500 transition-all duration-300"
                  >
                    <Icon icon={item.icon} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal animation="motion-preset-slide-left motion-delay-250 motion-duration-700">
            <div className="glass-card p-6 sm:p-8 rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 text-black border-transparent">
              <h4 className="text-lg sm:text-xl font-black mb-2">
                {t("contact.basedIn")}
              </h4>
              <p className="font-bold text-black/70">{t("contact.location")}</p>
              <div className="mt-6 flex items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-tight bg-black/10 px-4 py-2 rounded-full w-fit">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                {t("contact.openToRemote")}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
