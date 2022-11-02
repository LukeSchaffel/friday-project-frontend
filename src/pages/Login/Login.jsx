import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main>
      <div>
        <p>{message}</p>
        <LoginForm
          updateMessage={updateMessage}
        />
      </div>
    </main>
  )
}

export default LoginPage
