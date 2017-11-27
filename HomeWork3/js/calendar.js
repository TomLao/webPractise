var date=new Date();    //初始化日期
var month=["January","February","March","April","May","June","July","August",
    "September","October","November","December"];
function setData() {
    var mon=date.getMonth();    //获取月份
    var year=date.getFullYear();//获取完整格式年
    document.getElementsByTagName("h2")[0].innerHTML=month[mon]+" "+year;
    //这里的【0】是因为Elements的TagName会有多个h2，要以此为区分
    var day;
    if(mon+1==2){
        if((year%4==0&&(year%100!=0))||(year%400==0))
            day=29;
        else
            day=28;
    }
    else{
        if(mon==0||mon==2||mon==4||mon==6||mon==7||mon==9||mon==11)
            day=31;
        else
            day=30;
    }
    //调用返回的是一个数组,只有一个也是要下标的,对每一个div赋值
    for(var x=0;x<document.getElementsByClassName('firstLine')[0].childNodes.length;x++)
        document.getElementsByClassName('firstLine')[0].childNodes[x].className="open";

    for(var x=0;x<document.getElementsByClassName('Line').length;x++)
        for(var y=0;y<document.getElementsByClassName('Line')[x].childNodes.length;y++)
            document.getElementsByClassName('Line')[x].childNodes[y].className="open";

    for(var x=0;x<document.getElementsByClassName('lastLine')[0].childNodes.length;x++)
        document.getElementsByClassName('lastLine')[0].childNodes[x].className="open";

    date.setDate(1);
    var firstDay=date.getDay(); //0-6分别代表星期一到星期天
    for(var x=1;x<=firstDay;x++){
        document.getElementsByClassName('firstLine')[0].childNodes[x].className="close";
        document.getElementsByClassName('firstLine')[0].childNodes[x].innerHTML="";
    }

    var count=1;
    for(var x=firstDay+1;x<document.getElementsByClassName('firstLine')[0].childNodes.length-1;x++) {
        document.getElementsByClassName('firstLine')[0].childNodes[x].innerHTML = count++;
        //点击变黄点
        document.getElementsByClassName('firstLine')[0].childNodes[x].onclick = function () {
            clearall(firstDay);
            this.className='clicked';
        }
    }

    var flag=0;
    for(var x=0;x<document.getElementsByClassName("Line").length;x++){
        for(var y=1;y<document.getElementsByClassName('Line')[x].childNodes.length-1;y++){
            if(count<=day) {
                document.getElementsByClassName('Line')[x].childNodes[y].innerHTML = count++;
                //点击变黄点
                document.getElementsByClassName('Line')[x].childNodes[y].onclick = function () {
                    clearall(firstDay);
                    this.className='clicked';
                }
            }
            else{
                flag=1;
                document.getElementsByClassName('Line')[x].childNodes[y].className="close";
                document.getElementsByClassName('Line')[x].childNodes[y].innerHTML="";
            }

        }
    }
    if(flag==1||count==day+1){
        for(var x=0;x<document.getElementsByClassName('lastLine')[0].childNodes.length;x++){
            document.getElementsByClassName('lastLine')[0].childNodes[x].className="close";
            document.getElementsByClassName("lastLine")[0].childNodes[x].innerHTML="";
        }
        document.getElementById("frame").className="frame_Low";
    }else{
        for(var x=1;x<document.getElementsByClassName("lastLine")[0].childNodes.length-1;x++){
            if(count<=day){
                document.getElementsByClassName("lastLine")[0].childNodes[x].innerHTML=count++;

                //点击变黄点
                document.getElementsByClassName('lastLine')[0].childNodes[x].onclick = function () {
                    clearall(firstDay);
                    this.className='clicked';
                }

            }
            else{
                document.getElementsByClassName("lastLine")[0].childNodes[x].className="close";
                document.getElementsByClassName("lastLine")[0].childNodes[x].innerHTML="";
            }
        }
        document.getElementById("frame").className="frame_Hight";
    }
}

//清除黄点
function clearall(firstDay) {
    for (var x = firstDay + 1; x < document.getElementsByClassName('firstLine')[0].childNodes.length - 1; x++)
        document.getElementsByClassName('firstLine')[0].childNodes[x].className = "open";
    for (var x = 0; x < document.getElementsByClassName('Line').length; x++)
        for (var y = 0; y < document.getElementsByClassName('Line')[x].childNodes.length; y++)
            if (document.getElementsByClassName('Line')[x].childNodes[y].className != 'close')
                document.getElementsByClassName('Line')[x].childNodes[y].className = "open";
    for(var x=1;x<document.getElementsByClassName("lastLine")[0].childNodes.length-1;x++) {
        if (document.getElementsByClassName('lastLine')[0].childNodes[x].className != 'close')
            document.getElementsByClassName('lastLine')[0].childNodes[x].className = "open";
    }
}

onload=setData();
function preMonth() {
    if(date.getMonth()!=0){
        date.setMonth(date.getMonth()-1);   //设置月份减一
    }
    else{
        date.setFullYear(date.getFullYear()-1);//月份到了0，前一个年份
        date.setMonth(11);  //这里11是12月
    }
    setData();  //调用显示函数
}
function postMonth() {
    if(date.getMonth()==11){
        date.setMonth(0);
        date.setFullYear(date.getFullYear()+1);
    }
    else{
        date.setMonth(date.getMonth()+1);
    }
    setData();
}