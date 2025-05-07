const form = document.getElementById('contact-form');
const submittedDataDiv = document.getElementById('submitted-data');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form refresh

  // Show thank-you message
submittedDataDiv.innerHTML = `
    <p style="font-size: 1.1rem; color: #00bcd4;">
    Thank you for contacting me, I'll be in touch soon.
    </p>
`;

  form.reset(); // optionally clear the form
});