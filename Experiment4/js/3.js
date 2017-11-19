//创建并添加新div
var number=1;
var newobj;
		function addElementDiv() {
           var parent=document.getElementById("mydiv");
           var div=document.createElement("div");	//添加新div，函数creatElement
           div.setAttribute("name","information");	//为新div添加属性及值，setAttribute(属性，值)
           div.setAttribute("ondblclick","deleteDiv(this)");
           div.setAttribute("onclick","changecss(this)");
           //从content中获取value信息，并用innerHTML在div中显示出来
           div.innerHTML=document.getElementById("content").value;
           parent.appendChild(div);	//添加子结点div
           document.getElementById("content").value="";	//清空content中的信息
           number++;	//
       }

function deleteDiv(obj) {
    obj.remove();
    number--;
}
//清楚全部信息
function clearAll3() {
    var information=document.getElementsByName('information');
    var parent=document.getElementById('mydiv');
    var num=parent.childNodes;
    for(var i=0;i<number;){
        // information[i].innerHTML="";
        deleteDiv(information[i]);
               // parent.removeChild(parent.firstChild);
    }
    document.getElementById("content").value="";	//清空content中的信息
}

//双击删除div

function changecss(obj) {
    var colors=document.getElementsByName("information");
    for(var i=0;i<number;i++)
        colors[i].style.background="rgb(187,221,255)";
        obj.style.background="#48D1CC";
}

function getdiv(obj) {
    newobj=obj;
}

function insertDiv() {
    var parent=document.getElementById("mydiv");
    var newdiv=document.createElement("div");
    newdiv.setAttribute("name","information");
    newdiv.setAttribute("ondblclick","deleteDiv(this)");
    newdiv.setAttribute("onclick","changecss(this)");
    //从content中获取value信息，并用innerHTML在div中显示出来
    newdiv.innerHTML=document.getElementById("content").value;

    document.getElementById("content").value="";	//清空content中的信息
    number++;	//
    if(newobj)
        parent.insertBefore(newdiv,newobj.nextSibling);
    else
        parent.appendChild(newdiv);	//添加子结点div
}
// var number = 4;
// var newobj;
//
// function addElementDiv() {
//     var parent = document.getElementById("mydiv");
//
//     //添加 div
//     var div = document.createElement("div");
//
//     //设置 div 属性，如 id     setAttribute();  设置name="information"
//     div.setAttribute("name", "information");
//     div.setAttribute("ondblclick", "deletethis(this)");
//     div.setAttribute("onclick", "changecss(this)");
//     div.innerHTML = document.getElementById("content").value;
//     parent.appendChild(div);
//     document.getElementById("content").value = "";
//     number++;
// }
//
// function clear(){
//     var names = document.getElementsByName("information");
//     for(var i=0;i<number;i++){
//         names[i].innerHTML = "";
//     }
//     var content = document.getElementById("content");
//     content.value = "";
// }
//
// function deletethis(obj){
//     obj.innerHTML = "";
// }
//
// function changecss(obj){
//     var names = document.getElementsByName("information");
//     for(var i=0;i<number;i++){
//         names[i].style.background = "#48D1CC";
//     }
//     obj.style.background = "rgb(124,0,198)";
// }
//
// function getDiv(obj){
//     newobj = obj;
// }
//
// function insertDiv(){
//     var parent = document.getElementById("mydiv");
//     var div = document.createElement("div");
//     //设置 div 属性，如 id     setAttribute();  设置name="information"
//     div.setAttribute("name", "information");
//     div.setAttribute("ondblclick", "deletethis(this)");
//     div.setAttribute("onclick", "changecss(this)");
//     div.innerHTML = document.getElementById("content").value;
//     document.getElementById("content").value = "";
//     number++;
//     if(newobj)
//         parent.insertBefore(div, newobj.nextSibling);
//     else
//         parent.appendChild(div);
//
// }
//
