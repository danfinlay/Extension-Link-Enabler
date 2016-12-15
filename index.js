const extension = require('extensionizer')

module.exports = function () {
  global.addEventListener('click', (e) => {
    const event = global.e || e
    if (event.target.tagName !== 'A') {
      return
    } else {
      event.preventDefault()
      const url = event.target.href
      alert("we here.")
      // extension.tabs.create({ url })
    }
  }, false)
}
