const cacheName = 'grey-glow-v4'; // Versi v4 untuk kemaskini logo & layout
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo.png' // Memastikan logo disimpan untuk kegunaan offline
];

// Pasang Service Worker dan simpan cache
self.addEventListener('install', (e) => {
  self.skipWaiting(); // Paksa SW baru aktif serta-merta tanpa menunggu tab ditutup
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('SW: Menambah assets ke dalam cache');
      return cache.addAll(assets);
    })
  );
});

// Padam cache lama secara automatik (Cleanup)
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => {
          console.log('SW: Memadam cache lama:', key);
          return caches.delete(key);
        })
      );
    })
  );
});

// Strategi: Cache First, then Network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      // Pulangkan fail dari cache jika ada, jika tidak ambil dari network
      return res || fetch(e.request);
    })
  );
});
