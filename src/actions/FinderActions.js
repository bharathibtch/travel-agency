import * as ActionTypes from './ActionTypes';

export const searchTravels = (data) => {
    return async dispatch => {
        console.log("Search data: ", data);
        dispatch({
            type: ActionTypes.SEARCH_PENDING
        });
        dispatch({
            type: ActionTypes.SEARCH_SUCCESS,
            data: data
        });
        // dispatch({
        //     type: ActionTypes.SEARCH_FAILURE
        // });
    }
} 