self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('finanzas-v1').then((cache) => {
            return cache.addAll([
                './',
                'index.html',
                'styles.css',
                'app.js',
                'manifest.json',
                'https://cdn.jsdelivr.net/npm/chart.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
