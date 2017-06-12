;(function($){
	
	$.fn.extend({//为jq扩展函数
		color: function(sColor){
			this.css('color', sColor);//这里的this是jq对象不是原生dom对象
			return this;//返回this是为了支持链式操作
		}
	});

})(jQuery);