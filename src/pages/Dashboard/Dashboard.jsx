import { useDispatch, useSelector } from "react-redux";
import { getAllProfiles } from '../../actions/auth';
import ProfilesContainer from "../../components/ProfilesContainer/ProfilesContainer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  const [hidden, setHidden] = useState(true)
  const { user, profiles } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  const handleGetAllProfiles = () => {
    dispatch(getAllProfiles())
  }
  const isAdmin = user.role === 'ADMIN' ? true : false

  useEffect(() => {
    if (isAdmin) {
      handleGetAllProfiles()
    }
  }, [])


  const navigate = useNavigate()

  const navigateToUpdateUser = () => {
    navigate('/updateuser')
  }


  return (
    <>
      <article>
        <header>
          <h1>Welcome {user.name} </h1>
        </header>
        <div>
          <h3>
            My Info: Email: {user.email}           <Button varient="primary" onClick={() => navigateToUpdateUser()}>Change Username</Button>

          </h3>
        </div>
      </article>
      {isAdmin ?
        <div>
          <Button variant={hidden ? 'primary' : 'danger'} onClick={() => setHidden(!hidden)}>{hidden ? "Show Users" : "Hide Users"}</Button>
          {!hidden ?
            <ProfilesContainer />
            : null
          }
        </div>
        : null}
    </>
  );
}


export default Dashboard;