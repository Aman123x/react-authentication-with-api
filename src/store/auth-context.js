import React,{useState} from "react";

const AuthContext=React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
})

export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem("token");
    const [token,setToken]=useState(initialToken);
 
    const useIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem("token",token);
    };

    const logouthandler=()=>{
        setToken(null);
        localStorage.removeItem("token");
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