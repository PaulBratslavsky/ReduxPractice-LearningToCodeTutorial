import { UPDATE_USER } from '../actions/actionsUser';

function userReducer(state = '', action) {
    console.log('2 THIS IS FROM USER REDUCERS', state);
    console.log('*****', action.payload);

    switch (action.type) {
        case UPDATE_USER:
            console.log('CASE 1 FROM SWITCH STATEMENT', action.payload.user)
            return action.payload.user;
        default:
            console.log("IF CASE NOT MET FROM SWITCH STATEMENT", state)
            return state;
    }
}

export default userReducer;