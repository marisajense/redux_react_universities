export const fetchUniversities = () => {
  return(dispatch) => {
    $.ajax({
      url: '/api/universities',
      type: 'GET',
      dataType: 'JSON'
    }).done( universities => {
      dispatch({ type: 'ALL_UNIVERSITIES', universities})
    }).fail(data => {
      console.log(data);
    });
  }
}

export const editUniversity = (id, name, number_students) => {
  return(dispatch) => {
    $.ajax({
      url: `/api/universities/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { university: {name, number_students} }
    }).done(university => {
      dispatch({ type: 'EDIT_UNIVERSITY', university });
    }).fail(data => {
      console.log(data);
    });
  }
}

export const deleteUniversity = (id) => {
  return(dispatch) => {
    $.ajax({
      url: `/api/universities/${id}`,
      type: 'DELETE',
      dataType: 'JSON',
    }).done(data => {
      dispatch({ type: 'DELETE_UNIVERSITY', id });
    }).fail(data => {
      console.log(data);
    });
  }
}

export const singleUniversity = (id) => {
  return(dispatch) => {
    $.ajax({
      url: `/api/universities/${id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done(university => {
      dispatch({ type: 'SET_UNIVERSITY', university})
    }).fail(data => {
      console.log(data);
    });
  }
}
