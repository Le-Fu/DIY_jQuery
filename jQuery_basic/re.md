# jquery 重新认识

 ## 选择网页元素

  ### CSS选择器：

	`$(document)` 	//选择整个文档对象
	`$('#myId')`	//选择ID为myId的网页元素
	`$('div.myClass')`	//选择class为myClass的div元素
	`$('input[name=first]')`	//选择name属性等于first的input元素

  ### jQuery特有的选择器

	`$('a:first')`	//选择网页中第一个a元素
	`$(tr:odd)`		//选择表格的奇数行
	`$('myForm : input')`	//选择表单中的input元素
	`$('div:visible')`		//选择可见的div元素
	`$('div:gt(2)')`		//选择所有的div元素，除了前三个
	`$('div:animated')`		//选择当前处于动画状态的div元素

 ## 改变结果集

  ### 过滤器

	`$('div').has('p');` 	// 选择包含p元素的div元素
	`$('div').not('.myClass');`		//选择class不等于myClass的div元素
	`$('div').filter('.myClass');`	//选择class等于myClass的div元素
	`$('div').first();`		//选择第1个div元素
	`$('div').eq(5);` 		//选择第6个div元素
		
  ### 移动方法

	`$('div').next('p');`	//选择div元素后面的第一个p元素
	`$('div').parent();`	//选择div元素的父元素
	`$('div').closest('form');`		//选择离div最近的那个form父元素
	`$('div').children();`	//选择div的所有子元素
	`$('div').siblings();`	//选择div的同级元素

 ## 链式操作

例如：
	`$('div').find('h3').eq(2).html('Hello');`
分解：
	`$('div') //找到div元素
　　　.find('h3') //选择其中的h3元素
　　　.eq(2) //选择第3个h3元素
　　　.html('Hello'); //将它的内容改为Hello`	

`.end()`方法：
	`$('div')
　　 .find('h3')
　　 .eq(2)
　　 .html('Hello')
　　 .end() //退回到选中所有的h3元素的那一步
　　 .eq(0) //选中第一个h3元素
　　 .html('World'); //将它的内容改为World`
 ## 元素的操作：取值(getter)和赋值(setter)
			
    `$('h1').html();` //html()没有参数，表示取出h1的值
　　 `$('h1').html('Hello');` //html()有参数Hello，表示对h1进行赋值
	
	|函数|说明|
	| ------ |------------------------|
	|.html()|取出或设置html内容|
	|.text()|取出或设置text内容|
	|.attr()|取出或设置某个属性的值|
	|.width()|取出或设置某个元素的宽度|
	|.height()|取出或设置某个元素的高度|
	|.val()|取出某个表单元素的值|
	|---------------------------------|	
	|需要注意的是，如果结果集包含多个元素，那么赋值的时候，将对其中所有的元素赋值；取值的时候，则是只取出第一个元素的值（.text()例外，它取出所有元素的text内容）。|

 ## 元素的操作：移动

     .insertAfter()和.after()：在现存元素的外部，从后面插入元素
　　 .insertBefore()和.before()：在现存元素的外部，从前面插入元素
　　 .appendTo()和.append()：在现存元素的内部，从后面插入元素
　　 .prependTo()和.prepend()：在现存元素的内部，从前面插入元素`

 ## 元素的操作： 复制、删除、创建

	复制元素使用.clone()。
	删除元素使用.remove()和.detach()。两者的区别在于，前者不保留被删除元素的事件，后者保留，有利于重新插入文档时使用。
	清空元素内容（但是不删除该元素）使用.empty()。

	创建新元素的方法非常简单，只要把新元素直接传入jQuery的构造函数就行了：
     $('<p>Hello</p>');
 　　$('<li class="new">new list item</li>');
 　　$('ul').append('<li>list item</li>');`


 ## 工具方法

    $.trim() 去除字符串两端的空格。
　　$.each() 遍历一个数组或对象。
　　$.inArray() 返回一个值在数组中的索引位置。如果该值不在数组中，则返回-1。
　　$.grep() 返回数组中符合某种标准的元素。
　　$.extend() 将多个对象，合并到第一个对象。
　　$.makeArray() 将对象转化为数组。
　　$.type() 判断对象的类别（函数对象、日期对象、数组对象、正则对象等等）。
　　$.isArray() 判断某个参数是否为数组。
　　$.isEmptyObject() 判断某个对象是否为空（不含有任何属性）。
　　$.isFunction() 判断某个参数是否为函数。
　　$.isPlainObject() 判断某个参数是否为用"{}"或"new Object"建立的对象。
　　$.support() 判断浏览器是否支持某个特性。

 ## 事件操作
	所有的事件处理函数，都可以接受一个事件对象（event object）作为参数，比如下面例子中的e：

　　$("p").on('click', function(e) {
　　　　alert(e.type); // "click"
　　});

	这个事件对象有一些很有用的属性和方法：

	event.pageX 事件发生时，鼠标距离网页左上角的水平距离
　　event.pageY 事件发生时，鼠标距离网页左上角的垂直距离
　　event.type 事件的类型（比如click）
　　event.which 按下了哪一个键
　　event.data 在事件对象上绑定数据，然后传入事件处理函数
　　event.target 事件针对的网页元素
　　event.preventDefault() 阻止事件的默认行为（比如点击链接，会自动打开新页面）
　　event.stopPropagation() 停止事件向上层元素冒泡

	在事件处理函数中，可以用this关键字，返回事件针对的DOM元素：

	$('a').click(function(e) {

　　　　if ($(this).attr('href').match('evil')) { //如果确认为有害链接
　　　　　　e.preventDefault(); //阻止打开
　　　　　　$(this).addClass('evil'); //加上表示有害的class
　　　　}
　　});		


## 特殊效果

　　.fadeIn() 淡入
　　.fadeOut() 淡出
　　.fadeTo() 调整透明度
　　.hide() 隐藏元素
　　.show() 显示元素
　　.slideDown() 向下展开
　　.slideUp() 向上卷起
　　.slideToggle() 依次展开或卷起某个元素
　　.toggle() 依次展示或隐藏某个元素

	$('div').animate(
　　　　{
　　　　　　left : "+=50", //不断右移
　　　　　　opacity : 0.25 //指定透明度
　　　　},
　　　　300, // 持续时间
　　　　function() { alert('done!'); } //回调函数
　　);

	.stop()和.delay()用来停止或延缓特效的执行。
	$.fx.off如果设置为true，则关闭所有网页特效。








