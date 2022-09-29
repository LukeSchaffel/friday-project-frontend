import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css';
import * as authService from './services/authService'
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from './actions/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateUser from './pages/UpdateUser/UpdateUser';



function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  return (
    <div className="App">
      <NavBar className='nav'/>
      <Routes>
        <Route path='/'
        element={<Landing />} />
        <Route path='/login'
        element={<Login />} />
        <Route path='/signup'
        element={<Signup />} />
        <Route path='/dashboard'
        element={<Dashboard />} />
        <Route path='/updateuser'
        element={<UpdateUser />} 
        />
          

      </Routes>
    </div>
  );
}

export default App;
