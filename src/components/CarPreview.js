import React from 'react';


class CarPreview extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    state = {
        average: 0
    }

    componentDidMount(){
        console.log(this.props)
        var test = this.props.city;
        var test2 = this.props.hwy;
        console.log(test, test2);
        let avg = test + test2;
        avg = avg/2;
        this.setState({
            average: avg
        })
        //onsole.log("MOunted");
    }

    componentWillUnmount(){
        //console.log("UnMOunted");
    }

    render(){
        return (
            <div className="CarPreview">
                {this.props.id} {this.props.year} {this.props.make} {this.props.model} {this.state.average}
            </div>
        );
    }
    
};

CarPreview.propTypes = {
    car: React.PropTypes.object
}
// const CarPreview  = (car) => {
//     return (
//         <div className="CarPreview">
//             {car.id} {car.year} {car.make} {car.model} {car.trans}
//         </div>
//     )
// }

export default CarPreview;