#!/usr/bin/env node

const { dangCli } = require('.')

if (process.argv.length < 4) {
  usage()
} else {
  dangCli(process.argv.slice(2))
}

function usage() {
  console.log(`
    dang-cli

    Usage:
    dang-cli <message> <command>
  `)
}
