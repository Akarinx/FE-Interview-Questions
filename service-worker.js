/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bf7e33c69b03582b68ce8d7e27b5bf8f"
  },
  {
    "url": "assets/css/0.styles.9fe9b7c8.css",
    "revision": "7df21c95719f98ea24fa71d3738105ce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d5a7fc4f.js",
    "revision": "24db0fac1d561487cab4c43c5ca49b04"
  },
  {
    "url": "assets/js/11.285712b3.js",
    "revision": "3b869a2f8f6fe8382070d726a1da5cb5"
  },
  {
    "url": "assets/js/12.96027015.js",
    "revision": "ed1e605a80a466b64d4a7e7650cd1b2a"
  },
  {
    "url": "assets/js/13.0ac8f0f8.js",
    "revision": "acf0ff76ffcb2cec9ad92f355e682759"
  },
  {
    "url": "assets/js/14.fb0d0d4a.js",
    "revision": "6a29f8b68561fdf15df2fc9a92c30268"
  },
  {
    "url": "assets/js/15.852023db.js",
    "revision": "d2448c24c15dc3ddccf0ef5dcc5619a3"
  },
  {
    "url": "assets/js/16.e26dbdc8.js",
    "revision": "42226e8a6488f4699057a26ba9cd5cf0"
  },
  {
    "url": "assets/js/17.7134c322.js",
    "revision": "c979429f4f17977e73bfde9498855279"
  },
  {
    "url": "assets/js/2.b2a2fa4e.js",
    "revision": "c5f7e75aa99ebeb7a9ff7b9e9618d2bf"
  },
  {
    "url": "assets/js/3.ec3d57e3.js",
    "revision": "fcda822dc76699a333e5f14bf5b19ac6"
  },
  {
    "url": "assets/js/4.586594a9.js",
    "revision": "7e0f61ac815e854d27eae1697adcf463"
  },
  {
    "url": "assets/js/5.197936f6.js",
    "revision": "765645ad18a2f381bc90a17219d276e3"
  },
  {
    "url": "assets/js/6.b7460dcb.js",
    "revision": "19307aed6c076095da31339b18ab2a45"
  },
  {
    "url": "assets/js/7.90df91ca.js",
    "revision": "1d115aa59eff2476805de3ccbc2ffe91"
  },
  {
    "url": "assets/js/8.ad553f8d.js",
    "revision": "424f63f9b3620989b9a8a63285c4e31d"
  },
  {
    "url": "assets/js/9.31e92875.js",
    "revision": "c25fdd7a07ef6775dab8b392476e9947"
  },
  {
    "url": "assets/js/app.ca29e7cd.js",
    "revision": "97412ce1b2205e7354aa131ca3c17525"
  },
  {
    "url": "docs/advance.html",
    "revision": "e07f9f11c81a376242da0658713a0e80"
  },
  {
    "url": "docs/base.html",
    "revision": "e8fc20fc1b4ecd50899dcdaf18457ab9"
  },
  {
    "url": "docs/comprehensive.html",
    "revision": "f8cd52e01e6756befc1e49c8fe834772"
  },
  {
    "url": "docs/computed-base.html",
    "revision": "5f85a956d99ec3da7ffaadd6c06b0b1a"
  },
  {
    "url": "docs/excellent.html",
    "revision": "610435aadc873d48bd1531293f4a5586"
  },
  {
    "url": "docs/improve.html",
    "revision": "ebe4e02bc0fe5bd5090d378c216020c4"
  },
  {
    "url": "docs/qa.html",
    "revision": "57058bd68b28bac6c06868ddb2145f3e"
  },
  {
    "url": "docs/review.html",
    "revision": "48fb08b29b46215c8deaf9fefafdb701"
  },
  {
    "url": "docs/simply.html",
    "revision": "f35b3311fbef66c11103e42c99cc5727"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "e12c8ddbb3d428be2369d5ec9d92a011"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "qrcode.jpg",
    "revision": "ee193d2841cd47e179326d50d67312f9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
