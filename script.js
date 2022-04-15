/**
 * A simple script to get https://github.com/liriliri/eruda working with via browser with an easy to use plugin loader.
 *
 * Date of creation: April 15, 2022
 * @author qxb3 https://github.com/qxb3
 * @license MIT
*/

(() => {
  const cdnUrl = "//cdn.jsdelivr.net/npm/"
  const toCamelCase = (str) => str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())

  const loadScript = (name, callback) => {
    const script = document.createElement("script")
    script.src = cdnUrl + name
    script.onload = callback

    document.body.appendChild(script)
  }

  const loadPlugins = (plugins) => {
    plugins = plugins.map(plugin => "eruda-" + plugin)

    plugins.forEach(plugin => {
      loadScript(plugin, () => {
        eruda.add(window[toCamelCase(plugin)])
      })
    })
  }

  loadScript("eruda", () => {
    eruda.init()

    // Visit: https://github.com/liriliri/eruda#plugins to see available plugins (NOTE: don't include the "eruda" at the beginning)
    loadPlugins(["fps", "code", "dom"])
  })
})()
