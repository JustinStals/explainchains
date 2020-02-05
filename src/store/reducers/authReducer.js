const initState = {}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login error.')
            return {
                ...state,
                authError: action.err.message
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success.');
            return {
                ...state,
                authError: null
            }
        case 'LOGOUT_SUCCESS':
            console.log('Signout success.');
            return {
                ...state,
                authError: null
            }
        case 'LOGOUT_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNUP_SUCCESS':
            console.log('Signed up.');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Error signing up.');
            return {
                ...state,
                authError: action.err.message
            }
        case 'DELETED_ACCOUNT':
            console.log('Account deleted.');
            return {
                ...state,
                authError: null
            }
        case 'DELETE_ACCOUNT_FAILED':
            console.log('Error deleting account.');
            return {
                ...state,
                authError: action.err.message
            }
        case 'USER_REAUTHENTICATED':
            console.log('User reauthenticated.');
            return {
                ...state,
                authError: null
            }
        case 'USER_REAUTHENTICATION_ERROR':
            console.log('Error reauthenticating user.');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
        }
    }
    
export default authReducer;