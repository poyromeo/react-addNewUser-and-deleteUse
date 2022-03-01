import React, { Component } from 'react';


class addUser extends Component {

    state = {
        name: "",
        email: "",
    }

    onNameChange(e) {
        this.setState(
            {
                //HTML5-name
                [e.target.name] : e.target.value
            }
        );
    }

    onEmailChange(e) {
        this.setState(
            {
                //HTML5-name
                [e.target.name] : e.target.value
            }
        );
    }

    onAddSubmit(e) {
        const {addUser} = this.props;
        const {name, email} = this.state;

        const newUser = {
            id: Math.random(),
            name: name,
            email: email
        }
        addUser(newUser);

        //Not-reshfer
        e.preventDefault();
    }

    render() {

        const { name, email } = this.state;

        return (
            <div className="card" style={{backgroundColor: `gray` }}>
                <h4 className='card-header' style={{backgroundColor: `rgb(150, 320, 15)` }}>Add New User</h4>
                <div className='card-body'>
                    <form onSubmit={this.onAddSubmit.bind(this)}>

                        <div className='form-group'>
                            <label htmlFor="name" 
                            style={{fontFamily: `Arial`}, {fontWeight: `bolder`}, {fontSize: `20px`}}>Name</label><br />
                            <input style={{backgroundColor: `aqua` }} type="text"
                                name='name'
                                id='name'
                                placeholder='Enter Name...'
                                className='form-control'
                                value={name}
                                onChange={this.onNameChange.bind(this)} />
                        </div><br />

                        <div className='form-group'>
                            <label htmlFor="email" 
                            style={{fontFamily: `Arial`}, {fontWeight: `bolder`}, {fontSize: `20px`}}>Email</label><br />
                            <input style={{backgroundColor: `aqua` }} type="text"
                                name='email'
                                id='email'
                                placeholder='Enter Email...'
                                className='form-control'
                                value={email}
                                onChange={this.onEmailChange.bind(this)} />
                        </div><br />

                        <button type="submit" className='btn btn-primary btn-block'>Add New User</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default addUser;