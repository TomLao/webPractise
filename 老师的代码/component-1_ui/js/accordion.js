// JavaScript Document
function Accordion() {
	this.setEvent();
	this.hideContents();
	
}
Accordion.prototype.hideContents = function() {
	var contents=document.getElementsByClassName("accordion-content");	
	for(k=0;k<contents.length;k++){
		contents[k].style.display="none";
	}
};
Accordion.prototype.get_nextSibling = function(obj) {
	var x=obj.nextSibling;  
	while (x && x.nodeType!=1) //nodeType表示元素结点 
		x=x.nextSibling; 
	 
	return x;  	
};

Accordion.prototype.setEvent = function() {
	var accordion=this;
	var heads=document.getElementsByClassName("accordion-header");
	for(i=0;i<heads.length;i++){
		//为head绑定鼠标单击事件
		heads[i].addEventListener('click', function(e){
			//把所有head设置为未激活样式
			for(j=0;j<heads.length;j++){
				heads[j].setAttribute("class","accordion-header accordion-header-inactive");
				heads[j].children[0].setAttribute("class","icon icon-inactive icon-triangle-solid-down");
			}	
			//设置当前head为激活样式
			this.setAttribute("class","accordion-header accordion-header-active");
			this.children[0].setAttribute("class","icon icon-active icon-triangle-solid-left");
		
			//把所有content设置为未激活样式
			accordion.hideContents();
			 //设置当前content为激活样式
			content=accordion.get_nextSibling(this);
			content.style.display="block";
		
		}, false);
	}	
};

