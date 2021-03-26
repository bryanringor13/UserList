import { Reducer } from 'redux';
import { UserAction, UserState, UserTypes } from '../metaTypes/user';

const initialState: UserState = {
    users: [],
    error: null,
    loading: false
};

const userReducer: Reducer<UserState, UserAction> = (state = initialState, action: UserAction) => {
  switch (action.type) {
        case UserTypes.SET_USERS:
            return {
                ...state, 
                users: action.payload.response.data.data,
                error: null,
                loading: false
            };
        case UserTypes.USER_FAILED:
            return {
                ...state, 
                loading: false,
                error: action.payload
            };
        case UserTypes.SET_USER_LOADING:
            return {
                ...state, 
                loading: true,
            };
        default:
            return state;
  }
};

export default userReducer;