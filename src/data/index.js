import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  docker,
  admindashboard,
  blog,
  coffeeorder,
  fitnessweb,
  expenseTracker,
  scrollInteraction,
  sunshinegame,
  twitter,
  threads
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Game Frontend Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer | Game Frontend Developer",
    company_name: "Blinkmoon Games",
    icon: '',
    iconBg: "#383E56",
    date: "February 2023 -September 2023",
    points: [
      "Developed 'Bravelings' main project E-commerce website for game items using JavaScript, HTML5 and CSS.",
      "Implemented the backend with NodeJS that provides Rest APIs for game characters, users, inventory etc. ",
      "Created interactive single UI page application (SPAs) to introduce main game using ReactJS and SCSS (Styled-component).",
      "rafted Ul elements for an Al Game HUD using Adobe Illustrator CS6.",
      "Utilized Unreal Engine 4 (UE4) to develop the Al-based game UI, including features like game reports and settings.",
      "Collaborate with art, design, and engineering to design and implement gameplay features."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Prospace",
    icon: '',
    iconBg: "#E6DEDD",
    date: "July 2022 - July 2023",
    points: [
      "Built a client-server web application management platform with using React with Next, TypeScript, and Styled-components.",
      "Integrated third-party authentication and developed login/signup functionalities using JSON Web Tokens (JWT).",
      "Designed and implemented RestAPIs based on CRUD operations to perform POST, GET, PUT, DELETE actions. ",
      "Developed front-end side with the user interface of application using React with Next, TypeScript, Storybook.",
      "Converted basic HTML, CSS, JavaScript code to TypeScript, NextJS, CSS Modules, Storybook code for website. ",
      "Implemented agile processes by using a scrum methodolgy with weekly sprints and daily stand-ups, reducing development time by 30% and increasing QA by 25%. Used GitHub, Bitbucket, and Jira to manage user stories/bugs.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "G.E.N Trading Ltd",
    icon: '',
    iconBg: "#383E56",
    date: "August 2020 - January 2023",
    points: [
      "Maintained and optimized existing responsive web applications on WordPress using JavaScript, HTML5, and CSS.",
      "Designed mock-ups and developed storyboards for web application planning using Figma.",
      "Employed a diverse range of graphics and animations to create a user-centric website experience."
    ],
  },
  {
    title: "Web Developer | Web Designer",
    company_name: "Sungchang FnG Ltd",
    icon: '',
    iconBg: "#E6DEDD",
    date: "February 2017 - April 2019",
    points: [
      "Developed an e-commerce website using HTML, CSS, and Vanilla JavaScript, resulting in enhanced online sales.",
      "Oversaw and optimized existing responsive web applications for improved user experience.",
      "Crafted UI elements and promotional materials for the website using Adobe Illustrator CS6.",
      "Achieved 9% increase in website performance by cutting web loading time by 4 seconds."
    ],
  },
];


const projects = [
  {
    name: "Threads - Social Media Web App",
    description:
      "This project features a user management system built on MongoDB and Clerk for user pool integration. The system ensures secure registration, login, and profile management, highlighting robust database design, authentication, and access control capabilities. It stands as a testament to the successful execution of a scalable user data solution.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Clerk",
        color: "pink-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/Kimmyyoung/Threads",
    website_link: "https://threads-liard-theta.vercel.app/"
  },
  {
    name: "Workout Web (API)",
    description:
      "A Scroll Interaction Web project is a web application that employs custom JavaScript code to create dynamic and engaging user experiences as users scroll down a webpage, without relying on external libraries or frameworks. It leverages native web technologies to enhance interactivity and user engagement through scroll-triggered animations, transitions, or content changes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "pink-text-gradient",
      },
    ],
    image: fitnessweb,
    source_code_link: "https://github.com/Kimmyyoung/Fitness_Web",
    website_link: "https://fitness-hykim.netlify.app/"
  },
  {
    name: "Admin Dashboard",
    description:
      "Web-based interface that allows administrators to efficiently manage and monitor various aspects of a system, application, or organization, providing quick access to key data and tools for streamlined control and decision-making.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "react-libraries",
        color: "pink-text-gradient",
      },
    ],
    image: admindashboard,
    source_code_link: "https://github.com/Kimmyyoung/Admin_Dashboard",
    website_link: "https://admindashboard-hykim.netlify.app/"
  },
  {
    name: "Scroll Interaction Web (No library)",
    description:
      "A Scroll Interaction Web project is a web application that employs custom JavaScript code to create dynamic and engaging user experiences as users scroll down a webpage, without relying on external libraries or frameworks. It leverages native web technologies to enhance interactivity and user engagement through scroll-triggered animations, transitions, or content changes.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: scrollInteraction,
    source_code_link: "https://github.com/Kimmyyoung/Joker-Movie-Detail",
    website_link: "https://www.kimstudio.space/"
  },
 
  {
    name: "Coffee Order App",
    description:
      "A Coffee Order App built with React Native is a mobile application that allows users to browse a menu, customize coffee orders, and place them. It leverages the React Native framework to provide a native-like user experience on both iOS and Android platforms.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: coffeeorder,
    source_code_link: "https://github.com/Kimmyyoung/Coffee_App",
    website_link: "https://github.com/Kimmyyoung/Coffee_App"
  },
  {
    name: "AI SIM Game",
    description:
      "An AI SIM Game created with Unreal Engine 4 is a video game that employs the Unreal Engine to simulate a world where artificial intelligence-driven characters interact, learn, and evolve, providing players with immersive and dynamic gameplay experiences.",
    tags: [
      {
        name: "unreal-engine4",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe Illustrator CS6",
        color: "green-text-gradient",
      },
    ],
    image: sunshinegame,
    source_code_link: "",
    website_link: "https://youtu.be/qIGL5kgZbOk?si=XYFSzmZmBFNoOBv3"
  },
  {
    name: "Clone Coding WebApp",
    description:
      "A Twitter project implemented with React and Firebase is a web application that replicates some features of the Twitter platform. It utilizes React for the frontend to create a dynamic user interface and Firebase for the backend to handle real-time data storage and authentication. Users can post tweets, follow others, and engage with a social media-like experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/Kimmyyoung/Twitter",
    website_link: "https://kimmyyoung.github.io/Twitter/"
  },
  {
    name: "Expense Tracker",
    description:
      "An Expense Tracker project built with React is a web application that helps users manage their finances by allowing them to record and categorize their expenses. It uses React to create a user-friendly interface for adding, editing, and visualizing expenses, providing a convenient way to monitor and analyze one's spending habits.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-component",
        color: "green-text-gradient",
      },
    ],
    image: expenseTracker,
    source_code_link: "https://github.com/Kimmyyoung/Expense-Tracker",
    website_link: ""
  },
  {
    name: "Blog",
    description:
      "A blog project created by a full-stack developer typically involves building a web application that allows users to create, publish, and read blog posts. As a full-stack developer, you would have implemented both the frontend and backend components, including designing the database to store blog content and managing the server infrastructure. This project often includes features such as user authentication, post management, and a user-friendly interface for writing and reading blog articles.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Kimmyyoung/Kims-Blog",
    website_link: "http://www.spacekimmy.com/"
  },
];

export { services, technologies, experiences, projects };