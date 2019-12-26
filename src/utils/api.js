
const baseURL = 'http://localhost:9000/api/v1'


const signInUserURL = `${baseURL}/usersignin`

const signInUser = user => {
    return fetch(signInUserURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.userEmail,
        password: user.userPassword
      })
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  }

  export {signInUser};