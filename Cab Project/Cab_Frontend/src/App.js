import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useRecoilState } from "recoil";

import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import Signup from './components/Signup';
import { auth } from './utils/auth';
import { isUserLoggedIn,isAdminLoggedIn,isEmployeeLoggedIn,empData,adminData,userData } from './atoms';

import { useEffect } from 'react';
import UserHome from './components/user/UserHome';
import AdminHome from './components/admin/AdminHome';
import EmpHome from './components/Emp/EmpHome';



function App() {
  const [isULoggedIn, setIsULoggedIn] = useRecoilState(isUserLoggedIn);
  const [isALoggedIn, setIsALoggedIn] = useRecoilState(isAdminLoggedIn);
  const [isELoggedIn, setIsELoggedIn] = useRecoilState(isEmployeeLoggedIn);

  const [uData, setUData] = useRecoilState(userData);
  const [aData, setAData] = useRecoilState(adminData);
  const [eData, setEData] = useRecoilState(empData);

  useEffect(()=>{
    const checkUser=async()=>{
      let uuser
      let auser
      let euser
      let ures
      let ares
      let eres

      const uuserToken=window.localStorage.getItem('uuserToken')
      if(uuserToken){
        uuser = atob(uuserToken).split(' ')
        ures= await auth(uuser[0],uuser[1],uuser[2])
        setUData(uuser[0])
      }

      const auserToken=window.localStorage.getItem('auserToken')
      if(auserToken){
        auser = atob(auserToken).split(' ')
        ares= await auth(auser[0],auser[1],auser[2])
        setAData(auser[0])
      }

      const euserToken=window.localStorage.getItem('euserToken')
      if(euserToken){
        euser = atob(euserToken).split(' ')
        eres= await auth(euser[0],euser[1],euser[2])
        setEData(euser[0])
      }

      if(ures==='true'){
        setIsULoggedIn(true)
      }
      if(ares==='true'){
        setIsALoggedIn(true)
      }
      if(eres==='true'){
        setIsELoggedIn(true)
      }
    }
    checkUser()
  },[])

  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/alogin' element={<Login/>} />
          <Route exact path='/ulogin' element={<Login/>} />
          <Route exact path='/elogin' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/ahome' element={<AdminHome/>} />
          <Route exact path='/uhome' element={<UserHome/>} />
          <Route exact path='/ehome' element={<EmpHome/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
