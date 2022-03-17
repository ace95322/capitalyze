/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-d1035889'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "//installer/js/app.js",
    "revision": "3767032a80bd6599e7e50cc6b66f23d4"
  }, {
    "url": "//js/app.js",
    "revision": "c705277105fd17ca47cbe78c8b09f843"
  }, {
    "url": "/css/app.css",
    "revision": "b5bb4c9cb7a8417d4905dc3c4f729bc7"
  }, {
    "url": "/js/chunks/08e0df714d1c4b0e.js",
    "revision": null
  }, {
    "url": "/js/chunks/0b0c9e3022400b52.js",
    "revision": null
  }, {
    "url": "/js/chunks/100ceb8b54e894c0.js",
    "revision": null
  }, {
    "url": "/js/chunks/12bf35d4566bc84a.js",
    "revision": null
  }, {
    "url": "/js/chunks/1d8810e575db8fc2.js",
    "revision": null
  }, {
    "url": "/js/chunks/25c48d713ab01798.js",
    "revision": null
  }, {
    "url": "/js/chunks/27c614069d327fe5.js",
    "revision": null
  }, {
    "url": "/js/chunks/334608750453f90e.js",
    "revision": null
  }, {
    "url": "/js/chunks/43cd086ca0579fb2.js",
    "revision": null
  }, {
    "url": "/js/chunks/4681d5faed0ace04.js",
    "revision": null
  }, {
    "url": "/js/chunks/611bd8d1efd10036.js",
    "revision": null
  }, {
    "url": "/js/chunks/75f31f641a076a1c.js",
    "revision": null
  }, {
    "url": "/js/chunks/87c6777b46753f7d.js",
    "revision": null
  }, {
    "url": "/js/chunks/8ce35360bf5684d6.js",
    "revision": null
  }, {
    "url": "/js/chunks/8d23749804d82c5c.js",
    "revision": null
  }, {
    "url": "/js/chunks/93155e6f837b7881.js",
    "revision": null
  }, {
    "url": "/js/chunks/9cece40b70a50540.js",
    "revision": null
  }, {
    "url": "/js/chunks/a9825dad70ca657e.js",
    "revision": null
  }, {
    "url": "/js/chunks/a9e65659bc7b78a1.js",
    "revision": null
  }, {
    "url": "/js/chunks/b8f24118c33ffe73.js",
    "revision": null
  }, {
    "url": "/js/chunks/c14ae50ba9001310.js",
    "revision": null
  }, {
    "url": "/js/chunks/d3281bdcb066f35b.js",
    "revision": null
  }, {
    "url": "/js/chunks/d87871feef11758f.js",
    "revision": null
  }, {
    "url": "/js/chunks/d8c4c7541073f7b5.js",
    "revision": null
  }, {
    "url": "/js/chunks/e3e950e2542591b5.js",
    "revision": null
  }, {
    "url": "/js/chunks/e6e35a152f3f9183.js",
    "revision": null
  }, {
    "url": "/js/chunks/eada988d85acfe37.js",
    "revision": null
  }, {
    "url": "/js/chunks/f8cacf666c9aed81.js",
    "revision": null
  }, {
    "url": "/js/chunks/fa2c575bf1d63a70.js",
    "revision": null
  }], {});

}));
