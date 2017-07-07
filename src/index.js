import React from "react";
import ReactDOM from "react-dom";

//CSS styling
import "./styles.css";
import Header from "./components/to_do_header.js";
import ToDoContainer from "./containers/to_do_container.js";

class App extends React.Component {
    render() {
        return(
            <view>
                <Header />
                <ToDoContainer />
            </view>
            
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));