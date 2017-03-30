import {
  exec
} from '../utils/command'

module.exports = {
  kill: (port) => {
    exec(`lsof -i tcp:${port}`).then(msg => {
      let usedId = /^\S+\s+(\d+)/igm.exec(msg)[1]
      if (usedId) {
        exec(`kill ${usedId}`).then(() => {
          console.log(`${port} have been killed`)
        })
      }
    }, () => {
      console.log('端口无占用情况')
    })
  }
}
