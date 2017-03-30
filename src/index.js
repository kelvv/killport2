const path = require('path')

global.load = (url) => {
  if (url.startsWith('/')) {
    return require(path.join(`${__dirname}`, '..', url))
  } else {
    return require(url)
  }
}

module.exports = require('./killport')
