import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from "redux";

import productModalReducer from './product-modal/productModalSlice'
import cartItemsReducer from './shopping-cart/cartItemsSlide';
import createSagaMiddle from "redux-saga";

import rootReducer from './saga/Reducers/rootReducer';
import rootSaga from './saga/Saga/rootSaga';
import { composeWithDevTools } from "redux-devtools-extension"; 

const sagaMiddle = createSagaMiddle();

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddle)
    )
  );

sagaMiddle.run(rootSaga);

// export const store = configureStore({
//     reducer: {
//         productModal: productModalReducer,
//         cartItems: cartItemsReducer,
//     },
// })

export default store;
