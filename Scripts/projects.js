document.addEventListener('DOMContentLoaded', function() {
    const showcase = document.querySelector('.infographic-showcase');
    const projects = [
        {
            title: "Aircraft Safety Analyzer",
            image: "images/skyintelmockup2.jpg",
            description: "A user-friendly web-based tool that enables Aviation enthusiasts to research the safety profiles of various aircraft models and airlines.",
            stats: {
                users: "10k+",
                dataPoints: "500+",
                accuracy: "99%"
            },
            cta: "Try the Analyzer",
            link: "https://andyjoeff.github.io/skyintel/"
        },
         {
            title: "Aviation Editorials for The Pilot Network (TPN)",
            image: "images/tpnmockup.jpg",
            description: "Wrote in-depth content on sustainable aviation, eVTOL innovation, and aviation careers for one of the industry’s most respected platforms.",
            stats: {
                reads: "30k+",
                articles: "8",
                avgReadTime: "4.5 min"
            },
            cta: "View Featured Pieces",
            link: "https://andyjoeff.github.io/skyintel/"
        },
        {
            title: "Aviation Explainer Videos",
            image: "images/explainervideos.jpg",
            description: "Scripted, voiced, and edited educational videos on a broad range of aviation topics for social media platforms.",
            stats: {
                videos: "15+",
                downloads: "5k+",
                views: "20k+",
            },
            cta: "Watch Videos",
            link: "https://example.com/airport-carbon-ebook"
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
            cta: "Download eBook",
            link: "https://example.com/airport-carbon-ebook"
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
            cta: "Listen Now",
            link: "https://example.com/aviation-career-podcast"
        },
    ];

   projects.forEach((project, index) => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project-item';

    const isFirst = index === 0;
    const imageClass = isFirst ? 'project-image first-project' : 'project-image';

    projectElement.innerHTML = `
        <div class="${imageClass}" style="background-image: url(${project.image});"></div>
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
            <a href="${project.link}" class="project-cta" target="_blank" rel="noopener noreferrer">${project.cta}</a>
        </div>
    `;
    showcase.appendChild(projectElement);
});

});
