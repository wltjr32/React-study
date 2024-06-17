import { Component } from "react";
//클래스형 컴포넌트

class EventPratice extends Component {
    state = {
        "message" : ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleClick()  {
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }
    render() {
        return {}
    }
}