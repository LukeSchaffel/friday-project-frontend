import styles from './ProfileCard.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ProfileCard = ({ profile }) => {
  const { user, profiles } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  const handleDeleteProfile = (id) => {
    dispatch(deleteProfile(id))
  }

  const navigate = useNavigate()

  const navigateToUpdateOtherUser = () => {
    navigate('/updateuser', { state: { profile } })
  }

  return (
    <article className={styles.profileCard}>
      <header >
        <h3>Name: {profile.name}</h3>
        <h3>Email Address: {profile.email}</h3>
      </header>
      <div className={styles.buttonDiv}>
        <Button variant="dark" className={styles.btn} onClick={()=> navigateToUpdateOtherUser()}>
          Update profile
        </Button>
        <Button variant="dark" className={styles.btn} onClick={()=> handleDeleteProfile(profile.id)}>
          Delete profile
        </Button>
      </div>
    </article>
  );
}

export default ProfileCard;