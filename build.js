'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('                    Zach Lysobey'),
  handle: chalk.white('zachlysobey'),
  work: chalk.white('Unemployed Software Developer'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('zlysobey'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~zachlysobey'),
  github: chalk.gray('https://github.com/') + chalk.green('zachlysobey'),
  stackOverflow: chalk.gray('https://stackoverflow.com/users/') + chalk.red('363701/') + chalk.blue('zach-lysobey'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('zlysobey'),
  web: chalk.cyan('https://zach.lysobey.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('@zachlysobey/card  (via GitHub Package Registry)'),
  labelWork: chalk.white.bold('           Work:'),
  labelTwitter: chalk.white.bold('        Twitter:'),
  labelnpm: chalk.white.bold('            npm:'),
  labelGitHub: chalk.white.bold('         GitHub:'),
  labelStackOverflow: chalk.white.bold('  StackOverflow:'),
  labelLinkedIn: chalk.white.bold('       LinkedIn:'),
  labelWeb: chalk.white.bold('            Web:'),
  labelCard: chalk.white.bold('           Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const stackOverflowing = `${data.labelStackOverflow}  ${data.stackOverflow}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               newline +
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               stackOverflowing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
