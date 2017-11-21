function showsub(obj){
	var submenu=obj.getElementsByTagName('ul')[0];
	submenu.style.display="block";
}
function hidesub(obj){
	var submenu=obj.getElementsByTagName('ul')[0];
	submenu.style.display="none";
}

//重点，计算三级菜单的绝对定位的偏移量
function move(obj) {
    var thirdmenu=obj.getElementsByTagName('ul')[0];
    var Aleft=obj.offsetLeft;   //获取当前元素的位置，左偏
    var Atop=obj.offsetTop;     //获取当前元素的位置，右偏
    thirdmenu.style.position='absolute';//绝对定位
    Atop=parseInt(Atop)+0;      //计算
    Aleft=parseInt(Aleft)+90;   //计算
    thirdmenu.style.top=Atop+'px';
    thirdmenu.style.left=Aleft+'px';
}