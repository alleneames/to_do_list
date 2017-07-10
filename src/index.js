import React from "react";
import ReactDOM from "react-dom";

//CSS styling
import "./styles.css";

//import components

import TodoContainer from "./containers/todo-container.js"

class App extends React.Component {
    render() {
        return(
        <view>
            <TodoContainer />
        </view>
            
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));