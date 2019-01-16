import React from 'react';


class App extends React.Component {
    state = {
        ccy: [],
        summ: {},
        isLoad: false
    }

    componentDidMount() {
        this.setState({ isLoad: true });
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(Response => {
                if (Response.status === 200) {
                    return Response.json();
                }
            })
            .then(data => {
                this.setState({ ccy: data });
                //console.log(`ccy `, data);
                this.setState({ isLoad: false });
            })
            .catch(error => {
                console.log(`Error: ${error.message}`)
            });

    }

    onHandlerChange = (inputData) => {
        console.log(`inputDate: ${inputData.target.value}`)
        this.setState({ summ: inputData.target.value })
    }


    onHandlerChangeSelect = (seletData) => {
        const val = seletData.target.value;
        const find = this.state.ccy.find((item) => item.ccy === val);
        if (find) {
            // if(this.state.buyOrSale === 'buy'){
            //     console.log(this.state.summ * find.buy);
            // }
            // else{
            //     console.log(this.state.summ * find.sale);
            // }
        }
    }

    onChangeValue = () =>{
        alert('click on the image');
    }


    render() {
        const { isLoad } = this.state;
        const options = this.state.ccy.map((c) => {
            return (
                <option key={c.ccy}>{c.ccy}</option>
            );
        });
        return (
            <div className='container'>
                <div className='text-center'>
                    <h2>КОНВЕРТЕР ВАЛЮТ</h2>
                </div>


                <div class='row'>
                    <div class='col-5'>
                        <label>Міняю</label>
                    </div>
                    <div class='col-2'>
                        <label>Отримую</label>
                    </div>
                </div>

                <div class='row'>
                    <div class='col-2'>
                        <input type='text' id='i_change' class='form-control' onChange={this.onHandlerChange} />
                    </div>
                    <div class='col-2'>
                        {isLoad && <span>Loading</span>}
                        {!isLoad &&
                            <select class='form-control' onChange={this.onHandlerChangeSelect}>
                                <option></option>
                                {options}
                            </select>
                        }
                    </div>
                    <div class='col-1'>
                        <img src='https://finance.liga.net/design/images/icons/converter-min-arr.png' onMouseDown={this.onChangeValue} />
                    </div>
                    <div class='col-2'>
                        <input type='text' id='i_get' class='form-control' readOnly='true' />
                    </div>
                    <div class='col-2'>
                        {isLoad && <span>Loading</span>}
                        {!isLoad &&
                            <select class='form-control' onChange={this.onHandlerChangeSelect}>
                                <option></option>
                                {options}
                            </select>
                        }
                    </div>
                </div>
            </div>
        );
    }

}


export default App;