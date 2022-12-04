import { Link } from 'react-router-dom'
import { Layout } from '../components/layouts/Layouts'
import './Home.scss'
import { PAGES } from '../shared/pages'

export const Home = (): JSX.Element => {
    return (
        <>
            <Layout title='toppage'>
                {PAGES.map((x) => {
                    return <Link to={x.uri}>{x.name}</Link>
                })}
            </Layout>
        </>
    )
}
