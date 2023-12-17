import React from 'react'

const AppContext = React.createContext();


function ProviderContext(props){

    /* ESTADOS */
    
    let [userData,setUserData]  = React.useState(null);
    let [token,setToken] = React.useState(null);
    let [boards,setBoards] = React.useState([]);
    let [board,setBoard] = React.useState(null);
    let [orders,setOrders] = React.useState([]);
    let [selectOrder,setSelectOrder] = React.useState(null);


    return (
        
        <AppContext.Provider value={{selectOrder,setSelectOrder,board,setBoard,token,setToken,userData,setUserData,boards,setBoards,orders,setOrders}}>
            {props.children}
        </AppContext.Provider>
        
    
    );
}

export {ProviderContext,AppContext};