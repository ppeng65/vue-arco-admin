export const validatePassword = () => {
  return (value, callback) => {
    if (!value || value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
