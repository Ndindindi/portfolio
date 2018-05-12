import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Avatar from "material-ui/Avatar";
import {SortableElement, SortableHandle} from 'react-sortable-hoc';

import labels from 'app/routes/todo/data/labels'
import users from 'app/routes/todo/data/users'
// This can be any component you want
const DragHandle = SortableHandle(() =>
    <i className="zmdi zmdi-menu draggable-icon d-none d-sm-flex" style={{fontSize: 25}}/>);


const ToDoItem = SortableElement(({todo, onTodoSelect, onTodoChecked}) => {
    let user = null;
    if (todo.user > 0)
        user = users[todo.user - 1];
    return (
        <div className="module-list-item" onClick={() => {
            onTodoSelect(todo);
        }}>

            <DragHandle/>

            <Checkbox
                checked={todo.selected}
                onClick={(event) => {
                    event.stopPropagation();
                    onTodoChecked(todo);
                }}
                value="SelectTodo"
            />

            <div className="module-list-info">
                <div className="row">
                    <div className="module-todo-content col-9 col-sm-10 col-md-11">
                        <div className={`subject ${todo.completed && 'text-muted text-strikethrough'}`}>
                            {todo.title}
                        </div>
                        <div className="manage-margin">
                            {labels.map((label, index) => {
                                return (todo.labels).includes(label.id) &&
                                    <div key={index}
                                         className={`badge text-white bg-${label.color}`}>{label.title}</div>
                            })}
                        </div>
                    </div>
                    <div className="module-todo-right col-3 col-sm-2 col-md-1">
                        <div className="d-flex flex-row-reverse">
                            {user === null ? <Avatar>U</Avatar>
                                : <Avatar alt={user.name}
                                          src={user.thumb}/>}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
});

export default ToDoItem;