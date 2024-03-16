const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/admin/Sites/dinvilliers.github.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/admin/Sites/dinvilliers.github.io/src/pages/about.js"))),
  "component---src-pages-alaska-js": hot(preferDefault(require("/Users/admin/Sites/dinvilliers.github.io/src/pages/alaska.js"))),
  "component---src-pages-columbus-js": hot(preferDefault(require("/Users/admin/Sites/dinvilliers.github.io/src/pages/columbus.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/admin/Sites/dinvilliers.github.io/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/admin/Sites/dinvilliers.github.io/src/pages/index.js"))),
  "component---src-pages-juneau-js": hot(preferDefault(require("/Users/admin/Sites/dinvilliers.github.io/src/pages/juneau.js"))),
  "component---src-pages-thecar-js": hot(preferDefault(require("/Users/admin/Sites/dinvilliers.github.io/src/pages/thecar.js")))
}

