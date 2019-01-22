import React from 'react';

class RegisterPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            userName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }

        this.onHandlerChange = this.onHandlerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    onHandlerChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit=(e)=> {
        // console.log('The value is: ' , this.state);
        e.preventDefault();

        fetch('', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            
            .then(res => res.json())
            .then(res => {
                this.setState({ isLoading: false });
            })
            .catch(error => console.log(error.Message));


    }

    render() {
        if (this.state.isLoading) {
            return (
                <h1>loading...</h1>
            )
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Registration</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="your name" name="userName" onChange={this.onHandlerChange} type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="yourmail@example.com" name="email" onChange={this.onHandlerChange} type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password" name="password" onChange={this.onHandlerChange} type="password" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="PasswordConfirm" name="passwordConfirm" onChange={this.onHandlerChange} type="password" />
                                    </div>
                                    <input className="btn btn-lg btn-success btn-block" type="submit" value="Register" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default RegisterPage;