
const initialState = {
  genderFilter: 'all',
  ageFilter: [],
  searchFilter: ''
}
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GENDER_FILTER": {
      return {
        ...state, genderFilter: action.value
      }
    }
    case "SET_AGE_FILTER": {
      return {
        ...state, ageFilter: action.value
      }
    }
    case "SET_SEARCH_FILTER": {
      return {
        ...state, searchFilter: action.value
      }
    }
    default:
      return state
  }
}