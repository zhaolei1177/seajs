
seajs.config({
  //别名配置  当模块标识很长时，可以使用 alias 来简化。
  //使用方式  var biz = require('app/biz');
  alias: {
    'jquery': {
      src: 'jquery-1.9.1.min.js',
      exports: 'jQuery'
    },
    'app/biz': 'http://path/to/app/biz.js'
  }

  //变量配置  有些场景下，模块路径在运行时才能确定，这时可以使用 vars 变量来配置。
  //使用方式  vars 配置的是模块标识中的变量值，在模块标识中用 {key} 来表示变量。
  //var lang = require('./i18n/{locale}.js');
  ,vars: {
    'locale': 'zh-cn'
  }

  //配置路径  当目录比较深，或需要跨目录调用模块时，可以使用 paths 来简化书写。
  //使用方式  var biz = require('rule/biz');
  ,paths:{
  	"rule":'https://github.com/seajs/seajs/issues/262'
  }
  //映射配置  把数组中的第一个字符串替换为第二个  
  //使用方式  无需调用
  ,map:[
  	['.json1','-a.json'],['.ssa','-bbbbb']
  ]

  // 插件
  ,plugins: ['text', 'shim']

  // 预加载项
  ,preload: [
    Function.prototype.bind ? '' : 'es5-safe',
    this.JSON ? '' : 'json'
  ]

  // 调试模式
  //值为 true 时，加载器会使用 console.log 输出所有错误和调试信息。 
  //默认为 false, 只输出 warning 等信息。
  ,debug: true

  // Sea.js 的基础路径
  //Sea.js 在解析顶级标识时，会相对 base 路径来解析。
  //,base: 'http://example.com/path/to/base/'
  // base:'http://www.baidu.com/',    // 不可以设置百度 不知道为啥 可能没有权限
  // base:'http://www.aaa.com/'

  //文件编码 获取模块文件时，<script> 或 <link> 标签的 charset 属性。 默认是 utf-8
  ,charset: 'utf-8'
});