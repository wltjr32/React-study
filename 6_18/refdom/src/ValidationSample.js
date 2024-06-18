import { Component } from "react";
import'./ValidationSample.css';
import { click } from "@testing-library/user-event/dist/click";

class ValidationSample extends Component {
    state = {
        password : '',
        clicked : false,
        validated : false
    }
    render() {
        return (
            <div>
                <input
                    type = "password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                ></input>
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}
export default ValidationSample;