export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const SET_LOGOUT_USER = "SET_LOGOUT_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function setLogoutUser(id) {
  return {
    type: SET_LOGOUT_USER,
    id,
  };
}

export function login(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();
    const currentUser = Object.values(users).find(
      (user) => user.id === username && user.password === password
    );
    if (currentUser) {
      return dispatch(setAuthedUser(currentUser));
    } else {
      alert("Login Failed!")
    }
  };
}

export function logout() {
  return (dispatch) => {
    return dispatch(setLogoutUser());
  };
}