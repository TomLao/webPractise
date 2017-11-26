// JavaScript Document

function ImagesSlider(params) {
	this.myParams={};	
	Object.assign(this.myParams,params);
	
	this.imagesSliderObj=null;
	this.imageDivObj=null;
	this.nowImage=0;
	this.imageNumber=0;
	this.liObjs;
	this.aDivObjs;
	this.setupUI();
	this.setEvent();
	this.changeImages(this);
	this.t=setInterval(this.changeImages,2000,this);	
}

ImagesSlider.prototype.setupUI = function() {
	this.imagesSliderObj=document.getElementById(this.myParams.id);
	this.imagesSliderObj.setAttribute("class","imagesSlider");
	var divObjs=this.imagesSliderObj.children;
	
	this.imageDivObj=divObjs[0].cloneNode(true);	
	this.aDivObjs=divObjs[1].cloneNode(true);	
	
	var div1=document.createElement("div");
	div1.setAttribute("class","imagesFootFrame");
	div1.innerHTML="<div class='imagesFootLeft'><h3>&nbsp;·<a></a></h3></div><div class='imagesFootRight'><ul></ul></div>";
	
	this.imagesSliderObj.removeChild(this.imagesSliderObj.children[1]);
	this.imagesSliderObj.append(div1);
	var k;
	
	divObjs[0].innerHTML="<img/>";
	this.imageNumber=this.imageDivObj.children.length;
	var i,str="";
	for( i=0;i<this.imageNumber;i++){
		str+="<li class='imageLi'><a href='javascript:void(0);'></a></li>";
	}
	var ulObj=divObjs[1].children[1].firstChild;
	ulObj.innerHTML+=str;
		
	this.liObjs=ulObj.children;
	
	var imageWidth=	this.imageDivObj.children[0].width;
	var imageHeight= this.imageDivObj.children[0].height;
	this.imagesSliderObj.style.width=imageWidth+"px";
	this.imagesSliderObj.style.height=imageHeight+"px";
	divObjs[1].style.top=(imageHeight-50)+"px";
	divObjs[1].children[0].style.width=Math.floor(imageWidth*0.6)+"px";
	divObjs[1].children[1].style.width=Math.floor(imageWidth*0.4)+"px";;
	
}

ImagesSlider.prototype.onMouseover=function(j) {
	this.t=clearInterval(this.t);	
	this.nowImage=j;
	this.gotoImage();	
};

ImagesSlider.prototype.onMouseout = function() {
	this.t=setInterval(this.changeImages,2000,this);
};

ImagesSlider.prototype.setEvent = function() {
	var imagesSlider=this;
	var k;
	for( k=0;k<this.liObjs.length;k++){
		let w=k;	
		this.liObjs[w].children[0].onmouseover=function() {
      		imagesSlider.onMouseover(w);
    	};
				
		this.liObjs[w].children[0].onmouseout=function() {
      		imagesSlider.onMouseout();
    	};	
	}	
};

ImagesSlider.prototype.gotoImage = function(){
	var obj=this.liObjs[this.nowImage].children[0];
	//当前图
	var nowImageObj=this.imagesSliderObj.children[0].children[0];	
	nowImageObj.setAttribute("src",this.imageDivObj.children[this.nowImage].getAttribute("src"));
	nowImageObj.setAttribute("alt",this.imageDivObj.children[this.nowImage].getAttribute("alt"));
		
	//下右圆圈
	for(var i=0;i<this.liObjs.length;i++){
		this.liObjs[i].children[0].style.backgroundPosition="-20px center";
	}
	obj.style.backgroundPosition="10px center";
	
	//下左链接
	var nowLinkObj=this.imagesSliderObj.children[1].children[0].children[0].children[0];
	nowLinkObj.setAttribute("href",this.aDivObjs.children[this.nowImage].getAttribute("href"));
	nowLinkObj.innerHTML=this.aDivObjs.children[this.nowImage].innerHTML;

};

ImagesSlider.prototype.changeImages = function(myImagesSlider) {
	//不能用this，只能传图像轮播对象进来
	myImagesSlider.gotoImage();
	myImagesSlider.nowImage++;
	myImagesSlider.nowImage=myImagesSlider.nowImage%myImagesSlider.imageNumber;
};

