// JavaScript Document

var nowImage=0;
var t;

changeImages(0);

function toImage( nowImageI,obj ){	
	if( obj == null )
		obj=document.getElementsByClassName("imageLi")[nowImageI].children[0];

	objs=obj.parentNode.parentNode.children;    //ul
	for(i=0;i<objs.length;i++){
		objs[i].children[0].style.backgroundPosition="-20px center";// ??????
	}
	obj.style.backgroundPosition="10px center";
	
	nowImage=document.getElementById("imageId");    //显示图片那里
	nowLink=document.getElementsByClassName("imagesFootLeft")[0];   //显示文字那里
	switch(nowImageI){
	case 0:
		nowLink.innerHTML="·<a href='http://www.dgut.edu.cn' target='_blank' title='热烈庆祝中华人民共和国成立65周年！'>热烈庆祝中华人民共和国成立65周年！</a>";
		nowImage.setAttribute("src","images/1.jpg");break;
		//setAttribute() 方法添加指定的属性，并为其赋指定的值。
        //如果这个指定的属性已存在，则仅设置/更改值。
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
}



function imageMoveIn( nowImageI, nowObj){
	//clearTimeout() 方法可取消由 setTimeout() 方法设置的 timeout。
	clearTimeout(t);
	toImage( nowImageI,nowObj);	
}


function imageMoveOut( nowImageI ){
	t=setTimeout(changeImages,2000,nowImageI);
	//setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
    //格式：setTimeout(code,millisec)
}


function changeImages(nowImageI) {
    toImage(nowImageI,null);
    nowImageI++;
    nowImageI=nowImageI%5;//越界回来
    t=setTimeout(changeImages,2000,nowImageI);//类递归调用
}