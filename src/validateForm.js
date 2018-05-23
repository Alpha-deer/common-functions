
// 1.验证是否为空
const isNull = function(str) {
    if (str === "")
        return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
};

// 2.验证IP
const isIP = function(strIP) {
    if (isNull(strIP))
        return false;
    var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g // 匹配IP地址的正则表达式
    if (re.test(strIP)) {
        if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256
                && RegExp.$4 < 256)
            return true;
    }
    return false;
};

// 3.判断是否为网址
const isURL = function (strUrl) {
    var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i
    if (regular.test(strUrl)) {
        return true;
    }else {
        return false;
    }
}

// 4.验证腾讯 QQ 号
const isQQ = function(str) {
    var regu = "^[1-9]*[1-9][0-9]*$";
    var re = new RegExp(regu);
    return re.test(str);
};

// 5.验证中文字符
const isChinese = function(str) {
    var re = /[\u4e00-\u9fa5]/;
    if (re.test(str)) {
      return true;
    }else{
        return false;
    }
};

//6.验证手机号
const isMobile=function(str){
    var re =/^(13[0-9]|14[579]|15[012356789]|16[6]|17[013678]|18[0-9]|19[89]|14[57])[0-9]{8}$/;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}

//7.验证身份证
const isIdCard = function (idcard) {
    if(idcard===undefined) return false;
    // var Errors = new Array("验证通过!", "身份证号码位数不对!", "身份证号码出生日期超出范围或含有非法字符!", "身份证号码校验错误!", "身份证地区非法!"); 
      var area = { 
        11: "北京", 
        12: "天津", 
        13: "河北", 
        14: "山西", 
        15: "内蒙古", 
        21: "辽宁", 
        22: "吉林", 
        23: "黑龙江", 
        31: "上海", 
        32: "江苏", 
        33: "浙江", 
        34: "安徽", 
        35: "福建", 
        36: "江西", 
        37: "山东", 
        41: "河南", 
        42: "湖北", 
        43: "湖南", 
        44: "广东", 
        45: "广西", 
        46: "海南", 
        50: "重庆", 
        51: "四川", 
        52: "贵州", 
        53: "云南", 
        54: "西藏", 
        61: "陕西", 
        62: "甘肃", 
        63: "青海", 
        64: "宁夏", 
        65: "新疆", 
        71: "台湾", 
        81: "香港", 
        82: "澳门", 
        91: "国外" 
      } 
    //   var retflag = false; 
    //   var idcard, Y, JYM; 
      var Y, JYM; 
      var S, M; 
      var idcard_array = []; 
      idcard_array = idcard.split(""); 
      //地区检验 
      if (area[parseInt(idcard.substr(0, 2),10)] == null) return false; 
      //身份号码位数及格式检验 
      var ereg,isTrue=false;
      switch (idcard.length) { 
        case 15: 
         
          if ((parseInt(idcard.substr(6, 2),10) + 1900) % 4 === 0 || ((parseInt(idcard.substr(6, 2),10) + 1900) % 100 === 0 && (parseInt(idcard.substr(6, 2),10) + 1900) % 4 === 0)) { 
            ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性 
          } else { 
            ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性 
          } 
          if (ereg.test(idcard)) { 
            isTrue=true;
          } 
          else { 
            isTrue=false; 
          } 
          break; 
        case 18: 
          if (parseInt(idcard.substr(6, 4),10) % 4 === 0 || (parseInt(idcard.substr(6, 4),10) % 100 === 0 && parseInt(idcard.substr(6, 4),10) % 4 === 0)) { 
            ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式 
          } else { 
            ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式 
          } 
          if (ereg.test(idcard)) { //测试出生日期的合法性 
            
            //计算校验位 
            S = (parseInt(idcard_array[0],10) + parseInt(idcard_array[10],10)) * 7 + (parseInt(idcard_array[1],10) + parseInt(idcard_array[11],10)) * 9 + (parseInt(idcard_array[2],10) + parseInt(idcard_array[12],10)) * 10 + (parseInt(idcard_array[3],10) + parseInt(idcard_array[13],10)) * 5 + (parseInt(idcard_array[4],10) + parseInt(idcard_array[14],10)) * 8 + (parseInt(idcard_array[5],10) + parseInt(idcard_array[15],10)) * 4 + (parseInt(idcard_array[6],10) + parseInt(idcard_array[16],10)) * 2 + parseInt(idcard_array[7],10) * 1 + parseInt(idcard_array[8],10) * 6 + parseInt(idcard_array[9],10) * 3; 
            Y = S % 11; 
            
            M = "F"; 
            JYM = "10X98765432"; 
            M = JYM.substr(Y, 1); //判断校验位
            if(M === 'X'){
                if(idcard_array[17]==='x'||idcard_array[17]==='X'){
                    isTrue=true;
                }
            } 
            if (M === idcard_array[17]) isTrue=true; //检测ID的校验位 
            else isTrue=false; 
          } else isTrue=false; 
          break; 
        default: 
        isTrue=false; 
          break; 
      }
      return isTrue; 
};


module.exports = {
    isNull: isNull, // 验证是否为空
    isIP: isIP, // 验证IP
    isURL: isURL, // 判断是否为网址
    isQQ: isQQ, // 验证腾讯 QQ 号
    isChinese: isChinese, // 验证中文字符
    isMobile:isMobile,//验证手机号
    isIdCard:isIdCard,//验证身份证
}