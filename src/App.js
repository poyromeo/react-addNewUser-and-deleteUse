import React from 'react';
import AddUser from './Layouts/AddUser';
import Users from './Layouts/Users';
import './App.css';


class App extends React.Component {

  //State-constructor
  constructor(props) {

    super(props)
    this.state = {
      users: [
        {
          id: 1,
          name: "recep",
          email: "rcporta52@gmail.com"
        },
        {
          id: 2,
          name: "rümeysa",
          email: "rumorta@gmail.com"
        },
        {
          id: 3,
          name: "Ekrem",
          email: "ekrem@gmail.com"
        },
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser) {
    let updateUsers = this.state.users;

    updateUsers.push(newUser);

    this.setState(
      {
        users: updateUsers
      }
    );
  }

  deleteUser(id) {
    let updateUsers = this.state.users;

    //Delete-filter
    updateUsers = updateUsers.filter(user => user.id !== id);
    //Change-new-state
    this.setState(
      {
        users: updateUsers
      }
    )

  }

  render() {
    return (
      <body>
        <div style={{ marginTop: `50px` }} className='container'>
          <h3>User App</h3>
          <hr />
          <AddUser addUser={this.addUser} />
          <Users deleteUser={this.deleteUser} users={this.state.users} />
        </div>
      </body>

    )
  }
}
export default App;

