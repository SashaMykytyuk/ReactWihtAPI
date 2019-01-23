import React from 'react';

class SignupPage extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            email: '',
            password: '',
        }

        this.onHandlerChange = this.onHandlerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    onHandlerChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit=(e)=> {
         console.log('The value is: ' , this.state);
        e.preventDefault();

        fetch('http://localhost:51034/api/Account/Register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res=>res.status === 200)
            .then(res => res.json())
            .then(res => {
                this.setState({ isLoading: false });
            })
            .catch(error => console.log(error.Message));


    }



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
                                    <input className="form-control" placeholder="Password" name="password" type="password"/>
                                </div>
                                <input className="btn btn-lg btn-success btn-block" type="submit" value="Login"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SignupPage;