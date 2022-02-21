import React, { useState } from "react";

import { v4 as uuidv4 } from 'uuid';
import { PlusCircleOutlined } from '@ant-design/icons';

import s from './AddTodo.module.css';


function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('');

    function saveTodo() {
        if (value) {
            setTodo([...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }])
            setValue('');
        }
    }

    return (
        <div className={s.addTodo}>
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Введите задачу" autoFocus />
            <button type="dashed" onClick={saveTodo}><PlusCircleOutlined /></button>
        </div>
    );
}

export default AddTodo;