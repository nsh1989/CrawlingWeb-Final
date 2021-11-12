import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import EncarList from "./components/EncarList";
import FilterbarComponent from "./components/FilterbarComponent";

import store from './redux/stores/Store'
import {Provider} from "react-redux";


function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <FilterbarComponent/>
              <Router>
                  <Routes>
                      <Route path ={"/"} exact={true} element={<EncarList /> }></Route>
                      <Route path ="/board" exact={true} element={<EncarList/>}/>
                  </Routes>
              </Router>
          </div>
      </Provider>
  );
}
export default App;
// const mapStateToProps = (state) =>{
//     return{
//         brand: state.data.brand,
//     }
// }
//
// export default connect(mapStateToProps, null)(App);
