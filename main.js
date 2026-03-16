document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const toggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("nav__links--open");
    });
  }

  const setupMailtoForm = (formId, emailId, messageId) => {
    const form = document.getElementById(formId);
    const emailInput = document.getElementById(emailId);
    const messageInput = document.getElementById(messageId);

    if (!form || !emailInput || !messageInput) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
      if (!email || !message) return;

      const subject = encodeURIComponent("New portfolio contact");
      const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);

      window.location.href = `mailto:abhisheksable.in@gmail.com?subject=${subject}&body=${body}`;
    });
  };

  setupMailtoForm("contact-form", "contact-email", "contact-message");
  setupMailtoForm(
    "contact-form-profile",
    "contact-email-profile",
    "contact-message-profile"
  );
});
