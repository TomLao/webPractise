// JavaScript Document
var selectDate=null;
var tempDate=new Date();
var oldSelectTdObj=null,selectTdObj=null;
setHeadYearMonth(new Date());
setBodyDay(new Date());
selectADate();
//设置日历头部 年月
function setHeadYearMonth(date){	
	var englishMonth=getEnglishMonth(date.getMonth());
	var headObjs=document.getElementsByClassName("datepicker-title");
	headObjs[0].children[0].innerHTML=""+englishMonth+"&nbsp;"+date.getFullYear();
}
//设置日历头部 年月  结束


//设置表格样式,日
function setBodyDay(date){	
	var totalDaysOfMonth=getTotalDaysOfMonth(date);
	var firstDate=new Date(""+date.getFullYear()+"-"+(date.getMonth()+1)+"-01");
	var first=firstDate.getDay();
	var tdObjs=document.getElementsByTagName("td");
	//前空白
	for(var i=0;i<first;i++){
		tdObjs[i].innerHTML="";
	}
	//设置日
	for(i=0;i<totalDaysOfMonth;i++){
		tdObjs[i+first].innerHTML="<a href='#' class='datepicker-td-default'>"+(i+1)+"</a>";
	}
	//后空白
	for(i=totalDaysOfMonth+first;i<42;i++){
		tdObjs[i].innerHTML="";
	}
}

function selectADate(){
	var tdObjs=document.getElementsByTagName("td");
	for(i=0;i<tdObjs.length;i++){
		//为td绑定鼠标单击事件
		tdObjs[i].addEventListener('click', function(e){
			this.children[0].setAttribute("class","datepicker-td-highlight");
			
			if(selectTdObj !=null && selectTdObj!=this)
				selectTdObj.children[0].setAttribute("class","datepicker-td-default");
			
			selectTdObj=this;	
			
			var day=this.children[0].innerHTML;
			tempDate.setDate(parseInt(day));
			
			if(selectDate==null) 
				selectDate=new Date();
				
			selectDate.setFullYear(tempDate.getFullYear());
			selectDate.setMonth(tempDate.getMonth());
			selectDate.setDate(tempDate.getDate());
			//alert(selectDate);
		}, false);
	}	
}

//改变月份
function changeMonth( value ){
	var date;
	if(value==1)
		date=addAMonth(tempDate);
	else
		date=minusAMonth(tempDate);
	
	tempDate=date;
	setHeadYearMonth(tempDate);
	setBodyDay(tempDate);
	
}

//获得所在月的总天数
function getTotalDaysOfMonth(date){
	var month=date.getMonth();
	switch(month){
		case 0:case 2:case 4:case 6:case 7:case 9:case 11: return 31;
		case 3:case 5:case 8:case 10: return 30;		
	}
	year=date.getFullYear();
	
	if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
		return 29;
	else
		return 28;	
};

function getEnglishMonth( month ){
	switch(month){
		case 0: return "January";
		case 1: return "February";
		case 2: return "March";
		case 3: return "April";
		case 4: return "May";
		case 5: return "June";
		case 6: return "July";
		case 7: return "August";
		case 8: return "September";
		case 9: return "October";
		case 10: return "November";
		case 11: return "December";
	}
};

function addAMonth( date ){
	var year=date.getFullYear();
	var month=date.getMonth();
	var date="";
	
	if(month<11)
		date+=year+"-"+(month+2)+"-01";
	else
		date+=(year+1)+"-01"+"-01";
		
	return new Date(date);
};

function minusAMonth( date ){
	var year=date.getFullYear();
	var month=date.getMonth();
	var date="";
	
	if(month>0)
		date+=year+"-"+month+"-01";
	else
		date+=(year-1)+"-12"+"-01";
		
	return new Date(date);
};


//获取下一个兄弟元素（不是下一个兄弟结点，因为结点分为文本结点，元素结点等不同类型的结点）
function get_nextSibling(obj){  
	var x=obj.nextSibling;  
	while (x && x.nodeType!=1) //nodeType表示元素结点 
		x=x.nextSibling; 
	 
	return x;  
};

