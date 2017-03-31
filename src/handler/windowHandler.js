import {
  exec
} from '../utils/command'

module.exports = {
  kill: (port) => {
    exec(`netstat -ano |findstr ${port}`).then(msg => {
      let pid = /(\d+)$/m.exec(msg)[1]
      if (pid) {
        exec(`tasklist|findstr ${pid}`).then((msg) => {
          let processName = /(^\S+)/.exec(msg)[1]
          exec(`taskkill -f -t -im ${processName}`).then(() => {
            console.log(`${port} have been killed`)
          }, (err) => {
            console.log(err)
          })
        }, (err) => {
          console.log(err)
        })
      }
    }, () => {
      console.log('端口无占用情况')
    })
  }
}
