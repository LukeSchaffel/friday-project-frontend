import styles from './Landing.module.css'
import { useDispatch, useSelector } from "react-redux";

const Landing = () => {
  const { user } = useSelector(state => state.authReducer)

  return (
    <main className={styles.container}>
      {user ?
        <h1>welcome {user.name}</h1>
        :
        <h1>
          Welcome, Please Sign Up or Log In to get Started
        </h1>
      }
    </main>
  )
}

export default Landing
