import React from 'react';

class RegisterPage extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            userName:{},
            email:{},
            password:{},
            passwordConfirm:{}
        }

        this.onHandlerChange = this.onHandlerChange.bind(this);
    }

    
    onRegister = () =>{

    }

    onHandlerChange(e) {
             this.setState({[e.target.name]: e.target.value});
    }

    // onHandlerChange=(e)=>{
    //     this.setState({[e.target.name]: e.target.value});

    // }

    render() {
        console.log('----state------  ', this.state);
        return (
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
                                    <input className="form-control" placeholder="PasswordConfirm" name="passwordConfirm" onChange={this.onHandlerChange} type="password"  />
                                </div>
                                <input className="btn btn-lg btn-success btn-block" type="button" onClick={this.onRegister} value="Register" />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;