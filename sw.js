const CACHE="muhasibi-v3-14";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["/"])))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{const r=e.request;if(r.mode==="navigate"||r.headers.get("Accept").includes("text/html")){e.respondWith(fetch(r).catch(()=>caches.match(r)));return}e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{const c2=res.clone();caches.open(CACHE).then(ca=>ca.put(r,c2));return res})))});
