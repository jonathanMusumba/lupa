document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split('/').pop().replace('.html', '');

    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('content').innerHTML = data[page] || "<p>Content not found.</p>";
        })
        .catch(error => console.error('Error loading content:', error));
});