import firebase from '../../config/fbConfig';

export const logIn = (credentials) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err})
        });
    }
}

export const logOut = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS'});
        }).catch((err) => {
            dispatch({ type: 'LOGOUT_ERROR', err})
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            let batch = firestore.batch();
            let userRef = firestore.collection('users').doc(resp.user.uid)
            batch.set(userRef, {
                name: newUser.name,
                username: newUser.username,
                name: newUser.name,
                email: newUser.email,
                uid: resp.user.uid,
                emailVerified: false
            })
            let usernameRef = firestore.collection('usernames').doc(newUser.username)
            batch.set(usernameRef, {
                user: resp.user.uid
            })
            return batch.commit()
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'});
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err});
        })
    }
}

export const deleteAccount = (user) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        let user = firebase.auth().currentUser;
        firestore.collection('users')
        .doc(user.uid)
        .delete()
        .then((resp) => {
            user.delete().then((resp) => {
                dispatch({ type: 'DELETED_ACCOUNT'});
            }).catch(err => {
                dispatch({ type: 'DELETE_ACCOUNT_FAILED', err});
            })
        }).catch(err => {
            dispatch({ type: 'DELETE_ACCOUNT_FAILED', err});
        })
    }
}

export const reauthenticate = (password) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        let user = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email, 
            password
        );
        user.reauthenticateWithCredential(credential)
        .then((resp) => {
            dispatch({ type: 'USER_REAUTHENTICATED'});
        }).catch(err => {
            dispatch({ type: 'USER_REAUTHENTICATTION_FAILED', err});
        });
    }
}