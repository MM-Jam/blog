/**
 * 把时间戳转换成时间
 * @param {*} time
 */
function turnTime (time) {
  time = new Date(time * 1000)
  const Y = time.getFullYear()
  const M = (time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1)
  const D = (time.getDate() < 10 ? '0' + time.getDate() : time.getDate())
  return `${Y}-${M}-${D}`
}
export default turnTime
