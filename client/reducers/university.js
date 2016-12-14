const university = ( state = {}, action) => {
  switch(action.type) {
    case 'SET_UNIVERSITY':
      return action.university;
      break;
    default:
      return state;
  }
}

export default university;
