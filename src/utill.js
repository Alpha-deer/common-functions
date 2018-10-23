// 1.判断是否为PC
function isPC () {  
   var userAgentInfo = navigator.userAgent;  
   var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
   var flag = true;  
   for (var v = 0; v < Agents.length; v++) {  
       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
   }  
   return flag;  
}

    // 1.获取URL参数
function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
