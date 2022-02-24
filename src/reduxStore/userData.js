import { fetchUser } from "../userData";

const SIGN_IN_ACTION = "mytwitter.com/signIn";

export const userReducer = (state = null, action) => {

  if(action.type === SIGN_IN_ACTION){
    return action.payload.userData;
  }

  return state;
};

export const signInActionCreator = () => async (dispatch, getState) => {

  try {
    const userData = await fetchUser('diego@email.com', '123');
  
    dispatch({
      type: SIGN_IN_ACTION,
      payload: {
        userData: userData,
      }
    });
  } catch(error){
    console.log('there was an error')
  }
};
