import { all } from "redux-saga/effects";
import InfoSaga from "./InfoSaga";

function* rootSaga() {
  yield all([
    InfoSaga()
  ]);
}

export default rootSaga;