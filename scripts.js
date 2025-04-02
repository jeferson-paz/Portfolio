// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            if (!navbarToggler.classList.contains('collapsed')) {
                navbarToggler.click();
            }
        }
    });
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animate elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.fade-in-up');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.fade-in-up').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Project card tilt effect
if (document.querySelectorAll('.project-card').length > 0) {
    VanillaTilt.init(document.querySelectorAll('.project-card'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
    });
}

// Mostrar mais projetos
document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.querySelector('#show-more-projects');
    const projectItems = document.querySelectorAll('.project-item');
    
    if (showMoreBtn && projectItems.length > 3) {
        let showingAll = false;
        
        showMoreBtn.addEventListener('click', function() {
            showingAll = !showingAll;
            
            projectItems.forEach((item, index) => {
                if (index >= 3) {
                    if (showingAll) {
                        item.classList.remove('d-none');
                        item.classList.add('fade-in-up');
                    } else {
                        item.classList.add('d-none');
                        item.classList.remove('fade-in-up');
                    }
                }
            });
            
            this.textContent = showingAll ? 'Mostrar Menos' : 'Ver Mais Projetos';
            animateOnScroll();
        });
    }
});

// Modo Escuro
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        
        // Verifica preferência do usuário
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedMode = localStorage.getItem('darkMode');
        
        if (savedMode === 'dark' || (prefersDark && savedMode !== 'light')) {
            enableDarkMode();
        }
        
        darkModeToggle.addEventListener('click', function() {
            if (document.body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
        
        function enableDarkMode() {
            document.body.classList.add('dark-mode');
            if (icon) icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'dark');
        }
        
        function disableDarkMode() {
            document.body.classList.remove('dark-mode');
            if (icon) icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', 'light');
        }
    }
});

// Efeito de digitação no título
function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';
    
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

// Aplicar efeito de digitação
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    typeWriter(heroTitle, text, 100);
}

// Efeito hover nos cards de tecnologia
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Tooltips para as tecnologias
const techTooltips = {
    'Python': 'Análise de dados, automação e machine learning',
    'Power BI': 'Visualização de dados e business intelligence',
    'SQL': 'Banco de dados e consultas complexas',
    'Pandas': 'Manipulação e análise de dados',
    'TensorFlow': 'Machine learning e deep learning',
    'Git': 'Controle de versão e colaboração'
};

techItems.forEach(item => {
    const techName = item.querySelector('h5').textContent;
    item.setAttribute('title', techTooltips[techName] || techName);
    item.style.cursor = 'pointer';
    
    new bootstrap.Tooltip(item, {
        placement: 'top',
        trigger: 'hover focus'
    });
});

// Run animation check on load and scroll
window.addEventListener('load', function() {
    animateOnScroll();
    
    // Inicializa todos os tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

window.addEventListener('scroll', animateOnScroll);
