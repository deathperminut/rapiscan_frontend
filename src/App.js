import logo from './logo.svg';
import './App.css';
import React from 'react';
/* components */
//AUTH
import Login from './Router/Auth/Login/Login';
import Password from './Router/Auth/Password/Password';
import Recovery from './Router/Auth/Recovery/Recovery';
import Register from './Router/Auth/Register/Register';
import Change from './Router/Auth/ChangePassword/Change';
// MAIN APP
import Lobby from './Router/Lobby/Lobby';
import KanBan from './Router/Apps/Kanban/Kanban';

import { Navigate, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='' element = {<Navigate to='/Login'></Navigate>}></Route>
        <Route path='/Login/*' element={<Login></Login>}></Route>
        <Route path='/Password/*' element={<Password></Password>}></Route>
        <Route path='/Recovery/*' element={<Recovery></Recovery>}></Route>
        <Route path='/Register/*' element={<Register></Register>}></Route>
        <Route path='/Lobby/*' element={<Lobby></Lobby>}></Route>
        <Route path='/KanBan/*' element={<KanBan></KanBan>}></Route>
        <Route path='/Change/*' element={<Change></Change>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
