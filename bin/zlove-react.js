#!/usr/bin/env node
const { resolve } = require('path')
const res = command => resolve(__dirname, '../commander/', command)
const program = require('commander')

program.version(require('../package').version, '-v, --version', '输出命令版本号')
  .name('zlove-react')
  .usage('init [name]')
  .command('init')
  .option('-d, --default', '生成默认框架,不提供输入和选择')
  .description('生成新项目')
  .alias('i')
  .action(() => {
    require(res('init'))
  })

// program.parse 不能再action一起点语法,必须重新program.parse
program.parse(process.argv)

if(!program.args.length){
  program.help()
}