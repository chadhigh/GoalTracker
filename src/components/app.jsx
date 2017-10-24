import React, { Component } from 'react';
import { connect } from 'react-redux';
import {firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList'


class App extends Component {
    signOut(){
        firebaseApp.auth().signOut();
    }
    
    render() {
        return(
            <div style={{margin: '5px'}}>
            <h3>Task Tracker</h3>
            <AddGoal />
            <hr />
            <h4>Tasks:</h4>
            <GoalList />
            <hr />
            <h4>Completed Tasks</h4>
            <CompleteGoalList />
            <hr />
              <button className='btn btn-danger' onClick={() => this.signOut()}> Sign Out </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return{};
}

export default connect(mapStateToProps, null)(App);