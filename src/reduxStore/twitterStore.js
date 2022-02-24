const TWEET_INITIAL_STATE = [];

const ADD_TWEET_TO_LIST = "mytwitter.com/HomePage";

export const listReducer = (state = TWEET_INITIAL_STATE, action) => {

    if(action.type === ADD_TWEET_TO_LIST){
      return {
        label: action.payload,
      }
    }
  
    return state;
  };

export const addItem = payload => {
        return {
            type: ADD_TWEET_TO_LIST,
            payload
        }
  };