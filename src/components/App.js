import React from 'react';
import Header from './Header';
import CarPreview from './CarPreview';
import CarList from './CarList';

import data from '../testData';

class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         test: "testing this app"
    //     }
    // }
    state = {
        test: "Locate your vehicle information here",
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
            <div className="main-container"> 
                <h1>Car MERN</h1>

                <Header message={this.state.test}/>
                
                <CarList cars={this.state.cars}/>
            </div>
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