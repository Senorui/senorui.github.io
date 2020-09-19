function setcookie(name,value,days){  //给cookie增加一个时间变量
　　var exp = new Date(); 
　　exp.setTime(exp.getTime() + days*24*60*60*1000); //设置过期时间为days天
　　document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 
function getCookie(name){
　　var result = "";
　　var myCookie = ""+document.cookie+";"; 
　　var searchName = +name+"=";
　　var startOfCookie = myCookie.indexOf(searchName);
　　var endOfCookie;
　　if(startOfCookie != -1){
        startOfCookie += searchName.length;
　　　　endOfCookie = myCookie.indexOf(";",startOfCookie);
　　　　result = (myCookie.substring(startOfCookie,endOfCookie));
　　}
　　return result;
}
(function(){
　　var oTips = document.getElementById('tips');//假设tips的id为tips
　　var page = {
　　check: function(){//检查tips的cookie是否存在并且允许显示
　　　　var tips = getCookie('tips');
　　　　if(!tips || tips == 'show') return true;//tips的cookie不存在
　　　　if(tips == "never_show_again") return false;
　　},
　　hideTip: function(bNever){
　　　　if(bNever) setcookie('tips', 'never_show_again', 365);
　　　　oTips.style.display = "none";//隐藏
　　},
　　showTip: function(){
　　oTips.style.display = "inline";//显示，假设tips为行级元素
　　},
　　init: function(){
　　　　var _this = this;
　　　　if(this.check()){
　　　　_this.showTip();
　　　　setcookie('tips', 'show', 1);
　　}
　　oTips.onclick = function(){
　　　　_this.hideTip(true);
　　};
　　}
　　};
  page.init();
})();