// Hamburger Script Starts Here
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");
  
    hamburgerMenu.addEventListener("click", function() {
      navLinks.classList.toggle("active");
    });
  });
  
// Carousel Script Starts Here
$(document).ready(function(){
    $('.hero-carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
  });
  
// JavaScript for Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        const category = button.getAttribute('data-category');
  
        portfolioCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
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
            text: "Andrew's attention to detail and ability to capture our brand voice have made him an invaluable asset to our content team.",
            name: "Adam Uhan",
            position: "Co-founder, ThePilotNetwork",
            image: "https://images.squarespace-cdn.com/content/v1/601314903dcc51351d60ab63/1612812210952-D5LS4HYEFDRXPVERTJN7/AdamUhanFINAL-19.jpg"
        },
        {
            text: "Your first article went above and beyond and definitely aligned with TPN's writing style. I learned a lot myself while reading it - such a cool topic.",
            name: "Ali Scheinfeld",
            position: "Account Coordinator, Serendipity & Company",
            image: "https://media.licdn.com/dms/image/v2/D4E03AQEC4YGR6kvgrA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713967544069?e=1768435200&v=beta&t=bjMgTiT8GTdDQUwKdvslpRZlZ23qmSTGi7UMRdIbgKs"
        },
        {
            text: "Andrew's writing has significantly improved our blog's engagement. His ability to break down complex topics into digestible content is remarkable.",
            name: "Eric Brandtner",
            position: "Chief Executive Officer, JARA Publishing",
            image: "images/Leonardo_Phoenix_an_image_of_Dr_Michael_Chen_Director_Aviation_3.jpg"
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


  // About Script Starts Here
  document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach((skill, index) => {
      skill.style.opacity = '0';
      skill.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        skill.style.opacity = '1';
        skill.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  });
