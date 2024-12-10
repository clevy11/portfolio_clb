import { Code2, Database, Home, Brain, Server, Smartphone } from "lucide-react";

export const CONTACT_INFO = {
  email: 'Buntulevycaleb@gmail.com',
  github: 'https://github.com/clevy11',
  linkedin: 'https://www.linkedin.com/in/caleb-levy-buntu-66a308321'
};

export const SKILLS = [
  "Java",
  "C#",
  "React",
  "Next.js",
  "Flutter",
  "Machine Learning"
];

export const PROJECTS = [
  {
    title: "Court Management System",
    description: "A comprehensive web application built with C# for efficient court case management and scheduling.",
    icon: Server,
    tech: ["C#", ".NET", "SQL Server"]
  },
  {
    title: "Smart Home Mobile App",
    description: "IoT-based Flutter application for monitoring home sensors, including light and vibration detection.",
    icon: Home,
    tech: ["Flutter", "IoT", "Firebase"]
  },
  {
    title: "Rice Factory MIS",
    description: "Management Information System for MS Rice Factory, streamlining operations and inventory management.",
    icon: Database,
    tech: ["Full Stack", "Database Design"]
  },
  {
    title: "Machine Learning Projects",
    description: "Developed ML models for breast cancer detection and police criminality prediction using advanced algorithms.",
    icon: Brain,
    tech: ["Python", "ML", "Data Science"]
  },
  {
    title: "Web Development",
    description: "Expert in creating responsive, modern web applications using React and Next.js frameworks.",
    icon: Code2,
    tech: ["React", "Next.js", "TypeScript"]
  },
  {
    title: "Mobile Development",
    description: "Specialized in cross-platform mobile app development using Flutter framework.",
    icon: Smartphone,
    tech: ["Flutter", "Dart", "Mobile UI"]
  }
];
