import { useState } from React;

const LoginContext = React.createContext();


export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    
// const signup=()=>{}
// const signin=()=>{}
        
return (
        <LoginContext.Provider>
            {children}            
        </LoginContext.Provider>
    )
}


