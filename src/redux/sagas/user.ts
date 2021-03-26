
import { call, put, takeEvery} from 'redux-saga/effects';
import { setAllUsers, setUserLoading, userFailed } from '../actions/user';
import { allPerson } from '../api/userApi';
import { UserAction, UserTypes } from '../metaTypes/user';

function* getUsers() {
  try {
    yield put(setUserLoading())
    const data: ReturnType<typeof allPerson> = yield call(allPerson);
    yield put(setAllUsers({ response: data }))
  } catch (error) {
    if(!!error.response) yield put(userFailed(error.response.data));
    else yield put(userFailed(error.message));
  }
}

export default function* userSaga() {
  yield takeEvery(UserTypes.GET_USERS, getUsers);
}