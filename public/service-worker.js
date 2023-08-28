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
    "revision": "22a7e9917661efd2fdc0091b683b77ac"
  }, {
    "url": "//js/app.js",
    "revision": "4980cd83fc2d9a2cd5e322281681863f"
  }, {
    "url": "/css/app.css",
    "revision": "117dedc210becf4efc64342706c7d758"
  }, {
    "url": "/js/chunks/07133064a3813d3e.js",
    "revision": null
  }, {
    "url": "/js/chunks/0cbb1b586f9a6be3.js",
    "revision": null
  }, {
    "url": "/js/chunks/1991f1d9467c5eb3.js",
    "revision": null
  }, {
    "url": "/js/chunks/1ed33cf8a1889d04.js",
    "revision": null
  }, {
    "url": "/js/chunks/20b9fd3ebe3192a7.js",
    "revision": null
  }, {
    "url": "/js/chunks/23a00288a05a375c.js",
    "revision": null
  }, {
    "url": "/js/chunks/2d264e8c3b304e3b.js",
    "revision": null
  }, {
    "url": "/js/chunks/3487599c0159fc56.js",
    "revision": null
  }, {
    "url": "/js/chunks/35b0e815b73d1adb.js",
    "revision": null
  }, {
    "url": "/js/chunks/367bdc5c53c3ce10.js",
    "revision": null
  }, {
    "url": "/js/chunks/406ea3ab4bc5249a.js",
    "revision": null
  }, {
    "url": "/js/chunks/40763b842c3094ac.js",
    "revision": null
  }, {
    "url": "/js/chunks/49a3c2f359123a8e.js",
    "revision": null
  }, {
    "url": "/js/chunks/5bab891683ff71a7.js",
    "revision": null
  }, {
    "url": "/js/chunks/64457fc112f2b92d.js",
    "revision": null
  }, {
    "url": "/js/chunks/686ce74d98ad7f0e.js",
    "revision": null
  }, {
    "url": "/js/chunks/941a00757578ea59.js",
    "revision": null
  }, {
    "url": "/js/chunks/a3df23d1d0ad9baf.js",
    "revision": null
  }, {
    "url": "/js/chunks/a5a53ca94bfd9db0.js",
    "revision": null
  }, {
    "url": "/js/chunks/b25df6682a254df3.js",
    "revision": null
  }, {
    "url": "/js/chunks/b4ca56e48d5d3a03.js",
    "revision": null
  }, {
    "url": "/js/chunks/d321279533ed1272.js",
    "revision": null
  }, {
    "url": "/js/chunks/dc81a1e7479b562d.js",
    "revision": null
  }, {
    "url": "/js/chunks/e2a67ecc43f5f48d.js",
    "revision": null
  }, {
    "url": "/js/chunks/e321b9da4d760740.js",
    "revision": null
  }, {
    "url": "/js/chunks/ef013305240c949c.js",
    "revision": null
  }, {
    "url": "/js/chunks/ef307920a88daa84.js",
    "revision": null
  }, {
    "url": "/js/chunks/f93c5597da068bcc.js",
    "revision": null
  }, {
    "url": "/js/chunks/fd70b361f0148167.js",
    "revision": null
  }], {});

}));
