import { clientFetch } from '../clientFetch'
import { router } from '../../router/index.js'

export const TOKEN_KEY = 'token'

class AuthService {
  #token = null

  isLoggedIn() {
    return !!this.#token
  }

  getToken() {
    if (!this.#token) {
      this.#token = localStorage.getItem(TOKEN_KEY)
    }
    return this.#token
  }

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
    clientFetch.defaults.headers.common['Authorization'] = `Bearer ${token}`
    this.#token = token
  }

  clearToken() {
    localStorage.removeItem(TOKEN_KEY)
    delete clientFetch.defaults.headers.common['Authorization']
    this.#token = null
  }

  async login(credentials) {
    const loginResponse = await clientFetch.post('/user/login', credentials)
    this.setToken(loginResponse.data.accessToken)
  }

  async register(userData) {
    const registrationResponse = await clientFetch.post('/user/register', userData)
    this.setToken(registrationResponse.data.accessToken)
  }

  async logout() {
    await clientFetch.post('/user/logout')
    this.setToken(null)
  }

  async refresh() {
    const refreshResponseData = await clientFetch.post('/user/refresh')
    this.setToken(refreshResponseData.data.accessToken)
  }
}

export const authService = new AuthService()

clientFetch.interceptors.request.use((config) => {
  const token = authService.getToken()
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

clientFetch.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      try {
        return await authService.refresh()
      } catch (e) {
        router.push('/auth/login')
        return Promise.reject(e)
      }
    }
    return Promise.reject(error)
  },
)
