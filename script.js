
// Smooth scroll for nav links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

const toggleBtn = document.getElementById('menu-toggle');
const navLinksToggle = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinksToggle.classList.toggle('active');
});


// Add dynamic year in footer
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} Akhil Balu. All rights reserved.`;

// Animate skill logos on scroll
const skillLogos = document.querySelectorAll(".skills-logos img");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-skill");
    }
  });
}, {
  threshold: 0.3
});

skillLogos.forEach(img => observer.observe(img));

const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.className = "scroll-top";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Contact section form validation
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const email = contactForm.querySelector("input[type='email']").value;
    const message = contactForm.querySelector("textarea").value;
    if (!email || !message) {
      e.preventDefault();
      alert("Please fill in all required fields.");
    }
  });
}
