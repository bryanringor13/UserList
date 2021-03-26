
import { action } from 'typesafe-actions';
import { UserAddState, UserTypes, UserUpdateState } from '../metaTypes/user';

export const setUserLoading = () => action(UserTypes.SET_USER_LOADING);
export const getAllUsers = () => action(UserTypes.GET_USERS);
export const setAllUsers = (payload: any) => action(UserTypes.SET_USERS, payload);

export const userFailed= (payload: any) => action(UserTypes.USER_FAILED, payload);