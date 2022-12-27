import React from "react";

const AuthContext= React.createContext({
    isLoggedIn:false,
    // onLogout:false
});

export default AuthContext;

