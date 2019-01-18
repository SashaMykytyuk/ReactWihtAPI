import React from 'react';

class SignupPage extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">Login</h3>
                            </div>
                            <div class="panel-body">
                               <div class="form-group">
                                    <input class="form-control" placeholder="yourmail@example.com" name="email" type="text" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" name="password" type="password" value="" />
                                </div>
                                <input class="btn btn-lg btn-success btn-block" type="button" value="Login"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SignupPage;