//普通类型函数调用
// function openBody(num){
//     var bodys=['body_1','body_2','body_3'];
//     var heads=['Head_1','Head_2','Head_3'];
//     var icons=['icon_1','icon_2','icon_3'];
//     for (var i = 0; i <3; i++) {
// //                document.getElementById(bodys[i]).style.display="none";
//         document.getElementById(heads[i]).style.background="#f0f0f0";
//         document.getElementById(icons[i]).style['background-position']="-47px -187px";
//         document.getElementById(heads[i]).style['border-radius']="6px";
//     }
//     if(document.getElementById('body_'+num).style.display==="block") {
//         document.getElementById('body_' + num).style.display = "none";
//     }
//     else {
//         document.getElementById('body_' + num).style.display = "block";
//         document.getElementById('Head_' + num).style.background = '#7E97F5';
//         document.getElementById("icon_" + num).style['background-position'] = "-63px -187px";
//         document.getElementById('Head_' + num).style['border-bottom-left-radius'] = "0px";
//         document.getElementById('Head_' + num).style['border-bottom-right-radius'] = "0px";
//     }
// //            document.getElementById('body_'+num).style.display="block";
// //            document.getElementById('Head_'+num).style.background='#7E97F5';
// //            document.getElementById("icon_"+num).style['background-position']="-63px -187px";
// //            document.getElementById('Head_'+num).style['border-bottom-left-radius']="0px";
// //            document.getElementById('Head_'+num).style['border-bottom-right-radius']="0px";
//     // 注意这里的带 - 的要用方括号括起，如['background-position']
// }

//构建prototype伪类模式
function Accordion() {
    this.setEvent();
}
Accordion.prototype.setEvent=function () {
    var heads = document.getElementsByClassName('hiddentHead');
    var bodys = document.getElementsByClassName('activeBody');

    for (var i = 0; i < heads.length; i++) {
        heads[i].onclick = function () {
            //进入到onclick中了不能识别外面的i，只能用this。或者用jQuery的$(this).index()来获取当前点击的下标位置
            for (var j = 0; j < heads.length; j++) {
                bodys[j].style.display = 'none';
                heads[j].style.background = "#f0f0f0";
                document.getElementById('icon_' + (j + 1)).style['background-position'] = "-47px -187px";
                heads[j].style['border-radius'] = "6px";
            }
            bodys[$(this).index() / 2].style.display = 'block';
            heads[$(this).index() / 2].style.background = '#7E97F5';
            document.getElementById("icon_" + ($(this).index() / 2 + 1)).style['background-position'] = "-63px -187px";
            heads[$(this).index() / 2].style['border-bottom-left-radius'] = "0px";
            heads[$(this).index() / 2].style.borderBottomRightRadius = "0px";
        }
    }
}