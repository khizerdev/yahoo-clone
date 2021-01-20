import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router , Route  , Switch , Link} from 'react-router-dom'
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  console.log(sendMessageIsOpen)

  return (
    <Router>
      <div className="app">
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

      </div>
    </Router>
  );
}

export default App;
