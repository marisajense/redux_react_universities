import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUniversities } from '../actions/universities';
import UniversityCard from './UniversityCard';

class Universities extends Component {

  componentDidMount() {
    this.props.dispatch(fetchUniversities())
  }

  displayUniversities() {
    let universities = this.props.universities;
    if(universities.length) {
      return universities.map( university => {
        return(<UniversityCard key={university.id} university={university} />);
      });
    } else {
      return(<h4>No Universities</h4>);
    }
  }

  render() {
    return(
      <div>
      <h1 className="center">All Universities</h1>
        <div className='row'>
        { this.displayUniversities() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { universities: state.universities }
}
export default connect(mapStateToProps) (Universities);
