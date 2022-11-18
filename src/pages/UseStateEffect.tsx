import { Link } from 'react-router-dom'
import { Layout } from '../components/layouts/Layouts'
import { useState, useEffect } from 'react'

export const UseStateEffect = (): JSX.Element => {
  const [count, setCount] = useState<number>(0)
  const [count2, setCount2] = useState<number>(0)
  useEffect(() => {
    console.log(count + count2)
  }, [count, count2])
  return (
    <>
      <Layout title='toppage'>
        <div>
          <Link to={'/'}>go to root</Link>
        </div>
        <button onClick={() => setCount(count + 1)}>{`count: ${count}`}</button>
        <button onClick={() => setCount2(count2 + 1)}>{`count: ${count2}`}</button>
      </Layout>
    </>
  )
}
export default UseStateEffect
