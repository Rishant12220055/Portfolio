import React from 'react';

import portfolioImg from '@/../public/images/portfolio.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'B Tech in Computer Science and Engineering',
    location: 'Lovely Professional University',
    description: "Currently pursuing Bachelor's degree in Computer Science and Engineering (2022-2026)",
    icon: React.createElement(BookIcon),
    date: '2022 - 2026',
  },
  {
    title: 'Higher Secondary School in Science',
    location: 'DAV Kapil Dev Public School',
    description: 'Completed higher secondary education with focus on Science',
    icon: React.createElement(BookIcon),
    date: '2020 - 2022',
  },
  {
    title: 'MERN Stack E-commerce Project',
    location: 'Personal Project',
    description: 'Developed a fully functional eCommerce website using MongoDB, Express.js, React, and Node.js, improving user experience and implementing modern web development practices.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '2023',
  },
  {
    title: 'Agro Buddy Project',
    location: 'AI/ML Project',
    description: 'Built an AI/ML-based platform helping farmers detect crop diseases through image analysis and predict crop prices, achieving 80% accuracy in disease detection.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '2023',
  },
  {
    title: 'Gemini Clone Project',
    location: 'PHP Development',
    description: 'Cloned and customized the Gemini platform interface using PHP, enhancing user accessibility and interaction with seamless API integration.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '2023',
  },
] as const;

export const projectsData = [
  {
    title: 'MERN Stack E-commerce Website',
    description: 'Developed and deployed a fully functional eCommerce website using the MERN stack, implementing modern web development practices and improving user experience.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    imageUrl: portfolioImg,
    link: '#',
  },
  {
    title: 'Agro Buddy - AI/ML Platform',
    description: 'Built and integrated an AI/ML-based crop disease detection tool, helping farmers identify issues with 80% accuracy and predict crop prices.',
    tags: ['Python', 'Machine Learning', 'Image Processing', 'AI', 'Web Development'],
    imageUrl: portfolioImg,
    link: '#',
  },
  {
    title: 'Gemini Platform Clone',
    description: 'Successfully cloned and customized the Gemini platform interface using PHP, enhancing user accessibility and interaction with seamless API integration.',
    tags: ['PHP', 'API Integration', 'Web Development', 'UI/UX'],
    imageUrl: portfolioImg,
    link: '#',
  },
] as const;

export const skillsData = [
  ['Java', '/svgs/java.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['Python', '/svgs/python.svg'],
  ['React', '/svgs/react.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['Critical Thinking', '/svgs/etc.svg'],
  ['Problem Solving', '/svgs/etc.svg'],
  ['Communication', '/svgs/etc.svg'],
  ['Team Work', '/svgs/etc.svg'],
] as const;
