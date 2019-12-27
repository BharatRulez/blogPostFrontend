
const baseURL = 'http://localhost:9000/api/v1'


const signInUserURL = `${baseURL}/usersignin`
const createUserURL = `${baseURL}/usersignup`
const createPostURL = `${baseURL}/post`

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

  const createUser = user => {
    return fetch(createUserURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName: user.fullName,
        email: user.email,
        password: user.password
      })
    }).then(res => res.json())
  }

  const createPost = post => {
    return fetch(createPostURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: post.title,
        description: post.description,
      })
    }).then(res => res.json())
  }
  export {signInUser,createUser,createPost};