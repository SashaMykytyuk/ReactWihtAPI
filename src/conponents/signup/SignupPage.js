import React from 'react';

class SignupPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Login</h3>
                            </div>
                            <div className="panel-body">
                               <div className="form-group">
                                    <input className="form-control" placeholder="yourmail@example.com" name="email" type="text" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                                </div>
                                <input className="btn btn-lg btn-success btn-block" type="button" value="Login"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SignupPage;