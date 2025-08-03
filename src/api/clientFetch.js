import axios from 'axios'

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://back-for-vue.b.goit.study/'

export const clientFetch = axios.create({
  baseURL: API_BASE_URL,
  // timeout: 10000,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
})
