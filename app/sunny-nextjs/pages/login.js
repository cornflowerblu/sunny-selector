import React, { useEffect } from 'react'

export default function Login() {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  })

  const [response, setResponse] = React.useState({
    user: '',
    sessionId: '',
  })

  useEffect(() => {
    if (response.sessionId !== '') {
      localStorage.setItem('_sunnysession', JSON.stringify(response))
    }
  }, [response])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const JSONdata = JSON.stringify(data)

    const endpoint = process.env.NEXT_PUBLIC_EPISODE_URL + '/api/login'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    let rawData
    try {
      rawData = await fetch(endpoint, options)
      setResponse(await rawData.json())
    } catch (error) {
      console.log(error)
      return alert('Failed to fetch, check route.')
    }

    try {
      alert(`User logged in!`)
      //TODO: Store session in cookie using useEffect
      setData({
        email: '',
        password: '',
      })
    } catch (error) {
      console.error(error)
      return alert('Error!')
    }
  }

  const handleChange = async (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="auth">
      <h1 className="display-6 pb-2">Please Sign In</h1>
      <form className="was-validated" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label> Email address</label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            required
            className="form-control border-secondary mb-3"
            value={data.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            className="form-control border-secondary mb-3"
            value={data.password}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary w-50 mb-3"
          />
        </div>
      </form>
    </div>
  )
}
