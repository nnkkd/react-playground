import { Link } from 'react-router-dom'
import { Layout } from '../components/layouts/Layouts'

export const Home = (): JSX.Element => {
  return (
    <>
      <Layout title='toppage'>
        <div>
          <Link to={'/useState-effect'}>go to useState,Effect playground</Link>
          <Link to={'/form'}>go to form</Link>
        </div>
      </Layout>
    </>
  )
}

// ハンバーガーメニューUI表示
// useStateで状態管理
// クリックしたら状態を変更
//
