/*
 * 福祉サポーターズサポートアプリ・そよぎ（高齢者版） - Service Worker
 * オフラインで完全に動くよう、アプリ一式をキャッシュします。
 * 中身を更新したら CACHE の数字を上げてください（例 v1 -> v2）。
 * ★言語（content.<code>.js）を増やしたら ASSETS にも追加してください。
 */
var CACHE = "soyogiws-v36";
var ASSETS = [
  "./",
  "./index.html",
  "./i18n.js",
  "./audio.js",
  "./rokuyo.js",
  "./content.ja.js",
  "./content.en.js",
  "./content.de.js",
  "./content.fr.js",
  "./content.it.js",
  "./content.es.js",
  "./content.ko.js",
  "./content.sv.js",
  "./content.nl.js",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

// cache-first: あればキャッシュ、なければ取得してキャッシュ。オフライン時は index.html を返す。
self.addEventListener("fetch", function(e){
  if(e.request.method!=="GET") return;
  e.respondWith(
    caches.match(e.request).then(function(hit){
      if(hit) return hit;
      return fetch(e.request).then(function(res){
        var copy=res.clone(); caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        return res;
      }).catch(function(){ return caches.match("./index.html"); });
    })
  );
});
