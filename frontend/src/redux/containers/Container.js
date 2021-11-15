import React, {useState} from "react";
import {connect} from "react-redux";
import { useDispatch, useSelector} from "react-redux";
import EncarList from "../../components/EncarList";
import boardReducer, {boardRemove} from "../reducers/boardReducer";
import {getTypeADD, getTypeDecrement, getTypeIncrement, getTypeSUBSTRACT} from "../actions/types";

class Container extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ContainerValue : "Container Test"
        }
    }
    componentWillMount() {
        // this.state.setState(
        //     {lastId : this.state.ContainerValue}
        // )
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
        console.log(prevProps)
        console.log(this.props)
    }

    render () {


        return (
            <div>
                <h1> VALUE : {this.props.lastId}</h1>
                <h2> VALUE : {this.state.ContainerValue}</h2>
                <h3> COUNTER : {this.props.counter}</h3>
                <button type={"button"} onClick={this.props.onIncreamentContainer}> {this.props.counter} </button>
                <button type={"button"} onClick={this.props.onDecreamentContainer}> {this.props.counter} </button>
                <button type={"button"} onClick={this.props.onADD}> {this.props.counter} </button>
                <button type={"button"} onClick={this.props.onSUB}> {this.props.counter} </button>
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
        lastId: state.boardReducer.lastId,
        counter: state.boardReducer.counter
});
let mapDispatchToProps = dispatch => {
    return {
        onIncreamentContainer:()=>dispatch(getTypeIncrement()),
        onDecreamentContainer:()=>dispatch(getTypeDecrement()),
        onADD:()=>dispatch(getTypeADD(5)),
        onSUB:()=>dispatch(getTypeSUBSTRACT(5))
    }
}
Container = connect(mapStateToProps, mapDispatchToProps)(Container);

export default Container;