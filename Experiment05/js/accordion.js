function openBody(num){
    var bodys=['body_1','body_2','body_3'];
    var heads=['Head_1','Head_2','Head_3'];
    var icons=['icon_1','icon_2','icon_3'];
    for (var i = 0; i <3; i++) {
//                document.getElementById(bodys[i]).style.display="none";
        document.getElementById(heads[i]).style.background="#f0f0f0";
        document.getElementById(icons[i]).style['background-position']="-47px -187px";
        document.getElementById(heads[i]).style['border-radius']="6px";
    }
    if(document.getElementById('body_'+num).style.display==="block") {
        document.getElementById('body_' + num).style.display = "none";
    }
    else {
        document.getElementById('body_' + num).style.display = "block";
        document.getElementById('Head_' + num).style.background = '#7E97F5';
        document.getElementById("icon_" + num).style['background-position'] = "-63px -187px";
        document.getElementById('Head_' + num).style['border-bottom-left-radius'] = "0px";
        document.getElementById('Head_' + num).style['border-bottom-right-radius'] = "0px";
    }
//            document.getElementById('body_'+num).style.display="block";
//            document.getElementById('Head_'+num).style.background='#7E97F5';
//            document.getElementById("icon_"+num).style['background-position']="-63px -187px";
//            document.getElementById('Head_'+num).style['border-bottom-left-radius']="0px";
//            document.getElementById('Head_'+num).style['border-bottom-right-radius']="0px";
    // 注意这里的带 - 的要用方括号括起，如['background-position']
}