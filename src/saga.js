import { sagaActions } from "./sagaActions";
import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { fetchData } from './store';
import { fetchImage } from './store';

const getFact = async (url) => {
  return await axios({
    url: "https://catfact.ninja/fact",
  });
};

const dogImage = async (url) => {
  return await axios({
    url: "https://dog.ceo/api/breeds/image/random/6"
  });
};

export function* apiSaga() {
  console.log(1234);
  const result = yield call(getFact)
  yield put(fetchData(result.data.fact))
  console.log(result)
}

export function* apiSaga2() {
  console.log(1234);
  const result2 = yield call(dogImage)
  yield put(fetchImage(result2.data.message))
  console.log(result2.data)
}


export default function* watchSaga() {
  yield takeEvery(sagaActions.GET_FACT, apiSaga);
  yield takeEvery(sagaActions.DOG_IMAGE, apiSaga2)
}