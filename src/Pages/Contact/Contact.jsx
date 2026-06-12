import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub, 
  FaFacebook, 
} from "react-icons/fa";
import { SiCodeforces } from "react-icons/si"; // Codeforces icon

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
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        console.log("✅ Submitted Data:", formData);

        // Success Message
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        // Success UI
        setSent(true);

        // Reset Form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Auto Hide Success UI
        setTimeout(() => {
          setSent(false);

          setStatus({
            type: "",
            message: "",
          });
        }, 4000);
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message:
          "Network error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
};


  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>My Portfolio </title>
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-lg transition"
            >
              {loading ? "Sending..." : "Send Me"}
          </button>
          </form>

         {/* Success Message UI */}
          {sent && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="fixed top-4 left-1/2 -translate-x-1/2 flex gap-3 p-4 rounded-xl bg-green-50 border border-green-200 shadow-md z-50"
            >
              <CheckCircle className="text-green-600 text-2xl" />
              <div>
                <p className="font-semibold text-green-700">
                  Message sent successfully!
                </p>
                <p className="text-sm text-green-600">
                  Thanks — I’ll reply soon.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
