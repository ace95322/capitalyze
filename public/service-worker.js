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
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-903cc191'], function (workbox) { 'use strict';

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
    "url": "//css/app.css",
    "revision": "674d2f18823c4db495341102c4cc4f54"
  }, {
    "url": "//installer/css/app.css",
    "revision": "f66d5bbf552af1ea3260d987e379999f"
  }, {
    "url": "//installer/js/app.js",
    "revision": "5904722ebb043f5d77e2be8be2ce36b0"
  }, {
    "url": "//js/app.js",
    "revision": "b002784bc7027dedf9f46959b9732423"
  }, {
    "url": "/images/background.svg?d41d8cd98f00b204e9800998ecf8427e",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }, {
    "url": "/js/chunks/0926169a7ab951dae3be.js",
    "revision": null
  }, {
    "url": "/js/chunks/0ed91ba884e98ff0f888.js",
    "revision": null
  }, {
    "url": "/js/chunks/10bea939fdbb5fc52c4d.js",
    "revision": null
  }, {
    "url": "/js/chunks/147db08c7fb8bb3b5d57.js",
    "revision": null
  }, {
    "url": "/js/chunks/20520b14338b5afdaca5.js",
    "revision": null
  }, {
    "url": "/js/chunks/261c23c57027aa6b7d93.js",
    "revision": null
  }, {
    "url": "/js/chunks/2c38660300a539f5a412.js",
    "revision": null
  }, {
    "url": "/js/chunks/2c7389b971ac3f0839bd.js",
    "revision": null
  }, {
    "url": "/js/chunks/32281a1563362eb34f60.js",
    "revision": null
  }, {
    "url": "/js/chunks/3d9fd0c625d203eec88e.js",
    "revision": null
  }, {
    "url": "/js/chunks/3f481cd93a873340a994.js",
    "revision": null
  }, {
    "url": "/js/chunks/411159108ad6e35f8346.js",
    "revision": null
  }, {
    "url": "/js/chunks/434d15021ee2778dedc4.js",
    "revision": null
  }, {
    "url": "/js/chunks/47e756e54e6c01d75b09.js",
    "revision": null
  }, {
    "url": "/js/chunks/4d36bbe9757f6fa7197e.js",
    "revision": null
  }, {
    "url": "/js/chunks/4d8e8f7f75a07f1cd9fc.js",
    "revision": null
  }, {
    "url": "/js/chunks/5c246c0810358d3717e6.js",
    "revision": null
  }, {
    "url": "/js/chunks/6499627625b4f9ae954d.js",
    "revision": null
  }, {
    "url": "/js/chunks/6ff5f2c9a8b1506e113d.js",
    "revision": null
  }, {
    "url": "/js/chunks/769eca35f33711f4cfd3.js",
    "revision": null
  }, {
    "url": "/js/chunks/77a96c89ed46e032bcff.js",
    "revision": null
  }, {
    "url": "/js/chunks/7c2ac743f42546fa0627.js",
    "revision": null
  }, {
    "url": "/js/chunks/82253416edeff6740e42.js",
    "revision": null
  }, {
    "url": "/js/chunks/9b4d6bab07b3b9def7fa.js",
    "revision": null
  }, {
    "url": "/js/chunks/ad2985a7d3b8b18c9359.js",
    "revision": null
  }, {
    "url": "/js/chunks/bf11157fb1d917a94b6c.js",
    "revision": null
  }, {
    "url": "/js/chunks/bf121db23eadea1dd9ff.js",
    "revision": null
  }, {
    "url": "/js/chunks/d163fc35be452df923bc.js",
    "revision": null
  }, {
    "url": "/js/chunks/d2438dc29c380d17b997.js",
    "revision": null
  }, {
    "url": "/js/chunks/ddd60457095518ae9ad7.js",
    "revision": null
  }, {
    "url": "/js/chunks/de214fd032d67a7837a2.js",
    "revision": null
  }, {
    "url": "/js/chunks/deaa1c162d68f907be19.js",
    "revision": null
  }, {
    "url": "/js/chunks/e47736131c25b9383bfe.js",
    "revision": null
  }, {
    "url": "/js/chunks/e502c72fc6f2cf58797a.js",
    "revision": null
  }, {
    "url": "/js/chunks/e5210bbe6676ca3562aa.js",
    "revision": null
  }, {
    "url": "/js/chunks/e8d441d646f63984d13d.js",
    "revision": null
  }, {
    "url": "/js/chunks/f86a6a6c2552fcc892d4.js",
    "revision": null
  }, {
    "url": "/js/chunks/fb3a1a8981552e73ad82.js",
    "revision": null
  }], {});

});
