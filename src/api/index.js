import axios from "axios"

const { VITE_APP_API_URL } = import.meta.env

export const api = axios.create({
  baseURL: VITE_APP_API_URL,
})
