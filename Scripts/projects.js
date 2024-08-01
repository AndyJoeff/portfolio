document.addEventListener('DOMContentLoaded', function() {
    const showcase = document.querySelector('.infographic-showcase');
    const projects = [
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
            title: "Airport Carbon Accreditation Program",
            image: "images/images5.png",
            description: "Created an interactive digital experience to showcase the impact of the Airport Carbon Accreditation program, driving participation among airports worldwide.",
            stats: {
                participation: "+30%",
                carbonReduction: "500k tons",
                awarenessIncrease: "65%"
            },
            cta: "Explore the Impact"
        },
        {
            title: "Future of Green Aviation Series",
            image: "images/greenaviation.jpg",
            description: "Produced a multimedia content series exploring innovative technologies and practices shaping the future of sustainable aviation.",
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