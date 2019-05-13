import * as ActionTypes from '../actions/ActionTypes';

const Response = require('../utils/Travels.json');

const DEFAULT_TRAVELS = {
    loading: false,
    travels:Response,
    searchResults:[],
    error:null
}

const TravelFilters = (state=DEFAULT_TRAVELS,action)=>{
    switch(action.type){
        case ActionTypes.SEARCH_PENDING:
            return{
                ...state,
                loading:true,
                searchResults:[]
            }
        case ActionTypes.SEARCH_SUCCESS:
            return{
                ...state,
                loading:false,
                searchResults:action.data
            }
        case ActionTypes.SEARCH_FAILURE:
            return{
                ...state,
                loading:false,
                error:"Try later",
                searchResults:[]
            }
        case ActionTypes.CLEAR_FILTER:
        case ActionTypes.REFRESH:
            return{
                ...state,
                loading:false,
                searchResults:[],
                error:null
            }
        default:
            return{
                ...state
            }
    }
}

export default TravelFilters;
