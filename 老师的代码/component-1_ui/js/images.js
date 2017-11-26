// JavaScript Document

function ImagesPlay() {
	this.nowImage=0;
	this.setEvent();
	this.t=null;
}

ImagesPlay.prototype.start=function(j) {
	this.changeImages(this);
	this.t=setInterval(this.changeImages,2000,this);
};

ImagesPlay.prototype.mouseover=function(j) {
	this.t=clearInterval(this.t);	
	this.nowImage=j;
	this.gotoImage();	
};

ImagesPlay.prototype.mouseout = function() {
	this.t=setInterval(this.changeImages,2000,this);
};

ImagesPlay.prototype.setEvent = function() {
	images=this;
	var imageLis=document.getElementsByClassName("imageLi");
	var k;
	for( k=0;k<imageLis.length;k++){
		let w=k;	
		imageLis[w].children[0].onmouseover=function() {
      		images.mouseover(w);
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

