export const UPDATE_USER = 'users: upDateUser';

function upDateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser,
        }   
    };
}

export default upDateUser;