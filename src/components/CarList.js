import React from 'react';
import CarPreview from './CarPreview';

var FormattedNumber = ReactIntl.FormattedNumber;

class CarList extends React.Component {

    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            difference: "Not Available",
            gasprice: 3.50,
            distance: 1000,
            savings: "Not Available",
            car1: null,
            car2: null,
        }
    }

    componentDidMount(){

    }

    componentWillUnmount(){
        //console.log("UnMOunted");
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
        var car1 = this.state.car1;
        var car2 = this.state.car2;

        var savings = ((this.state.distance/car1.comb) * this.state.gasprice) - ((this.state.distance/car2.comb) * this.state.gasprice)
        var difference = car1.comb - car2.comb;
        this.setState({
            difference: difference,
            savings: savings
        })

    }

    incompleteState(){
        if(this.state.car1 == null || this.state.car2 == null)
            return true;
        return false;
    }

    handleChange = (e) => {
        console.log(this.props.cars[e.target.value]);
        
        this.setState({
            car1: this.props.cars[e.target.value]
        }, ()=>{
            console.log(this.state.car1)
            this.calculate()
        })
        
    }

    handleChange2 = (e) => {
        console.log(this.props.cars[e.target.value]);
        
        this.setState({
            car2: this.props.cars[e.target.value]
        }, ()=>{
            console.log(this.state.car1)
            this.calculate()
        })
        
    }

    render(){
        let car1 = null;
        let car2 = null;
        if(this.state.car1)
            car1 = <CarPreview {... this.state.car1} />;
        
        if(this.state.car2)
            car2 = <CarPreview {... this.state.car2} />;

        return (
            <div className="CarList CalTest">
                <div className="infoblock">
                    Gas Price: ${this.state.gasprice} <br />
                    Combine MPG Difference: {this.state.difference} <br />
                    <span className="info-money">Money Save Over {this.state.distance} Miles: {this.state.savings} </span>
                </div>
                <div className="leftcar carblock">
                    
                    <select onChange={this.handleChange}>
                        <option value=""></option>
                        {this.props.cars.map( (car, index) => 
                            <option key={car.id} value={index}>{car.year} {car.make} {car.model}</option>
                        )}
                    </select>
                    
                    {car1}
                    {/* {this.props.cars.map( car => 
                        <CarPreview key={car.id} {...car} />
                    )} */}
                </div>
                <div className="leftcar carblock">

                    <select onChange={this.handleChange2}>
                        <option value=""></option>
                        {this.props.cars.map( (car, index) => 
                            <option value={index}>{car.year} {car.make} {car.model}</option>
                        )}
                    </select>

                    {car2}
                    {/* {this.props.cars.map( car => 
                        <CarPreview key={car.id} {...car} />
                    )} */}
                </div>
                

                
            </div>
        );
    }
    
};

CarList.propTypes = {
    cars: React.PropTypes.array
}
// const CarPreview  = (car) => {
//     return (
//         <div className="CarPreview">
//             {car.id} {car.year} {car.make} {car.model} {car.trans}
//         </div>
//     )
// }

export default CarList;