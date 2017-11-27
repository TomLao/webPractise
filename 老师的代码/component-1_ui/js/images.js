// JavaScript Document

function ImagesPlay() {
	this.nowImage=0;
	this.setEvent();
	this.t=null;
}

//prototype原型属性使您有能力向对象添加属性和方法
//既为对象添加成员函数，同时该函数名为start，后面是匿名函数
//== function start(j){}
ImagesPlay.prototype.start=function(j) {
	this.changeImages(this);
	this.t=setInterval(this.changeImages,2000,this);//隔2000毫秒调用this.changeImages函数
//setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
//setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
//由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。
};

ImagesPlay.prototype.mouseover=function(j) {
	this.t=clearInterval(this.t);	
	this.nowImage=j;//改变成员变量，该类下的所有函数都可以读取到该变量变为j了，不用传值
	this.gotoImage();	
};

ImagesPlay.prototype.mouseout = function() {
	this.t=setInterval(this.changeImages,2000,this);
};

//这函数设置事件，鼠标移入移出
ImagesPlay.prototype.setEvent = function() {
	images=this;
	var imageLis=document.getElementsByClassName("imageLi");//有多个
	var k;
	for( k=0;k<imageLis.length;k++){
		let w=k;	
		imageLis[w].children[0].onmouseover=function() {//这是onmouseover变为了一个函数，鼠标放上来就调用
      		images.mouseover(w);	//调用函数
    	};
				
		imageLis[w].children[0].onmouseout=function() {
      		images.mouseout();
    	};	
	}	
};

ImagesPlay.prototype.gotoImage = function(){
	var obj=document.getElementsByClassName("imageLi")[this.nowImage].children[0];

	var objs=obj.parentNode.parentNode.children;
	for(var i=0;i<objs.length;i++){
		objs[i].children[0].style.backgroundPosition="-20px center";
	}
	obj.style.backgroundPosition="10px center";
	
	var nowImage=document.getElementById("imageId");
	var nowLink=document.getElementsByClassName("imagesFootLeft")[0];
	switch(this.nowImage){
	case 0:
		nowLink.innerHTML="·<a href='http://www.dgut.edu.cn' target='_blank' title='热烈庆祝中华人民共和国成立65周年！'>热烈庆祝中华人民共和国成立65周年！</a>";
		nowImage.setAttribute("src","images/1.jpg");break;
	case 1:
		nowLink.innerHTML="·<a href='http:\\www.baidu.com' target='_blank' title='我校表彰一批优秀教职工'>我校表彰一批优秀教职工</a>";
		nowImage.setAttribute("src","images/2.jpg");break;
	case 2:
		nowLink.innerHTML="·<a href='http://www.dgut.edu.cn' target='_blank' title='军训！'>军训！</a>";
		nowImage.setAttribute("src","images/3.jpg");break;
	case 3:
		nowLink.innerHTML="·<a href='http://www.dgut.edu.cn' target='_blank' title='教师大会！'>教师大会！</a>";
		nowImage.setAttribute("src","images/4.jpg");break;
	case 4:
		nowLink.innerHTML="·<a href='http://www.dgut.edu.cn' target='_blank' title='日常！'>日常！</a>";
		nowImage.setAttribute("src","images/5.jpg");break;								
	}		
};

ImagesPlay.prototype.changeImages = function(images) {
	//不能用this，只能传图像轮播对象进来
	images.gotoImage();
	images.nowImage++;
	images.nowImage=images.nowImage%5;
};

