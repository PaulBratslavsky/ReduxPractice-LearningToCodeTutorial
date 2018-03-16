import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import upDateUser from './actions/actionsUser';

class App extends Component {
    constructor(props) {
      super(props);
      this.onUpDateUser = this.onUpDateUser.bind(this);
    }

    onUpDateUser(event) {
      this.props.onUpDateUser(event.target.value);
    }
  render() {
    console.log('PROPS ', this.props);
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>{this.props.product}</p>
        <input onChange={this.onUpDateUser}/>
        <p>{this.props.user}</p>
        <br />
        <br />
        <em>From Learn Coding Tutorials - Check out their YouTube Channel</em>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    user: state.user,
  };
} 

const mapActionsToProps = {
  onUpDateUser: upDateUser,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
