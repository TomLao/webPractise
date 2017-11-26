// JavaScript Document

function HMenu( params ) {	
	this.myParams={};
	Object.assign(this.myParams,params);

	this.setupUI();
	this.setEvent();
		
}

HMenu.prototype.setupUI = function() {
	var HmenuObj=document.getElementById(this.myParams.id);
	HmenuObj.setAttribute("class","navigation");
}

HMenu.prototype.onMouseover = function(liObj) {	
	var subMenu = liObj.getElementsByTagName("ul")[0]; 
	subMenu.style.display = "block"; 
}

HMenu.prototype.onMouseout = function(liObj) {	
	var subMenu = liObj.getElementsByTagName("ul")[0]; 
	subMenu.style.display = "none"; 
}

HMenu.prototype.setEvent = function() {
	var hMenu=this;
	var HmenuObj=document.getElementById(this.myParams.id);
	var liObjs=HmenuObj.children;
	for(var i=0;i<liObjs.length;i++){
		//绑定鼠标移动到标签上的MouseOver事件
		liObjs[i].addEventListener('mouseover', function(e){
			hMenu.onMouseover(this) ;
		}, false);
		liObjs[i].addEventListener('mouseout', function(e){
			hMenu.onMouseout(this) ;
		}, false);		
	}		
};

