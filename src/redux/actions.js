import axios from "axios";

export const loadUsers = () => (dispatch) => {
  dispatch(usersFetchStart());
  const localUsers = localStorage.getItem('users');
  if (localUsers) {
    dispatch(usersFetchSuccsess(JSON.parse(localUsers)));
  } else {
    axios
      .get("https://randomuser.me/api/?results=48")
      .then((result) => {
        dispatch(usersFetchSuccsess(result.data.results));
        localStorage.setItem('users', JSON.stringify(result.data.results))
      })
      .catch((err) => {
        dispatch(usersFetchFail());
      });
  }
};

export const usersFetchStart = () => ({
  type: "FETCH_START",
});
export const usersFetchSuccsess = (users) => ({
  type: "FETCH_SUCCESS",
  users,
});
export const usersFetchFail = () => ({
  type: "FETCH_FAIL",
});

export const setGenderFilter = (value) => ({
  type: "SET_GENDER_FILTER",
  value
});

export const setAgeFilter = (value) => ({
  type: "SET_AGE_FILTER",
  value
});

export const setSearchFilter = (value) => ({
  type: "SET_SEARCH_FILTER",
  value
});
