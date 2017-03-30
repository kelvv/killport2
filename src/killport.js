import os from 'os'
let handlers = require('./handler')

module.exports = async ({ args }) => {
  let handler = handlers.get(os.type())
  handler.kill(args[0])
}
