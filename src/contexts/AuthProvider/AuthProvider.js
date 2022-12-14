import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // signIn google, github
    const ProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign In with email and password
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // update profile 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    // verify email
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    };

    // logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state changed', currentUser);
            setUser(currentUser);
            if (currentUser === null || currentUser.emailVerified) {
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);


    // use Context value
    const authInfo = {
        user,
        loading,
        setLoading,
        ProviderLogin,
        createUser,
        login,
        updateUserProfile,
        verifyEmail,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;