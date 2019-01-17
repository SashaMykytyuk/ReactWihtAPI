import React from 'react';


class About extends React.Component {


    render() {

        return (
            <div className='container'>
                
                
                <div className='text-center'>
                    <h2>Hello in About</h2>
                </div>
                {this.props.children}
            </div>
        );
    }

}


export default About;