import {useLocation, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import EncarList from "./components/EncarList";
import React, {Component} from "react";
import {connect} from "react-redux";
import FilterbarComponent from "./components/FilterbarComponent";
import Container from "./redux/containers/Container";
import Header from "./components/Header";
import Layout from "./components/Layout";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ContainerValue : "Container Test"
        }
        console.log("App ComponentDidUpdate");
        // this.props.getUrlParams()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        console.log(this.props)

        return(
            <Router>
                <Layout>
                    <Header/>
                    <FilterbarComponent/>
                    <Routes>
                        <Route path="/" element={<Container/>}/>
                        <Route path="/api" element={<EncarList/>}/>
                    </Routes>
                </Layout>
            </Router>
        )}
};

let mapStateToProps = (state) =>({
        ...state,
        passParam1: state.encarBoardReducer.passParam1,
});

let mapDispatchToProps = dispatch => {
    return {
        // getUrlParams:()=>dispatch(GetTypeUrlParams()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


// const customHistory = createBrowserHistory();
// const sagaMiddleware = createSagaMiddleware({
//     context:{
//         history: customHistory
//     }
// });
//
// function App() {
//     // const element = <Test test="test"/>
//   return (
//       <div>
//           <ConnectedRouter>
//               <Router>
//                   {/*<Container />*/}
//                   <Routes>
//                       <Route path="/" element={<Container></Container>}/>
//                       <Route path={"api"} element={<EncarList></EncarList>}>
//                         <Route path="(:param1)(:param2)" element={<EncarList></EncarList>}></Route>
//                       </Route>
//
//
//                   </Routes>
//               </Router>
//           </ConnectedRouter>
//       </div>
      // <Provider store={store}>
      //     <div className="App">
      //         <FilterbarComponent/>
      //         <Router>
      //             <Routes>
      //                 <Route path ={"/test/:brand:id"}  element={element}></Route>
      //                 <Route path ={"/"} exact={true} element={<EncarList /> }></Route>
      //                 <Route path ="/board" exact={true} element={<EncarList />}/>
      //             </Routes>
      //         </Router>
      //     </div>
      // </Provider>
//   );
// }

// const mapStateToProps = (state) =>{
//     return{
//         brand: state.data.brand,
//     }
// }
//
// export default connect(mapStateToProps, null)(App);


