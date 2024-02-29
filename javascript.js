document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const responseDiv = document.getElementById('response');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const formDataObject = Object.fromEntries(formData.entries());

      console.log(formDataObject);
      responseDiv.textContent = 'Your message has been sent successfully!';
      contactForm.reset();
    });
});