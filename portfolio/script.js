  // Sticky Header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });
        
        // Mobile Menu Toggle
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');
        
        menuIcon.addEventListener('click', function() {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('fa-times');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
                menuIcon.classList.remove('fa-times');
            });
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
        
        // Animation on Scroll
        window.addEventListener('scroll', function() {
            const skillsBoxes = document.querySelectorAll('.skills-box');
            const projectBoxes = document.querySelectorAll('.project-box');
            
            skillsBoxes.forEach(box => {
                const boxPosition = box.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(boxPosition < screenPosition) {
                    box.style.opacity = '1';
                    box.style.transform = 'translateY(0)';
                }
            });
            
            projectBoxes.forEach(box => {
                const boxPosition = box.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(boxPosition < screenPosition) {
                    box.style.opacity = '1';
                    box.style.transform = 'translateY(0)';
                }
            });
        });
        
        // Initialize elements with opacity 0 for animation
        document.addEventListener('DOMContentLoaded', function() {
            const skillsBoxes = document.querySelectorAll('.skills-box');
            const projectBoxes = document.querySelectorAll('.project-box');
            
            skillsBoxes.forEach(box => {
                box.style.opacity = '0';
                box.style.transform = 'translateY(50px)';
                box.style.transition = 'all 0.5s ease';
            });
            
            projectBoxes.forEach(box => {
                box.style.opacity = '0';
                box.style.transform = 'translateY(50px)';
                box.style.transition = 'all 0.5s ease';
            });
        });