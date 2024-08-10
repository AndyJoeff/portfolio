document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    { id: 'project1', title: 'Eco-Friendly Living', image: 'images/Eco-Friendly-Lifestyle-Practices.png', x: 100, y: 100,
      description: 'Developed a comprehensive content strategy to promote eco-friendly living practices, including blog posts, infographics, and social media campaigns.',
      stats: 'Engagement: +40%, Reach: 1M+, Conversion: 15% increase in sustainable lifestyle adoptions',
      excerpt: 'Our eco-friendly living campaign focused on educating the public about simple, effective ways to reduce their environmental impact in daily life...' },
    { id: 'project2', title: 'Sustainability in Agriculture', image: 'images/sustainabilityin agric.jpg', x: 300, y: 200,
      description: 'Created an in-depth content series on sustainable agricultural practices, targeting farmers and consumers alike.',
      stats: 'Organic reach: 500K+, Farmer engagement: +60%, Consumer awareness increase: 35%',
      excerpt: 'This project aimed to bridge the gap between traditional farming methods and sustainable practices, showcasing the benefits for both producers and consumers...' },
    { id: 'project3', title: 'Tackling Plastic Pollution', image: 'images/plastic.jpg', x: 500, y: 100,
      description: 'Launched a multi-platform awareness campaign on plastic pollution, its impact, and solutions.',
      stats: 'Video views: 2M+, Pledge participants: 100K+, Plastic reduction: estimated 500 tons',
      excerpt: 'Our plastic pollution campaign utilized powerful visuals and storytelling to drive home the urgency of the plastic crisis and inspire actionable change...' },
    { id: 'project4', title: 'Clean Energy for Home', image: 'images/reneawable for home.jpg', x: 700, y: 200,
      description: 'Developed an educational content package on adopting clean energy solutions for residential use.',
      stats: 'Download rate: 75K+, Implementation rate: 20%, Energy savings: estimated 1.5M kWh',
      excerpt: 'This project broke down the complexities of home clean energy adoption, providing clear, actionable information for homeowners...' },
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
    projectDescription.textContent = project.description;
    projectStats.textContent = project.stats;
    projectExcerpt.textContent = project.excerpt;
    projectImage.src = project.image;

    projectDetails.classList.remove('hidden');
  }

  document.getElementById('close-details').addEventListener('click', function() {
    document.getElementById('project-details').classList.add('hidden');
  });
});

