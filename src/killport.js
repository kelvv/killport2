import {
  exec
} from './utils/command'

module.exports = async ({ args }) => {
  exec(`lsof -i tcp:${args[0]}`).then(msg => {
    let usedId = /^\S+\s+(\d+)/igm.exec(msg)[1]
    if (usedId) {
      exec(`kill ${usedId}`).then(() => {
        console.log(`${args[0]} have been killed`)
      })
    }
  }, () => {
    console.log('端口无占用情况')
  })
}
