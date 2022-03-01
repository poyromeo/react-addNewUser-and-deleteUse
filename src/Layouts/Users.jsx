import React, { Component } from 'react';
import User from './User';

class Users extends Component {

    render() {

        const { users, deleteUser } = this.props;

        return (
            <div style={{ marginTop: `50px` }} >
                <table style={{ backgroundColor: `rgb(150, 320, 15)` }} className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => {
                                const { id, name, email } = user;
                                return (
                                    <User key={id}

                                        id={id}
                                        name={name}
                                        email={email}

                                        deleteUser={deleteUser}

                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>


        )
    }
}

export default Users;