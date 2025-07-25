
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("inditube-cache").then(cache => {
      return cache.addAll(["/", "/index.html", "/manifest.json", "/app-icon.png", "/admin.html"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
