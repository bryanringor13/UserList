
import { action } from 'typesafe-actions';
import { SearchApiState, SearchTypes } from '../metaTypes/search';

export const setSearchLoading = () => action(SearchTypes.SET_SEARCH_LOADING);
export const fetchSearchInfo= (payload: SearchApiState) => action(SearchTypes.GET_SEARCH_INFO, payload);
export const fetchSearchInfoSuccess = (payload: any) => action(SearchTypes.SET_SEARCH_INFO, payload);
export const fetchSearchInfoFailed = (payload: any) => action(SearchTypes.SEARCH_FAILURE, payload);
export const clearInfoFailed = () => action(SearchTypes.CLEAR_FAILURE);