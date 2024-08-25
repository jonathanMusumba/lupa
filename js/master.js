document.addEventListener('DOMContentLoaded', () => {
    const getQueryParam = (param) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    };

    const loadContent = (page) => {
        fetch(`content/${page}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    };

    const page = getQueryParam('page') || 'index';
    loadContent(page);
});