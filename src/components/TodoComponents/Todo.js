import React from "react";
import TodoItem from "./TodoList";
import todosData from "./TodoData";
// import TodoForm from "./TodoForm";

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      newTodo: {
        id: "",
        text: "",
        completed: true
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }
  handleChange1 = e => {
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        [e.target.name]: e.target.value
      }
    });
  };
  addTodo = e => {
    e.preventDefault();
    console.log(this.state.todos);
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        id: Date.now(),
        completed: true
      }
    });
    this.state.todos.push(this.state.newTodo);
    this.handleChange(this.state.newTodo.id);
  };

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="todo-list">
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            name="text"
            value={this.state.newTodo.text}
            onChange={this.handleChange1}
          />
          <button>Add Todo!</button>
        </form>
        <h2 className="todos-header">Event Todos</h2>
        {todoItems}
      </div>
    );
  }
}

export default Todos;
