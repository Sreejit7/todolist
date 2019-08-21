import React from 'react';
import Todoitem from './Todoitem'
import { listenerCount }from 'events';
class Todolist extends React.Component{
    render(){
        const listitems=this.props.listarray;
        return(
            <div>{
            listitems.map((item,i)=>
            <Todoitem remove={this.props.handleRemove}index={i} items={item}/>
            )    
            }
            </div>
        );    
    }
}
export default Todolist;