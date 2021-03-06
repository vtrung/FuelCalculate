import React from 'react';

class CarSearch extends React.Component {
    constructor(props){
        super(props);
        //console.log(props);
        this.state = {
            year: "",
            make: "",
            model: "",
            type: "",
            car: null
        }
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    handleYear = function(){

    }

    handleMake = function(){

    }

    handleModel = function(){

    }

    handleType = function(){

    }

    render(){
        return (
            <div className="CarSearch">

                <select onChange={this.handleYear}>
                    <option value=""></option>
                    {this.props.cars.map( (car, index) => 
                        <option key={car.id} value={index}>
                            {car.year} {car.make} {car.model}
                        </option>
                    )}
                </select>

                <select onChange={this.handleMake}>
                    <option value=""></option>
                    {this.props.cars.map( (car, index) => 
                        <option key={car.id} value={index}>
                            {car.year} {car.make} {car.model}
                        </option>
                    )}
                </select>

                <select onChange={this.handleModel}>
                    <option value=""></option>
                    {this.props.cars.map( (car, index) => 
                        <option key={car.id} value={index}>
                            {car.year} {car.make} {car.model}
                        </option>
                    )}
                </select>

                <select onChange={this.handleType}>
                    <option value=""></option>
                    {this.props.cars.map( (car, index) => 
                        <option key={car.id} value={index}>
                            {car.year} {car.make} {car.model}
                        </option>
                    )}
                </select>
                
            </div>
        );
    }
    
};

CarSearch.propTypes = {
    car: React.PropTypes.object
}
// const CarPreview  = (car) => {
//     return (
//         <div className="CarPreview">
//             {car.id} {car.year} {car.make} {car.model} {car.trans}
//         </div>
//     )
// }

export default CarSearch;