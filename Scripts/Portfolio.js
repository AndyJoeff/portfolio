document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    { 
      id: 'project1', 
      title: 'Eco-Friendly Living', 
      image: 'images/Eco-Friendly-Lifestyle-Practices.png', 
      x: 100, 
      y: 100,
      description: 'Developed a content strategy to promote eco-friendly living practices, including blog posts, infographics, and social media campaigns.',
      stats: [
        { value: '+25%', label: 'Engagement' },
        { value: '100K+', label: 'Reach' },
        { value: '10%', label: 'CTR' }
      ],
      excerpt: 'Our eco-friendly living campaign focused on educating the public about simple, effective ways to reduce their environmental impact in daily life...' 
    },
    {
      id: 'project2', 
      title: 'Sustainability in Agriculture', 
      image: 'images/sustainabilityin agric.jpg', 
      x: 300, 
      y: 200,
      description: 'Created an in-depth content series on sustainable agricultural practices, targeting farmers and consumers alike.',
      stats: [
        { value: '50K+', label: 'Views' },
        { value: '+30%', label: 'Shares' },
        { value: '4.7/5', label: 'Rating' }
      ],
      excerpt: 'This project aimed to bridge the gap between traditional farming methods and sustainable practices, showcasing the benefits for both producers and consumers...' 
    },
    {
      id: 'project3', 
      title: 'Tackling Plastic Pollution', 
      image: 'images/plastic.jpg', 
      x: 500, 
      y: 100,
      description: 'Launched a multi-platform awareness campaign on plastic pollution, its impact, and solutions.',
      stats: [
        { value: '200K+', label: 'Views' },
        { value: '10K+', label: 'Pledges' },
        { value: '+40%', label: 'Awareness' }
      ],
      excerpt: 'Our plastic pollution campaign utilized powerful visuals and storytelling to drive home the urgency of the plastic crisis and inspire actionable change...' 
    },
    {
      id: 'project4', 
      title: 'Clean Energy for Home', 
      image: 'images/reneawable for home.jpg', 
      x: 700, 
      y: 200,
      description: 'Developed an educational content package on adopting clean energy solutions for residential use.',
      stats: [
        { value: '15K+', label: 'Downloads' },
        { value: '4.8/5', label: 'User rating' },
        { value: '+20%', label: 'Inquiries' }
      ],
      excerpt: 'This project broke down the complexities of home clean energy adoption, providing clear, actionable information for homeowners...' 
    },
  ];
  
  const contentMap = document.getElementById('content-map');

  if (window.innerWidth <= 768) {
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
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('viewBox', '0 0 800 400');

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
    // const projectExcerpt = document.getElementById('project-excerpt');
    const projectImage = document.getElementById('project-image');
    const projectCTA = document.getElementById('project-cta'); // Reference to CTA Button

    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectStats.innerHTML = project.stats.map(stat => `
      <div class="stat-item1">
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label1">${stat.label}</div>
      </div>
    `).join('');
    // projectExcerpt.textContent = project.excerpt;
    projectImage.src = project.image;
    projectCTA.href = `path-to-full-project/${project.id}`; // Link to the full project page or details
    projectCTA.textContent = 'Read More'; // Set the text for the CTA


    projectDetails.classList.remove('hidden');
  }

  document.getElementById('close-details').addEventListener('click', function() {
    document.getElementById('project-details').classList.add('hidden');
  });
});