import '@/css/base.scss'
import judge from '@/js/judge'
import format from '@/js/format'
import imgLazyLoad from '@/js/imgLazyLoad'
import getMoreLoad from '@/js/getMoreLoad'

const fl = {
  ...judge,
  ...format,
  imgLazyLoad,
  getMoreLoad
}

export default fl
