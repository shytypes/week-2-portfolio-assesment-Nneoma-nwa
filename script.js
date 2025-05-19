document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const displayData = document.getElementById('displayData');
  const submissionResult = document.getElementById('submissionResult');
  const newMessageBtn = document.getElementById('newMessage');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById('firstName').value.trim(),
      secondName: document.getElementById('secondName').value.trim(),
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('message').value.trim()
    };

    // Validate input
    if (!formData.firstName || !formData.secondName || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    displayData.innerHTML = `
      <p><strong>First Name:</strong> ${formData.firstName}</p>
      <p><strong>Second Name:</strong> ${formData.secondName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `;

    contactForm.classList.add('hidden');
    submissionResult.classList.remove('hidden');
    submissionResult.scrollIntoView({ behavior: 'smooth' });
  });

  newMessageBtn.addEventListener('click', function () {
    contactForm.reset();
    contactForm.classList.remove('hidden');
    submissionResult.classList.add('hidden');
    contactForm.scrollIntoView({ behavior: 'smooth' });
  });
});