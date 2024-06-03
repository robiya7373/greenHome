import { createStore, combineReducers } from "redux";
import {ModalReducer} from '../reducers/ModalReducer'

const rootReducer = combineReducers({
  ModalReducer
})

const store = createStore(rootReducer)

export default store;
