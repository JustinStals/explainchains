import firebase from '../../config/fbConfig';

export const logIn = (credentials) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'SIGNIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'SIGNIN_ERROR', err})
        });
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'});
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err});
        })
    }
}