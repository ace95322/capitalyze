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
define(['./workbox-b7445681'], (function (workbox) { 'use strict';

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
    "revision": "58e14bc594186d6bbc828b674876e2a5"
  }, {
    "url": "//js/app.js",
    "revision": "3d7e844886ef602d4bd3f7f5ad96e692"
  }, {
    "url": "/css/app.css",
    "revision": "117dedc210becf4efc64342706c7d758"
  }, {
    "url": "/js/chunks/07069cee7470b7d9.js",
    "revision": null
  }, {
    "url": "/js/chunks/0da61625130ef492.js",
    "revision": null
  }, {
    "url": "/js/chunks/25cde2abbfcce2df.js",
    "revision": null
  }, {
    "url": "/js/chunks/2cc0cff126cc460c.js",
    "revision": null
  }, {
    "url": "/js/chunks/2d4de5a487e2c905.js",
    "revision": null
  }, {
    "url": "/js/chunks/302e4dfbcb4c9058.js",
    "revision": null
  }, {
    "url": "/js/chunks/323f2dd68b2a1ca4.js",
    "revision": null
  }, {
    "url": "/js/chunks/35172069bf1d13c8.js",
    "revision": null
  }, {
    "url": "/js/chunks/355cb511ea30f6ee.js",
    "revision": null
  }, {
    "url": "/js/chunks/447f87b9876c00a5.js",
    "revision": null
  }, {
    "url": "/js/chunks/5272a4f743f3b6db.js",
    "revision": null
  }, {
    "url": "/js/chunks/529c90906fa870f2.js",
    "revision": null
  }, {
    "url": "/js/chunks/545e160b349f5533.js",
    "revision": null
  }, {
    "url": "/js/chunks/65f38b854926f745.js",
    "revision": null
  }, {
    "url": "/js/chunks/6980c80baba4d99e.js",
    "revision": null
  }, {
    "url": "/js/chunks/780036a3b4242b3a.js",
    "revision": null
  }, {
    "url": "/js/chunks/9a8758387c2b9ad1.js",
    "revision": null
  }, {
    "url": "/js/chunks/b8c73dbbb69c8489.js",
    "revision": null
  }, {
    "url": "/js/chunks/b90d0a0f293989a4.js",
    "revision": null
  }, {
    "url": "/js/chunks/bf7648450138fa99.js",
    "revision": null
  }, {
    "url": "/js/chunks/c37e123ff05559cb.js",
    "revision": null
  }, {
    "url": "/js/chunks/c419134b2db54b8e.js",
    "revision": null
  }, {
    "url": "/js/chunks/c89d19195b93a840.js",
    "revision": null
  }, {
    "url": "/js/chunks/ca3afa1557150890.js",
    "revision": null
  }, {
    "url": "/js/chunks/cc2377140122f487.js",
    "revision": null
  }, {
    "url": "/js/chunks/d28fb655069c32cf.js",
    "revision": null
  }, {
    "url": "/js/chunks/d3a33890ff2b7f07.js",
    "revision": null
  }, {
    "url": "/js/chunks/d6723f19ef15061e.js",
    "revision": null
  }, {
    "url": "/js/chunks/ffb11976d381e6f1.js",
    "revision": null
  }], {});

}));
