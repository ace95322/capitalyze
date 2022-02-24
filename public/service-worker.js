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
define(['./workbox-fa046058'], (function (workbox) { 'use strict';

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
    "revision": "5d32e6d649e7858812a4b74e0e08f3e3"
  }, {
    "url": "//js/app.js",
    "revision": "2a26154a49ffc74ff94e40ba3579436e"
  }, {
    "url": "/css/app.css",
    "revision": "c21348e54a1cc21c79625c4f2d28bb2b"
  }, {
    "url": "/js/chunks/01abb199bf20a066.js",
    "revision": null
  }, {
    "url": "/js/chunks/0a9c9dcea4369fd7.js",
    "revision": null
  }, {
    "url": "/js/chunks/12577f5d336ec0f3.js",
    "revision": null
  }, {
    "url": "/js/chunks/205fdea2656d49ce.js",
    "revision": null
  }, {
    "url": "/js/chunks/22d5b4fb25303645.js",
    "revision": null
  }, {
    "url": "/js/chunks/2a8db6475a44bdfa.js",
    "revision": null
  }, {
    "url": "/js/chunks/3adef333016760a7.js",
    "revision": null
  }, {
    "url": "/js/chunks/3fcf74f3ecb56ffc.js",
    "revision": null
  }, {
    "url": "/js/chunks/4040579aebc08e3b.js",
    "revision": null
  }, {
    "url": "/js/chunks/48866cccc026ba07.js",
    "revision": null
  }, {
    "url": "/js/chunks/58ed082979fc7d7b.js",
    "revision": null
  }, {
    "url": "/js/chunks/6bb6e43c042878a9.js",
    "revision": null
  }, {
    "url": "/js/chunks/6dcd008eb05088b1.js",
    "revision": null
  }, {
    "url": "/js/chunks/75f2ae247a35977b.js",
    "revision": null
  }, {
    "url": "/js/chunks/7a32a0e59685289b.js",
    "revision": null
  }, {
    "url": "/js/chunks/8022ec7afdf35891.js",
    "revision": null
  }, {
    "url": "/js/chunks/952e1596645e9a46.js",
    "revision": null
  }, {
    "url": "/js/chunks/b0e44ad9cffec38b.js",
    "revision": null
  }, {
    "url": "/js/chunks/b744fd0a06b832e3.js",
    "revision": null
  }, {
    "url": "/js/chunks/bb6e582762dce8e4.js",
    "revision": null
  }, {
    "url": "/js/chunks/beff7ce1b98b5a62.js",
    "revision": null
  }, {
    "url": "/js/chunks/c108c4206fdde475.js",
    "revision": null
  }, {
    "url": "/js/chunks/ddbf9613c5ed2c91.js",
    "revision": null
  }, {
    "url": "/js/chunks/e15744fc5bc55203.js",
    "revision": null
  }, {
    "url": "/js/chunks/e31adcef839d6662.js",
    "revision": null
  }, {
    "url": "/js/chunks/e32682ac9e50b15a.js",
    "revision": null
  }, {
    "url": "/js/chunks/e6783a88c04ed40c.js",
    "revision": null
  }, {
    "url": "/js/chunks/f221200b424cd1f6.js",
    "revision": null
  }, {
    "url": "/js/chunks/fc1dab834587310a.js",
    "revision": null
  }], {});

}));
