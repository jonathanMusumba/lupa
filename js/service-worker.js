const CACHE_NAME = 'lupa-cache-v1';
const urlsToCache = [
    '/',
    '../index.html',
    '/styles.css',
    '/js/script.js',
    '/images/favicon/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            return response || fetch(event.request);
        })
    );
});