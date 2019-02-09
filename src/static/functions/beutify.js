export default (value) => {
  if (value.toLowerCase() !== value) {
    value = value.split('').map((v) => (v.toLowerCase() !== v ? ' ' + v : v)).join('')
  }
  return value.charAt(0).toUpperCase() + value.slice(1)
}