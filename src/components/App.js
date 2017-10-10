import React from 'react';
import Header from './Header';
import CarPreview from './CarPreview';

import data from '../testData';

class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         test: "testing this app"
    //     }
    // }
    state = {
        test: "Locate you vehicle information here",
        cars: []
    };

    componentDidMount(){
        this.setState({
            cars: data.cars
        })
        
        console.log("MOunted");
    }

    componentWillUnmount(){
        console.log("UnMOunted");
    }

    render(){
        return (
            <h1> 
                <div>Car MERN</div>
                <div>
                    {this.state.test}
                </div>
                <Header message={this.state.test}/>
                {this.state.cars.map( car => 
                    <CarPreview key={car.id} {...car} />
                )}
                
            </h1>
        );
    }
    
};

// const App = (props) => {
//     return (
//         <h1> 
//             <div>Car MERN</div>
//             <div>
//                 {props.headerMsg}
//             </div>
//             <Header />
//         </h1>
//     );
// };

// App.propTypes = {
//     headerMsg: React.PropTypes.string
// }

// App.defaultProps = {
//     headerMsg: "CAR MERN"
// }

export default App;