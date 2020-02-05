export const editUser = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('users').doc(userId).update({
            name: user.name,
            username: user.username,
            website: user.website,
            bio: user.bio,
            email: user.email,
            photo: user.photo
        }).then(() => {
            dispatch({ type: 'EDIT_USER', user });
        }).catch((err) => {
            dispatch({ type: 'EDIT_USER_ERROR', err})
        })
    }
};