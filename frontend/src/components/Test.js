import React, {Component} from "react";

class CTest extends Component {

    render() {
        const {test} = {};
        console.log(test);
        return (
            <div>{this.props.test}</div>
        )
    }


}
export default CTest;