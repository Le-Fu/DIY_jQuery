function MyQuery(arg){
	this.elements =[];
	switch (typeof arg){
		case 'string':
			switch (arg.charAt(0)){
				case '#':
					var idObj = document.getElementById(arg.substring(1));
					this.elements.push(idObj);
					break;
				case '.':
					var aClass = document.getElementsByClassName(arg.substring(1));
					this.elements = aClass;
					break;
				default :
					var aTag = document.getElementsByTagName(arg.substring(1));
					this.elements = aTag; 
			};
			break;
		case 'object':
			this.elements.push(arg);
			break;
		case 'function':
			window.addEventListener('load',arg,false);
			break;
	};
	var obj = new Object();
}

function setCss(elme, attr, value){
	switch(attr){
		case 'width':
		case 'height':
		case 'Padding':
		case 'PaddingLeft':
		case 'PaddingRight':
		case 'PaddingTop':
		case 'PaddingBottom':
			value = /\%/.test(value) ? value : Math.max(parseInt(value), 0) + 'px';
			break;
		case 'left':
		case 'right':
		case 'top':
		case 'bottom':
		case 'margin':
		case 'marginLeft':
		case 'marginRight':
		case 'marginTop':
		case 'marginBottom':
			value = /\%/.test(value) ? value : parseInt(value) + 'px';
			break;
	}
	elme.style[attr] = value;
}

function getStyle(elem, attr){
	if(elem.currentStyle[attr]){
		return elem.currentStyle[attr];
	}else{
		return getComputedStyle(elem, null)[attr];
	}
}

function getPos(elem){
	var iTop = iLeft = 0;
	do{
		iTop += elem.offsetTop;
		iLeft += elem.offsetLeft;
		elem = elem.offsetParent;
		// console.log(elem);
	}while(elem);
	return {
		left: iLeft,
		top: iTop
	}
}

MyQuery.prototype.on = function(type, selector, fn){
	if(typeof selector == 'string'){
		for(var i=0; i<this.elements.length; i++){
			this.elements[i].addEventListener(type, function(e){
				var prefix = selector.charAt(0);
				switch(prefix){
					case '#'://id
						if(e.target.id == selector.substring(1)){
							fn.call(e.target);
						}
						break;
					case '.'://class
						if(e.target.className == selector.substring(1)){
							fn.call(e.target);
						}
						break;
					default://tag
						break;
				}
			}, false);
		}
	}else{
		for(var i=0; i<this.elements.length; i++){
			fn = selector;
			this.elements[i].addEventListener(type, fn, false);
		}
	}
	return this;
};

/*MyQuery.prototype.click = function(fn){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].addEventListener('click', fn, false);
	}
	return this;
};

MyQuery.prototype.mouseover = function(fn){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].addEventListener('mouseover', fn, false);
	}
	return this;//链式操作
};*/

MyQuery.prototype.offset = function(coordinates){
	if(coordinates){
		for (var i = 0; i < this.elements.length; i++) {
			setCss(this.elements[i], 'left', coordinates.left);
			setCss(this.elements[i], 'top', coordinates.top);
			// this.elements[i].style.left = coordinates.left;
			// this.elements[i].style.top = coordinates.top;
		}
	}else{
		// getPos(this.elements[0]);
		var iTop = iLeft = 0;
		var elem = this.elements[0];
		do{
			iTop += elem.offsetTop;
			iLeft += elem.offsetLeft;
			elem = elem.offsetParent;
			// console.log(elem);
		}while(elem);
		return {
			left: iLeft,
			top: iTop
		}
	}
	return this;
};

MyQuery.prototype.hover = function(fnOver, fnOut){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].addEventListener('mouseover', fnOver, false);
		this.elements[i].addEventListener('mouseout', fnOut, false);
	}
	return this;
};

MyQuery.prototype.css = function(propertyName, value){
	if(value){
		for(var i=0; i<this.elements.length; i++){
			setCss(this.elements[i], propertyName, value);
		}
	}else if(typeof(propertyName) =='string'){
		return getStyle(this.elements[0], propertyName);
	}else{
		for(key in propertyName){
			for (var i = 0; i < this.elements.length; i++) {
				setCss(this.elements[i], key, propertyName[key]);
			}
		}
	}
};

function $(arg){
	return new MyQuery(arg);
}