#! /usr/bin/env node 

// 指定文件使用node执行

// 解析用户输入命令
const program = require('commander');
// 拉取git文件
const download = require('download-git-repo');
// 改变输出文字颜色
const chalk = require('chalk');
// 小图标（loading、succeed、warn等）
const ora = require('ora');

program
.version('0.1.0')
.option('-i, init [name]', '初始化zlove-react项目')
.parse(process.argv)

if (program.init) {
  const spinner = ora('正在从github下载zlove-react').start();
  download('https://github.com/codeloved/my-react.git', program.init, function (err) {
    if(!err){
      // 可以输出一些项目成功的信息
      console.info(chalk.blueBright('下载成功'));
    }else{
      // 可以输出一些项目失败的信息
    }
  })
}