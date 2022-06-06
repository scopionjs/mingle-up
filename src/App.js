
import './App.css';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Route, Routes, useRoutes } from 'react-router-dom';
import React from 'react'
import { MyProfile } from './pages/myprofile';
import {Message} from './pages/message'
import { SignUp } from './pages/signup';
import { SignIn } from './pages/login';

function App() {
return(
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/myprofile' element={<MyProfile />} />
    <Route path='/messages' element={<Message />} />
    <Route path='/register' element={<SignUp />} />
    <Route path='/login' element={<SignIn />} />
  </Routes>
)
}

export default App;
