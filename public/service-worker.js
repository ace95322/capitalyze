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
    "revision": "22f5ea5993684079cbdf79a07b02669d"
  }, {
    "url": "//js/app.js",
    "revision": "5f1e4370eff4aa47ded463c50999f813"
  }, {
    "url": "/css/app.css",
    "revision": "117dedc210becf4efc64342706c7d758"
  }, {
    "url": "/js/chunks/0230f0dda5ae8033.js",
    "revision": null
  }, {
    "url": "/js/chunks/05e19ce2114a7572.js",
    "revision": null
  }, {
    "url": "/js/chunks/0898318ad9733c84.js",
    "revision": null
  }, {
    "url": "/js/chunks/1adfaf3d49350682.js",
    "revision": null
  }, {
    "url": "/js/chunks/32684063f4344e48.js",
    "revision": null
  }, {
    "url": "/js/chunks/38ce679d2be27430.js",
    "revision": null
  }, {
    "url": "/js/chunks/4cd3cdf73a267304.js",
    "revision": null
  }, {
    "url": "/js/chunks/5d399c52beae2d3b.js",
    "revision": null
  }, {
    "url": "/js/chunks/5ff90258787d4437.js",
    "revision": null
  }, {
    "url": "/js/chunks/65965ff14c99ec4f.js",
    "revision": null
  }, {
    "url": "/js/chunks/72d17e6eaf08192e.js",
    "revision": null
  }, {
    "url": "/js/chunks/795fd034c8f4fc52.js",
    "revision": null
  }, {
    "url": "/js/chunks/7e5d5a9518e905fa.js",
    "revision": null
  }, {
    "url": "/js/chunks/8473f4149b01e743.js",
    "revision": null
  }, {
    "url": "/js/chunks/9117ae0f6089a45e.js",
    "revision": null
  }, {
    "url": "/js/chunks/9e248be8cb458888.js",
    "revision": null
  }, {
    "url": "/js/chunks/9f70fbe9816303b2.js",
    "revision": null
  }, {
    "url": "/js/chunks/a1dc58f663146e5a.js",
    "revision": null
  }, {
    "url": "/js/chunks/a809e8531f7cf6b2.js",
    "revision": null
  }, {
    "url": "/js/chunks/b4ce6bd7d36aac0a.js",
    "revision": null
  }, {
    "url": "/js/chunks/c39d5f00e4cac893.js",
    "revision": null
  }, {
    "url": "/js/chunks/ccb6c6c8a3a7e8b9.js",
    "revision": null
  }, {
    "url": "/js/chunks/d2d2ad2f00574d1d.js",
    "revision": null
  }, {
    "url": "/js/chunks/d446bbfeb52ee008.js",
    "revision": null
  }, {
    "url": "/js/chunks/d841683b42e24abf.js",
    "revision": null
  }, {
    "url": "/js/chunks/d92e90a3d10a89ba.js",
    "revision": null
  }, {
    "url": "/js/chunks/e7b51056addb6b76.js",
    "revision": null
  }, {
    "url": "/js/chunks/ec8edc3f27a787a9.js",
    "revision": null
  }, {
    "url": "/js/chunks/fae05b305f0755cb.js",
    "revision": null
  }], {});

}));
