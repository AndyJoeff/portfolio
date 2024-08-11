document.addEventListener('DOMContentLoaded', function() {
    const showcase = document.querySelector('.infographic-showcase');
    const projects = [
        {
            title: "Aircraft Safety Analyzer",
            image: "images/Universalhydogen.png",
            description: "A user-friendly web-based tool that enables travelers to research the safety profiles of various aircraft models and airlines.",
            stats: {
                users: "10k+",
                dataPoints: "500+",
                accuracy: "99%"
            },
            cta: "Try the Analyzer"
        },
        {
            title: "Airport Carbon Accreditation Program",
            image: "images/images5.png",
            description: "Developed a comprehensive eBook providing a detailed roadmap for airports to achieve carbon accreditation.",
            stats: {
                downloads: "5k+",
                pages: "100+",
                rating: "4.8/5"
            },
            cta: "Download eBook"
        },
        {
            title: "Aviation Career Spotlight",
            image: "images/aviation-career.jpg",
            description: "A series of podcast episodes featuring interviews with aviation professionals including pilots, aerospace engineers, and airline executives.",
            stats: {
                episodes: "25+",
                listeners: "50k+",
                reviews: "4.7/5"
            },
            cta: "Listen Now"
        },
        {
            title: "Innovations in Urban Air Mobility",
            image: "https://www.airmedandrescue.com/sites/amr/files/styles/full_size_view/public/2020-12/evtol-aircraft.jpg?h=56e4a533&itok=yZBdi2vs",
            description: "Created a multimedia content series on urban air mobility, covering eVTOL technology, infrastructure needs, and societal impact.",
            stats: {
                views: "100k+",
                articles: "15+",
                shares: "5k+"
            },
            cta: "Explore Series"
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