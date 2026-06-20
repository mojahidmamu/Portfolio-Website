import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

const contactItems = [
  {
    icon: <FaGithub />,
    text: "Mojahid-mamu",
    label: "Github",
    link: "https://github.com/mojahidmamu",
  },
  {
    icon: <FaLinkedin />,
    text: "Abdullah all Mojahid",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/abdullah-all-mojahid-a8a57b329",
  },
  {
    icon: <FaFacebook />,
    text: "Connect with me in Facebook",
    label: "Facebook",
    link: "https://www.facebook.com/abdullah.all.mojahid.2024",
  },
  {
    icon: <SiCodeforces />,
    text: "Mojahid",
    label: "Codeforces",
    link: "https://codeforces.com/profile/Abdullah_all_Mojahid",
  },
  {
    icon: <FaEnvelope />,
    text: "abdullahallmojahidstudent@gmail.com",
    label: "Email me",
  },
  { icon: <FaPhone />, text: "+8801844797780", label: "Call me" },
  {
    icon: <FaMapMarkerAlt />,
    text: "Cox's Bazar, Bangladesh",
    label: "Location",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast({ visible: false, type: "", message: "" });

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setToast({
          visible: true,
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        // Clear form
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Auto-hide toast after 5 seconds
        setTimeout(() => {
          setToast({ visible: false, type: "", message: "" });
        }, 5000);
      } else {
        setToast({
          visible: true,
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setToast({
        visible: true,
        type: "error",
        message: "Network error. Please check your connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>My Portfolio - Contact</title>
      </Helmet>

      {/* Flex container */}
      <div className="flex flex-col md:flex-row md:items-start gap-12">
        {/* Left - Header / Text */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center md:text-left">
            <span className="text-slate-900 dark:text-white">Let's Connect </span>
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
              with me
            </span>
          </h2>

          {/* Underline */}
          <div className="flex justify-center md:justify-start">
            <span className="h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
          </div>

          <p className="text-slate-500 text-base md:text-lg max-w-md text-center md:text-left mt-8">
            I specialize in React.js, Node.js, MongoDB. <br />
            Whatever project you have in mind, or just <br /> want to say hi, my
            inbox is always open!
          </p>

          {/* Contact List */}
          <div className="space-y-4">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 group mt-4">
                {/* Icon Box */}
                <div
                  className="w-12 h-12 mt-3 flex items-center justify-center rounded-2xl 
            bg-teal-500/10 text-teal-500
            group-hover:bg-teal-500 group-hover:text-white
            transition-all duration-300"
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500/70">
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-slate-800 dark:text-white hover:text-teal-500 transition-colors duration-200"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="font-medium text-slate-800 dark:text-white">
                      {item.text}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-6"
          >
            {/* Name */}
            <h5 className="font-bold mb-[-20px]">Name</h5>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            {/* Email */}
            <h5 className="font-bold mb-[-20px]">Email Address</h5>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            {/* Subject */}
            <h5 className="font-bold mb-[-20px]">Subject</h5>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            {/* Message */}
            <h5 className="font-bold mb-[-20px]">Your Message</h5>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-lg transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Me"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notifications */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 right-6 left-6 md:left-auto md:w-96 z-50"
          >
            <div
              className={`rounded-2xl shadow-2xl p-5 flex items-start gap-4 border ${
                toast.type === "success"
                  ? "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700"
                  : "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700"
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-0.5">
                {toast.type === "success" ? (
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                ) : (
                  <div className="w-6 h-6 text-red-600 dark:text-red-400 text-xl font-bold">⚠️</div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p
                  className={`font-semibold ${
                    toast.type === "success"
                      ? "text-green-800 dark:text-green-200"
                      : "text-red-800 dark:text-red-200"
                  }`}
                >
                  {toast.type === "success" ? "Success!" : "Error"}
                </p>
                <p
                  className={`text-sm ${
                    toast.type === "success"
                      ? "text-green-700 dark:text-green-300"
                      : "text-red-700 dark:text-red-300"
                  }`}
                >
                  {toast.message}
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={() => setToast({ visible: false, type: "", message: "" })}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;