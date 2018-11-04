import { 
  call,
  put,
  // takeEvery,
  takeLatest 
} from 'redux-saga/effects';
import axios from 'axios';
import { types, setEntity } from './pages/home/actions';
import { authorize, setLoading } from './reducer';

function* auth(action: any) {
  yield put(setLoading(true));

  if (action.payload) yield put(authorize(true));

  yield fetchHomeData();

  yield put(setLoading(false));
}

function* fetchHomeData(): any {
  try {
    const posts = yield call(httpGetRequest, 'https://jsonplaceholder.typicode.com/posts');
    const albums = yield call(httpGetRequest, 'https://jsonplaceholder.typicode.com/albums');

    yield put(setEntity('posts', posts.data));
    yield put(setEntity('albums', albums.data));
  }
  catch (error) {
    console.log('Failed fetching home data', error);
  }
}

function httpGetRequest(path: string) {
  return Promise.resolve(axios.get(path));
}

function* rootSaga() {
  yield takeLatest(types.SIGN_IN, auth)
}

export default rootSaga;