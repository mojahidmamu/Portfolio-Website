import Hackthon from "../../assets/Blog-image/Hackthon.jpeg";
import Robotics from "../../assets/Blog-image/Robotics.jpeg"; 
import NSDA from "../../assets/Blog-image/NSDA.jpg";
import CF_IMAGE from "../../assets/Blog-image/CodeForces.png";
import CC_IMAGE from "../../assets/Blog-image/CodeChef.png";
import Orbix from "../../assets/Blog-image/Orbix.jpeg";

export const blogs = [
  {
    id: 1,
    title: "National Hackthon in IIUC-2025",
    excerpt:
      "I proudly participated in the National Hackathon in IIUC – 15.11.2025, organized by International Islamic University Chittagong (IIUC) and presented by Programming Hero. This national-level hackathon brought together talented developers, problem solvers, and innovators from different institutions across Bangladesh. The competition focused on building impactful, real-world solutions within a limited timeframe.",
    image: Hackthon,
  },
  {
    id: 2,
    title: "Robotics Club Champion 2025 in BSPI ",
    excerpt:
      "Achieved the title of Robotics Club Champion 2025 at Bangladesh Sweden Polytechnic Institute (BSPI) by securing top position in an inter-institution competition held within our institute. This accomplishment highlights my strong problem-solving skills, technical creativity, and ability to work effectively under competitive pressure. The experience enhanced my teamwork, innovation mindset, and practical understanding of robotics and technology-based solutions.",
    image: Robotics,
  },
  {
    id: 3,
    title: "ITBI Student Startup Pitch Fest 2026",
    excerpt:
      "Participated in ITBI Student Startup Pitch Fest 2026 at CUET, representing Bangladesh Sweden Polytechnic Institute. Presented 'Orbix', a SaaS-based business operating system designed for SMEs in Bangladesh.  Through this competition, I gained valuable experience in startup ideation, business model development, market validation, public speaking, and startup pitching. The event also provided an excellent opportunity to connect with innovators, entrepreneurs, and industry experts while gaining practical exposure to Bangladesh's growing startup ecosystem.",
    image: Orbix,
  },
  {
    id: 4,
    title: "NSDA ITS-RPL-(Level-3) in-2026",
    excerpt:
      "Earned RPL (Recognition of Prior Learning) Level-3 Certification on 03.01.2026, validating my practical experience, hands-on technical knowledge, and strong problem-solving abilities. This certification recognizes my competency in applying real-world skills effectively and reflects my commitment to continuous improvement and professional development in the field of technology.",
    image: NSDA,
  },
  {
    id: 5,
    title: "Codeforces Achievement | Specialist",
    excerpt:
      "Achieved Specialist rank on Codeforces, demonstrating strong understanding of data structures, algorithms, and competitive programming fundamentals. Actively participated in contests and improved problem-solving speed and accuracy under time constraints.",
    image: CF_IMAGE,
    links: {
      profile: "https://codeforces.com/profile/Abdullah_all_Mojahid",
    },
    tags: ["Codeforces", "Specialist", "Competitive Programming", "DSA"],
  },
  {
    id: 6,
    title: "CodeChef Achievement | 2★ Coder",
    excerpt:
      "Earned 2★ rating on CodeChef through consistent participation in contests and practice problems. Strengthened logical thinking and algorithmic efficiency by solving structured programming challenges.",
    image: CC_IMAGE,
    links: {
      profile: "https://www.codechef.com/users/mojahidmamu",
    },
    tags: ["CodeChef", "2 Star", "Problem Solving", "Algorithms"],
  },
];
