import { postData } from './api-service'

const signUp = async function(email, password, firstName, lastName, token) {
    const requestBody = { user: { email: email, password: password, first_name: firstName, last_name: lastName } }
    const userData = await postData('api/v1/users', requestBody, token)
    return userData
}

export { signUp as default }