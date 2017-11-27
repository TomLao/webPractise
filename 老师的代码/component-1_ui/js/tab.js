// JavaScript Document

function Tab() {
	this.setEvent();
}

Tab.prototype.setEvent = function() {
	var headObjs=document.getElementsByClassName("tabHead");
	for(var i=0;i<headObjs.length;i++){
		//绑定鼠标移动到标签上的MouseOver事件
		headObjs[i].addEventListener('mouseover', function(e){
			//这里的this是用户当前点击的元素对象（标签），而不是当前的Tab对象
			for(i=0;i<this.parentNode.children.length;i++){//children表示元素（标签）子节点数组
				this.parentNode.children[i].setAttribute("class","tabHead");
			}
			this.parentNode.children[1].setAttribute("class","tabHead tabHeadCenter");
			oldclss=this.getAttribute("class");	            
			this.setAttribute("class",oldclss+" tabHeadShow");//显示当前的tab	
					
			
			//调整tab体
			objs=this.parentNode.parentNode.children[1].children;
				// alert(objs.length);
			for(i=0;i<objs.length;i++){
				objs[i].setAttribute("class","tabBody");
			}
			
			var k;
			for(i=0;i<this.parentNode.children.length;i++){
				if(this==this.parentNode.children[i])
					k=i;//记录要显示的tab号	
			}
			//alert(k);
			
			objs[(k+2)%3].setAttribute("class","tabBody tabBodyShow");//（k+2）%3，用于找到显示的tab体	
		}, false);
	}	


	
	
};
