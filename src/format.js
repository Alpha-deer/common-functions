

// 日期格式化
const formatDate=(timestamp,isHours=false)=>{ 
    const date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    const D = date.getDate() <10?'0'+ date.getDate()+' ':date.getDate()+' ';
    // console.log(isHours);
    if(isHours){
        const h = date.getHours() + ':';
        const m = date.getMinutes()<10?'0'+ date.getMinutes()+':':date.getMinutes()+ ':';
        const s = date.getSeconds()<10?'0'+ date.getSeconds():date.getSeconds();
        return Y+M+D+h+m+s;
    }else{
        return Y+M+D;
    }    
} 

// 金额格式化
const formatMoney = (s, n)=> {  
    n = n > 0 && n <= 20 ? n : 2;  
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
    let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  
    let t = "";  
    for (let i = 0; i < l.length; i++) {  
        t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? "," : "");  
    }  
    return t.split("").reverse().join("") + "." + r;  
}  

/*1.用浏览器内部转换器实现html转码*/
function htmlEncode(html){
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement ("div");
    //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
    (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
    //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
    var output = temp.innerHTML;
    temp = null;
    return output;
}

/*2.用浏览器内部转换器实现html解码*/
function htmlDecode(text){
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement("div");
    //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
    temp.innerHTML = text;
    //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}
/*3.用正则表达式实现html转码*/
function htmlEncodeByRegExp(str){
    var s = "";
    if(str.length == 0) return "";
    s = str.replace(/&/g,"&amp;");
    s = s.replace(/</g,"&lt;");
    s = s.replace(/>/g,"&gt;");
    s = s.replace(/ /g,"&nbsp;");
    s = s.replace(/\'/g,"&#39;");
    s = s.replace(/\"/g,"&quot;");
    return s;
}

/*4.用正则表达式实现html解码*/
function htmlDecodeByRegExp(str){
    var s = "";
    if(str.length == 0) return "";
    s = str.replace(/&amp;/g,"&");
    s = s.replace(/&lt;/g,"<");
    s = s.replace(/&gt;/g,">");
    s = s.replace(/&nbsp;/g," ");
    s = s.replace(/&#39;/g,"\'");
    s = s.replace(/&quot;/g,"\"");
    return s;
}

module.exports = {
    formatDate, // 日期格式化
    formatMoney, // 金额格式化
}
