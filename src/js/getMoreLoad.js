// 配置项
let options = {
  dom: window, // 绑定滑动的dom
  model: 'top', // 滑动模式，top = 上滑；left = 左滑
  distance: 0, // 距离边缘的距离触发回调函数，正负数字
  callback: () => {} // 滑动到末尾回调函数
}

function init (option) {
  setOption(option)
  addListener()
}

// 设置配置项
function setOption (option = {}) {
  options = { ...options, ...option }
}

// 监听滚动
function addListener () {
  if (options.model === 'left') {
    options.dom.addEventListener('scroll', getMoreLeft)
  } else {
    options.dom.addEventListener('scroll', getMoreTop)
  }
}

// 上滑加载
function getMoreTop () {
  let scrollHeight = document.documentElement.scrollHeight
  let height = document.documentElement.clientHeight
  let scrollTop = document.documentElement.scrollTop
  if (options.dom !== window) {
    scrollHeight = options.dom.scrollHeight
    height = options.dom.clientHeight
    scrollTop = options.dom.scrollTop
  }
  if (scrollHeight - scrollTop - options.distance <= height) {
    options.callback()
  }
}

// 左滑加载
function getMoreLeft () {
  let scrollWidth = document.documentElement.scrollWidth
  let width = document.documentElement.clientWidth
  let scrollLeft = document.documentElement.scrollLeft
  if (options.dom !== window) {
    scrollWidth = options.dom.scrollWidth
    width = options.dom.clientWidth
    scrollLeft = options.dom.scrollLeft
  }
  if (scrollWidth - scrollLeft - options.distance <= width) {
    options.callback()
  }
}

export default init
