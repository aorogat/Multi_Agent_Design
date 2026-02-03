// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // Set active state for dropdown menu items based on current page
    const currentPath = window.location.pathname;
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    
    dropdownLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath.includes(linkPath) || (currentPath.endsWith('/') && linkPath.includes('index.html'))) {
            link.classList.add('active');
        }
    });
    
    // Dropdown menu functionality - enhanced for GitHub Pages compatibility
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (trigger && menu) {
            // Show dropdown on hover (desktop) - backup to CSS
            dropdown.addEventListener('mouseenter', function() {
                if (window.innerWidth >= 768) {
                    dropdown.classList.add('active');
                }
            });
            
            dropdown.addEventListener('mouseleave', function() {
                if (window.innerWidth >= 768) {
                    setTimeout(() => {
                        if (!dropdown.matches(':hover')) {
                            dropdown.classList.remove('active');
                        }
                    }, 150);
                }
            });
            
            // Toggle dropdown on click (mobile and desktop)
            // Use a separate handler that doesn't prevent navigation
            let clickTimeout;
            trigger.addEventListener('click', function(e) {
                // On mobile, prevent navigation and toggle dropdown
                if (window.innerWidth < 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                } else {
                    // On desktop, allow navigation but also show dropdown briefly
                    dropdown.classList.add('active');
                    clearTimeout(clickTimeout);
                    clickTimeout = setTimeout(() => {
                        dropdown.classList.remove('active');
                    }, 2000);
                }
            });
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const clickedInsideDropdown = event.target.closest('.dropdown');
        if (!clickedInsideDropdown) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

