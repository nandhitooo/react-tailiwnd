import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

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
      <label className="block mb-2 text-gray-300">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );

  const Textarea = ({ label, name, placeholder }) => (
    <div className="mb-6">
      <label className="block mb-2 text-gray-300">{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        rows="5"
        required
        className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
      className="min-h-screen bg-zinc-900 text-white flex flex-col items-center px-4"
    >
      <div className="text-center mt-20 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-300">
          Feel free to reach out for projects, collaborations, or opportunities.
        </p>
      </div>

      <div className="grid gap-10 w-1/2 mt-12">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <Input label="Name" name="name" placeholder="Your Name" type="text" />
          <Input label="Email" name="email" placeholder="Your Email" type="email" />
          <Textarea label="Message" placeholder="Write Your Message" name="message" />

          {success && (
            <div className="mb-4 p-3 bg-green-500 rounded">
              Message sent successfully.
            </div>
          )}

          {error && <div className="mb-4 p-3 bg-red-500 rounded">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition text-2xl"
              >
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
