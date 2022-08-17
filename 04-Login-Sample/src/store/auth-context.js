// React Context API to avoid unneccessary props chain 
import React, { useState, useEffect } from "react";

// not optimized for high frequency changes
const AuthContext = React.createContext({
    isLoggedIn: false, //init value false
    onLogout: () => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log('form validation App.js Effect!');
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []); // Only run once

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }
    const loginHandler = () => {
        // real situation, there should be some email/password validations
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }
    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;