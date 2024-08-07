document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    { id: 'project1', title: 'Sustainable Aviation Fuels', image: 'images/Eco-Friendly-Lifestyle-Practices.png', x: 100, y: 100 },
    { id: 'project2', title: 'Airport Efficiency Study', image: 'images/eco-friendly-living.jpg', x: 300, y: 200 },
    { id: 'project3', title: 'Carbon Offset Programs', image: 'images/plastic.jpg', x: 500, y: 100 },
    { id: 'project4', title: 'Future of Air Travel', image: 'images/1b839d_33e82dfe540b4df4a48a3d022ef46b52~mv2.jpg', x: 700, y: 200 },
  ];

  const contentMap = document.getElementById('content-map');

  if (window.innerWidth <= 768) {
    // Create mobile layout
    const mobileList = document.createElement('div');
    mobileList.className = 'mobile-project-list';

    projects.forEach(project => {
      const item = document.createElement('div');
      item.className = 'mobile-project-item';
      item.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="mobile-project-image">
        <div class="mobile-project-info">
          <h3 class="mobile-project-title">${project.title}</h3>
          <p class="mobile-project-description">Click to view details</p>
        </div>
      `;
      item.addEventListener('click', () => showProjectDetails(project));
      mobileList.appendChild(item);
    });

    contentMap.appendChild(mobileList);
  } else {
    // Create SVG map for larger screens
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('viewBox', '0 0 800 400');

    // Create flight paths
    projects.forEach((project, index) => {
      if (index > 0) {
        const prevProject = projects[index - 1];
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute('d', `M${prevProject.x},${prevProject.y} Q${(prevProject.x+project.x)/2},${(prevProject.y+project.y)/2-50} ${project.x},${project.y}`);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', '#ccc');
        path.classList.add('flight-path');
        svg.appendChild(path);
      }
    });

    // Create project nodes
    projects.forEach((project) => {
      const nodeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      nodeGroup.classList.add('map-node');
      nodeGroup.dataset.project = project.id;
      nodeGroup.setAttribute('transform-origin', `${project.x}px ${project.y}px`);

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute('cx', project.x);
      circle.setAttribute('cy', project.y);
      circle.setAttribute('r', 30);
      circle.setAttribute('fill', 'white');
      circle.setAttribute('stroke', '#3498db');
      circle.setAttribute('stroke-width', '2');

      const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
      image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', project.image);
      image.setAttribute('x', project.x - 25);
      image.setAttribute('y', project.y - 25);
      image.setAttribute('width', 50);
      image.setAttribute('height', 50);
      image.setAttribute('clip-path', 'circle(25px at center)');

      nodeGroup.appendChild(circle);
      nodeGroup.appendChild(image);
      svg.appendChild(nodeGroup);

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute('x', project.x);
      text.setAttribute('y', project.y + 50);
      text.textContent = project.title;
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', '#333');
      svg.appendChild(text);

      nodeGroup.addEventListener('click', () => showProjectDetails(project));
    });

    contentMap.appendChild(svg);
  }

  function showProjectDetails(project) {
    const projectDetails = document.getElementById('project-details');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectStats = document.getElementById('project-stats');
    const projectExcerpt = document.getElementById('project-excerpt');
    const projectImage = document.getElementById('project-image');

    projectTitle.textContent = project.title;
    projectDescription.textContent = 'This is a detailed project description showcasing the content strategy and its impact.';
    projectStats.textContent = 'Engagement: +40%, Reach: 1M+, Conversion: 15% increase in target metric';
    projectExcerpt.textContent = 'This project involved creating a comprehensive content strategy that included blog posts, infographics, and social media campaigns...';
    projectImage.src = project.image;

    projectDetails.classList.remove('hidden');
  }

  document.getElementById('close-details').addEventListener('click', function() {
    document.getElementById('project-details').classList.add('hidden');
  });
});

// Trusted By Script Starts Here

document.addEventListener('DOMContentLoaded', function() {
  const trustSlider = document.querySelector('.trust-slider');
  const logos = [
      { name: 'Airline 1', image: '	https://eepower.com/images/site/Logo-Large.png' },
      { name: 'Sustainability Org 1', image: 'https://thepilotnetwork.com/cdn/shop/files/TPN-Logo-Words-Logo-Black-Transparent_360x.png?v=1614316240' },
      { name: 'Airport 1', image: 'images/centec%20logo.png' },
      { name: 'Aviation Tech 1', image: 'images/RealGXlogo.png' },
      { name: 'Green Energy 1', image: 'https://simpleflying.com/public/build/images/sf-logo-full-colored-dark.svg?v=3.0' },
      { name: 'Green Energy 1', image: 'https://www.avient.com/themes/upward/fluid/images/footer-logo.svg' },
      { name: 'Green Energy 1', image: 'https://www.dixongolf.com/assets/img/DixonGolf_Logo_HiRes_TransparentBG_RGB.png' },
      // Add more logos as needed
  ];
  
  // Function to create logo elements
  function createLogoElement(logo) {
      const div = document.createElement('div');
      div.className = 'trust-logo';
      div.innerHTML = `<img src="${logo.image}" alt="${logo.name} logo">`;
      return div;
  }

  // Populate the slider
  logos.forEach(logo => {
    trustSlider.appendChild(createLogoElement(logo));
});

// Clone the logos to create a seamless loop
logos.forEach(logo => {
    trustSlider.appendChild(createLogoElement(logo));
});

// Adjust slider width for seamless loop
trustSlider.style.width = `${(logos.length * 2) * 230}px`; // 230px is logo width + margin

// Pause animation on hover
trustSlider.addEventListener('mouseenter', () => {
    trustSlider.style.animationPlayState = 'paused';
});

trustSlider.addEventListener('mouseleave', () => {
    trustSlider.style.animationPlayState = 'running';
});
});
// Trusted By Script Ends Here

// Testimonial Script Starts Here
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.testimonial-track');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;
  const testimonials = [
      {
          text: "Sarah's content strategy transformed our approach to communicating about sustainable aviation. Her ability to distill complex topics into engaging narratives significantly boosted our outreach effectiveness.",
          name: "John Doe",
          position: "Head of Sustainability, AeroGreen Airlines",
          image: "images/profile-photo.jpg"
      },
      {
          text: "The data visualization campaign Sarah created for our airport efficiency study was nothing short of revolutionary. It made our findings accessible and compelling to stakeholders at all levels.",
          name: "Emma Wilson",
          position: "Operations Director, Global Airports Association",
          image: "images/profile-photo.jpg"
      },
      {
          text: "Sarah's multimedia content package on the future of air travel not only went viral within the industry but also sparked meaningful discussions on sustainability. Her work is both visionary and pragmatic.",
          name: "Dr. Michael Chen",
          position: "Chief Innovation Officer, FutureFlight Technologies",
          image: "images/profile-photo.jpg"
      }
  ];

  function createTestimonialElement(testimonial) {
      return `
          <div class="testimonial-item">
              <div class="testimonial-content">
                  <p class="testimonial-text">${testimonial.text}</p>
                  <div class="client-info">
                      <img src="${testimonial.image}" alt="${testimonial.name}" class="client-image">
                      <div class="client-details">
                          <h4>${testimonial.name}</h4>
                          <p>${testimonial.position}</p>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }

  testimonials.forEach(testimonial => {
      track.innerHTML += createTestimonialElement(testimonial);
  });

  function updateCarousel() {
      track.style.transition = 'transform 0.5s ease';
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function resetTransition() {
      track.style.transition = 'none';
  }

  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateCarousel();
  });

  track.addEventListener('transitionend', resetTransition);

  // Optional: Auto-play functionality
  function autoPlay() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateCarousel();
  }

  // Uncomment the next line if you want auto-play
  let autoPlayInterval = setInterval(autoPlay, 5000); // Change slide every 5 seconds

  // Optional: Pause auto-play on hover
  track.addEventListener('mouseenter', () => {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
  });

  track.addEventListener('mouseleave', () => {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
      // Uncomment the next line if you want auto-play to resume after hover
      autoPlayInterval = setInterval(autoPlay, 5000);
  });
});