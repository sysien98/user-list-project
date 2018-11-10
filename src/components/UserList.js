import React, { Component } from 'react';


class UserList extends Component {


    removeUser = (key) => {
        this.props.delete(key);
    }


    render() {
       const listItem = this.props.users.map((user, i) =>{
        return <li className="list-li" key={i} onClick={()=>this.removeUser(i)}>{user}</li>
       });


      
      return (
       <ul className="users-list-ul">
         {listItem}
       </ul>
      );
    }
  }
  
  export default UserList;

