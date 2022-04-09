import { useState, createContext } from "react";

const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState(null);

    const handleLogin = async (email, password) => {
        // auth api
        setToken("token");
    }
    
    const handleLogout = async (email, password) => {
        // auth api
        setToken(null);
    }

    const value = {
        token,
        handleLogin: handleLogin,
        handleLogout: handleLogout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;