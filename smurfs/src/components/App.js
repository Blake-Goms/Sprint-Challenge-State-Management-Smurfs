import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { reducer, initialState } from '../reducer';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import './App.css';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

    const getSmurf = () => {
      axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
      dispatch ({type: SUCCESS, payload: res.data});
      })
      .catch(err => {
      dispatch({ type: FAILURE, payload: err});
      });
  };

  useEffect(() => {
    getSmurf();
  }, []) 
  
  const addSmurf = (e, newSmurf) => {
      e.preventDefault();     
      axios 
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        dispatch({type:SUCCESS, payload: res.data})
        })
        .catch(err => {
          dispatch({ type: FAILURE, payload: err})
          })
        };        

  return (
    <div className="App">
      <h1>Welcome to the Smurf Village 🏙 </h1>
      <SmurfForm addSmurf={addSmurf} />
      <SmurfList state={state} />
    </div>
  );
};

export default App; 

//  ABOVE IS CONTEXT API ^^^^^^^^^^^^^^^



// BELOW IS REDUX 

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getSmurfs, addSmurf } from '../actions'
// import SmurfList from './SmurfList';
// import './App.css';

// class App extends Component {
//     state = {
//       name: '',
//       age: '',
//       height: ''
//     }
  
//   componentDidMount() {
//     this.props.getSmurfs()
//   }

//   changeHandler = e => {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   submitHandler = e => {
//     e.preventDefault();
//     const newSmurf = {
//       name: this.state.name,
//       age: this.state.age,
//       height: this.state.height
//     }
//     this.props.addSmurf(newSmurf);
//     this.setState({ name: '', age: '', height: '' })
//   }

//   render() {
//     if (this.props.fetchingSmurfs) {
//       return <p>LOADING VILLAGERS...</p>
//     }
//     return (
//       <div className="App">
//         <form onSubmit={this.submitHandler}>
//           <input type='text'
//             placeholder='Name' 
//             name='name' 
//             value={this.state.name} 
//             onChange={this.changeHandler}
//           />
//           <input type='text'
//             placeholder='Age'
//             name='age' 
//             value={this.state.age} 
//             onChange={this.changeHandler} 
//           />
//           <input type='text' 
//             placeholder='Height' 
//             name='height' 
//             value={this.state.height} 
//             onChange={this.changeHandler} 
//           />
//           <button>Add Smurf</button>
//         </form>
//         <SmurfList smurfs={this.props.smurfs} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   smurfs: state.smurfs,
//   fetchingSmurfs: state.fetchingSmurfs,
//   error: state.error
// })

// export default connect(mapStateToProps, { getSmurfs, addSmurf })(App); 