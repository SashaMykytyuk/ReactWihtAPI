import React from 'react';

class RegisterPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.onHandlerChange = this.onHandlerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    onHandlerChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        console.log('The value is: ', this.state);
        e.preventDefault();

        fetch('http://localhost:51034/api/Account/Register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.status === 200)

            .then(res => res.json())
            .then(res => {
                this.setState({ isLoading: false });
                this.props.router.push('/signin');
            })

            .catch(error => console.log(error.Message));


    }

    render() {
        // if (this.state.isLoading) {
        //     return (
        //         <h1>loading...</h1>
        //     )
        // }
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
                                        <input className="form-control" placeholder="yourmail@example.com" name="email" onChange={this.onHandlerChange} type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password" name="password" onChange={this.onHandlerChange} type="password" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="PasswordConfirm" name="confirmPassword" onChange={this.onHandlerChange} type="password" />
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