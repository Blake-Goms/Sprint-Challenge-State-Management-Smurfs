import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
  }

const reducer = (state = initialState, action) => {
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
            smurfs: action.payload,
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

export default reducer;