import React from "react";

//import components
import TodoList from "../components/todo-list.js";
import autoBind from "react-autobind";

class TodoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            inputValue: ""
        }
        autoBind(this);
    }

    click() {
        this.setState({
            ...this.state,
            items: [...this.state.items, {name: this.state.inputValue, value: ""}],
            inputValue: ""
        });
    }

    updateItemValue(index, event) {
        let items = [...this.state.items];
        items[index].value = event.target.value;
        this.setState({
            ...this.state,
            items: items
        });
    }

    save(index) {
        let items = [...this.state.items];
        items[index].name = items[index].value;
        this.setState({
            ...this.state,
            items: items
        });
    }

    updateValue(event) {
        this.setState({
            ...this.state,
            inputValue: event.target.value
        });
    }
    remove(index) {
        let items = [...this.state.items];
        items.splice(index, 1);
        this.setState({
            ...this.state,
            items: items
        })
    }
    render() {
        return(
            <div>
                <input value={this.state.value} onChange={(event)=> {this.updateValue(event)}} />
                <button onClick={()=> {
                    this.click();
                }}>Submit</button>
                <TodoList handleSave={this.save} handleUpdate={this.updateItemValue} handleRemove={this.remove} items={this.state.items} />
            </div>
        )
    }
}

export default TodoContainer;



