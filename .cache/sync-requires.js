const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/joanna/Desktop/dinvilliers.github.io 18 sept.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/joanna/Desktop/dinvilliers.github.io 18 sept.io/src/pages/about.js"))),
  "component---src-pages-alaska-js": hot(preferDefault(require("/Users/joanna/Desktop/dinvilliers.github.io 18 sept.io/src/pages/alaska.js"))),
  "component---src-pages-asif-js": hot(preferDefault(require("/Users/joanna/Desktop/dinvilliers.github.io 18 sept.io/src/pages/asif.js"))),
  "component---src-pages-columbus-js": hot(preferDefault(require("/Users/joanna/Desktop/dinvilliers.github.io 18 sept.io/src/pages/columbus.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/joanna/Desktop/dinvilliers.github.io 18 sept.io/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/joanna/Desktop/dinvilliers.github.io 18 sept.io/src/pages/index.js"))),
  "component---src-pages-juneau-js": hot(preferDefault(require("/Users/joanna/Desktop/dinvilliers.github.io 18 sept.io/src/pages/juneau.js"))),
  "component---src-pages-noora-js": hot(preferDefault(require("/Users/joanna/Desktop/dinvilliers.github.io 18 sept.io/src/pages/noora.js")))
}

