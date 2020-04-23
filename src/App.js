import React from 'react';
import './App.css';
import CreateBlog from "./components/CreateBlog"
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store";
import SignUp from './components/SignUp';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <div className="container">
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/createBlog" component={CreateBlog} />
      </div>
      </div>
    </Router>
    </Provider>
    
    
  );
}

export default App;
