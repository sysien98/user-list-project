import React, { Component } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';


class User extends Component {


    constructor() {
        super();
        this.state = {
            users: ['Adam', 'Ola', 'Karol']
        
        }
    }
    updateUsersList = (name) => {

        
        this.setState((prevState)=> {
            return ({users: prevState.users.concat(name)})
        })
    }



    deleteUser = (keyValue) => {
        console.log('Usuń użytkownika z indexem ' + keyValue);

        let updatedUsersList = this.state.users.filter((user)=> {
            return this.state.users.indexOf(user) !== keyValue;
        })

        this.setState({
            users: updatedUsersList
        });
    }



    render() {

        
      return (
        <div className="users">
          <h1>User's app</h1>
            <UserForm update={this.updateUsersList} />
            <UserList users={this.state.users} delete={this.deleteUser} />
        </div>
      );
    }
  }
  
  export default User;