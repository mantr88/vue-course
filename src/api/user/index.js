import { clientFetch } from '../clientFetch'

export const login = async (credentials) => {
  const response = await clientFetch.post('/user/login', credentials)
  return response.data
}

export const register = async (userData) => {
  const response = await clientFetch.post('/user/register', userData)
  return response.data
}

export const logout = async () => {
  const response = await clientFetch.get('/user/logout')
  return response.data
}

export const refresh = async () => {
  const response = await clientFetch.get('/user/refresh')
  return response.data
}
