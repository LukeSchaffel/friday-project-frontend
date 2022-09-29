import axios from "axios";
import * as tokenService from './tokenService'

const API_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/users`;

export const signup = async (name, email, password) => {
  try {
    const user = await axios.post(`${API_URL}/signup`, {
      name,
      email,
      password,
    });
    return user

  } catch (error) {
    throw error
  }

};



export const login = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, {
      headers: { 'Content-Type': 'application/json' },
      email,
      password,
    })
    const data = res.data
    if (data.accessToken) {
      tokenService.setToken(data.accessToken)
    }
    return data
    
  } catch (error) {
    throw error
  }
  
};

export const getAllProfiles = async (user) => {
  try {
    const res = await axios.get(`${API_URL}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    const users = res.data
    return users
  } catch (error) {
    throw error
  }
  
}

export const deleteProfile = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    const profile = res.data
    return profile
  } catch (error) {
    throw error
  }
  
}


export const updateUser = async (user, newName) => {
  try {
    const { id } = user
    const res = await axios.patch(`${API_URL}/${id}`, {
      name: newName
    }, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    const updatedUser = res.data
    return updatedUser
    
  } catch (error) {
    throw error
  }
 
}



export const logout = () => {
  tokenService.removeToken();
};

