// JavaScript Document
function Accordion(params) {
	this.myParams={
		"width": 500,
		"height": 500		
	};	
	Object.assign(this.myParams,params);	
	
	this.hideContents();
	this.setupUI();	
	this.setEvent();	
}

Accordion.prototype.setupUI = function() {	
	var accordionObj=document.getElementById(this.myParams.id);
	var divObjs=accordionObj.children;
	var content,i;
	accordionObj.style.cssText="width:"+this.myParams.width+"px;"+
		"height:"+this.myParams.height+"px;";

		divObjs[0].setAttribute("class","accordion-header accordion-header-active");
		content=divObjs[0].innerHTML;
		divObjs[0].innerHTML="<span class='icon icon-active icon-triangle-solid-left'></span>"+divObjs[0].innerHTML;

		divObjs[1].setAttribute("class","accordion-content");
		divObjs[1].style.display="block";
		
	for(i=2;i<divObjs.length;i++) {		
		if(i%2==0){
			divObjs[i].setAttribute("class","accordion-header accordion-header-inactive");
			content=divObjs[i].innerHTML;
			divObjs[i].innerHTML="<span class='icon icon-inactive icon-triangle-solid-down'></span>"+divObjs[i].innerHTML;					
		}else{
			divObjs[i].setAttribute("class","accordion-content");
		}
	}		
};

Accordion.prototype.hideContents = function() {
	var divObjs=document.getElementById(this.myParams.id).children;;
	let k;	
	for(k=1;k<divObjs.length;k+=2){
		divObjs[k].style.display="none";
	}
};

Accordion.prototype.get_nextSibling = function(obj) {
	var x=obj.nextSibling;  
	while (x && x.nodeType!=1) //nodeType表示元素结点 
		x=x.nextSibling; 	 
	return x;  	
};

Accordion.prototype.onClick=function(elementObj) {
	var accordionObj=document.getElementById(this.myParams.id);
	var divObjs=accordionObj.children;	
	//把所有head设置为未激活样式
	for(j=0;j<divObjs.length;j+=2){
		divObjs[j].setAttribute("class","accordion-header accordion-header-inactive");
		divObjs[j].children[0].setAttribute("class","icon icon-inactive icon-triangle-solid-down");
	}	
	//设置当前head为激活样式
	elementObj.setAttribute("class","accordion-header accordion-header-active");
	elementObj.children[0].setAttribute("class","icon icon-active icon-triangle-solid-left");

	//把所有content设置为未激活样式
	this.hideContents();
	 //设置当前content为激活样式
	var content=this.get_nextSibling(elementObj);
	content.style.display="block";	
};

Accordion.prototype.setEvent = function() {
	var accordion=this;
	var accordionObj=document.getElementById(this.myParams.id);
	var divObjs=accordionObj.children;	
	var i;
	for(i=0;i<divObjs.length;i+=2){
		//为head绑定鼠标单击事件
		divObjs[i].addEventListener('click', function(e){
			accordion.onClick(this);		
		}, false);
	}	
};

