document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.querySelector('.blog-container');
    const blogPosts = [
      {
        image: 'images/Eviation_aliceV2.png',
        date: 'April 10, 2024',
        category: 'Data Visualization',
        title: 'The Top 5 Innovations Making Air Travel Safer Than Ever',
        snippet: 'Aircraft safety has always been a top priority, but as technology advances, so do the methods and...'
      },
      {
        image: 'images/Universalhydogen.png',
        date: 'May 15, 2024',
        category: 'Sustainability',
        title: 'The Future of Sustainable Aviation: Looking Beyond SAF',
        snippet: 'Sustainable Aviation Fuel has set the stage for a greener future in air travel, but the industry\'s ambitions...'
      },
      {
        image: 'https://www.worldfashionexchange.com/blog/wp-content/uploads/2023/10/What-is-sustainable-fashion.webp',
        date: 'April 28, 2024',
        category: 'Content Strategy',
        title: 'Sustainable Fashion: How to Build an Eco-Friendly Wardrobe',
        snippet: 'Sustainable fashion is more than just a trend—it’s a necessary shift toward a more responsible and...'
      },
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