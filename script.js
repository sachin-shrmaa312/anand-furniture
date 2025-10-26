 // Get elements
 const hamburger = document.getElementById('hamburger');
 const navMenu = document.getElementById('navMenu');
 const navLinks = document.querySelectorAll('.nav-link');

 // Toggle menu on hamburger click
 hamburger.addEventListener('click', function() {
     hamburger.classList.toggle('active');
     navMenu.classList.toggle('active');
 });

 // Close menu when clicking on nav links
 navLinks.forEach(function(link) {
     link.addEventListener('click', function() {
         hamburger.classList.remove('active');
         navMenu.classList.remove('active');
     });
 });

 // Smooth scrolling for all anchor links
 document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
         }
     });
 });

 // Form submission
 const contactForm = document.getElementById('contactForm');
 contactForm.addEventListener('submit', function(e) {
     e.preventDefault();
     alert('Thank you for your message! We will get back to you soon.');
     contactForm.reset();
 });

 // Projects Slider
 let currentSlide = 0;
 const projectsContainer = document.getElementById('projectsContainer');
 const prevBtn = document.getElementById('prevBtn');
 const nextBtn = document.getElementById('nextBtn');
 const cards = document.querySelectorAll('.project-card');
 const totalCards = cards.length;

 function updateSlider() {
     const cardWidth = cards[0].offsetWidth + 32; // card width + gap
     const maxSlide = Math.max(0, totalCards - Math.floor(projectsContainer.offsetWidth / cardWidth));
     
     projectsContainer.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
     
     prevBtn.disabled = currentSlide === 0;
     nextBtn.disabled = currentSlide >= maxSlide;
 }

 function slideProjects(direction) {
     const cardWidth = cards[0].offsetWidth + 32;
     const maxSlide = Math.max(0, totalCards - Math.floor(projectsContainer.offsetWidth / cardWidth));
     
     if (direction === 'next' && currentSlide < maxSlide) {
         currentSlide++;
     } else if (direction === 'prev' && currentSlide > 0) {
         currentSlide--;
     }
     
     updateSlider();
 }

 window.addEventListener('resize', updateSlider);
 updateSlider();

 // Project Data
 const projectsData = {
     1: {
         title: 'Luxury TV Units',
         client: 'Anand furniture',
         date: 'find our TV Units Projects',
         description: 'Elegant and functional TV units crafted for modern homes. Designed to organize your entertainment space with style. Premium finishes that elevate your living room’s look.',
         media: [
             { type: 'image', src: './img/project-1/tv-unit-1.jpeg' },
             { type: 'image', src: './img/project-1/tv-unit-2.jpeg' },
             { type: 'image', src: './img/project-1/tv-unit-3.jpeg' },
             { type: 'image', src: './img/project-1/tv-unit-4.jpeg' },
             { type: 'image', src: './img/project-1/tv-unit-5.jpeg' },
             { type: 'image', src: './img/project-1/tv-unit-6.jpeg' },
             { type: 'image', src: './img/project-1/tv-unit-7.jpeg' },
             { type: 'image', src: './img/project-1/tv-unit-8.jpeg' },
             { type: 'image', src: './img/project-1/tv-unit-9.jpeg' },
             { type: 'image', src: './img/project-1/tv-unit-10.jpeg' },
             { type: 'image', src: './img/project-1/tv-unit-11.jpeg' },
             { type: 'image', src: './img/project-1/tv-unit-12.jpeg' },
            //  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
         ]
     },
     2: {
         title: 'Modern Wall Setup',
         client: 'Cupboard / Wall Drove',
         date: 'latest projects',
         description: 'Discover our premium range of custom wardrobe designs. Each cupboard is crafted to maximize storage with elegance. Sleek finishes and smart layouts enhance every bedroom. Built with durable materials for long-lasting quality. Where luxury meets perfect organization in style.',
         media: [
             { type: 'image', src: './img/project-2/cupbord-1.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-2.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-3.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-4.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-5.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-6.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-7.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-8.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-9.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-10.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-11.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-12.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-13.jpeg' },
             { type: 'image', src: './img/project-2/cupbord-14.jpeg' },
         ]
     },
     3: {
         title: 'Modular Kitchen Renovation',
         client: 'Modern / Simple',
         date: 'latest project',
         description: 'Experience the art of cooking in our luxury modular kitchens. Designed with precision for style, space, and convenience. Smart storage and seamless layouts elevate your daily routine. Crafted with premium materials for lasting beauty and function. Where design, comfort, and elegance come together perfectly.',
         media: [
             { type: 'image', src: '/img/project-3/kitchen-1.jpeg' },
             { type: 'image', src: '/img/project-3/kitchen-2.jpeg' },
             { type: 'image', src: '/img/project-3/kitchen-3.jpeg' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=600&fit=crop' },
         ]
     },
     4: {
         title: 'Moder Door',
         client: 'Double door Safety',
         date: 'our latest',
         description: 'Strong, stylish, and built to last — our double doors redefine security. Engineered with high-quality materials for superior protection. Elegant designs that enhance your home’s entrance. Seamless blend of safety, beauty, and durability. Because true luxury starts with peace of mind.',
         media: [
            { type: 'image', src: '/img/project-5/door-1.jpeg' },
            { type: 'image', src: '/img/project-5/door-2.jpeg' },
            { type: 'image', src: '/img/project-5/door-3.jpeg' },
            { type: 'image', src: '/img/project-5/door-4.jpeg' },
            { type: 'image', src: '/img/project-5/door-5.jpeg' },
         ]
     },
     5: {
         title: 'Cozy Room Makeover',
         client: 'Best Desings',
         date: 'our latest',
         description: 'Warm and inviting living room featuring a custom L-shaped sofa with premium upholstery, coffee table with storage, entertainment TV unit with display shelves, accent chairs, and floor-to-ceiling bookshelf. The design blends comfort with contemporary aesthetics.',
         media: [
             { type: 'image', src: '/img/project-4/sofa-bed-1.jpeg' },
             { type: 'image', src: '/img/project-4/sofa-bed-2.jpeg' },
             { type: 'image', src: '/img/project-4/sofa-bed-3.jpeg' },
             { type: 'image', src: '/img/project-4/sofa-bed-4.jpeg' },
             { type: 'image', src: '/img/project-4/sofa-bed-5.jpeg' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop' },
         ]
     }
 };

 // Modal Functions
 function openModal(projectId) {
     const project = projectsData[projectId];
     const modal = document.getElementById('projectModal');
     
     document.getElementById('modalTitle').textContent = project.title;
     document.getElementById('modalClient').textContent = project.client;
     document.getElementById('modalDate').textContent = project.date;
     document.getElementById('modalDescription').textContent = project.description;
     
     const mediaContainer = document.getElementById('modalMedia');
     mediaContainer.innerHTML = '';
     
     project.media.forEach(item => {
         const mediaDiv = document.createElement('div');
         mediaDiv.className = 'media-item';
         
         if (item.type === 'image') {
             mediaDiv.innerHTML = `<img src="${item.src}" alt="Project image">`;
         } else if (item.type === 'video') {
             mediaDiv.className += ' video-badge';
             mediaDiv.innerHTML = `<video src="${item.src}" controls></video>`;
         }
         
         mediaContainer.appendChild(mediaDiv);
     });
     
     modal.classList.add('active');
     document.body.style.overflow = 'hidden';
 }

 function closeModal() {
     const modal = document.getElementById('projectModal');
     modal.classList.remove('active');
     document.body.style.overflow = 'auto';
     
     // Stop all videos
     const videos = modal.querySelectorAll('video');
     videos.forEach(video => {
         video.pause();
         video.currentTime = 0;
     });
 }

 // Close modal on background click
 document.getElementById('projectModal').addEventListener('click', function(e) {
     if (e.target === this) {
         closeModal();
     }
 });

 // Close modal with Escape key
 document.addEventListener('keydown', function(e) {
     if (e.key === 'Escape') {
         closeModal();
     }
 });

 function downloadBrochure(event) {
    event.preventDefault(); // stop default link behavior

    // Path to your PDF file (adjust as needed)
    const fileUrl = 'brochure/anand-furniture-brochure.pdf';

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'anand-furniture-brochure.pdf'; // File name when downloaded
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
}
