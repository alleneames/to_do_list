import React from "react";

class Header extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 custom-col">
                            <h1 className="title">To Do List</h1>
                            <input 
                                className="input" 
                                placeholder="Whats got to be done?" 
                            />
                            <button className="btn btn-success btn-sm">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;