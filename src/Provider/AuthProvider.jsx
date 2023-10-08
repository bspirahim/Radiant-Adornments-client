import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        });
    }


    const getRole = () => {
        let data = localStorage.getItem('role');
        if (data) {
            return data;
        } else {
            return 'user';
        }
    }

    const authInfo = {
        user,
        loading, getRole,
        createUser,
        signIn,
        logOut, signInGoogle,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;