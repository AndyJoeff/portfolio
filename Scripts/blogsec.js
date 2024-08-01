document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.querySelector('.blog-container');
    const blogPosts = [
      {
        image: 'images/Universalhydogen.png',
        date: 'May 15, 2024',
        category: 'Sustainability',
        title: 'The Future of Sustainable Aviation: Beyond SAF',
        snippet: 'Exploring emerging technologies and strategies that are shaping the future of sustainable aviation beyond Sustainable Aviation Fuels.'
      },
      {
        image: 'images/27_Joby_Aviation_Aircraft.jpg',
        date: 'April 28, 2024',
        category: 'Content Strategy',
        title: 'Crafting Compelling Narratives in Aviation',
        snippet: 'How to develop engaging content strategies that resonate with aviation professionals and enthusiasts alike.'
      },
      {
        image: 'images/disposable-paper-coffee-cup.jpg',
        date: 'April 10, 2024',
        category: 'Data Visualization',
        title: 'Visualizing Aviation Data for Impact',
        snippet: 'Techniques and best practices for turning complex aviation data into clear, actionable insights through effective visualization.'
      }
    ];
  
    blogPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'blog-post';
      postElement.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-content">
          <div class="blog-meta">
            <span>${post.date}</span>
            <span class="blog-category">${post.category}</span>
          </div>
          <h3>${post.title}</h3>
          <p>${post.snippet}</p>
        </div>
      `;
      blogContainer.appendChild(postElement);
    });
  });