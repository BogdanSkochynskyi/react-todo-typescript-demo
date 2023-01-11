import React from 'react';
import { TodoModel } from '../models/TodoModel';
import {TodoRowItem} from './TodoRowItem';

export const TodoTable: React.FC<{todos:TodoModel[], deleteTask: Function}> = (props) => {
    return (
        <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => 
                     <TodoRowItem 
                     key={todo.rowNumber}
                     rowNumber={todo.rowNumber} 
                     rowDescription={todo.rowDescription} 
                     rowAssigned={todo.rowAssigned}
                     deleteTask={props.deleteTask}
                    />)}
            </tbody>
          </table>
    )
}