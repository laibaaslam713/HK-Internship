const teamData = [
  {
    id: 1,
    name: "Ali Khan",
    role: "Developer",
    skills: "React, JavaScript",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Senior React developer with 5+ years experience. Passionate about building scalable web applications using modern JavaScript frameworks.",
    linkedin: "https://linkedin.com/in/alikhan-dev",
    github: "https://github.com/alikhan-dev",
    twitter: "https://twitter.com/alikhan_dev"
  },
  {
    id: 2,
    name: "Sara Ahmed",
    role: "Designer",
    skills: "UI/UX, Figma",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Creative UI/UX designer specializing in user-centered design and prototyping with Figma. Transformed 20+ app interfaces.",
    linkedin: "https://linkedin.com/in/saraahmed-design",
    github: "https://github.com/saraahmed",
    twitter: ""
  },
  {
    id: 3,
    name: "Usman Ali",
    role: "Manager",
    skills: "Leadership, Communication",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Experienced project manager skilled in agile methodologies and team leadership. Delivered 50+ projects on time.",
    linkedin: "https://linkedin.com/in/usmanali-manager",
    github: "",
    twitter: ""
  },
  {
    id: 4,
    name: "Ayesha Noor",
    role: "Developer",
    skills: "Python, Django",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Backend developer expert in Python and Django frameworks. Built REST APIs serving 100k+ users monthly.",
    linkedin: "https://linkedin.com/in/ayesha-noor",
    github: "https://github.com/ayesha-noor",
    twitter: ""
  },
  {
    id: 5,
    name: "Hassan Raza",
    role: "Developer",
    skills: "Node.js, Express",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Fullstack developer focused on Node.js and Express. Created performant APIs with 99.9% uptime.",
    linkedin: "https://linkedin.com/in/hassanza-raza",
    github: "https://github.com/hassanza-raza",
    twitter: "https://twitter.com/hassanza_raza"
  },
  {
    id: 6,
    name: "Fatima Zahra",
    role: "Designer",
    skills: "Photoshop, Illustrator",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "Graphic designer creating stunning visuals with Photoshop and Illustrator. Brand identities for 30+ startups.",
    linkedin: "https://linkedin.com/in/fatima-zahra-design",
    github: "",
    twitter: "https://twitter.com/fatima_design"
  },
  {
    id: 7,
    name: "Bilal Ahmed",
    role: "Manager",
    skills: "Project Management, Agile",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    bio: "Agile project manager with Scrum Master certification. Led teams to deliver complex software projects 25% faster.",
    linkedin: "https://linkedin.com/in/bilalahmed-pm",
    github: "",
    twitter: ""
  },
  {
    id: 8,
    name: "Zainab Ali",
    role: "Developer",
    skills: "React, Tailwind",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    bio: "Frontend specialist in React and Tailwind CSS. Built responsive UIs for e-commerce platforms with 2x conversion rates.",
    linkedin: "https://linkedin.com/in/zainab-ali-dev",
    github: "https://github.com/zainab-ali",
    twitter: ""
  },
  {
    id: 9,
    name: "Omar Farooq",
    role: "Developer",
    skills: "Java, Spring Boot",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    bio: "Java backend developer expert in Spring Boot microservices. Deployed enterprise applications on AWS.",
    linkedin: "https://linkedin.com/in/omarfarooq-java",
    github: "https://github.com/omarfarooq",
    twitter: ""
  },
  {
    id: 10,
    name: "Hira Khan",
    role: "Designer",
    skills: "UI/UX, Adobe XD",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    bio: "UI/UX designer passionate about Adobe XD prototyping. Improved user retention by 40% through redesigns.",
    linkedin: "https://linkedin.com/in/hirakhan-ux",
    github: "",
    twitter: "https://twitter.com/hirakhan_ux"
  },
  {
    id: 11,
    name: "Saad Malik",
    role: "Developer",
    skills: "MongoDB, Express",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "MERN stack developer specializing in MongoDB and Express. Scaled databases for high-traffic apps.",
    linkedin: "https://linkedin.com/in/saadmalik-mern",
    github: "https://github.com/saadmalik",
    twitter: ""
  },
  {
    id: 12,
    name: "Areeba Sheikh",
    role: "Designer",
    skills: "Figma, Prototyping",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Product designer expert in Figma prototyping and collaboration. Designed interfaces used by 1M+ users.",
    linkedin: "https://linkedin.com/in/areeba-sheikh",
    github: "",
    twitter: ""
  },
  {
    id: 13,
    name: "Hamza Tariq",
    role: "Manager",
    skills: "Team Lead, Scrum",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    bio: "Technical team lead certified in Scrum. Mentored 20+ developers and reduced deployment time by 50%.",
    linkedin: "https://linkedin.com/in/hamzatariq-lead",
    github: "",
    twitter: ""
  },
  {
    id: 14,
    name: "Iqra Hassan",
    role: "Developer",
    skills: "Next.js, React",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    bio: "Next.js specialist building SEO-optimized React applications. Improved page speeds by 60%.",
    linkedin: "https://linkedin.com/in/iqra-hassan-nextjs",
    github: "https://github.com/iqra-hassan",
    twitter: "https://twitter.com/iqra_dev"
  },
  {
    id: 15,
    name: "Talha Javed",
    role: "Developer",
    skills: "C++, Data Structures",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    bio: "Systems programmer expert in C++ and algorithms. Optimized performance-critical code by 3x.",
    linkedin: "https://linkedin.com/in/talhajaved-cpp",
    github: "https://github.com/talhajaved",
    twitter: ""
  },
  {
    id: 16,
    name: "Mehwish Ali",
    role: "Designer",
    skills: "Canva, Branding",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    bio: "Brand designer creating visual identities with Canva and Adobe tools. Rebranded 15+ companies.",
    linkedin: "https://linkedin.com/in/mehwish-ali-branding",
    github: "",
    twitter: "https://twitter.com/mehwish_brand"
  },
  {
    id: 17,
    name: "Shahzaib Khan",
    role: "Developer",
    skills: "PHP, Laravel",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    bio: "PHP Laravel developer building robust web applications. Migrated legacy systems to modern Laravel.",
    linkedin: "https://linkedin.com/in/shahzaibkhan-laravel",
    github: "https://github.com/shahzaibkhan",
    twitter: ""
  },
  {
    id: 18,
    name: "Nida Aslam",
    role: "Manager",
    skills: "Operations, Planning",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    bio: "Operations manager streamlining processes and planning. Reduced operational costs by 30%.",
    linkedin: "https://linkedin.com/in/nidaaslam-ops",
    github: "",
    twitter: ""
  },
  {
    id: 19,
    name: "Adnan Siddiqui",
    role: "Developer",
    skills: "Angular, TypeScript",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    bio: "Angular expert with TypeScript proficiency. Developed enterprise SPAs for Fortune 500 clients.",
    linkedin: "https://linkedin.com/in/adnansiddiqui-angular",
    github: "https://github.com/adnansiddiqui",
    twitter: ""
  },
  {
    id: 20,
    name: "Sana Malik",
    role: "Designer",
    skills: "UI Design, UX Research",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    bio: "UX researcher and UI designer conducting user studies. Boosted conversion rates by 35% through research.",
    linkedin: "https://linkedin.com/in/sanamalik-uxresearch",
    github: "",
    twitter: "https://twitter.com/sana_ux"
  }
];

export const getTeamData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(teamData), 800);
  });
};