$(function(){
	//1. 处理required属性
	var $iptRequired = $(':input').filter('[required]');
	var $info = $('<span class="info"></span>');
	$iptRequired.each(function(){
		$(this).after('<strong style="color:red;">&nbsp;*&nbsp;</strong>');
	}).on('focus', function(){
		if(this.value == ""){
			$info.removeClass('success').addClass('error').text('必填项!')
			.insertAfter($(this).next());
		}
	}).on('keyup', function(){
		var min = $(this).attr('min');

		if(min && this.value.length >= min){
			$info.removeClass('error').addClass('success').text('输入正确!')
			.insertAfter($(this).next());
		}else if(min && this.value.length < min && this.value.length > 0){
			$info.removeClass('error').addClass('success').text('请输入至少'+min+'个字符!')
			.insertAfter($(this).next());
		}else if(this.value == ""){
			$(this).triggerHandler('focus');
		}
	});

});