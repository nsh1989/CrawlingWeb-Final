import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import EncarList from "./components/EncarList";
import Main from "./Main";
import FilterbarComponent from "./components/FilterbarComponent";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./redux/modules/encarCategory";
import {connect} from "react-redux";

function App() {
  return (
          <div className="App">
              <FilterbarComponent/>
              <Router>
                  <Routes>
                      <Route path ={"/"} exact={true} element={<EncarList /> }></Route>
                      <Route path ="/board" exact={true} element={<EncarList/>}/>
                  </Routes>
              </Router>
          </div>
  );
}
const mapStateToProps = (state) =>{
    return{
        brand: state.data.brand,
    }
}

export default connect(mapStateToProps, null)(App);
