const extension = require('extensionizer')

module.exports = {
  setupListener: setupListener,
  teardownListener: teardownListener,
}

function setupListener (targetElement) {
  targetElement.addEventListener('click', clickHandler)
}

function teardownListener (targetElement) {
  targetElement.removeEventListener('click', clickHandler)
}

function clickHandler (event) {
  if (event.target.tagName.toUpperCase() !== 'A') {
    return
  } else if (event.target.href) {
    event.preventDefault()
    const url = event.target.href
    extension.tabs.create({ url: url })
  }
}
