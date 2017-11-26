// JavaScript Document

function Tab( params ) {	
	this.myParams={
		"width": 500,
		"height": 500		
	};
	this.tabNumber=0;
	this.extends1(this.myParams,params);

	var isCheckOk=this.check();
	if(isCheckOk=="ok"){
		this.setupUI();
		this.setEvent();
	}
	else
		alert(isCheckOk);	
}

Tab.prototype.check = function() {
	//检查错误
	var tabFrameObj=document.getElementById(this.myParams.id);
	if(tabFrameObj==null || tabFrameObj.nodeName != "DIV") return "tabFrame不是div";
	
	var divObjs=tabFrameObj.children;
	if(divObjs.length!=2) return "未分为head和body两部分";
	if(divObjs[0].nodeName != "DIV"  || divObjs[1].nodeName != "DIV" )  return "head或body不是div";
	
	var divHeadObjs=divObjs[0].children;
	var divBodyObjs=divObjs[1].children;
	
	if(divHeadObjs.length!=divBodyObjs.length) return "标签头与标签体 数目不匹配";;
	let i;
	for(i=0;i<divHeadObjs.length;i++) {
		if(divHeadObjs[i].nodeName != "DIV")  return "标签头不是div";
		if(divBodyObjs[i].nodeName != "DIV")  return "标签体不是div";
	}
	
	return "ok";
};

Tab.prototype.setupUI = function() {	
	var tabFrameObj=document.getElementById(this.myParams.id);
	var divObjs=tabFrameObj.children;
	var divHeadObjs=divObjs[0].children;
	var divBodyObjs=divObjs[1].children;
	let i;
	this.tabNumber=divHeadObjs.length;
	tabFrameObj.setAttribute("class","tabFrame");
	
	tabFrameObj.style.cssText="width:"+this.myParams.width+"px;"+
		"height:"+this.myParams.height+"px;";
	
	tabFrameObj.setAttribute("class","tabFrame");
	divObjs[0].setAttribute("class","tabHeadDiv");
	
	for(i=0;i<divHeadObjs.length;i++) {
		divHeadObjs[i].style.width=(100.0/this.tabNumber)+"%";
		if(i==0)  
			divHeadObjs[i].setAttribute("class","tabHead tabHeadShow");
		else if(i==divHeadObjs.length-1)
			divHeadObjs[i].setAttribute("class","tabHead tabHeadLast");
		else
			divHeadObjs[i].setAttribute("class","tabHead");
	}	
	
	for(i=0;i<divBodyObjs.length;i++) {
		divBodyObjs[i].style.height=(this.myParams.height-30)+"px";
		if(i==0)  
			divBodyObjs[i].setAttribute("class","tabBody tabBodyShow");
		else
			divBodyObjs[i].setAttribute("class","tabBody");
	}	
	divObjs[1].appendChild(divBodyObjs[0]);//把第一个body放到最后	
};

Tab.prototype.setEvent = function() {
	var tab=this;
	var headObjs=document.getElementsByClassName("tabHead");
	for(var i=0;i<headObjs.length;i++){
		//绑定鼠标移动到标签上的MouseOver事件
		headObjs[i].addEventListener('mouseover', function(e){
			var headObjs1=this.parentNode.children
			//这里的this是用户当前点击的元素对象（标签），而不是当前的Tab对象
			var j;
			for(j=0;j<headObjs1.length;j++){//children表示元素（标签）子节点数组
				headObjs1[j].setAttribute("class","tabHead");
			}
			headObjs1[headObjs1.length-1].setAttribute("class","tabHead tabHeadLast");
			oldclss=this.getAttribute("class");	            
			this.setAttribute("class",oldclss+" tabHeadShow");//显示当前的tab					
			
			//调整tab体
			objs=this.parentNode.parentNode.children[1].children;
			//	alert(objs.length);
			for(i=0;i<objs.length;i++){
				objs[i].setAttribute("class","tabBody");
			}
			
			var k;
			for(j=0;j<this.parentNode.children.length;j++){
				if(this==this.parentNode.children[j])
					k=j;//记录要显示的tab号	
			}
			
			objs[(k+tab.tabNumber-1)%tab.tabNumber].setAttribute("class","tabBody tabBodyShow");//（k+2）%3，用于找到显示的tab体	
		}, false);
	}		
};

Tab.prototype.extends1 = function(myParams,params) {
	for(var p in params){
		var find=false; 
		for(var myp in myParams){ 
			if(p==myp){
				find=true;
				myParams[myp]=params[p];
				break;
			}
		}
		if(find==false){
			myParams[p]=params[p];
		}
	}
};
