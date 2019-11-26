import { connect } from "react-redux";

export const APP_STATE = {
    NO_DEMO: 0,
    LOADING: 1,
    GO: 2,
    ERROR: 3
};

const INITIAL_STATE = {
    appState: APP_STATE.NO_DEMO
};

const SET_STATE = "app.SET_STATE";

const actionHandlers = {
    [SET_STATE]: (state, payload) =>
        state.appState === payload ? state : { appState: payload }
};

export const actionSetState = newState => ({ type: SET_STATE, payload: newState });

const mapStateToProps = state => ({ appState: state.app.appState });

const mapDispatchToProps = dispatch => ({
    setState: newState => dispatch(actionSetState(newState))
});

export const appReducer = (state = INITIAL_STATE, action) =>
    actionHandlers.hasOwnProperty(action.type)
        ? actionHandlers[action.type](state, action.payload)
        : state;

export const bindComponentToAppState = component => connect(mapStateToProps, mapDispatchToProps)(component);
