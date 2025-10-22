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
         title: 'Luxury Apartment Interiors',
         client: 'Mr. Sharma',
         date: 'October 2024',
         description: 'Complete interior furniture solution for a 3BHK luxury apartment. This project included a modern modular kitchen with island counter, walk-in wardrobes for all bedrooms, custom-designed bed frames, living room entertainment unit, dining table set, and decorative shelving throughout the apartment. Premium materials and finishes were used to create an elegant and functional living space.',
         media: [
             { type: 'image', src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop' },
             { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop' }
         ]
     },
     2: {
         title: 'Modern Office Setup',
         client: 'Tech Solutions Pvt Ltd',
         date: 'September 2024',
         description: 'Contemporary office furniture design for a growing tech startup. We created custom workstations with cable management, ergonomic chairs, conference room furniture, reception desk, and storage cabinets. The design focused on creating a collaborative workspace while maintaining individual productivity zones.',
         media: [
             { type: 'image', src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop' },
             { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop' }
         ]
     },
     3: {
         title: 'Villa Master Bedroom',
         client: 'Mrs. Kapoor',
         date: 'August 2024',
         description: 'Luxurious master bedroom suite featuring a king-size custom bed with upholstered headboard, matching side tables with marble tops, a spacious walk-in wardrobe with LED lighting, dressing table with Hollywood mirror, and a cozy reading nook. Premium wood finishes and soft-close mechanisms throughout.',
         media: [
             { type: 'image', src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop' },
             { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop' }
         ]
     },
     4: {
         title: 'Modular Kitchen Renovation',
         client: 'Mr. Patel',
         date: 'July 2024',
         description: 'Complete kitchen transformation with L-shaped modular design, granite countertops, breakfast counter with bar stools, overhead and base cabinets with pull-out drawers, chimney hood, and appliance garage. The design maximizes storage while maintaining an open and airy feel.',
         media: [
             { type: 'image', src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop' },
             { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop' }
         ]
     },
     5: {
         title: 'Cozy Living Room Makeover',
         client: 'Mr. & Mrs. Desai',
         date: 'June 2024',
         description: 'Warm and inviting living room featuring a custom L-shaped sofa with premium upholstery, coffee table with storage, entertainment TV unit with display shelves, accent chairs, and floor-to-ceiling bookshelf. The design blends comfort with contemporary aesthetics.',
         media: [
             { type: 'image', src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&h=600&fit=crop' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop' },
             { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
             { type: 'image', src: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&h=600&fit=crop' }
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
