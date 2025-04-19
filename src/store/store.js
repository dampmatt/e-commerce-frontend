import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slice/counterSlice'
import loginReducer from './Slice/loginSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    login:loginReducer
  },
})