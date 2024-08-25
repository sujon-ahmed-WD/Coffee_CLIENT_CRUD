import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setloading]=useState(true)

    // SignUp  Password
    const createUser=(email,password)=>{
         setloading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    // SignIn User 
    const signInUser=(email,password)=>{
        setloading(true);
        return  signInWithEmailAndPassword(auth,email,password)
    }

    

  

    const userInfo={
        user,
        loading,
        createUser,
        signInUser

    }
    return (
         
            <AuthContext.Provider
             value={userInfo} >
                {children}
            </AuthContext.Provider>
         
    );
};

export default AuthProvider;