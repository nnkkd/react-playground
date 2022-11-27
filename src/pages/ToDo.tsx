import { Link } from 'react-router-dom'
import { Layout } from '../components/layouts/Layouts'
import { ToDoApp } from '../components/toDoApp/ToDoApp'

export const ToDo = (): JSX.Element => {
    return (
        <>
            <Layout title='todo'>
                <div>
                    <Link to={'/'}>go to root</Link>
                </div>
                <ToDoApp />
            </Layout>
        </>
    )
}
