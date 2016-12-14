const universities = ( state = [], action ) => {
  let index;
  switch(action.type) {
    case 'ALL_UNIVERSITIES':
      return action.universities
      break;
    case 'EDIT_UNIVERSITY':
    // debugger: access to following:
      // action.university = the updated university
      // action.type = the type of reducer action that was dispatched
      // state = all of the universities in the redux store
      let allUniversities = state;
      index = allUniversities.findIndex( u => u.id === action.university.id)
      allUniversities[index] = action.university;
      return [...allUniversities];
      break;
    case 'DELETE_UNIVERSITY':
      index = state.findIndex( u => u.id === action.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
      break;
    default:
      return state;
  }
}

export default universities;
