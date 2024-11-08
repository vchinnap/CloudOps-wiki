// script.js

async function searchDiscussions() {
  const query = document.getElementById('searchInput').value;
  if (query.length < 2) return; // Start search after 2 characters

  const token = 'YOUR_GITHUB_TOKEN'; // Replace with your GitHub token
  const repoOwner = 'YOUR_USERNAME'; // Replace with your GitHub username
  const repoName = 'YOUR_REPO_NAME'; // Replace with your repository name

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query($query: String!) {
            repository(owner: "${repoOwner}", name: "${repoName}") {
              discussions(first: 5, query: $query) {
                nodes {
                  title
                  url
                  bodyText
                }
              }
            }
          }
        `,
        variables: { query }
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    displayResults(result.data.repository.discussions.nodes);
  } catch (error) {
    console.error('Error fetching discussions:', error);
  }
}

function displayResults(discussions) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  discussions.forEach(discussion => {
    const item = document.createElement('li');
    item.innerHTML = `
      <a href="${discussion.url}" target="_blank">${discussion.title}</a>
      <p>${discussion.bodyText.substring(0, 100)}...</p>
    `;
    resultsContainer.appendChild(item);
  });
}
