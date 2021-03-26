export enum SearchTypes {
  SET_SEARCH_LOADING = 'SEARCH/SET_SEARCH_LOADING',
  GET_SEARCH_INFO = 'SEARCH/GET_SEARCH_INFO',
  SET_SEARCH_INFO = 'SEARCH/SET_SEARCH_INFO',

  SEARCH_FAILURE = 'SEARCH/SEARCH_FAILURE',
  CLEAR_FAILURE = 'SEARCH/CLEAR_FAILURE'
}

export interface SearchState {
  readonly search: any;
  readonly error: any;
  readonly loading: boolean;
}

export interface SearchAction {
  type: string;
  payload: any;
}

export interface SearchApiState {
  user_id: string;
}