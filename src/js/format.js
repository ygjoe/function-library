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
  }
}
export default format
