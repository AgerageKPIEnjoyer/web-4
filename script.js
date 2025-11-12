document.addEventListener('DOMContentLoaded', function() {      
      const navToggle = document.querySelector('.nav-toggle');
      const nav = document.querySelector('.nav');     
      
      const navLinks = document.querySelectorAll('.nav a');     
      navToggle.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
      });
     
      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {          
          nav.classList.remove('nav-active');
        });
      });      
    });