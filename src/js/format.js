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
  // toFixed 浮点数精度丢失修复;默认四舍五入到整数;
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
  }
}

export default format
