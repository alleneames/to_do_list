import React from "react";

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.handleRemove(this.props.index)}} >X</button>
                <p>{this.props.text}</p>
                <input onChange={(event)=> {
                    this.props.handleUpdate(this.props.index, event)
                }} value={this.props.nameValue} />
                <button onClick={()=>{
                    this.props.handleSave(this.props.index);
                }} >Change</button>
            </div>
        )
    }
}

export default TodoItem;