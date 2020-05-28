
import React, { useEffect, useState } from "react";
import app from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};




// class Auth {
//     constructor() {
//         this.isAuthenticated = this.isAuthenticated.bind(this);
//         this.signIn = this.signIn.bind(this);
//         this.signOut = this.signOut.bind(this);
//       }

//     auth = false;

//     isAuthenticated() {
//         return this.auth;
//       }

//     signIn() {
//         setTimeout(1000);
//         this.auth = true;
//         console.log("login")
//       }

//       signOut() {
//         setTimeout(1000);
//         this.auth = false;
//         console.log("logout")
//       }
    
//       // not used, might need for real login
//     handleAuthentication() {
//         setTimeout(1000);
//         console.log("done authenticating")
//       }

// }

// const authClient = new Auth();

// export default authClient;