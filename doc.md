#### judge // 判断相关
```$xslt
// 变量 fl.isIOS
isIOS // ios
isAndroid // android
isWX // 微信内置浏览器
isQQ // QQ年内置浏览器
isMobile // 移动端
isPC // pc端

// 函数 fl.isPhone(data)
// 注意：科学计数法未做严格判断，也属于数字中
isPhone // 手机号
isCommon // 非特殊字符，数字、字母、下划线
isUsername // 用户名，英文字母开头，数字、字母、下划线
isIDCard // 身份证18位
isPosInt // 正整数
isNegInt // 负整数
isInt // 整数
isPos // 正数
isNeg // 负数
isNum // 正负数字
isEMail // email
isChinese // 中文
```

#### format // 格式化相关
```$xslt
parse // url参数转obj对象
parse(params) // params在函数内会判断去除开头的'?'，并执行一次decodeURIComponent方法 

----------------
stringify // obj对象转url参数
stringify(obj) // 输入url参数开头无'?'，未经过encode

----------------
formData // obj对象转FormData
formData(obj)
```
