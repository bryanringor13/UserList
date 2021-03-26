
import {call, put, takeEvery} from 'redux-saga/effects';
import { fetchSearchInfoFailed, fetchSearchInfoSuccess, setSearchLoading } from '../actions/search';
import { getSearchApi } from '../api/searchApi';
import { SearchAction, SearchTypes } from '../metaTypes/search';

function* getSearchInfo(action: SearchAction) {
  try {
    yield put(setSearchLoading())
    const data: ReturnType<typeof getSearchApi> = yield call(getSearchApi, action.payload);
    yield put(fetchSearchInfoSuccess(data));
  } catch (error) {
    if(!!error.response) yield put(fetchSearchInfoFailed(error.response.data));
    else yield put(fetchSearchInfoFailed(error.message));
  }
}

export default function* searchSaga() {
  yield takeEvery(SearchTypes.GET_SEARCH_INFO, getSearchInfo);
}