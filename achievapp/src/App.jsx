import React from 'react';
import './App.css';
// import { NavSide } from './ui/components/navSide/navSide';
// import { NavSide } from './ui/components/navSide/navSide';
import  SignUpPage  from './ui/pages/signUpPage/signUpPage';
import  SignInPage  from './ui/pages/signInPage/signInPage';
import { HashRouter as Router, Routes,Route} from "react-router-dom";
import MainPage from './ui/pages/mainPage/mainpage';
import Dashboard from './ui/pages/dashboard/Dashboard';
import Home from './ui/pages/home/Home';
// import { MainCard } from './ui/components/mainSide/mainCard/mainCard';

function App() {
  return (
      <div className="App">
         
         {/* <div id='appLeftSide'>
         
         </div>
         <div id='appRightSide'>
           
         </div> */}
         {/* <NavSide /> */}
         <Router>
          
         <Routes>
          <Route exact path='/' element={<SignUpPage/>} />
          <Route exact path='/signin' element={<SignInPage/>} /> 
          <Route exact path='signup' element={<SignUpPage/>} />
          <Route exact path='/navbar' element={<MainPage />}/>
          <Route exact path='/dashboard' element={<Dashboard />}/>
          <Route exact path='/home'  element={<Home/>}/>
          {/* <Route path='/navbar' element={<MainCard />}/>  */}
         </Routes> 
         </Router>
       </div>
       
    
  );
}

export default App;
