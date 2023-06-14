import { FAIL, SUCCESS } from "../constants/restConstant";

// reducer function
export const restReducer = (state = { restList: [] }, action) => {
                        // state to store the payload, working action

    switch (action.type) {
        case SUCCESS:
            return {
                restList: action.payload
            }
        case FAIL:
            return {
                restList: action.payload
            }
        default:
            return state
    }
}

