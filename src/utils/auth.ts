export const saveAccessTokenToLs = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}

export const getAccessTokenFromLs = () => localStorage.getItem('access_token') || ''

export const clearAccessTokenFromLs = () => {
  localStorage.removeItem('access_token')
}
