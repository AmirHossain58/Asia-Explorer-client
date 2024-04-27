import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut ,GoogleAuthProvider, signInWithPopup, updateProfile, getAuth} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config'
import { GithubAuthProvider } from "firebase/auth";



export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading ,setLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn=()=>{
        setLoading(true)

        return signInWithPopup(auth, githubProvider)
    }
    const  updateUserProfile=(name,photo)=>{
        const auth1 = getAuth();
        updateProfile(auth1.currentUser, {
            displayName:name, photoURL: photo
          })
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo={
        user,
        createUser,
        logOut,
        signIn,
        loading,
        setUser,
        googleSignIn,
        githubSignIn,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;