export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const initialState = {
    smurfs: [],
    fetchingSmurfs: false,    
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
            ...state,
            fetchingSmurfs: true,
            }
        case SUCCESS:
            return {
            ...state,
            fetchingSmurfs: false,
            smurfs: action.payload
            }
        case FAILURE:
            return {
            ...state,
            fetchingSmurfs: false,
            error: action.payload
            }
        default:
            return state;
    }
}

//  ABOVE IS CONTEXT API ^^^^^^^^^^^^^^^



// BELOW IS REDUX 
// import { FETCHING, SUCCESS, FAILURE } from "../actions";

// const initialState = {
//     smurfs: [],
//     fetchingSmurfs: false,
//     addingSmurf: false,
//     updatingSmurf: false,
//     deletingSmurf: false,
//     error: null
//   }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCHING:
//             return {
//             ...state,
//             fetchingSmurfs: true,
//             }
//         case SUCCESS:
//             return {
//             ...state,
//             fetchingSmurfs: false,
//             smurfs: action.payload,
//             }
//         case FAILURE:
//             return {
//             ...state,
//             fetchingSmurfs: false,
//             error: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default reducer;