$(function(){
    var points=$(".point li");
    var pics=$(".outer");
    var words=$("#news");
    var timer=null;
    var index=0;
    autoPlay(); //调用定时函数
    function change(index){
        switch(index){
            case 0:pics.css("background-image","url('images/1.jpg')");words.html("1评教");break;
            case 1:pics.css("background-image","url('images/2.jpg')");words.html("2学习十九大");break;
            case 2:pics.css("background-image","url('images/3.jpg')");words.html("3引进博士");break;
            case 3:pics.css("background-image","url('images/4.jpg')");words.html("4【学习党的十九大】学校举行学习贯彻党的十九大精神专题...");break;
            case 4:pics.css("background-image","url('images/5.jpg')");words.html("5领导来了");break;
        }
    }
    points.mouseover(function(){
        index=points.index(this);
        change(index);
        clearInterval(timer);   //清除定时
    })
    points.mouseout(function(){
        autoPlay(); //调用定时函数
    })
    function autoPlay(){
        timer=setInterval(function(){   //设置定时
            if(index>=$(".point li").length-1)
                index=0;
            else
                index++;
            change(index);
        },2000);
    }
})