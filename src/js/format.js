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
  }
}

export default format
