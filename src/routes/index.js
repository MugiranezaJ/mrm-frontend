import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from '../components/views/Login'
import Register from '../components/views/Register'
import Dashboard from '../components/views/Dashboard';
import UsersList from '../components/views/UsersList';


export default function AppRoutes({authenticated, setAuthenticated}){
 
    return (
        <Routes>
            <Route 
                exact
                path='/dashboard'
                element={<Dashboard authenticated={authenticated}/>} />
            <Route
                exact
                path='/all-users'
                element={<UsersList authenticated={authenticated}/>} />
            <Route
                exact
                path='/login'
                element={
                    <Login
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}/>}/>
            <Route
                exact
                path='/register'
                element={
                    <Register
                        setAuthenticated={setAuthenticated} 
                        authenticated={authenticated}/>} />
            <Route path='*' exact={true} element={<Dashboard/>} />
        </Routes>
    )
    
}