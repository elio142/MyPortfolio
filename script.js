// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
  // Replace with your EmailJS public key
  emailjs.init("YOUR_PUBLIC_KEY");
});

// Skills Data
const skillsData = [
  {
    name: "HTML",
    image: "images/html-logo.webp",
  },
  {
    name: "CSS",
    image: "images/css-logo.webp",
  },
  {
    name: "JavaScript",
    image: "images/javascript-logo.webp",
  },
  {
    name: "Node.js",
    image: "images/node-logo.webp",
  },
  {
    name: "React.js",
    image: "images/react-logo.webp",
  },
];

// Projects Data

// Add more projects as needed
const projectsData = [
  {
    title: "first portfolio",
    image:
      "C:UserseliofOneDrivePicturesScreenshotsScreenshot 2025-03-01 135437.png",
    description:
      " A clean and responsive portfolio website showcasing my projects, skills, and contact information. Designed for a seamless user experience with an intuitive layout and modern styling.",
    tags: ["Html", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/username/netflix-clone",
      demo: "https://demo-link.com",
    },
  },
  {
    title: "todo liste",
    image: "images/chat-app.jpg",
    description:
      "A simple, interactive to-do list app that allows users to add, edit, and delete tasks. It features a task counter to display the number of tasks left and includes a smooth UI for task management.",
    tags: ["Html", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/username/chat-app",
      demo: "https://demo-link.com",
    },
  },
  {
    title: "E-commerce Platform",
    image: "images/ecommerce.jpg",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    links: {
      github: "https://github.com/username/ecommerce",
      demo: "https://demo-link.com",
    },
  },
  {
    title: "Weather Dashboard",
    image: "images/weather-dashboard.jpg",
    description:
      "An interactive weather dashboard with real-time weather data and forecasts using geolocation.",
    tags: ["JavaScript", "API", "Weather Data"],
    links: {
      github: "https://github.com/username/weather-dashboard",
      demo: "https://demo-link.com",
    },
  },
];

const projectsContainer = document.getElementById("projects-container");

projectsContainer.innerHTML = projectsData
  .map(
    (project) => `
    <div class="project-card">
        <img src="${project.image}" alt="${
      project.title
    }" class="project-image" />
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
            ${project.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join(" ")}
        </div>
        <div class="project-links">
           <a href="https://github.com/username/project" target="_blank" class="project-link github">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.17-3.37-1.17-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.52 1.04 1.52 1.04.9 1.54 2.36 1.1 2.93.84.09-.66.35-1.1.64-1.36-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.5.32 1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.68-4.57 4.92.36.31.69.93.69 1.88 0 1.36-.01 2.45-.01 2.79 0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10Z"/></svg>
        Code
    </a>
    <a href="https://demo-link.com" target="_blank" class="project-link demo">
       <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48"/></svg>
        Live Demo
    </a>
        </div>
    </div>
`
  )
  .join("");

// Initialize phone input
const phoneInput = document.querySelector("#phone");
if (phoneInput) {
  window.intlTelInput(phoneInput, {
    preferredCountries: ["us", "gb"],
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  });
}

// Form validation and submission will be added later
