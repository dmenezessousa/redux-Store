import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userData';
import { listReducer } from './twitterStore';


const store = configureStore({
  preloadedState:  JSON.parse(window.localStorage.getItem("applicationState")) || {},
  reducer: {
    user: userReducer,
    list: listReducer,
  },
})
const listStore =() =>{
      window.localStorage.setItem("applicationState",JSON.stringify(store.getState()) 
      )
}
store.subscribe(listStore)
export default store;