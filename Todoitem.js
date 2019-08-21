import React from 'react';
class Todoitem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return( 
            <div>
            <ul>
                <li>{this.props.items}<button onClick={()=> this.props.remove(this.props.index)}>Done</button></li>
            </ul> 
            </div>      
        );

    }
}
export default Todoitem;
