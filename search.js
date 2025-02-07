let searchData = [];
async function loadSearchData() {
    const response = await fetch('search-data.json');
    searchData = await response.json();
}
function performSearch() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    // Clear previous results
    resultsContainer.innerHTML = '';
    if (query.length < 1) return; // Avoid searching for very short queries
    // Filter pages based on the search query
    const results = searchData.filter(page =>
        page.title.toLowerCase().includes(query) ||
        page.description.toLowerCase().includes(query)
    );
    // Display search results
    results.forEach(page => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${page.url}">${page.title}</a>`;
        resultsContainer.appendChild(listItem);
    });
}
// Load search data when the page loads
window.onload = loadSearchData;