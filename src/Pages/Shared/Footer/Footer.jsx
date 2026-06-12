import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-950 text-gray-300 pt-12 pb-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        {/* Top Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-1">
              Abdullah all Mojahid
            </h2>
            <p className="text-sm text-gray-400 uppercase">
              Full Stack Developer • Building Scalable Website
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mojahidmamu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors duration-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-all-mojahid-a8a57b329/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/abdullah.all.mojahid.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors duration-300"
            >
              <FaFacebook size={22} />
            </a>

            {/* Codeforces */}
            <a
              href="https://codeforces.com/profile/Abdullah_all_Mojahid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors duration-300"
            >
              <SiCodeforces size={22} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Text */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-500 text-xs gap-2 md:gap-0">
          <p>© {currentYear} Abdullah all Mojahid. All rights reserved.</p>
          <p>
            Made with ❤️ BY {" "}
            <span className="font-semibold text-white">Mojahid</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
