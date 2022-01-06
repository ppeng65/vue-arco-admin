import md5 from 'md5'
import router from '../../router'
import { login } from '../../api/sys'
import { setItem, getItem } from '../../utils/storage'
import { TOKEN } from '../../constant'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login({ commit }, loginForm) {
      const { username, password } = loginForm
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((res) => {
            commit('setToken', res.token)
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
