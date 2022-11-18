import { Link } from 'react-router-dom'
import { Layout } from '../components/layouts/Layouts'
import { SomeForm } from '../components/form/SomeForm'

export const Form = (): JSX.Element => {
  return (
    <>
      <Layout title='form'>
        <div>
          <Link to={'/'}>go to root</Link>
          <div>
            <SomeForm />
          </div>
        </div>
      </Layout>
    </>
  )
}
