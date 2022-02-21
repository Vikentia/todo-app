import React, { useState } from "react";

import { CheckCircleOutlined, CloseOutlined, EditOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons';
import s from './TodoList.module.css';

function TodoList({ todo, setTodo }) {

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo);
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item;
        });
        setTodo(newTodo);
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value;
            }
            return item;
        })
        setTodo(newTodo);
        setEdit(null);
    }

    const activeTodo = todo.filter(item => item.status);
    const doneTodo = todo.filter(item => !item.status);

    return (
        <div className={s.todoList}>
            {
                [...activeTodo, ...doneTodo].map(item => (
                    <div className={s.todoListItem} key={item.id}>
                        {
                            edit == item.id
                                ?
                                <div className={s.wrapperInput}>
                                    <input
                                        className={s.todoListInput}
                                        onChange={e => setValue(e.target.value)}
                                        value={value} />
                                </div>
                                :
                                <div className={item.status ? 'null' : s.todoListItemTitle}>{item.title}</div>
                        }
                        {
                            edit == item.id
                                ?
                                <div>
                                    <button onClick={() => saveTodo(item.id)}>
                                        <SaveOutlined />
                                    </button>
                                </div>
                                :
                                <div>
                                    <button onClick={() => statusTodo(item.id)}>
                                        {
                                            item.status ? <CheckCircleOutlined /> : <CloseOutlined />
                                        }
                                    </button>
                                    <button onClick={() => editTodo(item.id, item.title)}>
                                        <EditOutlined />
                                    </button>
                                    <button onClick={() => deleteTodo(item.id)}>
                                        <DeleteOutlined />
                                    </button>
                                </div>
                        }

                    </div>
                ))
            }
        </div>
    );
}

export default TodoList;