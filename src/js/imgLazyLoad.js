let imgArr = [] // img dom元素数组
let imgIndex = 0 // 当前img懒加载的下标
let options = {
  default: '', // 默认图片
  bottom: 0, // img距离底边多少加载
  right: 0, // img距离右边多少加载
  errorMax: 2, // onerror最大错误次数
  error: '' // 错误图片
}

// 初始化
function init (option) {
  setOption(option)
  getImgArr()
  imgLazyLoad()
  addListenerScroll()
}

// 预加载默认、错误图片
function getDefaultError (src) {
  const img = new Image()
  img.src = src
}

// 设置自定义配置项
function setOption (option) {
  options = { ...options, ...option }
  if (option.default) {
    getDefaultError(option.default)
  }
  if (option.error) {
    getDefaultError(option.error)
  }
}

// 图片懒加载
function imgLazyLoad () {
  getImgArr()
  if (imgArr.length - 1 >= imgIndex) {
    imgArr.slice(imgIndex).forEach(function (item, index) {
      item.src = options.default
      const src = item.getAttribute('fl-imgLazy')
      if (src) {
        const { left, top } = item.getBoundingClientRect()
        if (left - options.right <= window.innerWidth && top - options.bottom <= window.innerHeight && item.src !== src) {
          let error = 0
          item.src = src
          item.onerror = function () {
            item.src = options.error
            error += 1
            if (error >= options.errorMax) {
              item.onerror = null
            }
          }
          imgIndex++
        }
      }
    })
  }
}

// 获取img集合
function getImgArr () {
  if (imgArr.length - 1 <= imgIndex) {
    imgArr = Array.prototype.slice.call(document.getElementsByTagName('img') || [])
  }
}

// 监听滚动
function addListenerScroll () {
  window.addEventListener('scroll', imgLazyLoad)
}

export default init
