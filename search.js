const data = [
    { title: "Introduction to Algorithms", url: "#" },
    { title: "The Pragmatic Programmer", url: "#" },
    { title: "Clean Code", url: "#" },
    { title: "Design Patterns", url: "#" },
    { title: "JavaScript: The Good Parts", url: "#" },
];

// Function to search the data
function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = ''; // Clear previous results

    const filteredData = data.filter(item => item.title.toLowerCase().includes(input));

    if (filteredData.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
    } else {
        filteredData.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
            resultsDiv.appendChild(resultItem);
        });
    }
}