import React, { Component } from "react";
import { render } from "react-dom";

class Home extends Component {
    render() {
        return (
            <div>Hello World</div>
        )
    }
}

const wrapper = document.createElement("div");

document.body.appendChild(wrapper);

render(<Home />, wrapper);