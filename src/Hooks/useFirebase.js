import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoad, setIsLoad] = useState(true)
    const auth = getAuth();


    //signing google
    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        setIsLoad(true)
       return signInWithPopup(auth, googleProvider)
    }

    //logout
    const logOut = () => {
        signOut(auth)
        .then(() => {
            alert('Successfully signout')
            setUser({})
        })
        .finally(() => {
            setIsLoad(false)
        })
    }

    //tracking user
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoad(false)
        })
    },[])



    return {
        user,
        error,
        logOut,
        setUser,
        setIsLoad,
        isLoad,
        signInGoogle
    }
}

export default useFirebase;