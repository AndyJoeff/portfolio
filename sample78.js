      const experiences = [
           {
                date: "2024 - Present",
                company: "Green Xplorer",
                position: "Senior Editor",
                description: "Edited and proofread environmental and sustainability-focused content for print and digital platforms.",
                achievements: [
                     "30% increase in content quality/accuracy",
                     "25% faster publication turnaround"
                ],
                skills: ["Editing", "Proofreading", "Environmental Writing", "Publication Management"]
            },
            {
                date: "2022 - 2023",
                company: "The Pilot Network (TPN)",
                position: "Content Writer",
                description: "Produced high-quality technical content for aviation professionals, using data analytics and infographics to simplify complex topics into clear, actionable insights.",
                achievements: [
                    "45% boost in page engagement",
                    "Enhanced social media visibility "
                ],
                skills: ["Technical Writing", "White papers", "Infographics", "Research" ]
            },
              /*  {
            date: "2022",
                company: "My e-Learning World",
                position: "Senior Content Writer",
                description: "Lead content creation for company website, developing comprehensive content strategies and optimizing content to boost engagement",
                achievements: [
                    "42% organic traffic growth in 9 months",
                    "15% higher conversions with targeted CTAs"
                ],
                skills: ["Content Strategy", "SEO", "User Engagement", "e-Learning" ]
            },*/
            {
                date: "2020 - 2021",
                company: "JARA Publishing",
                position: "Content Writer",
                description: "Produced diverse content across multiple blogs, ensuring quality and originality while adapting to various industry needs.",
                achievements: [
                    "40% site traffic increase",
                    "34% faster content delivery"
                ],
                skills: ["Versatile Writing", "Content Management", "Editorial Workflows"]
            }
        ];
    
        const timeline = document.getElementById('timeline');
    
        experiences.forEach((exp, index) => {
            const container = document.createElement('div');
            container.className = `container ${index % 2 === 0 ? 'right' : 'right'}`;
    
            container.innerHTML = `
                <div class="content">
                    <div class="date">${exp.date}</div>
                    <div class="company">${exp.company}</div>
                    <div class="position">${exp.position}</div>
                    <p class="description">${exp.description}</p>
                    <div class="achievements">
                        <ul>
                            ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="skills">
                        ${exp.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
                    </div>
                    <a href="#" class="read-more">View Full Details</a>
                </div>
            `;
            
            timeline.appendChild(container);
        });


       