;(function($){
	$.fn.extend({
		tooltip: function(){
			this.hover(function(){
				this.tempTitle = this.title;
				this.title = "";
				this.$tooltip = $('<div class="tooltip">'
									+ '<div class="tooltip-arrow"></div>'
									+ '<div class="tooltip-inner">'+this.tempTitle+'</div>'
								+ '</div>').appendTo('body');
				var $tooltipArrow = this.$tooltip.children('.tooltip-arrow');
				var offset = $(this).offset();
				var iLeft = iTop = 0;
				if(offset.top < this.$tooltip.outerHeight()){
					if(offset.left < this.$tooltip.outerWidth()){
						iLeft = offset.left + $(this).width() + 20;
						iTop = offset.top - (this.$tooltip.outerHeight() - $(this).height())/2;
						$tooltipArrow.addClass('left-arrow');
					}else if(offset.left+$(this).width()+this.$tooltip.outerWidth()>$(window).width()){
						iLeft = offset.left - this.$tooltip.outerWidth() - 20;
						iTop = offset.top - (this.$tooltip.outerHeight() - $(this).height())/2;
						$tooltipArrow.addClass('right-arrow');
					}
				}else{
					iLeft = offset.left - (this.$tooltip.outerWidth()-$(this).width())/2;
					if(iLeft < 0){
						iLeft =  20;
					}
					iTop = offset.top - 40;
					$tooltipArrow.addClass('bottom-arrow');
				}
				this.$tooltip.offset({
					left: iLeft,
					top: iTop
				});
			}, function(){
				this.$tooltip.remove();
				this.title = this.tempTitle;
			});
			return this;
		}
	});
})(jQuery);