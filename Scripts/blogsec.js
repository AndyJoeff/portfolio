document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.querySelector('.blog-container');
    const blogPosts = [
     {
        image: 'https://plus.unsplash.com/premium_photo-1723527890050-0b688370e70f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGlsb3QlMjBjb2NrcGl0fGVufDB8fDB8fHww',
        date: 'October 28, 2025',
        category: 'Feature article',
        title: 'Are Cockpit Cameras the Missing Piece in Crash Investigations?',
        snippet: 'Vishwaskumar Ramesh, a 40-year-old British national, was the only passenger to survive Air India Flight 171'...'
      },
      {
        image: 'images/Eviation_aliceV2.png',
        date: 'April 10, 2024',
        category: 'Listicle',
        title: 'The Top 5 Innovations Making Air Travel Safer Than Ever',
        snippet: 'Aircraft safety has always been a top priority, but as technology advances, so do the methods and...'
      },
      {
        image: 'images/Universalhydogen.png',
        date: 'May 15, 2024',
        category: 'Opinion piece',
        title: 'The Future of Sustainable Aviation: Looking Beyond SAF',
        snippet: 'Sustainable Aviation Fuel has set the stage for a greener future in air travel, but the industry\'s ambitions...'
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
