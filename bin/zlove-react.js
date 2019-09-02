#! /usr/bin/env node

// 指定文件使用node执行

const version = require('../package.json').version

// 解析用户输入命令
const program = require('commander');
// 拉取git文件
const download = require('download-git-repo');
// 改变输出文字颜色
const chalk = require('chalk');
// 小图标（loading、succeed、warn等）
const ora = require('ora');
const fs = require('fs')

/**
 * .version('0.1.0), 在命令行输入zlove-react --version会输出0.1.0, zlove-react是package.json中bin定义的,会执行此文件并传参
 * help必须放在parse之前,因为--help后面的命令不会打印出
 */
program
.version(version, '-v, --version', '输出zlove-react-cli版本号')
.option('-i, init <name>', '初始化zlove-react项目')
.option('-c, create <pageName>', '创建标准新页面')
.parse(process.argv)

// 创建项目
if (program.init) {
  const spinner = ora('正在从github下载zlove-react').start();
  // 下载的url地址,下载到的本地文件夹,下载状态回调`
  download('codeloved/my-react', program.init, function (err) {
    if(!err){
      // 可以输出一些项目成功的信息
      console.info(chalk.blueBright('下载成功'));
      fs.readFile(`${process.cwd()}/${program.init}/package.json`, (err, data) => {
        if (err) throw err;
        let _data = JSON.parse(data.toString())
        _data.name = program.init
        _data.version = '1.0.0'
        let str = JSON.stringify(_data, null, 4);
        fs.writeFile(`${process.cwd()}/${program.init}/package.json`, str, function (err) {
          if (err) throw err;
        })
      });
    }else{
      console.info(chalk.red('下载失败'));
    }
  })
}

// 创建页面
if (program.create) {
  console.log('创建新页面')
}