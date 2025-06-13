import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Full Stack Developer Intern",
    company: "TeSys India Private Limited",
    startDate: "Feb 2025",
    isCurrentJob: true,
    location: "Chennai, India",
    description: [
      "Built and maintained full-stack applications using React, Node.js, and MySQL.",
      "Designed interactive UI using CSS ",
      // "Implemented Redux for state management and optimized frontend performance.",
      "Developed secure REST APIs and handled complete CRUD functionality.",
      // "Worked on a partnership form system and a checkout sidebar modal.",
    ],
  },
  {
    designation: "Freelance Web Developer",
    company: "Zero2Site",
    startDate: "Feb 2025",
    isCurrentJob: true,
    location: "Remote",
    description: [
      "Developed responsive websites using Next.js for local businesses.",
      "Created reusable and modular components with Tailwind.",
      "Delivered pixel-perfect, client-focused UI with strong UX considerations.",
    ],
  },
  // {
  //   designation: "Tech Enthusiast & Student Developer",
  //   company: "Chennai Institute of Technology",
  //   startDate: "2021",
  //   isCurrentJob: true,
  //   location: "Chennai, India",
  //   description: [
  //     "Contributed to academic and hackathon projects using Flutter, Node.js, and Firebase.",
  //     "Built mini-projects involving MySQL, REST APIs, and real-time databases.",
  //     "Explored AI/ML and agent-based systems for cutting-edge solutions.",
  //     "Active in LeetCode, solving 50+ coding problems to strengthen DSA skills.",
  //   ],
  // },
];

export default experiences;
