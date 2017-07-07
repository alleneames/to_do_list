import React from "react";

class Main extends React.Component {
    genNames() {
        this.NameListItems = this.props.names.map((item, index)=> {
            return (
                <li 
                    onClick={()=> {
                        this.props.handleRemove(index);
                        }} key={item + index}>
                    {item}
                </li>
            );
        });
    }
    render() {
        this.genNames();
        return (
            <div className="col-md-12">
                
            </div>
        )
    }
}

export default Main;