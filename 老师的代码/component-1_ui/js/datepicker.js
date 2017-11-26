// JavaScript Document

function Datepicker() {
	this.selectDate = null;
	this.tempDate = new Date();
	this.selectTdObj=null;
  	//设置日历头部 年月
	this.setHeadYearMonth(new Date());
	//绑定上一月，下一月点击事件
	this.setHeadEvent();	
	//设置表格样式,日	
	this.setBodyDay(new Date());	
	//绑定选定单元格（日期）点击事件
	this.selectADate();
}
//设置日历头部 年月
Datepicker.prototype.setHeadYearMonth = function(date) {
	var englishMonth=this.getEnglishMonth(date.getMonth());
	var headObjs=document.getElementsByClassName("datepicker-title");
	headObjs[0].children[0].innerHTML=""+englishMonth+"&nbsp;"+date.getFullYear();
};

Datepicker.prototype.setHeadEvent = function() {
	var nowDatepicker=this;//这里的this是指当前的Datepicker对象
	var preSpanObj=document.getElementsByClassName("datepicker-pre")[0].children[0];
	preSpanObj.addEventListener('click', function(e){
		nowDatepicker.tempDate=nowDatepicker.minusAMonth(nowDatepicker.tempDate);
		nowDatepicker.setHeadYearMonth(nowDatepicker.tempDate);
		nowDatepicker.setBodyDay(nowDatepicker.tempDate);
	}, false);
	
	var nextSpanObj=document.getElementsByClassName("datepicker-next")[0].children[0];
	nextSpanObj.addEventListener('click', function(e){
		nowDatepicker.tempDate=nowDatepicker.addAMonth(nowDatepicker.tempDate);
		nowDatepicker.setHeadYearMonth(nowDatepicker.tempDate);
		nowDatepicker.setBodyDay(nowDatepicker.tempDate);
	}, false);	
};

//设置表格样式,日
Datepicker.prototype.setBodyDay = function(date) {
	var totalDaysOfMonth=this.getTotalDaysOfMonth(date);
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
};


Datepicker.prototype.selectADate = function() {
	var nowDatepicker=this;//这里的this是指当前的Datepicker对象
	var tdObjs=document.getElementsByTagName("td");
	for(i=0;i<tdObjs.length;i++){
		//为head绑定鼠标单击事件
		tdObjs[i].addEventListener('click', function(e){
			//这里的this是用户当前点击的元素对象（td标签），而不是当前的Datepicker对象
			this.children[0].setAttribute("class","datepicker-td-highlight");
			
			if(nowDatepicker.selectTdObj !=null && nowDatepicker.selectTdObj!=this)
				nowDatepicker.selectTdObj.children[0].setAttribute("class","datepicker-td-default");
			
			nowDatepicker.selectTdObj=this;	
			
			var day=this.children[0].innerHTML;
			nowDatepicker.tempDate.setDate(parseInt(day));
			
			if(nowDatepicker.selectDate==null) 
				nowDatepicker.selectDate=new Date();
				
			nowDatepicker.selectDate.setFullYear(nowDatepicker.tempDate.getFullYear());
			nowDatepicker.selectDate.setMonth(nowDatepicker.tempDate.getMonth());
			nowDatepicker.selectDate.setDate(nowDatepicker.tempDate.getDate());
			//alert(nowDatepicker.selectDate);
		}, false);
	}	
};

Datepicker.prototype.getTotalDaysOfMonth = function(date) {
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

Datepicker.prototype.getEnglishMonth = function(month) {
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

Datepicker.prototype.addAMonth = function(date) {
	var year=date.getFullYear();
	var month=date.getMonth();
	var date="";
	
	if(month<11)
		date+=year+"-"+(month+2)+"-01";
	else
		date+=(year+1)+"-01"+"-01";
		
	return new Date(date);
};

Datepicker.prototype.minusAMonth = function(date) {
	var year=date.getFullYear();
	var month=date.getMonth();
	var date="";
	
	if(month>0)
		date+=year+"-"+month+"-01";
	else
		date+=(year-1)+"-12"+"-01";
		
	return new Date(date);
};



