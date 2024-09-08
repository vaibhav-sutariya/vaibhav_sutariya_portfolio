'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "30aef0ccdfe2b0787255ffd86cf8ad35",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c9603db7e10073ad5ac787b10d06596b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e77b2422ca2a6f99180b8e8e67217f0c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77641e357fe2946fafce03c83061102f",
".git/logs/refs/heads/master": "e697a5758c4752790d83977372a0b6ac",
".git/logs/refs/remotes/origin/master": "0c26a3c6baef0bf32562adb6f1ecf37e",
".git/objects/00/032d83d751c0c4e20f0ee02344dc98e60e47d2": "b0635607f730d7fd00cceffd96b0b552",
".git/objects/03/18af09f4a94bb32a411903c5a8fcead7b94fdc": "aa193b2bf9c94389e958a89c383c2777",
".git/objects/06/5180f254409ddff4901b0d162c55f77ed67d87": "aaab96d173c979bc18a58d9124308201",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/2e15faa1fdeecb8ac14da440fd46b74612694e": "9f79297c9b3e76d956f1f42dc6a6617a",
".git/objects/0c/b18a175dd7ce448b74195506d4f523bfbf9df8": "78e6e54519450cef0c9b2a095d07739a",
".git/objects/0c/c6ca36718fa705247fb36d55014d8c3e3bf942": "b7a7a7c0bcf79ba3532a809c1a24a63f",
".git/objects/0f/99b7afb302976f2dabbd1270e0e14c6086279b": "ef8075864e03c56a9a7eb6238d414e92",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/8b4141a995373cb395660f40e5739d072c3e45": "c16ef64190ef1ed70c668dbbea827c1d",
".git/objects/2b/b00917623d8710e3a2b96f1ebe0727abc74033": "7b86f7b0fb37a3f7af44b1cdc623e4c1",
".git/objects/2d/288dc0c00b3faaabfd14b308637803ba95c919": "3aaa760bd21e597d5f93112374008321",
".git/objects/2f/c0ba715e095b6f978a8c9add572e275f2cf63e": "ce6ed0a9cf8515acbf3934bc0734684a",
".git/objects/30/0f6d96146024ec583e78b1c08e5e29e045358b": "8a6eee2776f060a0dafa16f276979482",
".git/objects/36/ca3c29d24d294097dce036e016fd70026aff3d": "96d7389722fb11391403fed51e4580ae",
".git/objects/41/cbc4d6812e33facc316585d670a6262aa95a5d": "06e26fcf8a8505bd3a353ff516c81f63",
".git/objects/42/a8a77c01d4f5b083df7ffdddf43925f97fe8d1": "a7ad083592098c7719958a75ee763d25",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/1830c1cde35859da80aa2dac44981af5c3acf9": "a88922a2787033d9f366526e5f025ad3",
".git/objects/54/7aaa68738547f46496dc2e9d65137922e44fce": "faafd369750114a15a30f96e00c0db33",
".git/objects/57/7637f537081cf83a7b9b8e6e873177ed937f8c": "84952f0b32156fc57ec4fab01243ea17",
".git/objects/58/96a76baa34d38f88e14db29f5d122b7ba86baa": "93249ea71dde9fa3fb38786b4df311af",
".git/objects/5d/9e55b4a2f9176568d113a2cfa651d206ed9f36": "77f94a0c5a85b8f9539afea3910084d7",
".git/objects/66/f5e1e6ec9ce0c7c7b12263d01e6b212f9d9c70": "646a6b94c843ba8953cd25aeb14ba920",
".git/objects/68/049aea35c83b30771be1a6eea4e179602a0e22": "8340199ab022ba5d8cf09326021f9dd9",
".git/objects/68/893addaa6c3eeeb09f76f7d9c2796dcaa57a2c": "4cc2558c9e12addcb402656321450f48",
".git/objects/6a/0f2975a4d82e54de256919afcc201ac3be05d1": "e906aa80ba5a936f784ec47f18821439",
".git/objects/74/0d0b0806304ae58386c6a226b656115265015f": "17b115a3efca1deac9198fa7f5805925",
".git/objects/77/fac46dcaa7353d227193db43335ebf3fed4fb3": "aa03dd603e7a170dc5e42e20a499f9d1",
".git/objects/7f/10a16f9a37f85f7dc8aabc9d0d8ab6ee081473": "28b5d752f8483b911ef6a7d961852192",
".git/objects/84/250d8846dab4f64a077e05818ffc80d772bfee": "5078a0be35852253005f6e4cc71802d1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/6c7f9e2b354e0a3cdb7ff1cc316b97a47897a1": "2bbb5633a3ccbffe4934e4bb3bdb492f",
".git/objects/a0/9817ccf57795950b393c2383e2ee1f98053399": "77e71d124b02e11a7eaec9de7bad0308",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/cf/61e6f798b97af322b733e59bddcc1198f16461": "4b1e04d96a0a42d15ee8ee70e7fc0df4",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/5e5c3815f60dca29592a759468c768acf6fd11": "4eeb44fb3550796d9ffc06b738041f43",
".git/objects/d9/da3fd2d29bee7e0ec794eed448bde3bde20fe8": "ed310b1af04f0c79482b60c448199e6c",
".git/objects/da/327b28bcccac54a806228a9b7c1857810a5bd2": "843777b6e06e03fb489f230185e7113b",
".git/objects/dc/69d987e81e0bb29b5004a955e47f9c99485a0b": "fae5733d104e0b584fb091f4a73025a2",
".git/objects/de/746faacfb88b0bcd369558d8583b0206c5340a": "13fd4638835a8737a6900b42d7877d21",
".git/objects/e6/c057ccfe3dc0e6628de3a1e176d212a3681cac": "d2cd0dcec444a092b30a97ef758f62ca",
".git/objects/e9/a15120cb52df79845e1643b00f498ef6deef22": "eeffde7d299346fd0d1dac7596bde92d",
".git/objects/ea/6ba41c7ae506d83022106f996b613c813843f5": "54f2143c506e29d909ae898087c6d06c",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/master": "6e9a90382dc734f77a8a7b7617cf8aef",
".git/refs/remotes/origin/master": "6e9a90382dc734f77a8a7b7617cf8aef",
"assets/AssetManifest.bin": "fe976661da94fdb63570ec68aab1b1e5",
"assets/AssetManifest.bin.json": "c37046f4b97e25ffdadb9ed39dd573b0",
"assets/AssetManifest.json": "ffaac2c2e1283526b91ecd861cbfd5ee",
"assets/assets/images/ai_bot.png": "8cd5a03eca6a6c288f49cdfe118b1b48",
"assets/assets/images/ai_final.gif": "b9fb4b04171ed5d9d9b7db31135e88dd",
"assets/assets/images/ai_travel_app.png": "24e3a8178183ed3e0601edec0a16d096",
"assets/assets/images/all5.gif": "1e1431f8a8ff0bdb071cd5c5de4a10b8",
"assets/assets/images/brew_crew.png": "d61f39db9df7c268500a8c11c7067b33",
"assets/assets/images/Hungry.png": "00c240a125ce2e0dcc471f49f4cfa472",
"assets/assets/images/profile.jpg": "a505b8301f61362fac507ffdd477714e",
"assets/assets/images/profile.png": "f2b74d94cef51e311d0ebce4f8fcaadd",
"assets/assets/images/vs_logo.png": "2d18ba9ccc1af2924bdf1549debddf31",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "79bdeaa02d5f2962ed28456ea2b7b071",
"assets/NOTICES": "c1b089acfb3d63795e494244c144436f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "9a39ab8aa3d828142935da9efe99b3a2",
"canvaskit/canvaskit.wasm": "afdcccf150b5cba228e27c813548b842",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "43ec75ce562f82c5dc5be1a738d87e37",
"canvaskit/chromium/canvaskit.wasm": "3909da2fbccad1a2e4a1f42750d24977",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "0b8baeff2b4484d2d6be67a7e082f9db",
"canvaskit/skwasm.wasm": "ee4afa1790abb925360fd9519c5194f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "224ab8267c52e3651320b8fbc0d5880e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "9e4e026837e126a16b158738934dd8af",
"icons/Icon-192.png": "35bef6d107e416825a0e4f48a9652940",
"icons/Icon-512.png": "96070f5f5f63754ffd49976a582081e5",
"icons/Icon-maskable-192.png": "35bef6d107e416825a0e4f48a9652940",
"icons/Icon-maskable-512.png": "96070f5f5f63754ffd49976a582081e5",
"index.html": "314adfc993edbcb45ee54b06299c8e65",
"/": "314adfc993edbcb45ee54b06299c8e65",
"main.dart.js": "4b0cca723578cc5ba6608fbfbbcaa7e5",
"manifest.json": "5a8824b563875d00c4b05f75ad8fa803",
"version.json": "0559e7fec3329dd1adb794b78a316577"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
