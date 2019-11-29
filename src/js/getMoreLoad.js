// 配置项
let options = {
  dom: window, // 绑定滑动的dom
  model: 'top', // 滑动模式，top = 上滑；left = 左滑
  distance: 0, // 距离边缘的距离触发回调函数
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
  options.dom.addEventListener('scroll')
}

// 上滑加载
function getMoreTop () {

}

// 左滑加载
function getMoreLeft () {

}

export default init
