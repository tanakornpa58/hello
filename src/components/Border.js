import React, { Component } from 'react';

class Border extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div style={{ borderWidth: 3, borderStyle: "solid", borderColor: "red" }}>
       {this.props.children}
     </div>

            
        );
    }
}

export default Border;