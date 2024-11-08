async function searchDiscussions() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const response = await fetch('discussions.json');
  const discussions = await response.json();
  
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  discussions.data.repository.discussions.nodes
    .filter(discussion => discussion.title.toLowerCase().includes(query))
    .forEach(discussion => {
      const item = document.createElement('li');
      item.innerHTML = `
        <a href="${discussion.url}" target="_blank">${discussion.title}</a>
        <p>${discussion.bodyText.substring(0, 100)}...</p>
      `;
      resultsContainer.appendChild(item);
    });
}
