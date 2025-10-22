import React, { createContext, useState } from 'react';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "Nahid",
        email: "nahid@email.com"
    })

    const authData = {
        user,
        setUser,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;