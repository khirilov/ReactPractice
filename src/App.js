import {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

import {Navbar} from './components/NavBar.jsx'
import {PagesHandler} from './components/PagesHandler.jsx'
import {AuthContext} from './context'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
 useEffect(() => {
   if(localStorage.getItem('auth')) {
     setIsAuth(true)
   }
   setIsLoading(false)
 }, [])
 return <AuthContext.Provider value={{
   isAuth,
   setIsAuth,
   isLoading
 }}>
   <BrowserRouter>
     <Navbar />
     <PagesHandler />
   </BrowserRouter>
  </AuthContext.Provider>
}

export {App}