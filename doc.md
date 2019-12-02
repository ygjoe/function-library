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

----------------
fmAmount // 金额格式化，千分位，xx,xxx,xxx.xx
fmAmount(amount) // amount是number类型的话，请勿使用科学计数法，未对小数做处理

```

#### imgLazyLoad // 图片懒加载，背景图片懒加载
```$xslt
// 滚动监听的是window
// 懒加载判断条件是 img.left - options.right <= window.innerWidth && img.top - options.bottom <= window.innerHeight

// img html
<img fl-img-lazy = "url">

// 背景图片 html
<div class = "fl-bg-lazy" fl-img-lazy = "url"></div>

// js
imgLazyLoad( {options} )
```
options  

 参数 | 说明 | 类型 | 默认值
 --- | --- | --- | ---
default | 默认图片 | url | 
bottom | img距离底边多少 | 数字，正负皆可 | 0
right | img距离右边多少加载 | 数字，正负皆可 | 0
errorMax | img.onerror最大错误次数 | 数字，正整数 | 2
error | 错误图片 | url |

#### getMoreLoad // 滑动加载
```$xslt
// 默认滚动监听window
// 滑动判断条件 
// 上滑 scrollHeight - scrollTop - options.distance <= height
// 左滑 scrollWidth - scrollLeft - options.distance <= width

// 调用
getMoreLoad( {options} )
```
 参数 | 说明 | 类型 | 默认值
 --- | --- | --- | ---
dom | scroll监听dom对象 | dom对象 | window 
model | 滑动方向 | string: 'left、top' | 'top'
distance | 距离边缘的距离触发回调函数 | 数字，正负皆可 | 0
callback | 滑动到末尾回调函数 | function | () => {}
