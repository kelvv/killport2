import process from 'child_process'

export function exec (command) {
  return new Promise((resolve, reject) => {
    process.exec(command, (error, msg, stderr) => {
      if (error) {
        reject(error)
      }
      resolve(`${msg} ${stderr}`)
    })
  })
}
