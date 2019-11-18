const u = window.navigator.userAgent

export default {
  isIOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
  isWX: u.indexOf('MicroMessenger') > -1,
  isQQ: u.match(/\sQQ/i) == ' qq',
  isMobile: !!u.match(/AppleWebKit.*Mobile.*/),
  isPC: !u.match(/AppleWebKit.*Mobile.*/)
}
