export enum UserTypes {
    SET_USER_LOADING = 'USER/SET_USER_LOADING',
    
    GET_USERS = 'USER/GET_USERS',
    SET_USERS = 'USER/SET_USERS',

    USER_FAILED = 'USER/USER_FAILED',

    VIEW_ACTION = 'view'
  }
  
  export interface UserState {
    readonly users: any[];
    readonly error: any;
    readonly loading: boolean;
  }
  
  export interface UserAction {
    type: string;
    payload: any;
  }

  export interface UserUpdateState {
    userId: string,
    body: {
      first_name: string,
      last_name: string,
    },
    newUsers: any[]
  }

  export interface UserAddState {
    body: {
      first_name: string,
      last_name: string
    }
  }