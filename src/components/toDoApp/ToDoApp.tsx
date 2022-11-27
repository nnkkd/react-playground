import type { Dispatch, SetStateAction } from 'react'
import React, { useState } from 'react'
import './ToDoApp.scss'

type Task = {
    key: string
    taskName: string
}

export const ToDoApp = (): JSX.Element => {
    const [tasks, setTasks] = useState<Array<Task>>([])
    const [inputValue, setInputValue] = useState<string>('')

    const onClickAddTask = (setValue: Dispatch<SetStateAction<string>>, event: React.MouseEvent<HTMLButtonElement>) => {
        const task: Task = { key: Math.random().toString(), taskName: inputValue }
        setTasks([task].concat(tasks))
        setValue('')
    }

    const onClickDeleteTask = (setValue: Dispatch<SetStateAction<Array<Task>>>, key: string, event: React.MouseEvent<HTMLButtonElement>) => {
        setValue(tasks.filter((x) => x.key !== key))
    }

    const onChangeHandler = (setValue: Dispatch<SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const ToDoList = (): JSX.Element => {
        return (
            <>
                {tasks.map((task) => (
                    <span key={task.key} className='tasks'>
                        <button onClick={(event) => onClickDeleteTask(setTasks, task.key, event)}>x</button>
                        <input type='text' defaultValue={task.taskName} />
                    </span>
                ))}
            </>
        )
    }

    return (
        <>
            <div className='input-area'>
                <button onClick={(event) => onClickAddTask(setInputValue, event)}>Add</button>
                <input value={inputValue} onChange={(event) => onChangeHandler(setInputValue, event)}></input>
            </div>
            <ToDoList />
        </>
    )
}
