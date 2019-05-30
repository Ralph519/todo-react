import React , { Component }  from 'react';
import './App.css';
import * as classnames from 'classnames';

class App extends Component {

  todoInput = React.createRef();

  state = {
    beforeEditCache: '',
    idForTodo: 4,
    todos: [
      {
        'id': 1,
        'title': 'Todo Item 1',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'title': 'Todo Item 2',
        'completed': false,
        'editing': false
      },
      {
        'id': 3,
        'title': 'Todo Item 3',
        'completed': false,
        'editing': false
      },
    ]
  }

  render() {

  return (
    <div className="App">
      <div className="container mt-5">

        <h1><i className="fab fa-react"></i>&nbsp;React Todo App</h1>

        <div className="col-md-6">
          <div className="form-group row">
            <div className="col-sm-12">
              <input 
                type="text" 
                className="form-control" 
                id="staticEmail" 
                placeholder="What needs to be done?"
                onKeyUp={this.addTodo}
                ref={this.todoInput}
              />

              <table className="table table-hover">
                <tbody>
                  
                    {this.state.todos.map((todo, index) => 
                    <tr key={todo.id}>
                      <th>< input type="checkbox" onChange={(event) => this.checkTodo(todo, index, event)} /></th>
                      
                      {!todo.editing &&
                      <td 
                        className={classnames({'completed': todo.completed})}
                        onDoubleClick={(event) => this.editTodo(todo,index,event)}
                      >{todo.title}</td>
                      }

                      {todo.editing &&
                      <td> 
                        <input 
                          type="text" 
                          autoFocus 
                          defaultValue={todo.title}
                          onBlur={(event) => this.doneEdit(todo, index, event)}
                          onKeyUp=
                              {(event) => {
                                if(event.key==='Enter'){
                                  this.doneEdit(todo, index, event);
                                } else if (event.key==='Escape') {
                                  this.cancelEdit(todo, index, event);
                                }
                              }}
                        /> 
                      </td>
                      }

                      <td><p className="remove-item" onClick={(event) => this.deleteTodo(index)}>&times;</p></td>
                    </tr>
                    )}
                 
                </tbody>
              </table>
           

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  addTodo = event => {
    if(event.key==='Enter'){
      const todoInput = this.todoInput.current.value;

      if (todoInput.trim().length === 0){
        return;
      }

      this.setState((prevState, props) => { 

        let todos =  prevState.todos;
        let idForTodo = prevState.idForTodo + 1;

        todos.push({
          id: idForTodo,
          title: todoInput,
          completed: false,
        })

        return {todos, idForTodo};
      });

      this.todoInput.current.value = '';
    }
  }

  deleteTodo = index => {
    this.setState((prevState, props) => {
      let todos = prevState.todos;

      todos.splice(index,1);

      return (todos)
    });
  }

  checkTodo = (todo, index, event) => {
    this.setState((prevState, props) => {
      let todos = prevState.todos;

      todo.completed = !todo.completed;

      todos.splice(index, 1, todo);

      return {todos};
    });
  }

  editTodo = (todo, index, event) => {
    this.setState((prevState, props) => {
      let todos = prevState.todos;

      todo.editing = true;

      todos.splice(index, 1, todo);

      return {todos, beforeEditCache: todo.title};
    });
  }

  doneEdit = (todo, index, event) => {
    event.persist();

    this.setState((prevState, props) => {
      let todos = prevState.todos;

      if(event.target.value.trim.length===0){
        todo.title = prevState.beforeEditCache;
      } else {
        todo.title = event.target.value;
      }

      todo.editing = false;

      todos.splice(index, 1, todo);

      return {todos};
    });
  }

  cancelEdit = (todo, index, event) => {
    this.setState((prevState, props) => {
      let todos = prevState.todos;
      todo.title = prevState.beforeEditCache;

      todo.editing = false;

      todos.splice(index, 1, todo);

      return {todos};
    });
  }

}



export default App;
