// import axios from 'axios';
// export const FETCHING = 'FETCHING';
// export const SUCCESS = 'SUCCESS';
// export const FAILURE = 'FAILURE';

// export const getSmurfs = () => dispatch => {
//     dispatch({type: FETCHING});
//     axios
//         .get('http://localhost:3333/smurfs')
//         .then(res => {
//         dispatch ({type: SUCCESS, payload: res.data});
//         })
//         .catch(err => {
//         dispatch({ type: FAILURE, payload: err});
//         });
//     };

//     export const addSmurf = newSmurf => dispatch => {
//     axios 
//         .post('http://localhost:3333/smurfs', newSmurf)
//         .then(res => {
//         dispatch({type: SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//         dispatch({ type: FAILURE, payload: err})
//         })
// }


// UNCOMMENT WHEN USING REDUX