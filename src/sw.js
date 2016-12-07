const CACHE_NAME = 'SDN-demo-site-cache-v1';
var urlsToCache = [
  '/',
  '/stylesheets/main.css',
  '/scripts/index.js',
  '/images/SDN_Logo.jpg',
  '/api/sessions'
];
var preCache = [
  '/speakers',
  '/api/speaker/timmy%20kokke'
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => {
    cache.addAll(preCache.map(url => new Request(url, { "mode": "no-cors" })));
    return cache.addAll(urlsToCache.map(url => new Request(url, { "mode": "no-cors" })))
  }))
})

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(response =>
    response ? response : fetch(event.request)
  ))
})