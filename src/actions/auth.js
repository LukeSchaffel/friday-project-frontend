import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAIL,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_FAIL,
  UPDATE_SELF_FAIL,
  UPDATE_SELF_SUCCESS,
  UPDATE_OTHER_SUCCESS,
  UPDATE_OTHER_FAIL
} from "./types";

import * as authService from "../services/authService";

export const signup = (username, email, password) => (dispatch) => {
  return authService.signup(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_PROFILES_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return authService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.user },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const getAllProfiles = () => (dispatch) => {
  return authService.getAllProfiles()
  .then(
    (data) => {
      dispatch({
        type: GET_PROFILES_SUCCESS,
        payload: { profiles: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const deleteProfile = (id) => (dispatch) => {
  return authService.deleteProfile(id)
  .then(
    (data) => {
      dispatch({
        type: DELETE_PROFILE_SUCCESS,
        payload: { profile: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: DELETE_PROFILE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
}

export const updateSelf = (user, newUsername) => (dispatch) => {
  return authService.updateUser(user, newUsername)
  .then(
    (data) => {
      dispatch({
        type: UPDATE_SELF_SUCCESS,
        payload: data,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: UPDATE_SELF_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
}
export const updateOther = (user, newUsername) => (dispatch) => {
  return authService.updateUser(user, newUsername)
  .then(
    (data) => {
      dispatch({
        type: UPDATE_OTHER_SUCCESS,
        payload: data,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: UPDATE_OTHER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
}

export const logout = () => (dispatch) => {
  authService.logout();
  dispatch({
    type: LOGOUT,
  });
};

