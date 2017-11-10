import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import RegistrationForm from './RegistrationForm';
import SignIn from './SignIn';
import UserProfile from './UserProfile';
import Chat from './Chat';
const Routing = () => (
  <Router>
    <div>
     {/*} <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rejestracja">About</Link></li>
        
      </ul>

      <hr/>
*/}
      <Route exact path="/" component={SignIn}/>
      <Route path="/rejestracja" component={RegistrationForm}/>
      <Route path="/userprofile" component={UserProfile}/>
      <Route path="/chat" component={Chat}/>
    </div>
  </Router>
)



export default Routing