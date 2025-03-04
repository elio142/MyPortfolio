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
      "data:image/jpeg;base64,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",
    description:
      " A clean and responsive portfolio website showcasing my projects, skills, and contact information. Designed for a seamless user experience with an intuitive layout and modern styling.",
    tags: ["Html", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/elio142/first-project.git",
      demo: "https://demo-link.com",
    },
  },
  {
    title: "todo liste",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEW7u7v///8bGxvf39/b29ve3t64uLjn5+eNjY3S0tLi4uLAwMAWFhY0NDQAAAANDQ2ioqJzc3PKysomJiYrKyslJSU5OTmXl5eFhYV/f39oaGgXFxdCQkKrq6syMjKdnZ1NTU13d3dLS0tgYGBZWVny8vI5DCd8AAAFBUlEQVR4nO2di46qOhhGGUBUWspFuUpVBN//FU9RnJ2c7URhd1qo30ocwdHEla/9qdKKZQEAAAAAAAAAAAAAAAAAAAAAAAAALBEiD90qzyGbWBYb3S7PIRUL5cAukW6Zp5AqtOVA61y3zFMGQ3q7HQRiQ9z6UMR+eNcXO4f7/WGphvQcine4z47HjNr77ECrsikrFmwKKtzDpiyPzKaHYnP8OfF5G7JraDO3jqvWYbQrQnrpyLmOeX0mNbWZde6iDavFQ/znRj1zQx6xktdx2xacnQsRKOOMWYxS5jHGIkZZdPT6XYst1XBT8+YSt1XclBdhKB5hdsT6+5hXYoN2De93o6W2Us7ctOwNG+ZV5d3wlteQ4YHlF6/fXWyGvUdxiauqCZl7M/RYWJzYwepEP+R2Klpv51F2KhbaD2klDg3nY51lF0rrM70/wjoeBb3t6XRqmR0GEe9+jHDmhn+Oh70c/X6EsdsBUATcP+vAGP1RcO6GEpixIZVDOFfDeB/I4Xiep6G3/pKFO8+PTxINtzDUw2C4Wl+d69q/vpAg2y+f+MRdoGFOiJcknL8wTFzPc8lXskBDJ3Hd7XVNXhh6ibtyr2SJhjKYt+HqFfceunKf/nO9AEPzM4Th8g39O84I/JX/eNUS+qG7dtbrqz8qM/frurqK1z2GCfM2TKyEeMQbaehuPWtrPdr5vA2d9b29+SMgi2qlU/j/6BSGmoAhDBdjOKaG/lVLfdRSrcAQhmMNb5NulE69UWzIG8/ySFz+vtg3j3GpM2pIOnVcSord5hRFdph7CtzuqM2QFPs8ivjuUBhsKCKMjDfkqW20IRcZUsMNuQ5Ddzwra/XY9JHhgyHD1GzDSE8rVWfYHw+NznB3Mt3wfjwMl1FLyZRauss1GSrL8CMMOd/BUCYwlGxY7nUZvpyp8DcOcUbPVNBoaH6GKg0jow2b3ScYmt1KY21jmtWYeSYDU2ppbHwrheEvoNiwMr7SCEPO+d5ww76VlsoNJ5RSnzwm+o2opdVuE0XRXoOhsgyHUZu5hu2+P39otqHpGXb7qmqrdCGGqymGQZDaB1uD4fNVBu9+xn//+9IuyIJdqsNwCpNaaZBle6MNzzCUDwwlG9ZHXYaTzuN/b75fSwNthqoy7HZZndqUmmtY3jKkmbmfDx+GCpfuw1C24V6XYV8bR9ZSMS4dX0v1GZqfIQxhCMMBjYaqvi9Fhr+AHkOVPykFQxguxvCfaumIdU93w/Bieobh+aRAbUC9YbATGZ7UrUBUPs8bhtLRY6ihH076vnTSuiddhgozzIw3DHY2DKWifK4+DKUzGG4nFNMp554+JsMOhhLRZKjwgi2aDLkCtQHFhpubIeu48pG3qnHpYNiqN1SWYfoxhgrUBmD4O4Ym19Ihw0h5Pxz/K1GTfnOP5NoMpzBljvCyDP+plSpQG1BsOGRYmW9o7hE/T/vJ+joM/6mWjjj3pM9wCtNq6ZIMp/bDm6ECtQEYfrThdpJhcBSGsXrDfh2T44z7+2cN/6haqslQBiMMF9JKpxhuPiDDrDcsZ2aYlHEsy9C+HfFnZ5jn8asrso0zbGZmSPKyff2sMaO2ufXDa7J9frW8KYbZHDN8kzdb6TE9zK4fyjO0SNd2l2OtcOmacsOqbNq6VnmNAW+7TSTB33nfUdnEVaX2qrM8ksVbTY/3KGykAAAAAAAAAAAAAAAAAAAAAAAAAACv+A9AI+ZURAJmjQAAAABJRU5ErkJggg==",
    description:
      "A simple, interactive to-do list app that allows users to add, edit, and delete tasks. It features a task counter to display the number of tasks left and includes a smooth UI for task management.",
    tags: ["Html", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/elio142/todo_liste.git",
      demo: "https://elio142.github.io/todo_liste/",
    },
  },
  {
    title: "E-commerce Platform",
    image: "data:image/jpeg;base64,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",
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
    image: "data:image/jpeg;base64,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",
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
    <a href="${project.links.demo}" target="_blank" class="project-link demo">
       <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48"/></svg>
        Live Demo
    </a>
        </div>
    </div>
`
  )
  .join("");

// Initialize phone input with intl-tel-input
const phoneInput = document.querySelector("#phone");

if (phoneInput) {
  const iti = window.intlTelInput(phoneInput, {
    preferredCountries: ["lb", "fr", "us", "sa"],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    initialCountry: "lb",
    separateDialCode: true,
    nationalMode: false,
  });

  function validatePhoneNumber() {
    const phoneNumber = phoneInput.value.trim();
    const isValid = iti.isValidNumber();
    const errorMessage = document.getElementById("phone-error");

    if (phoneNumber === "") {
      errorMessage.textContent = "";
      phoneInput.style.borderColor = "";
    } else if (isValid) {
      errorMessage.textContent = "";
      phoneInput.style.borderColor = "";
    } else {
      errorMessage.textContent = "Please enter a valid phone number.";
      phoneInput.style.borderColor = "red";
      return false;
    }
    return true;
  }

  phoneInput.addEventListener("input", validatePhoneNumber);
}

// Live validation for email input
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

emailInput.addEventListener("input", function() {
  if (emailInput.value.trim() === "") {
    emailError.textContent = "";
    emailInput.style.borderColor = "";
  }
});

// Word count validation for message textarea
function countWords() {
  const textarea = document.getElementById("message");
  const wordCountDisplay = document.querySelector(".word-count");
  const errorDisplay = document.getElementById("word-error");

  let words = textarea.value.trim().split(/\s+/).filter(word => word.length > 0);
  let wordCount = words.length;

  wordCountDisplay.textContent = `${wordCount}/300 words`;

  if (wordCount > 300) {
    errorDisplay.textContent = "Word limit exceeded!";
    textarea.style.borderColor = "red";
    return false;
  } else if (wordCount === 0) {
    errorDisplay.textContent = "Message cannot be empty.";
    textarea.style.borderColor = "red";
    return false;
  } else {
    errorDisplay.textContent = "";
    textarea.style.borderColor = "";
  }
  return true;
}

// Function to reset form fields
function resetForm() {
  document.getElementById("contact-form").reset();
  document.querySelector(".word-count").textContent = "0/300 words";
  document.getElementById("word-error").textContent = "";
  document.getElementById("name").style.borderColor = "";
  document.getElementById("email").style.borderColor = "";
  document.getElementById("phone").style.borderColor = "";
  document.getElementById("message").style.borderColor = "";
}

// Validate form before submission
function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  // Validate Name
  const nameInput = document.getElementById("name");
  let nameError = document.getElementById("name-error");
  if (!nameError) {
    nameError = document.createElement("span");
    nameError.id = "name-error";
    nameError.className = "error-message";
    nameInput.parentNode.appendChild(nameError);
  }

  const nameValue = nameInput.value.trim();
  if (nameValue.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    nameError.style.color = "red";
    nameInput.style.borderColor = "red";
    isValid = false;
  } else {
    nameError.textContent = "";
    nameInput.style.borderColor = "";
  }

  // Validate Email
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;
  if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address ending with .com.";
    emailInput.style.borderColor = "red";
    isValid = false;
  } else {
    emailError.textContent = "";
    emailInput.style.borderColor = "";
  }

  // Validate Phone Number
  if (phoneInput && !validatePhoneNumber()) {
    isValid = false;
  }

  // Validate Message
  if (!countWords()) {
    isValid = false;
  }

  if (isValid) {
    sendEmail();
  }
}

// Loading effect during email sending
function showLoading() {
  const sendBtn = document.getElementById("send-btn");
  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";
}

function hideLoading() {
  const sendBtn = document.getElementById("send-btn");
  sendBtn.disabled = false;
  sendBtn.textContent = "Send Message";
}

// Send email function using EmailJS
const sendEmail = async () => {
  showLoading();
  
  const url = "https://api.emailjs.com/api/v1.0/email/send";
  const data = {
    service_id: "service_5p2nj9m",
    template_id: "elio123",
    user_id: "kLGuKHDTc--RzYINt",
    template_params: {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      message: document.getElementById("message").value.trim(),
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Your message has been sent successfully!");
      resetForm();
    } else {
      alert("Failed to send the message. Please try again.");
    }
  } catch (error) {
    alert("An error occurred while sending the message. Please try again.");
  } finally {
    hideLoading();
  }
};

// Attach validation and event listeners
document.getElementById("contact-form").addEventListener("submit", validateForm);
document.getElementById("name").addEventListener("input", function() {
  const nameInput = document.getElementById("name");
  let nameError = document.getElementById("name-error");

  if (!nameError) {
    nameError = document.createElement("span");
    nameError.id = "name-error";
    nameError.className = "error-message";
    nameInput.parentNode.appendChild(nameError);
  }

  const nameValue = nameInput.value.trim();
  if (nameValue.length < 3 && nameValue !== "") {
    nameError.textContent = "Name must be at least 3 characters long.";
    nameError.style.color = "red";
    nameInput.style.borderColor = "red";
  } else {
    nameError.textContent = "";
    nameInput.style.borderColor = "";
  }
});
document.getElementById("message").addEventListener("input", countWords);
