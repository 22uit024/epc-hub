// Engineering Project Center - JavaScript Functionality

// Application data
const appData = {
  "workshops": [
    {
      "id": 1,
      "title": "IoT Development Bootcamp",
      "date": "2025-10-15",
      "duration": "4 weeks",
      "description": "Comprehensive training on Internet of Things development including Arduino, Raspberry Pi, and cloud integration.",
      "fees": 15000,
      "topics": ["Arduino Programming", "Sensor Integration", "Cloud Connectivity", "Mobile App Development"]
    },
    {
      "id": 2,
      "title": "3D Modeling & Printing Workshop",
      "date": "2025-10-22",
      "duration": "3 weeks", 
      "description": "Master 3D modeling software like AutoCAD, SolidWorks and learn 3D printing techniques.",
      "fees": 12000,
      "topics": ["AutoCAD Basics", "SolidWorks Advanced", "3D Printing Technology", "Prototyping"]
    },
    {
      "id": 3,
      "title": "Automation & Robotics",
      "date": "2025-11-05",
      "duration": "5 weeks",
      "description": "Learn industrial automation, PLC programming, and robotics development.",
      "fees": 18000,
      "topics": ["PLC Programming", "Industrial Automation", "Robotics Development", "Control Systems"]
    },
    {
      "id": 4,
      "title": "Full Stack Web Development",
      "date": "2025-11-12",
      "duration": "6 weeks",
      "description": "Complete MERN stack development course for building modern web applications.",
      "fees": 20000,
      "topics": ["MongoDB", "Express.js", "React.js", "Node.js"]
    }
  ],
  "internships": [
    {
      "id": 1,
      "role": "IoT Developer Intern",
      "duration": "3 months",
      "eligibility": "ECE/CSE students (Final year)",
      "description": "Work on real IoT projects including smart home automation and industrial monitoring systems.",
      "stipend": 8000,
      "skills": ["Arduino", "Python", "C++", "Circuit Design"]
    },
    {
      "id": 2,
      "role": "Mechanical Design Intern", 
      "duration": "4 months",
      "eligibility": "Mechanical Engineering students",
      "description": "Design and prototype mechanical components using CAD software and 3D printing.",
      "stipend": 7000,
      "skills": ["SolidWorks", "AutoCAD", "3D Printing", "Material Science"]
    },
    {
      "id": 3,
      "role": "Full Stack Developer Intern",
      "duration": "6 months", 
      "eligibility": "CSE/IT students (2nd year onwards)",
      "description": "Build complete web applications using modern frameworks and databases.",
      "stipend": 10000,
      "skills": ["React", "Node.js", "MongoDB", "Express.js"]
    },
    {
      "id": 4,
      "role": "Automation Engineer Intern",
      "duration": "4 months",
      "eligibility": "EEE/ECE/Mechanical students",
      "description": "Develop automated systems for manufacturing and process control.",
      "stipend": 9000,
      "skills": ["PLC Programming", "SCADA", "Industrial Automation", "Control Systems"]
    }
  ],
  "portfolio": [
    {
      "id": 1,
      "title": "Smart Home Automation System",
      "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "description": "Complete IoT-based home automation with mobile app control, voice commands, and energy monitoring.",
      "tags": ["IoT", "Mobile App", "Arduino", "Cloud"],
      "client": "Residential Complex",
      "duration": "3 months"
    },
    {
      "id": 2,
      "title": "Industrial Robotic Arm",
      "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800", 
      "description": "6-axis robotic arm for precision manufacturing with computer vision integration.",
      "tags": ["Robotics", "Automation", "Computer Vision", "Manufacturing"],
      "client": "Manufacturing Company",
      "duration": "6 months"
    },
    {
      "id": 3,
      "title": "E-Commerce Mobile Platform",
      "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      "description": "Full-featured mobile commerce app with payment integration and real-time inventory management.",
      "tags": ["Mobile App", "React Native", "Node.js", "Payment Gateway"],
      "client": "Retail Startup",
      "duration": "4 months"
    },
    {
      "id": 4,
      "title": "Water Quality Monitoring System", 
      "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
      "description": "IoT sensors network for continuous water quality monitoring with data analytics dashboard.",
      "tags": ["IoT", "Environmental", "Data Analytics", "Sensors"],
      "client": "Municipal Corporation",
      "duration": "5 months"
    },
    {
      "id": 5,
      "title": "Autonomous Drone Delivery",
      "image": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
      "description": "GPS-guided autonomous drone for last-mile delivery with obstacle avoidance system.",
      "tags": ["Drone", "GPS", "Autonomous", "Delivery"],
      "client": "Logistics Company",
      "duration": "8 months"
    },
    {
      "id": 6,
      "title": "Smart Traffic Management",
      "image": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
      "description": "AI-powered traffic signal optimization system with real-time vehicle detection and flow analysis.",
      "tags": ["AI", "Traffic", "Computer Vision", "Smart City"],
      "client": "City Traffic Department", 
      "duration": "7 months"
    }
  ],
  "services": [
    {
      "id": 1,
      "name": "Model Making",
      "icon": "🏗️",
      "description": "Professional architectural and engineering scale models using advanced materials and 3D printing technology.",
      "features": ["Architectural Models", "Engineering Prototypes", "Industrial Scale Models", "3D Printed Components"]
    },
    {
      "id": 2,
      "name": "IoT Projects", 
      "icon": "🌐",
      "description": "End-to-end Internet of Things solutions from sensor integration to cloud-based analytics and mobile applications.",
      "features": ["Sensor Networks", "Cloud Integration", "Mobile Apps", "Data Analytics"]
    },
    {
      "id": 3,
      "name": "Mechanical Design",
      "icon": "⚙️", 
      "description": "Complete mechanical engineering design services including CAD modeling, simulation, and manufacturing support.",
      "features": ["CAD Design", "FEA Analysis", "Prototyping", "Manufacturing Support"]
    },
    {
      "id": 4,
      "name": "Automation Prototypes",
      "icon": "🤖",
      "description": "Custom automation solutions for industrial processes, including PLC programming and robotic systems.",
      "features": ["PLC Programming", "Robotic Systems", "Process Automation", "Control Panels"]
    },
    {
      "id": 5,
      "name": "3D Modeling",
      "icon": "📐",
      "description": "Professional 3D modeling and rendering services for product visualization, animation, and manufacturing.",
      "features": ["Product Visualization", "Technical Animation", "Rendering", "Virtual Prototyping"]
    }
  ],
  "achievements": [
    {
      "id": 1,
      "title": "Projects Completed",
      "count": 150,
      "icon": "🏆"
    },
    {
      "id": 2, 
      "title": "Happy Clients",
      "count": 120,
      "icon": "😊"
    },
    {
      "id": 3,
      "title": "Students Trained", 
      "count": 500,
      "icon": "🎓"
    },
    {
      "id": 4,
      "title": "Years Experience",
      "count": 8,
      "icon": "📅"
    }
  ],
  "whyChooseUs": [
    {
      "id": 1,
      "title": "Affordable Pricing",
      "description": "Competitive rates without compromising on quality. We offer flexible payment plans for students and startups.",
      "icon": "💰"
    },
    {
      "id": 2,
      "title": "Innovation Focused",
      "description": "Cutting-edge technology solutions using latest tools and frameworks. We stay updated with industry trends.",
      "icon": "💡"
    },
    {
      "id": 3,
      "title": "Expert Mentors", 
      "description": "Learn from industry professionals with years of experience in engineering and technology domains.",
      "icon": "👨‍🏫"
    },
    {
      "id": 4,
      "title": "Industry Recognition",
      "description": "Recognized by leading technology companies and educational institutions for our training excellence.",
      "icon": "🏅"
    },
    {
      "id": 5,
      "title": "Job Placement Support",
      "description": "Active placement assistance with our network of 100+ partner companies across various industries.", 
      "icon": "🤝"
    },
    {
      "id": 6,
      "title": "24/7 Support",
      "description": "Round-the-clock technical support and mentorship for all students and project clients.",
      "icon": "🕐"
    }
  ],
  "interviewPrep": [
    {
      "id": 1,
      "title": "Technical Interview Preparation",
      "description": "Mock technical interviews for engineering domains including coding, problem-solving, and system design.",
      "duration": "2 weeks",
      "sessions": 8
    },
    {
      "id": 2,
      "title": "Aptitude & Logical Reasoning",
      "description": "Comprehensive aptitude training covering quantitative, logical reasoning, and verbal sections.",
      "duration": "3 weeks", 
      "sessions": 12
    },
    {
      "id": 3,
      "title": "Resume Building Workshop",
      "description": "Professional resume writing, LinkedIn optimization, and portfolio development for engineering students.",
      "duration": "1 week",
      "sessions": 4
    },
    {
      "id": 4,
      "title": "Communication Skills",
      "description": "Enhance verbal and written communication skills specifically for technical interviews and workplace.",
      "duration": "2 weeks",
      "sessions": 10
    }
  ],
  "socialLinks": {
    "facebook": "https://facebook.com/engineeringprojectcenter",
    "twitter": "https://twitter.com/engprojectcenter", 
    "linkedin": "https://linkedin.com/company/engineering-project-center",
    "instagram": "https://instagram.com/engprojectcenter",
    "youtube": "https://youtube.com/engineeringprojectcenter",
    "whatsapp": "https://wa.me/919876543210"
  }
};

// Global variables
let navToggle, navMenu, messageContainer, messageContent;

// Initialize app when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initializeDOMElements();
    initializeNavigation();
    loadAllContent();
    initializeAnimations();
    initializeForms();
    setupSmoothScrolling();
    setupModalEventListeners();
    
    console.log('Engineering Project Center website loaded successfully!');
});

// Initialize DOM elements
function initializeDOMElements() {
    navToggle = document.getElementById('nav-toggle');
    navMenu = document.getElementById('nav-menu');
    messageContainer = document.getElementById('messageContainer');
    messageContent = document.getElementById('messageContent');
}

// Load all content
function loadAllContent() {
    loadServices();
    loadWorkshops();
    loadInternships();
    loadInterviewPrep();
    loadPortfolio();
    loadAchievements();
    loadWhyChooseUs();
    loadSocialLinks();
}

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// Setup modal event listeners
function setupModalEventListeners() {
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
    
    // Handle escape key to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal:not(.hidden)');
            openModals.forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
}

// Modal functionality
function openModal(modalId) {
    console.log('Opening modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        console.log('Modal opened successfully');
    } else {
        console.error('Modal not found:', modalId);
    }
}

function closeModal(modalId) {
    console.log('Closing modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Load services data
function loadServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = '';
    appData.services.forEach(service => {
        const serviceCard = createServiceCard(service);
        servicesGrid.appendChild(serviceCard);
    });
}

function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card fade-in-up';
    
    card.innerHTML = `
        <div class="service-card__icon">${service.icon}</div>
        <h3 class="service-card__title">${service.name}</h3>
        <p class="service-card__description">${service.description}</p>
        <ul class="service-card__features">
            ${service.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;
    
    return card;
}

// Load workshops data
function loadWorkshops() {
    const workshopsGrid = document.getElementById('workshops-grid');
    if (!workshopsGrid) return;
    
    workshopsGrid.innerHTML = '';
    appData.workshops.forEach(workshop => {
        const workshopCard = createProgramCard(workshop, 'workshop');
        workshopsGrid.appendChild(workshopCard);
    });
}

// Load internships data
function loadInternships() {
    const internshipsGrid = document.getElementById('internships-grid');
    if (!internshipsGrid) return;
    
    internshipsGrid.innerHTML = '';
    appData.internships.forEach(internship => {
        const internshipCard = createProgramCard(internship, 'internship');
        internshipsGrid.appendChild(internshipCard);
    });
}

// Load interview preparation data
function loadInterviewPrep() {
    const interviewPrepGrid = document.getElementById('interview-prep-grid');
    if (!interviewPrepGrid) return;
    
    interviewPrepGrid.innerHTML = '';
    appData.interviewPrep.forEach(program => {
        const prepCard = createProgramCard(program, 'interview-prep');
        interviewPrepGrid.appendChild(prepCard);
    });
}

function createProgramCard(program, type) {
    const card = document.createElement('div');
    card.className = 'program-card fade-in-up';
    
    let content = `
        <div class="program-card__header">
            <h4 class="program-card__title">${program.title || program.role}</h4>
    `;
    
    if (type === 'workshop') {
        content += `
            <div class="program-card__meta">
                <span>📅 ${formatDate(program.date)}</span>
                <span>⏱️ ${program.duration}</span>
            </div>
            </div>
            <p class="program-card__description">${program.description}</p>
            <div class="program-card__price">₹${program.fees.toLocaleString('en-IN')}</div>
            <div class="program-card__topics">
                ${program.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
            </div>
        `;
    } else if (type === 'internship') {
        content += `
            <div class="program-card__meta">
                <span>⏱️ ${program.duration}</span>
                <span>💰 ₹${program.stipend.toLocaleString('en-IN')}/month</span>
            </div>
            </div>
            <p class="program-card__description">${program.description}</p>
            <p><strong>Eligibility:</strong> ${program.eligibility}</p>
            <div class="program-card__topics">
                ${program.skills.map(skill => `<span class="topic-tag">${skill}</span>`).join('')}
            </div>
        `;
    } else if (type === 'interview-prep') {
        content += `
            <div class="program-card__meta">
                <span>⏱️ ${program.duration}</span>
                <span>📚 ${program.sessions} sessions</span>
            </div>
            </div>
            <p class="program-card__description">${program.description}</p>
        `;
    }
    
    card.innerHTML = content;
    return card;
}

// Load portfolio data
function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    appData.portfolio.forEach(project => {
        const portfolioCard = createPortfolioCard(project);
        portfolioGrid.appendChild(portfolioCard);
    });
}

function createPortfolioCard(project) {
    const card = document.createElement('div');
    card.className = 'portfolio-card fade-in-up';
    
    card.innerHTML = `
        <div class="portfolio-card__image" style="background-image: url('${project.image}')"></div>
        <div class="portfolio-card__content">
            <h3 class="portfolio-card__title">${project.title}</h3>
            <p class="portfolio-card__description">${project.description}</p>
            <div class="portfolio-card__meta">
                <span><strong>Client:</strong> ${project.client}</span>
                <span><strong>Duration:</strong> ${project.duration}</span>
            </div>
            <div class="portfolio-card__tags">
                ${project.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Load achievements data
function loadAchievements() {
    const achievementsGrid = document.getElementById('achievements-grid');
    if (!achievementsGrid) return;
    
    achievementsGrid.innerHTML = '';
    appData.achievements.forEach(achievement => {
        const achievementCard = createAchievementCard(achievement);
        achievementsGrid.appendChild(achievementCard);
    });
}

function createAchievementCard(achievement) {
    const card = document.createElement('div');
    card.className = 'achievement-card fade-in-up';
    
    card.innerHTML = `
        <div class="achievement-card__icon">${achievement.icon}</div>
        <span class="achievement-card__number" data-count="${achievement.count}">0</span>
        <h4 class="achievement-card__title">${achievement.title}</h4>
    `;
    
    return card;
}

// Load why choose us data
function loadWhyChooseUs() {
    const whyChooseGrid = document.getElementById('why-choose-grid');
    if (!whyChooseGrid) return;
    
    whyChooseGrid.innerHTML = '';
    appData.whyChooseUs.forEach(item => {
        const whyCard = createWhyChooseCard(item);
        whyChooseGrid.appendChild(whyCard);
    });
}

function createWhyChooseCard(item) {
    const card = document.createElement('div');
    card.className = 'why-card fade-in-up';
    
    card.innerHTML = `
        <div class="why-card__icon">${item.icon}</div>
        <h3 class="why-card__title">${item.title}</h3>
        <p class="why-card__description">${item.description}</p>
    `;
    
    return card;
}

// Load social links
function loadSocialLinks() {
    const socialLinks = document.getElementById('social-links');
    if (!socialLinks) return;
    
    const socialIcons = {
        facebook: '📘',
        twitter: '🐦',
        linkedin: '💼',
        instagram: '📷',
        youtube: '📺',
        whatsapp: '📱'
    };
    
    socialLinks.innerHTML = '';
    Object.entries(appData.socialLinks).forEach(([platform, url]) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.className = 'social__link';
        link.innerHTML = socialIcons[platform] || '🔗';
        link.setAttribute('aria-label', `Follow us on ${platform}`);
        socialLinks.appendChild(link);
    });
}

// Initialize forms
function initializeForms() {
    const quoteForm = document.getElementById('quoteForm');
    const contactForm = document.getElementById('contactForm');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', handleQuoteSubmit);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// Handle quote form submission
function handleQuoteSubmit(e) {
    e.preventDefault();
    
    const quoteData = {
        name: document.getElementById('quoteName').value,
        email: document.getElementById('quoteEmail').value,
        projectType: document.getElementById('projectType').value,
        description: document.getElementById('quoteDescription').value,
        budget: document.getElementById('quoteBudget').value
    };
    
    // Validate required fields
    if (!quoteData.name || !quoteData.email || !quoteData.projectType || !quoteData.description) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(quoteData.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate API call
    simulateApiCall('/api/quotes', quoteData)
        .then(response => {
            showMessage('Quote request submitted successfully! We\'ll contact you soon.', 'success');
            closeModal('quoteModal');
            e.target.reset();
        })
        .catch(error => {
            showMessage('Failed to submit quote request. Please try again.', 'error');
        });
}

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();
    
    const contactData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
    };
    
    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate API call
    simulateApiCall('/api/contact', contactData)
        .then(response => {
            showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
            closeModal('contactModal');
            e.target.reset();
        })
        .catch(error => {
            showMessage('Failed to send message. Please try again.', 'error');
        });
}

// Simulate API calls
function simulateApiCall(endpoint, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`API Call to ${endpoint}:`, data);
            // Simulate success (90% success rate)
            if (Math.random() > 0.1) {
                resolve({ status: 'success', message: 'Data submitted successfully' });
            } else {
                reject(new Error('Simulated API error'));
            }
        }, 1000);
    });
}

// Show message function
function showMessage(message, type = 'success') {
    if (messageContent && messageContainer) {
        messageContent.textContent = message;
        messageContent.className = `message ${type}`;
        messageContainer.classList.remove('hidden');
        
        setTimeout(() => {
            messageContainer.classList.add('hidden');
        }, 5000);
    }
}

// Initialize animations
function initializeAnimations() {
    // Counter animation for stats
    const counterElements = document.querySelectorAll('[data-count]');
    
    const observerOptions = {
        threshold: 0.7,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counterElements.forEach(el => {
        counterObserver.observe(el);
    });
    
    // Fade in animation for cards
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = Math.random() * 0.3 + 's';
                entry.target.classList.add('fade-in-up');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });
}

// Animate counter function
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu && navToggle) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
}

// Utility functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Global functions for HTML onclick handlers
window.openModal = openModal;
window.closeModal = closeModal;

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Lazy loading for images (enhanced)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeLazyLoading);