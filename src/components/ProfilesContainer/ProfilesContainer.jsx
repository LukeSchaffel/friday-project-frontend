import ProfileCard from "../ProfileCard/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import styles from './ProfilesContainer.module.css'


const ProfilesContainer = () => {

  const { user, profiles } = useSelector(state => state.authReducer)

  return ( 
  <div className={styles.container}>
    {profiles ? profiles.map((profile, idx) => {
      return  <ProfileCard profile={profile} key={profile.id}/>
    })
    : null
    } 
  </div> 
  );
}
 
export default ProfilesContainer;