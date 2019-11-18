const u = window.navigator.userAgent

const judge = {
  // 设备
  isIOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
  isWX: u.indexOf('MicroMessenger') > -1,
  isQQ: u.match(/\sQQ/i) == ' qq',
  isMobile: !!u.match(/AppleWebKit.*Mobile.*/),
  isPC: !u.match(/AppleWebKit.*Mobile.*/),

  /** 表单验证 **/
  // 手机号
  isPhone: function (phone) {
    return /^[1][3-9][0-9]{9}$/.test(phone)
  },
  // 非特殊字符，数字、字母、下划线
  // min 最小位数
  // max 最大位数
  isCommon: function (common = '', min, max) {
    const len = common.length
    if (min) {
      if (len < min) {
        return false
      }
    }
    if (max) {
      if (len > max) {
        return false
      }
    }
    return /^[a-zA-Z0-9_]*$/.test(common)
  },
  // 用户名，英文字母开头，数字、字母、下划线
  // min 最小位数
  // max 最大位数
  isUsername: function (username = '', min, max) {
    const len = username.length
    if (min) {
      if (len < min) {
        return false
      }
    }
    if (max) {
      if (len > max) {
        return false
      }
    }
    return /^[a-zA-Z]*$/.test(username)
  },
  // 身份证18位
  isIDCard: function (IDCard) {
    return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(IDCard)
  }
}

export default judge
