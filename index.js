const { spawn } = require('cross-spawn')
const Confirm = require('prompt-confirm')

function dangCli([promptMessage, command, ...args]) {
  promptBeforeCallback(promptMessage, () => {
    spawn.sync(command, args, { stdio: 'inherit' })
  })
}

function promptBeforeCallback(promptMessage, callback) {
  const prompt = new Confirm(promptMessage)
  prompt.run()
    .then(answer => {
      if (answer === true) {
        callback()
      } else {
        process.exit(1)
      }
    })
}

module.exports.dangCli = dangCli

