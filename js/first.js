define(function(require, exports, module) {
	var b = require('jquery');
	console.log(b);
	var a = require.resolve('jquery');
	console.log(module.id);				
	 console.log(module.uri);
	 console.log(module.dependencies);
	 console.log(require.resolve('gallery/jquery/1.9.1/jquery'))
	 //后缀补全测试
	 console.log(require.resolve('./a'));
	 console.log(require.resolve('./a.css'));
	 console.log(require.resolve('./a.json'));
	 console.log(require.resolve('./a.jso#'));
	 console.log(require.resolve('./a.bb?a=1'));

	 //config map测试

})