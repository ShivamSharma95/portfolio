// Simple form submission alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for your message!');
  this.reset();
});
// Simple smooth scroll for navbar links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
