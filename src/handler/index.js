const linuxHandler = require('./linuxHandler')
const macHandler = require('./macHandler')
const windowHandler = require('./windowHandler')

const handlers = {
  Linux: linuxHandler,
  Darwin: macHandler,
  Windows_NT: windowHandler
}

module.exports = {
  get: (type) => {
    return handlers[type]
  }
}
