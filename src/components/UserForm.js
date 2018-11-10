import React, { Component } from 'react';

class UserForm extends Component {

    addUser = (e) => {
        e.preventDefault();
        this.props.update(this.inputValue.value);
    }

    render() {
      return (
          
           
            <form className="happy-form" onSubmit={this.addUser}>
                <input type="text" placeholder="Nazwa użytkownika" ref={(data)=>{this.inputValue = data}}/>
                <input type="submit" value="Dodaj użytkownika"/>
            </form>
          
      );
    }
  }
  
  export default UserForm;