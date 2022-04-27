import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div class='app-wrapper-content'>
              <Route path='/dialogs' render={() => <Dialogs dialogsData={props.data.getState().dialogsPage} dispatch={props.data.dispatch}/>}/>
              <Route path='/profile' render={() => <Profile profileData={props.data.getState().profilePage} dispatch={props.data.dispatch}/>}/>
              <Route path='/music' component={Music}/>
              <Route path='/news' component={News}/>
              <Route path='/settings' component={Settings}/>
          </div>
      </div>
  </BrowserRouter>
  );
}
export default App;
