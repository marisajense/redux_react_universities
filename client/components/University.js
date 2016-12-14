import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleUniversity } from '../actions/universities';

class University extends Component {

  componentDidMount() {
    this.props.dispatch(singleUniversity(this.props.params.id));
  }

  display() {
    let university = this.props.university;
    if(Object.keys(university).length) {
      return(
        <div>
          <h3>{ university.name }</h3>
          <br />
          <i>Private: { university.private ? 'Yes' : 'No' }</i>
          <br />
          <i>Accredited: { university.accredited ? 'Yes' : 'No' }</i>
          <br />
          <i>Number of Students: { university.number_students}</i>
          <br />
          <i>Year Built: { university.year_built}</i>
        </div>
      );
    } else {
      return(<h4>No University</h4>);
    }
  }

  render() {
    return(
      <div>
        { this.display() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { university: state.university }
}

export default connect(mapStateToProps)(University);
