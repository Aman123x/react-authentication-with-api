import React,{useState} from "react";

const AuthContext=React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
})

export const AuthContextProvider=(props)=>{
    const [token,setToken]=useState(null);
 
    const useIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token)
    };

    const logouthandler=()=>{
        setToken(null);
    };

    const contextValue={
        token:token,
        isLoggedIn:useIsLoggedIn,
        login:loginHandler,
        logout:logouthandler,
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;