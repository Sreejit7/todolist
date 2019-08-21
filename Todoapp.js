import React from 'react';
import Todoinput from './Todoinput';
import Todolist from './Todolist';
class Todoapp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:'',
            list:[]
        }
    }
    
    changing=(event)=>{
        this.newItem(event.target.value)
    }
    newItem=(input)=>{
        this.setState({
            item:input
        })
    }
    addItem=()=>{
        let listArray=this.state.list;
        listArray.push(this.state.item);
        this.setState({
            list:listArray,
            item:''
        })
    }
    removeitem=(id)=>{
        let newArray=this.state.list;
        let left=newArray.slice(0,id);
        let right=newArray.slice(id+1);
        this.setState({
            list:left.concat(right)
        })
    }
    render(){
        return(
            <div>
            <Todoinput handleChange={this.changing}
                       handleAdd={this.addItem}
                       items={this.state.item}
                       ivalue={this.state.item}
                       
            />
            <Todolist
                       handleRemove={this.removeitem}
                       listarray={this.state.list}
            />
            
            </div>
        );
    }
}
export default Todoapp;