import { combineReducers } from "redux";

import navReducer from "./Nav/reducer";
import cheerfulUsersReducer from "./CheerfulUsers/reducer";
import {FETCH_POSITIONS_SUCCESS} from "./CheerfulUsers/actions";
import regFormReducer from "./RegForm/reducer";

const initialState = {
   positions: null,
};

function pageReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_POSITIONS_SUCCESS: {
         return {...state, positions: action.payload.reduce((accum, item) => accum.concat(item.name), [])}
      }
      default:
         return state;
   }
}

export default combineReducers({
   page: pageReducer,
   nav: navReducer,
   cheerfulUsers: cheerfulUsersReducer,
   regForm: regFormReducer
});