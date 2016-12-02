#jquery 重新认识

 ##一、选择网页元素

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

 ## 二、改变结果集

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

 ## 三、链式操作

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
 ## 四、元素的操作：取值(getter)和赋值(setter)
			
	`$('h1').html(); //html()没有参数，表示取出h1的值
　　 $('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值`
	
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

 ## 五、 元素的操作：移动


