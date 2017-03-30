#!/usr/bin/env node

'use strict'

var killport = require('../lib')
var option = require('../lib/cli/parse').parse(process.argv)
if (option.args.length === 0) option.help()

killport(option)
