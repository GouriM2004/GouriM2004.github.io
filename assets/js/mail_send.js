// EmailJS contact form handler
// Make sure to include the EmailJS SDK in your HTML and initialize with your user ID
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
// <script>emailjs.init('30CEduODc1dL864hg');</script>

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Replace these with your EmailJS service/template IDs
    const serviceID = "service_do3jink";
    const templateID = "template_486cnzf";

    emailjs.sendForm(serviceID, templateID, form).then(
      function () {
        alert("Message sent successfully!");
        form.reset();
      },
      function (error) {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS error:", error);
      }
    );
  });
});
