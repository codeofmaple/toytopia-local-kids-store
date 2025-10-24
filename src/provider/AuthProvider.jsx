import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import LoadingPage from '../pages/LoadingPage';
export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authData = {
        auth,
        user,
        setUser,
        createUser,
        logIn,
        logOut,
        loading,
        setLoading,
        updateUser,
        forgetPassword,
        logInWithGoogle,
    }

    // if (loading) {
    //     return <div className='min-h-screen flex justify-center items-center animate-ping'><LoadingPage /></div>
    // }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;