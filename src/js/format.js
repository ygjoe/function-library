const format = {
  // url参数转obj
  parse: function (params) {
    let data = decodeURIComponent(params)
    let result = {}
    if (data.indexOf('?') === 0) {
      data = data.slice(1)
    }
    data.split('&').forEach(function (item, index) {
      let arr = item.split('=')
      result[arr[0]] = arr[1] || ''
    })
    return result
  },
  // obj转url参数
  stringify: function (obj) {
    let data = obj
    let result = []
    for (let key in data) {
      result.push(`${key}=${data[key]}`)
    }
    result = result.join('&')
    return result
  },
  // obj转FormData
  formData: function (obj) {
    let data = obj
    let result = new FormData()
    for (let key in data) {
      result.append(key, data[key])
    }
    return result
  },
  // 金额格式化 xx,xxx,xxx,xxx.00
  fmAmount: function (amount) {
    let data = amount.toString()
    let result = ''
    let arr = data.split('.')
    arr[0] = arr[0].replace(/\d{1,3}(?=(\d{3})+?$)/g, '$&,')
    result = arr.join('.')
    return result
  },
  // 金额格式化输出整数和小数
  // params amount = 0，金额 Number || String；toFixed = 2，保留小数位数 Number || String
  // return [String=整数,String=小数]
  fmAmountToArray: function (amount = 0, toFixed = 2) {
    let a = amount.toString().split('.')
    let a0 = a[0] || '0'
    let a1 = a[1] || '0'
    let integer = a0
    let decimals = ''
    let a1Length = a1.split('').length
    if (a1Length < toFixed) {
      decimals = a1 * Math.pow(10, toFixed - a1Length) + ''
    }
    if (a1Length == toFixed) {
      decimals = a1
    }
    if (a1Length > toFixed) {
      decimals = (a1 / Math.pow(10, a1Length - toFixed)).toFixed(0)
    }

    return [integer, decimals]
  },
  toFixed: function (num, fixed = 0) {
    if (!Number(num)) {
      return console.error('toFixed(num,fixed):num is not number')
    }
    let arr = num.toString().split('.')
    let f = Number(fixed)
    let result = Number(num)
    //整数
    if (arr.length < 2) {
      //需要保留小数
      if (f > 0) {
        result = `${result}.${Math.pow(10, f).toString().slice(1)}`
      }
      return result.toString()
    }
    //浮点数
    let integer = arr[0], float = arr[1], len = float.length
    //小数位数和fixed相同
    if (len === f) {
      return result.toString()
    }
    //小数位数小于fixed
    if (len < f) {
      result = `${result}${Math.pow(10, f - len).toString().slice(1)}`
      return result
    }
    //小数位数大于fixed
    result = integer + float.substr(0, f + 1)    //浮点数转成整数字符串
    result = Math.floor((Number(result) + 5) / 10) //四舍五入
    result = result / Math.pow(10, f)    //整数字符串转成浮点数
    result = toFixed(result, f)  //递归执行避免精度丢失
    return result
  },
  // 接口返回时间转成ios、android通用，'2020-02-02 02:02:02' to '2020/02/02 02:02:02'
  fmTimeToAndroidIos: function (time) {
    return time.replace(/-/g, '/')
  },
  // 年月日转毫秒 time = new Date() 可转换格式，例如：'2020-02-02 02:02:02' ||  '2020/02/0202:02:02'
  fmTimeToMillisecond: function (time) {
    return new Date(time.replace(/-/g, '/')).getTime()
  },
  // 返回倒计时格式，
  // params time = 毫秒
  // return object = { d, h, m, s, ms } 天时分秒
  fmTimeCountdown: function (time = 0) {
    let d = Math.floor(time / 1000 / 60 / 60 / 24)
    let h = Math.floor(time / 1000 / 60 / 60 % 24)
    let m = Math.floor(time / 1000 / 60 % 60)
    let s = Math.floor(time / 1000 % 60)
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    return { d, h, m, s }
  },
  // 返回年月日时分秒
  // params time = Number毫秒 || time = String '0000-00-00 00:00:00' ||
  // time = New Date()
  // return object = { y, m, d, h, mu, s, ms} String 年月日时分秒
  fmTimeDate: function (time = new Date()) {
    function setString (num) {
      return num < 10 ? '0' + num : num.toString()
    }

    let t = time.toString().replace(/-/g, '/')
    let date = new Date(t)
    let y = setString(date.getFullYear())
    let m = setString(date.getMonth() + 1)
    let d = setString(date.getDate())
    let h = setString(date.getHours())
    let mu = setString(date.getMinutes())
    let s = setString(date.getSeconds())

    return { y, m, d, h, mu, s, ms }
  },
}

export default format
