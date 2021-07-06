import React, { Component } from "react";
import axios from 'axios';
class TodoList extends Component {
 constructor(props) {
 super(props);
 this.state = {
 todos : [],
 item : ""
}
}
 changeHandler = (event) => {
 this.setState({item: event.target.value})
 }
 clickHandler = (event) => {
 axios({
 method: 'post',
 url: 'http://localhost:5000/todos',
 data: {
 newtodo: this.state.item,
 done: false
 }
 });
 this.setState({item: ''})
 window.location.reload(false)
 }
 componentDidMount() {
 axios.get('http://localhost:5000/todos').then((response) => {
 console.log(response.data)
 let data = [];
 console.log(response.data)
 for(var i =0; i < response.data.length; i++){
 data.push(response.data[i])
 }
 this.setState({todos: data})
 });
 }
 markComplete(todoId) {
 axios({
 method: 'put',
 url: 'http://localhost:5000/todos/:'+todoId,
 data: {
 newtodo: todoId,
 done: true
 }
 });
 this.setState({item: ''})
 }
 markInComplete(todoId) {

 axios({
 method: 'put',
 url: 'http://localhost:5000/todos/:'+todoId,
 data: {
 newtodo: todoId,
 done: false
 }
 });
 this.setState({item: ''})
 }
 removeItem(todoId) {
 axios({
 method: 'delete',
 url: 'http://localhost:5000/todos/:'+todoId
 });
 this.setState({item: ''})
 }
 render() {
 return (
<div className="todo-container">
<h2 align="center"> Plan your Things </h2>
<h2> ToDo App </h2>
<div className="todo">
<input type="text"
onChange={this.changeHandler}/>&nbsp;
<button type="button" onClick={() =>
{ this.clickHandler()}}>Add Todo</button>
<table><tbody>
 {this.state.todos.map((todo, index) =>
<tr key={index}>
<td><input type="checkbox" name="todos"
value={todo._id} defaultChecked={todo.done}/>{todo.title}</td>
 <td><a href="/" onClick={() =>
{ this.markComplete(todo._id)}}>Complete</a></td><td>&nbsp;</td>
 <td><a href="/" onClick={() =>
{ this.markInComplete(todo._id)}}>MarkInComplete</a></td><td>&nbsp;</td>
<td><a href="/" onClick={() => { this.removeItem(todo._id)}}>Delete</a></td>
</tr>)}
</tbody></table>
</div>
 </div>
 )
 }

}
export default TodoList;
