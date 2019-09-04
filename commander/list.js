const chalk = require('chalk')

const tplList = require(`${__dirname}/../templates`)
let keys = Object.keys(tplList)
keys.forEach(item => {
  if (tplList.hasOwnProperty(item)) {
    console.log(
      '  ' + chalk.yellow('★') +
      '  ' + chalk.blue(tplList[item].name) +
      ' - ' + tplList[item].description)
  }
});