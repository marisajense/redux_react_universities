import React, { Component } from 'react';
import { editUniversity, deleteUniversity } from '../actions/universities';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class UniversityCard extends Component {
  constructor(props) {
    super(props);

    this.state = { edit: false };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  display() {
    let university = this.props.university
    return(
      <div className="col s12 m6">
        <div className="card grey darken-3">
          <div className="card-content white-text">
            <span className="card-title">{ university.name }</span>
            <p>Number of Students: { university.number_students }</p>
          </div>
          <div className="card-action">
            <Link to={`/universities/${university.id}`} className='btn green'>More Details</Link>
            <button onClick={this.toggleEdit} className='btn orange'>Edit</button>
            <button onClick={() => this.props.dispatch(deleteUniversity(university.id))} className='btn red'>Delete</button>
          </div>
        </div>
      </div>
    );
  }

  edit() {
    let university = this.props.university
    return(
      <div className="col s12 m6">
        <div className="card grey darken-3">
          <form onSubmit={this.handleSubmit}>
          <div className="card-content white-text">
            <span className="card-title">
              <input type='text' required ref='name' defaultValue={university.name} placeholder='University Name' />
            </span>
            <p>
              Number of Students:
              <input ref='numStudents' type='number' required defaultValue={university.number_students} />
            </p>
          </div>
          <div className="card-action">
            <button className='btn green'>Submit</button>
            <button type='button' onClick={this.toggleEdit} className='btn orange'>Cancel</button>
          </div>
          </form>
        </div>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    let name = this.refs.name.value;
    let numberStudents = this.refs.numStudents.value;

    this.props.dispatch(editUniversity(this.props.university.id, name, numberStudents));
    this.toggleEdit();
  }


  render() {
    if(this.state.edit) {
      return(this.edit());
    } else {
      return(this.display());
    }
  }
}

export default connect()(UniversityCard);
