import React from 'react';

class RegisterPage extends React.Component {

    state = {
        userName:{},
        email:{},
        password:{},
        passwordConfirm:{}
    }
    onRegister = () =>{

    }


    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">Registration</h3>
                            </div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <input class="form-control" placeholder="your name" name="name" type="text" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="yourmail@example.com" name="email" type="text" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" name="password" type="password" value="" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="PasswordConfirm" name="passwordConfirm" type="password" value="" />
                                </div>
                                <input class="btn btn-lg btn-success btn-block" type="button" onClick={this.onRegister} value="Register" />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;