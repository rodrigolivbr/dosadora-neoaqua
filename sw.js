const CACHE_NAME = "neoaqua-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  // Deixa tudo passar normalmente para a ESP32
});