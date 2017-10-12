import React from 'react';
import Utility from '../Utility';

class CarCalculate extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            difference: "Not Available",
            gasprice: 3.50,
            distance: 1000,
            savings: "Not Available",
        }
    }

    componentDidMount(){
        
    }

    componentWillUnmount(){

    }

    componentWillReceiveProps(){
        this.calculate();
    }

    calculate(){
        console.log("calculate");
        if(this.incompleteState()){
            this.setState({
                difference: "Not Available",
                savings: "Not Available",
            })
            return;
        }
        var car1 = this.props.car1;
        var car2 = this.props.car2;

        var savings = ((this.state.distance/car1.comb) * this.state.gasprice) - ((this.state.distance/car2.comb) * this.state.gasprice)
        var difference = car1.comb - car2.comb;

        this.setState({
            difference: difference,
            savings: savings
        })

    }

    incompleteState(){
        if(this.props.car1 == null || this.props.car2 == null)
            return true;
        return false;
    }

    render(){
        return (
            <div className="CarCalculate infoblock">
                Gas Price: {Utility.formatCurrency(this.state.gasprice)} <br />
                Combine MPG Difference: {this.state.difference} <br />
                <span className="info-money">Money Save Over {this.state.distance} Miles: {Utility.formatCurrency(this.state.savings)} </span>         
            </div>
        );
    }
    
};

CarCalculate.propTypes = {
    car1: React.PropTypes.object,
    car2: React.PropTypes.object
}

export default CarCalculate;