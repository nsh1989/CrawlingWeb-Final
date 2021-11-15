import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render() {
        return(
            <Router>
                <Layout>
                    <Header/>
                    <FilterbarComponent/>
                    <Routes>
                        <Route path="/" element={<Container/>}/>
                        <Route path="/board" element={<EncarList/>}/>
                    </Routes>
                </Layout>
            </Router>
        )}
}

let mapStateToProps = (state) =>({
        ...state,
});


export default connect(mapStateToProps)(App);


