// ==UserScript==
// @name         eiv
// @description  A simple script to get eruda running on via browser
// @namespace    https://github.com/qxb3/eiv
// @version      1.0.1
// @run-at       document-start
// @match        *
// @grant        none
// ==/UserScript==

(function() {
  const cdnUrl = '//cdn.jsdelivr.net/npm/'
  const toCamelCase = (str) => str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())

  const loadScript = (name, callback) => {
    const script = document.createElement('script')
    script.src = cdnUrl + name
    script.onload = callback

    document.body.appendChild(script)
  }

  const loadPlugins = (plugins) => {
    plugins = plugins.map(plugin => 'eruda-' + plugin)

    plugins.forEach(plugin => {
      loadScript(plugin, () => {
        eruda.add(window[toCamelCase(plugin)])
      })
    })
  }

  loadScript('eruda', () => {
    eruda.init({
      defaults: {
        displaySize: 55,
        theme: 'Dark'
      }
    })

    // Visit: https://github.com/liriliri/eruda#plugins to see available plugins (NOTE: don't include the 'eruda' at the beginning)
    loadPlugins(['fps', 'code', 'dom'])
  })
})()
