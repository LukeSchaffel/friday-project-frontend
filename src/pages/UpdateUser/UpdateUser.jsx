import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import UpdateUserForm from '../../components/UpdateUserForm/UpdateUserForm';

const UpdateUser = () => {
  const location = useLocation()
  const { user } = useSelector(state => state.authReducer)
  const [userToUpdate, setUserToUpdate] = useState(
    location.state ? location.state.profile : user
  )
  return ( 
  <div>
    <UpdateUserForm 
      userToUpdate={userToUpdate}
    />
  </div> 
  );
}
 
export default UpdateUser;