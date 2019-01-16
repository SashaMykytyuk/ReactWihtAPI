import React from 'react';


class App extends React.Component {
    state = {
        ccy: [],
        summ: {},
        isLoad: false
        //buyOrSale: {}
    }

    componentDidMount() {
        this.setState({ isLoad: true });
        fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
            .then(Response => {
                if (Response.status === 200) {
                    return Response.json();
                }
            })
            .then(data => {
                this.setState({ ccy: data });
                console.log(`ccy `, data);
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


    // onSelectBuyOrSale = (selectBuyOrSale) =>{
    //     this.setState({ buyOrSale: selectBuyOrSale.target.value })
    // } 



    render() {
        //const isLoad = this.state.isLoad;
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

                <div class="row" >
                    <div class="col-md-2 mb-2">
                        <label for="i_change">Міняю</label>
                        <input type="text" id='i_change' class='form-control' onChange={this.onHandlerChange}/>
                        {isLoad && <span>Loading</span>}
                            {!isLoad &&
                                <select onChange={this.onHandlerChangeSelect}>
                                    <option></option>
                                    {options}
                                </select>
                            }
                        {/* <div class="invalid-feedback">
                            Valid first name is required.
                            </div> */}
                    </div>
                    <div>
                        <img src="https://finance.liga.net/design/images/icons/converter-min-arr.png" />
                    </div>

                    <div class="col-md-2 mb-2">
                        <label for="i_get">Отримую</label>
                        <input type="text" class="form-control" readOnly='true' id="i_get" />
                        {isLoad && <span>Loading</span>}
                            {!isLoad &&
                                <select onChange={this.onHandlerChangeSelect}>
                                    <option></option>
                                    {options}
                                </select>
                            }
                        {/* <div class="invalid-feedback">
                            Valid last name is required.
                            </div> */}
                    </div>
                </div>
            </div>
        );
        }

    }




                    {/* <div>
                                <label className='label'>input sum</label>
                            <input type='text' onChange={this.onHandlerChange}></input>
                            {isLoad && <span>Loading</span>}
                            {!isLoad &&
                                <select onChange={this.onHandlerChangeSelect}>
                                    <option></option>
                                    {options}
                                </select>
                            }
                            */}




export default App;