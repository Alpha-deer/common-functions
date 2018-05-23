

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

module.exports = {
    formatDate, // 日期格式化
    formatMoney, // 金额格式化
}