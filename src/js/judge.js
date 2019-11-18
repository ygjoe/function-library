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
  isCommon: function (common = '') {
    return /^[a-zA-Z0-9_]*$/.test(common)
  },
  // 用户名，英文字母开头，数字、字母、下划线
  isUsername: function (username = '') {
    return /^[a-zA-Z]*$/.test(username)
  },
  // 身份证18位
  isIDCard: function (IDCard) {
    return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(IDCard)
  },
  // 短信验证码，正整数6位
  isMesCode: function (num) {
    return /^[\d]{6}$/.test(num)
  },
  // 正整数
  isPosInt: function (num) {
    return /^\d+$/.test(num)
  },
  // 负整数
  isNegInt: function (num) {
    return /^-\d+$/.test(num)
  },
  // 整数
  isInt: function (num) {
    return /^-?\d+$/.test(num)
  },
  // 正数
  isPos: function (num) {
    return /^\d*\.?\d+$/.test(num)
  },
  isNeg: function (num) {
    return /^-\d*\.?\d+$/.test(num)
  },
  // 正负数字
  isNum: function (num) {
    return /^-?\d*\.?\d+$/.test(num)
  },
  // email
  isEMail: function (EMail) {
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(EMail)
  },
  // 中文
  isChinese: function (str) {
    return /^[\u4e00-\u9fa5]{0,}$/.test(str)
  }
}

export default judge
