// 写法：1
	(function (window, factory) {
		factory(window);
	}(this, function () {
		return function () {
			//jquery 的调用
		}
	}));

// 写法：2
	var factory = function () {
		return function () {
			//执行方法
		}
	};

	var jQuery = factory();

// 写法：3
	(function (window, undefined) {
		var jQuery = function () {};
		//...
		window.jQuery = window.$ = jQuery;
	})(window);
// 写法：3 优势：
/*
	1：window 和 undefined都是为了减少变量查找所经过的scope作用域。当window通过传递给闭包内部之后，在闭包内部使用它的时候，可以把它当成一个局部变量，显然比原来在window scope下查找的时候要快些。
	2：undefined也是同样的道理，其实这个undefined并不是javascript数据类型的undefined，而是一个普普通通的变量名。自动化i因为没给它传递值，它的值就是undefined，undefined并不是javascript的保留字。
*/


//总结：全局变量是魔鬼, 匿名函数可以有效的保证在页面上写入JavaScript，而不会造成全局变量的污染，通过小括号，让其加载的时候立即初始化，这样就形成了一个单例模式的效果从而只会执行一次。