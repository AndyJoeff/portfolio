document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    { id: 'project1', title: 'Sustainable Aviation Fuels', image: 'images/Eco-Friendly-Lifestyle-Practices.png', x: 100, y: 100 },
    { id: 'project2', title: 'Airport Efficiency Study', image: 'images/eco-friendly-living.jpg', x: 300, y: 200 },
    { id: 'project3', title: 'Carbon Offset Programs', image: 'images/plastic.jpg', x: 500, y: 100 },
    { id: 'project4', title: 'Future of Air Travel', image: 'images/1b839d_33e82dfe540b4df4a48a3d022ef46b52~mv2.jpg', x: 700, y: 200 },
  ];

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
  });

  document.getElementById('content-map').appendChild(svg);

  const projectDetails = document.getElementById('project-details');
  const projectTitle = document.getElementById('project-title');
  const projectDescription = document.getElementById('project-description');
  const projectStats = document.getElementById('project-stats');
  const projectExcerpt = document.getElementById('project-excerpt');
  const projectImage = document.getElementById('project-image');
  const closeDetails = document.getElementById('close-details');

  document.querySelectorAll('.map-node').forEach(node => {
    node.addEventListener('click', function() {
      const projectId = this.dataset.project;
      const project = projects.find(p => p.id === projectId);
      
      projectTitle.textContent = project.title;
      projectDescription.textContent = 'This is a detailed project description showcasing the content strategy and its impact.';
      projectStats.textContent = 'Engagement: +40%, Reach: 1M+, Conversion: 15% increase in target metric';
      projectExcerpt.textContent = 'This project involved creating a comprehensive content strategy that included blog posts, infographics, and social media campaigns...';
      projectImage.src = project.image;
      
      projectDetails.classList.remove('hidden');
    });
  });

  closeDetails.addEventListener('click', function() {
    projectDetails.classList.add('hidden');
  });
});