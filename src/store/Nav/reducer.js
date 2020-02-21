import { NAV_TOGGLE } from "./actions";

const initialState = {
    isNavOpen: false
};

export default function navReducer(state = initialState, action) {
    switch (action.type) {
        case NAV_TOGGLE:
            return {...state, isNavOpen: !state.isNavOpen};
        default:
            return state;
    }
}