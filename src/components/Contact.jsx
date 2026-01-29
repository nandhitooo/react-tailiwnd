import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  emailjs.init("ZvEiQIJFkiCVwhE0j");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = e.target;

    // Data dari form
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      await emailjs.send(
        "service_65bxvuz",
        "template_21xq82v",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Fernandhito",
          reply_to: formData.email,
        },
      );

      form.reset();
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("Email sending failed:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="contact items-center justify-center text-center mt-10 px-4 pt-20"
        id="contact"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mt-6 text-xl text-gray-300">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out to me
          through the contact form below or via my social media channels.
        </p>
      </div>
      <div className="mt-4 mb-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              className="block text-gray-300 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Status Messages */}
          {success && (
            <div className="mb-4 p-3 bg-green-500 text-white rounded-lg">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 bg-red-500 text-white rounded-lg">
              {error}
            </div>
          )}

          <button
            className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-black"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              </>
            ) : (
              <>
                Send Message <i className="fa-solid fa-paper-plane ml-2"></i>
              </>
            )}
          </button>
        </form>
        <div className="social-links mb-10 items-center justify-center text-center mt-6">
          <a
            href="https://github.com/nandhitooo"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/nandh1tooo_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://x.com/Fernandhito8"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            <i className="fab fa-x-twitter text-2xl"></i>
          </a>
          <a
            href="https://www.facebook.com/Nandhitooo"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a
            href="https://www.tiktok.com/@nandhitooo_"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            <i className="fab fa-tiktok text-2xl"></i>
          </a>
          <a
            href="https://wa.me/6285812222628"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
