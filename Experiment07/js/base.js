$(function() {
    load_main_page();   //进入加载主页面
})

//载入主页面
function load_main_page() {
    $('#main').load('main.html');
}

//载入细节新闻
function load_detail() {
    $('#main').load('detail.html');
}

//载入注册页面
function load_register(){
    $('#main').load('register.html');
}
//检查注册的，begin
//检查格式
function check(){
    var name=document.getElementById('nname').value;
    if(!name.match(/^[a-zA-Z][a-zA-Z0-9-_]{4,7}/))
        document.getElementById('tip_name').innerHTML="*用户昵称错误";
    else
        document.getElementById('tip_name').innerHTML="";


    var p_name=document.getElementById('personal_name').value;
    if(p_name=="")
        document.getElementById('tip_personal_name').innerHTML="*个性名称不能为空！";
    else
        document.getElementById('tip_personal_name').innerHTML="";


    var sex=document.getElementById("sex").value;//性别
    if(!(sex=='男'||sex=='女'))
        document.getElementById('tip_sex').innerHTML="*请选择性别！";
    else
        document.getElementById('tip_sex').innerHTML="";


    var checkselete=document.getElementsByName('checkselete');//注意这里是用input标签的name属性
    var index=0;
    for (var i in checkselete)
        if (checkselete[i].checked)
            index++;
    if(index==0)
        document.getElementById('tip_hobit').innerHTML="*至少选择一项！";
    else
        document.getElementById('tip_hobit').innerHTML="";


    var email=document.getElementById('email').value;
    if(!email.match(/^[^\.@]+@[^\.@]+\.[a-z]+$/))
        document.getElementById('tip_email').innerHTML="*邮箱格式错误！";
    else
        document.getElementById('tip_email').innerHTML="";


    var calling=document.getElementById('calling').value;
    if(!calling.match((/0[0-9]{3}-[1-9][0-9]{6}/)|(/0[0-9]{2}-[1-9][0-9]{7}/)))
        document.getElementById('tip_calling').innerHTML="*联系方式格式(区号-号码，如010-12345678)！";
    else
        document.getElementById('tip_calling').innerHTML="";


    var phone=document.getElementById('phone').value;
    if(!phone.match(/1[0-9]{10}/))
        document.getElementById('tip_phone').innerHTML="*手机号码输入错误！";
    else
        document.getElementById('tip_phone').innerHTML="";
}
//清空数据
function clearAll(){
    document.getElementById("nname").value="";
    document.getElementById("personal_name").value="";
    var sex=document.getElementById('init');//是将选项那个直接更改它的selected
    sex.selected="selected"

    var checkselete=document.getElementsByName('checkselete');
    for(var i in checkselete)
        if(checkselete[i].checked)
            checkselete[i].checked=false;

    document.getElementById('email').value="";
    document.getElementById('calling').value="";
    document.getElementById('phone').value="";
}
//检查注册的，end

//载入登陆界面
function load_login(){
    $('#main').load('login.html');
}