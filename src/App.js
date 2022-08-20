
import './App.css';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Route, Routes, useRoutes } from 'react-router-dom';
import React from 'react'
import { MyProfile } from './pages/myprofile';
import {Message} from './pages/message'
import { SignUp } from './pages/signup';
import { SignIn } from './pages/login';
import { Redirect_to_msg } from './pages/redirect_to_msg';
import { Index } from './pages';
import { UserProfile } from './pages/user-profile';
function App() {
return(
  <Routes>
    <Route path='/' element={ <Index /> } />
    <Route path='/home' element={<Home />} />
    <Route path='/myprofile' element={<MyProfile />} />
    <Route path='/messages' element={<Message />} />
    <Route path='/register' element={<SignUp />} />
    <Route path='/login' element={<SignIn />} />
    <Route path='/redirect_to_msg' element={ <Redirect_to_msg /> } />
    <Route path='/user-profile' element={<UserProfile />} />
  </Routes>
)
}

export default App;
