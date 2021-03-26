import { Reducer } from 'redux';
import { SearchAction, SearchState, SearchTypes } from '../metaTypes/search';

const initialState: SearchState = {
    search: null,
    error: null,
    loading: false
};

const searchReducer: Reducer<SearchState, SearchAction> = (state = initialState, action: SearchAction) => {
  switch (action.type) {
        case SearchTypes.SET_SEARCH_INFO:
            return {
                ...state, 
                search: action.payload.data,
                error: null,
                loading: false
            };
        case SearchTypes.SEARCH_FAILURE:
            console.log("SEARCH_FAILURE", action.payload)
            return {
                ...state, 
                error: action.payload,
                loading: false,
            };
        case SearchTypes.CLEAR_FAILURE:
            return {
                ...state,
                error: null,
                loading: false
            }
        case SearchTypes.SET_SEARCH_LOADING:
            return {
                ...state, 
                loading: true,
            };
        default:
            return state;
  }
};

export default searchReducer;