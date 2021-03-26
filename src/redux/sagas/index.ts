// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';
import searchSaga from './search';
import userSaga from './user';

// Imports: Redux Sagas

// Redux Saga: Root Saga
export default function* rootSaga() {
    yield all([
        fork(searchSaga),
        fork(userSaga),
    ]);
};