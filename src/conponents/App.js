import React from 'react';


class App extends React.Component {


    render() {

        return (
            <div className='container'>
                <div className='text-center'>
                    <h2>Hello in App</h2>
                </div>
                {this.props.children}
            </div>
        );
    }

}


export default App;