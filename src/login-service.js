import { postData } from './api-service'

const login = async function(email, password) {
  const userData = await postData('api/v1/sessions', { user: { email: email, password: password } })
  return userData
}

export { login as default }
