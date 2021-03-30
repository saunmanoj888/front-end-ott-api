let DEFAULT_URL = '//127.0.0.1:3000/'

const postData = async function(url = '', data = {}, token = '') {
  const response = await fetch(DEFAULT_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  if ([200, 201].includes(response.status)) {
      const data = await response.json()
      return data
  } else {
      throw new Error(`${response.status}--${response.statusText}`)
  }
}

const getData = async function(url = '', token) {
  const response = await fetch(DEFAULT_URL + url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  if (response.status === 200) {
      const data = await response.json()
      return data
  } else {
      throw new Error(`${response.status}--${response.statusText}`)
  }
}

  export { postData, getData }
