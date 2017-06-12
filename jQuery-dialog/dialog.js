;(function($){

	var a;
	var b;

	window.dialog = function(options){
		var settings = $.extend({
			width: 400,
			height: 300
		}, options);//设置默认值

		var $dialogBox = $('<div class="dialog-box">'
							+'<div class="dialog-mask"></div>'
							+'<div class="dialog-container">'
							+ '<div class="dialog-wrap">'
								+ '<div class="dialog-header">'
									+ '<span class="dialog-title">'+settings.title+'</span>'
									+ '<span class="dialog-close">[X]</span>'
								+'</div>'
								+'<div class="dialog-body"></div>'
								// +'<div class="dialog-footer">this is footer</div>'
								+'</div>'
							+'</div>'
						+'</div>');

		$(document.body).append($dialogBox);

		var $mask = $('.dialog-mask', $dialogBox).show();
		var $container = $('.dialog-container', $dialogBox).css({
			width: settings.width,
			height: settings.height,
			marginLeft: -settings.width/2,
			marginTop: -settings.height/2
		}).show();
		$('.dialog-close', $dialogBox).on('click', function(){
			$mask.remove();
			$container.remove();
		});
		$('.dialog-body', $dialogBox).load(settings.url, function(){
			settings.callback && settings.callback();
		});


	};
})(jQuery);