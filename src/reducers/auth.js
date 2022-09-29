import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_PROFILES_FAIL,
  GET_PROFILES_SUCCESS,
  DELETE_PROFILE_FAIL,
  DELETE_PROFILE_SUCCESS,
  UPDATE_SELF_SUCCESS,
  UPDATE_SELF_FAIL,
  UPDATE_OTHER_FAIL,
  UPDATE_OTHER_SUCCESS
} from "../actions/types";
import { getUserFromToken } from "../services/tokenService";

const user = getUserFromToken()


const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case GET_PROFILES_SUCCESS:
      const newProfiles = payload.profiles.filter((profile) => {
        return profile.id !== user.id
      })
      return {
        ...state,
        profiles: newProfiles
      };
    case DELETE_PROFILE_SUCCESS:
      const profiles = state.profiles
      const newProfiles2 = profiles.filter((profile) => {
        return profile.id !== payload.profile.id
      })
      return {
        ...state,
        profiles: newProfiles2
      }
    case UPDATE_SELF_SUCCESS:
      return {
        ...state,
        user: payload
      }
    case UPDATE_OTHER_SUCCESS:
      return {
        ...state
      }
    default:
      return state;
  }
}