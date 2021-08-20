
const initialState = {
  usersData: [],
  loading: false,
  error: false,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START": {
      return {
        ...state, loading: true, error: false
      }
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        loading: false,
        usersData: action.users
      }
    }
    case "FETCH_FAIL": {
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    default:
      return state
  }
}