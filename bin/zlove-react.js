#!/usr/bin/env node
const { resolve } = require('path')
const res = command => resolve(__dirname, '../commander/', command)
const program = require('commander')

// 定义init命令
program.version(require('../package').version, '-v, --version', '输出命令版本号')
  .name('zlove-react')
  .usage('<command>')
  .command('init')
  .option('-c, --copy [path]', '生成默认框架,不提供输入和选择')
  .description('生成新项目')
  .alias('i')
  .action(() => {
    require(res('init'))
  })

// 定义list命令
program
.command('list')
.alias('l')
.description('列出所有的可用模板')
.action(() => {
  require(res('list'))
})

// program.parse 不能再action一起点语法,必须重新program.parse
program.parse(process.argv)
console.log('aaaaaaa')
if(!program.args.length){
  program.help()
}