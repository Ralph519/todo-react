import React from 'react';
import PropTypes from 'prop-types';
import * as classnames from 'classnames';

const propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    checkTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    doneEdit: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};


const TodoItem = props => {
    return (
        <tbody>
            <tr key={props.todo.id}>
                <th>
                    <input 
                       type="checkbox" 
                       onChange={(event) => props.checkTodo(props.todo, props.index, event)} 
                       checked={props.todo.completed}
                     />
                    </th>
                      
                    {!props.todo.editing &&
                    <td 
                     className={classnames({'completed': props.todo.completed})}
                     onDoubleClick={(event) => props.editTodo(props.todo,props.index,event)}
                    >{props.todo.title}</td>
                    }

                    {props.todo.editing &&
                    <td> 
                     <input 
                       type="text" 
                       autoFocus 
                       defaultValue={props.todo.title}
                       onBlur={(event) => props.doneEdit(props.todo, props.index, event)}
                       onKeyUp=
                           {(event) => {
                             if(event.key==='Enter'){
                               props.doneEdit(props.todo, props.index, event);
                             } else if (event.key==='Escape') {
                               props.cancelEdit(props.todo, props.index, event);
                             }
                           }}
                     /> 
                    </td>
                    }

                   <td><p className="remove-item" onClick={(event) => props.deleteTodo(props.index)}>&times;</p></td>
                 </tr>
        </tbody>
    );
};


TodoItem.propTypes = propTypes;


export default TodoItem;
