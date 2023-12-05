import React from 'react'

const AppContext = React.createContext();


function ProviderContext(props){

    /* ESTADOS */
    
    let [userData,setUserData]  = React.useState(null);

    return (
        
        <AppContext.Provider value={{userData,setUserData}}>
            {props.children}
        </AppContext.Provider>
        
    
    );
}

export {ProviderContext,AppContext};