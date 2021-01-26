import React, { useEffect } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router , Route  , Switch , Link} from 'react-router-dom'
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
      }))
      }
    })
  } , [])

  return (
    <Router>
      <div className="app">

      {!user ?  (

      <Login/>
      ) : (
        <>
        <Header/>
        <div className="app__body">
            <Sidebar/>

            <Switch>
              <Route path="/mail">
                <Mail/>
              </Route>
              <Route path="/">
                <EmailList/>
              </Route>

            </Switch>

          </div>
        { sendMessageIsOpen && <SendMail/>}
        </>
      )}


      </div>
    </Router>
  );
}

export default App;
