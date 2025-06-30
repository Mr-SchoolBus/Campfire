const CACHE_NAME = "bgg-cache-v1";
const urlsToCache = [
  "./",
  "./BGG.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
  // Add other assets (CSS, JS, images) as needed
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});