const teamData = [
  {
    id: 1,
    name: "Ali Khan",
    role: "Developer",
    skills: "React, JavaScript",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Sara Ahmed",
    role: "Designer",
    skills: "UI/UX, Figma",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Usman Ali",
    role: "Manager",
    skills: "Leadership, Communication",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Ayesha Noor",
    role: "Developer",
    skills: "Python, Django",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "Hassan Raza",
    role: "Developer",
    skills: "Node.js, Express",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: 6,
    name: "Fatima Zahra",
    role: "Designer",
    skills: "Photoshop, Illustrator",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    id: 7,
    name: "Bilal Ahmed",
    role: "Manager",
    skills: "Project Management, Agile",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    id: 8,
    name: "Zainab Ali",
    role: "Developer",
    skills: "React, Tailwind",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    id: 9,
    name: "Omar Farooq",
    role: "Developer",
    skills: "Java, Spring Boot",
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    id: 10,
    name: "Hira Khan",
    role: "Designer",
    skills: "UI/UX, Adobe XD",
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    id: 11,
    name: "Saad Malik",
    role: "Developer",
    skills: "MongoDB, Express",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 12,
    name: "Areeba Sheikh",
    role: "Designer",
    skills: "Figma, Prototyping",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 13,
    name: "Hamza Tariq",
    role: "Manager",
    skills: "Team Lead, Scrum",
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    id: 14,
    name: "Iqra Hassan",
    role: "Developer",
    skills: "Next.js, React",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    id: 15,
    name: "Talha Javed",
    role: "Developer",
    skills: "C++, Data Structures",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    id: 16,
    name: "Mehwish Ali",
    role: "Designer",
    skills: "Canva, Branding",
    image: "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    id: 17,
    name: "Shahzaib Khan",
    role: "Developer",
    skills: "PHP, Laravel",
    image: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    id: 18,
    name: "Nida Aslam",
    role: "Manager",
    skills: "Operations, Planning",
    image: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    id: 19,
    name: "Adnan Siddiqui",
    role: "Developer",
    skills: "Angular, TypeScript",
    image: "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    id: 20,
    name: "Sana Malik",
    role: "Designer",
    skills: "UI Design, UX Research",
    image: "https://randomuser.me/api/portraits/women/20.jpg"
  }
];

// fake API
export const getTeamData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(teamData), 800);
  });
};