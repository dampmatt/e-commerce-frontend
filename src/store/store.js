import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice/counterSlice";
import loginReducer from "./Slice/loginSlice";
import productSaga from "./saga/productSaga";
import createSagaMiddleware from "redux-saga";
import React from "react";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga)