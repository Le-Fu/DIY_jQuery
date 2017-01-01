var $$ = ajQuery = function(selector) {
    this.selector = selector;
    return this
}
ajQuery.fn = ajQuery.prototype = {
    selectorName:function(){
        return this.selector;
    },
    constructor: ajQuery
}
var a = new $$('aaa');  //实例化
a.selectorName() //aaa //得到选择器名字

// jQuery
var $$ = ajQuery = function(selector) {
    //把原型上的init作为构造器
    return new ajQuery.fn.init( selector );
}

ajQuery.fn = ajQuery.prototype = {
    name: 'aaron',
    init: function() {
        console.log(this)
    },
    constructor: ajQuery
}
// 这样确实解决了循环递归的问题，
// 但是又问题来了，init是ajQuery原型上作为
// 构造器的一个方法，那么其this就不是ajQuery了，
// 所以this就完全引用不到ajQuery的原型了，
// 所以这里通过new把init方法与ajQuery给分离成2个独立的构造器。


