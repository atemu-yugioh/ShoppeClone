import { User } from 'src/types/user.type'

export const setAccessTokenToLs = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}

export const getAccessTokenFromLs = () => localStorage.getItem('access_token') || ''

export const clearLs = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}

export const setProfileToLs = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}

export const getProfileFromLs = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}
