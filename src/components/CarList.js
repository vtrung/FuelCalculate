import React from 'react';
import CarPreview from './CarPreview';
import CarCalculate from './CarCalculate';

class CarList extends React.Component {

    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            car1: null,
            car2: null,
        }
    }

    componentDidMount(){

    }

    componentWillUnmount(){
        //console.log("UnMOunted");
    }
    

    handleChange = (e) => {
        this.setState({
            car1: this.props.cars[e.target.value]
        })
        
    }

    handleChange2 = (e) => {
        this.setState({
            car2: this.props.cars[e.target.value]
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

                <CarCalculate car1={this.state.car1} car2={this.state.car2} />

                <div className="leftcar carblock">
                    
                    <select onChange={this.handleChange}>
                        <option value=""></option>
                        {this.props.cars.map( (car, index) => 
                            <option key={car.id} value={index}>
                                {car.year} {car.make} {car.model}
                            </option>
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
                            <option key={car.id} value={index}>
                                {car.year} {car.make} {car.model}
                            </option>
                        )}
                    </select>

                    {car2}
                    {/* {this.props.cars.map( car => 
                        <CarPreview key={car.id} {...car} />
                    )} */}
                </div>
                
                <div className="carblock">
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