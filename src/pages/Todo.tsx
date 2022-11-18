import { Link } from 'react-router-dom'
import { Layout } from '../components/layouts/Layouts'

export const Todo = (): JSX.Element => {
  return (
    <>
      <Layout title='todo'>
        <div>
          <Link to={'/'}>go to root</Link>
        </div>
      </Layout>
    </>
  )
}
