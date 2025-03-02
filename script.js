document.getElementById('generateButton').addEventListener('click', function () {
  const title = document.getElementById('titleInput').value.trim();
  const description = document.getElementById('descriptionInput').value.trim();

  if (title && description) {
    generateMetaTags(title, description);
  } else {
    alert('Please enter both title and description!');
  }
});

function generateMetaTags(title, description) {
  // Generate meta tags
  const metaTags = `
<meta name="title" content="${title}">
<meta name="description" content="${description}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
  `;

  // Display meta tags
  document.getElementById('metaTagsCode').textContent = metaTags;

  // Display search engine preview
  document.getElementById('previewTitle').textContent = title;
  document.getElementById('previewDescription').textContent = description;
}