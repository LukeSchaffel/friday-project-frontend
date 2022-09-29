import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth"
import { useCallback } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { RiLoginCircleFill } from 'react-icons/ri';
import { FaSignOutAlt, FaHome } from "react-icons/fa";
import { MdOutlineDashboardCustomize, MdOutlineCreate } from "react-icons/md";


const NavBar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.authReducer);
  const logOut = useCallback(() => {
    dispatch(logout());
    
  }, [dispatch]);


  return (
    <>
      {user ?
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Friday Auth Template <FaHome /> </Navbar.Brand>
            <Nav className="me-auto">
              {user.role === 'ADMIN' ?
                <Nav.Link href="/dashboard">Admin Dashboard <MdOutlineDashboardCustomize /> </Nav.Link>
                :
                <Nav.Link href="/dashboard" >Dashboard <MdOutlineDashboardCustomize /></Nav.Link>
              }
              <Nav.Link href="/login" onClick={logOut}>Log Out <FaSignOutAlt /></Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        :
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Friday Auth Template <FaHome /> </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">Log In  <RiLoginCircleFill /></Nav.Link>
              <Nav.Link href="/signup">Sign Up <MdOutlineCreate /> </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      }
    </>
  )
}

export default NavBar
