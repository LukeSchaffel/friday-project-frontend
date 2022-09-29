import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './UpdateUserForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { updateSelf, updateOther } from "../../actions/auth";
import { Button } from "react-bootstrap";

const UpdateUserForm = ({ userToUpdate }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.authReducer)

  const [formData, setFormData] = useState({
    username: userToUpdate.name
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      if (user.id === userToUpdate.id) {
        await dispatch(updateSelf(userToUpdate, formData.username))
        navigate('/') 
      } else {
        await dispatch(updateOther(userToUpdate, formData.username))
        navigate('/') 
      }
    } catch (err) {
      throw err
    }
  }

  const isFormInvalid = () => {
    return !(username.length > 0 && userToUpdate.name !== formData.username)
  }

  const { username } = formData

  return (
    <div>
       <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="username" className={styles.label}>
          New Username:
        </label>
        <input
          type="username"
          autoComplete="off"
          id="username"
          value={username}
          name="username"
          onChange={handleChange}
        />
      </div>
      
      <div className={styles.buttonDiv}>
        <button disabled={isFormInvalid()} className={styles.button}>
          Change Username
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>

    </div>
  );
}

export default UpdateUserForm;