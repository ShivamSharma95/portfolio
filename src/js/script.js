// Simple form submission alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for your message!');
  this.reset();
});
