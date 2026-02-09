const cacheName = 'grey-glow-v3'; // Naikkan versi ke v3
const assets = [
  './', 
  './index.html', 
  './manifest.json', 
  './logo.png' // WAJIB tambah ini supaya logo boleh keluar
];

// Pasang Service Worker dan simpan cache
self.addEventListener('install', (e) => {
  self.skipWaiting(); 
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assets))
  );
});

// Padam cache lama secara automatik
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))
      );
    })
  );
});

// Ambil fail dari cache, jika tiada baru guna network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
