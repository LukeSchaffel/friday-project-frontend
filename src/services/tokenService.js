import jwt_decode from 'jwt-decode'

export const setToken = (token) => {
  localStorage.setItem('token', token)
}

export const getToken = () => {
  let token = localStorage.getItem('token')
  if (token) {
    const payload = jwt_decode(token)
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token')
      token = null
    }
  } else {
    localStorage.removeItem('token')
  }
  return token
}

export const removeToken = () => {
  localStorage.removeItem('token')
}

export const getUserFromToken = () => {
  const token = getToken()
  return token ? jwt_decode(token) : null
}