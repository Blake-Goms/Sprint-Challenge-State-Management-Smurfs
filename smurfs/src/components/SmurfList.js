import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
    console.log(props)
    return (
        <div>
            {props.state.smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}
            {/* BELOW IS REDUX */}
            {/* {props.smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}  */}
        </div>
    )
}
export default SmurfList;