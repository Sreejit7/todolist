import React from 'react';
class Todoinput extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <input value={this.props.ivalue} onChange={this.props.handleChange} type="text" placeholder="Enter item here"/>
            <button onClick= {this.props.handleAdd}>Add</button>
            </div>
        );
    }
}
export default Todoinput;