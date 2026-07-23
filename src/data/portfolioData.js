export const profile = {
  name: 'Sudip Kumar Pal',
  role: 'B.Tech Student · Electrical Engineering · Full Stack Developer',
  tagline:
    'I build responsive, scalable web apps and sharpen my problem-solving through DSA — one circuit and one commit at a time.',
  location: 'Kalidan, Panskura, Purba Medinipur, West Bengal - 721131',
  email: 'palsudipkumar3@gmail.com',
  phone: '+91 9339951850',
  resumeUrl: '/Sudip_Kumar_Pal_Resume.pdf',
  photoUrl: '/profile.png',
  socials: {
    github: 'https://github.com/Itz-Sudip',
    linkedin: 'https://www.linkedin.com/in/sudip-kumar-pal-a7154832a/',
  },

  codingProfiles: [
    { id: 'leetcode', name: 'LeetCode', detail: 'Rating 1614', url: 'https://leetcode.com/u/itz_Sudip/' },
    { id: 'codechef', name: 'CodeChef', detail: '3★ · Rating 1627', url: 'https://www.codechef.com/users/itz_sudip_01' },
    { id: 'codeforces', name: 'Codeforces', detail: 'Pupil · Rating 1268', url: 'https://codeforces.com/profile/itz_sudip' },
    { id: 'atcoder', name: 'AtCoder', detail: 'Rating 539', url: 'https://atcoder.jp/users/Itz_sudip' },
  ],
  stats: [
    { label: 'DSA Problems Solved', value: '1000+' },
    { label: 'Full Stack Projects', value: '2+' },
    { label: 'Years of Coding', value: '2+' },
  ],
}

export const about = {
  summary: `I am a B.Tech student with a strong interest in problem-solving and data structures, specializing in C++. My engineering coursework and hands-on projects have given me a really strong foundation for tackling complex analytical challenges. I am looking to leverage these skills in an impactful summer internship.`,
  highlights: [
    'Electrical Engineering undergraduate at NIT Durgapur',
    'Full Stack Development with the MERN stack',
    'Competitive programmer across LeetCode, Codeforces, CodeChef & AtCoder',
    'Comfortable bridging hardware fundamentals and software systems',
  ],
}

export const education = [
  {
    id: 'edu-1',
    degree: 'B.Tech in Electrical Engineering',
    institution: 'National Institute of Technology Durgapur',
    duration: '2024 – 2028', 
    score: 'CGPA: 8.08 / 10.00',
  },
  {
    id: 'edu-2',
    degree: 'Class XII',
    institution: 'Danichak Sangathani High School',
    duration: '2023 – 2024', 
    score: 'Percentage: 82.6',
  },
  {
    id: 'edu-3',
    degree: 'Class X',
    institution: 'Gobardhanpur Pramathanath Vidyayatan',
    duration: '2021 - 2022', 
    score: 'Percentage: 85.14',
  },
]

export const experience = [
  {
    id: 'exp-1',
    role: 'Software Engineering Virtual Job Simulation',
    company: "JP Morgan chase & co ",
    duration: 'Jun 2026',
    points: [
      'Engineered enterprise microservices within a simulated JPMorgan Chase environment using Java, Spring Boot, and Maven to handle high-profile financial operations','Integrated Apache Kafka messaging infrastructure into a Spring application to establish secure, high-speed asynchronous data streams for transaction processing.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Advanced Software Engineering Job Simulation',
    company: "Walmart",
    duration: 'Jul 2026',
    points: [
      'Engineered enterprise microservices within a simulated JPMorgan Chase environment using Java, Spring Boot, and Maven to handle high-profile financial operations','Integrated Apache Kafka messaging infrastructure into a Spring application to establish secure, high-speed asynchronous data streams for transaction processing.',
    ],
  },
]

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'code',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'droplet',
    items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Python', 'REST APIs'],
  },
  {
    id: 'core',
    title: 'Programming & Problem Solving',
    icon: 'code',
    items: ['C', 'C++', 'DSA', 'OOP'],
  },
  {
    id: 'tools',
    title: 'Tools & Version Control',
    icon: 'tool',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
]

export const skillProficiency = [
  { id: 'c', label: 'C', level: 85, icon: 'c', barClass: 'from-cyan-400 to-sky-300' },
  { id: 'cpp', label: 'C++', level: 90, icon: 'cpp', barClass: 'from-indigo-500 to-violet-400' },
  { id: 'js', label: 'JavaScript', level: 85, icon: 'js', barClass: 'from-amber-400 to-signal' },
  { id: 'react', label: 'React.js', level: 80, icon: 'react', barClass: 'from-sky-400 to-blue-400' },
  { id: 'next', label: 'Next.js', level: 70, icon: 'next', barClass: 'from-slate-400 to-slate-200' },
  { id: 'tailwind', label: 'Tailwind CSS', level: 85, icon: 'tailwind', barClass: 'from-cyan-400 to-teal-300' },
  { id: 'node', label: 'Node.js', level: 75, icon: 'node', barClass: 'from-green-500 to-emerald-400' },
  { id: 'express', label: 'Express.js', level: 70, icon: 'express', barClass: 'from-neutral-400 to-neutral-300' },
  { id: 'mongodb', label: 'MongoDB', level: 75, icon: 'mongodb', barClass: 'from-emerald-500 to-green-400' },
  { id: 'python', label: 'Python', level: 70, icon: 'python', barClass: 'from-yellow-400 to-blue-400' },
  { id: 'mysql', label: 'MySQL', level: 75, icon: 'mysql', barClass: 'from-blue-500 to-sky-400' },
  { id: 'git', label: 'Git', level: 80, icon: 'git', barClass: 'from-orange-500 to-red-400' },
  { id: 'github', label: 'GitHub', level: 80, icon: 'github', barClass: 'from-purple-400 to-indigo-300' },
  { id: 'dsa', label: 'DSA', level: 90, icon: 'dsa', barClass: 'from-fuchsia-500 to-pink-400' },
  { id: 'oop', label: 'OOP', level: 80, icon: 'oop', barClass: 'from-rose-500 to-orange-400' },
]

export const projects = [
  {
    id: 'proj-1',
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal portfolio featuring About Me, Projects, and Contact sections, with dark mode toggle, interactive animations, and GitHub integration.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    github: 'https://github.com/Itz-Sudip', 
    live: '🔧 https://your-portfolio-url.com', 
  },
  {
    id: 'proj-2',
    title: 'Medidel',
    description:
      'A Medicine delivery app, integrated payment page using stripe, having a admin panel',
    tech: ['React', 'Express', 'MongoDB', 'Node JS','Stripe'],
    github: 'https://github.com/Itz-Sudip',
    live: '🔧 https://project-two-demo.vercel.app',
  },
  {
    id: 'proj-3',
    title: 'More Projects coming soon',
    description:
      'Currently working on exciting new projects. Stay tuned!',
    tech: ['in progress'],
    github: '#projects',
    live: '#projects',
  },
]

export const cocurricular = [
  {
    id: 'co-1',
    title: 'Senior Coordinator | Students Alumni Interaction Cell',
    description: '● Enhancing leadership and communication skills and building a strong network between students and alumni also Member of the Web Development team, manage club official webstite',
  },
  {
    id: 'co-2',
    title: 'Senior Coordinator | Ampere | Electrical Society',
    description: '● Train junior students in specialized electrical engineering software as a Core Computing team member. Member of the Graphics Designing Team, contributing to creative designs and visual content.',
  },
  {
    id: 'co-4',
    title: 'Contributor | GSSoC 2026',
    description: '● Developed and maintained open-source features, optimized performance, and collaborated with global maintainers on real-world codebases.',
  },
  {
    id: 'co-5',
    title: 'Smart India Hackathon (SIH) 2025',
    description: '●	Participated in Smart India Hackathon (SIH) 2025 hardware edition, collaborating in a team to design and prototype a solution for Disaster Response Drone for Remote Areas.',
  },
]

export const certifications = [
  {
    id: 'cert-1',
    title: 'Software Engineering Virtual Job Simulation',
    issuer: 'JP Morgan chase & co ',
    credentialUrl: 'https://drive.google.com/file/d/1rThfJwcQHCkNq7uQK0k262SlBVJAxBjc/view?usp=drive_link',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'cocurricular', label: 'Co-curricular' },
  { id: 'contact', label: 'Contact' },
]
