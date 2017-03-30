import program from 'commander'
import pkg from '../../package.json'

program
  .version(pkg.version)

program.on('--help', () => {
  console.log('  Examples:')
  console.log()
  console.log('    $ killport 3000')
  console.log()
})

module.exports = program
