import React from 'react';


class App extends React.Component {
    state = {
        ccy: [],
        summ: {},
        isLoad: false

    }

    componentDidMount() {
        this.setState({ isLoad: true });
        fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
            .then(Response => {
                if (Response.status == 200) {
                    return Response.json();
                }
            })
            .then(data => {
                this.setState({ ccy: data });
                this.setState({ isLoad: false });
            })
            .catch(error => {
                console.log(`Error: ${error.message}`)
            });

    }

    onHandlerChange = (inputData) => {
        this.setState({ summ: inputData.target.value })
    }


    onHandlerChangeSelect = (inputData) => {
       
    }

    render() {
        //const isLoad = this.state.isLoad;
        const { isLoad } = this.state;
        const options = this.state.ccy.map((c)=>{
            return(
                <option key={c.ccy}>{c.ccy}</option>
            );
        });
        return (
            <div>
                <div>
                    <h1>Hello</h1>
                </div>
                <div>
                    <label>Summ grn</label>
                    <input type='text' onChange={this.onHandlerChange}></input>
                    {isLoad && <span>Loading</span>}
                    {!isLoad &&
                        <select onChange = {this.onHandlerChangeSelect}>
                            <option></option>
                            {options}
                        </select>
                    }

                </div>
            </div>
        );
    }
}


export default App;