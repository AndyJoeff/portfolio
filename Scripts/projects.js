document.addEventListener('DOMContentLoaded', function() {
    const showcase = document.querySelector('.infographic-showcase');
    const projects = [
        {
            title: "Aircraft Safety Analyzer",
            image: "images/Universalhydogen.png",
            description: "A user-friendly web-based tool that enables travelers to research the safety profiles of various aircraft models and airlines.",
            stats: {
                engagement: "+45%",
                reach: "2M+",
                conversion: "20%"
            },
            cta: "View Case Study"
        },
        {
            title: "Sustainable Aviation Fuel Campaign",
            image: "images/images.jpg",
            description: "Developed a multi-channel content strategy to educate and promote the adoption of Sustainable Aviation Fuels (SAF) among airlines and passengers.",
            stats: {
                engagement: "+45%",
                reach: "2M+",
                conversion: "20%"
            },
            cta: "View Case Study"
        },

        

        {
            title: "Aviation Career Spotlight",
            image: "images/aviation-career.jpg",
            description: "A series of podcast episodes featuring interviews with professionals from various aviation careers, including pilots, aerospace engineers, and airline executives",
            stats: {
                participation: "+30%",
                carbonReduction: "500k tons",
                awarenessIncrease: "65%"
            },
            cta: "Explore the Impact"
        },
        {
            title: "Innovations in Urban Air Mobility",
            image: "https://www.airmedandrescue.com/sites/amr/files/styles/full_size_view/public/2020-12/evtol-aircraft.jpg?h=56e4a533&itok=yZBdi2vs",
            description: "Created a multimedia content series on urban air mobility, covering eVTOL technology, infrastructure needs, and societal impact.",
            stats: {
                videoViews: "1.5M",
                shares: "50k+",
                industryPartnerships: "10"
            },
            cta: "Watch the Series"
        }
    ];

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-item';
        projectElement.innerHTML = `
            <div class="project-image" style="background-image: url(${project.image});"></div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-stats">
                    ${Object.entries(project.stats).map(([key, value]) => `
                        <div class="stat-item">
                            <div class="stat-value">${value}</div>
                            <div class="stat-label">${key}</div>
                        </div>
                    `).join('')}
                </div>
                <a href="#" class="project-cta">${project.cta}</a>
            </div>
        `;
        showcase.appendChild(projectElement);
    });
});