import { Link } from "react-router-dom"
import { Layout } from "../components/layouts/Layouts"

const Page1 = () => {
    return (<Layout title="About">
        <main>About Page</main>
        <Link to={'/'}>go to home</Link>
    </Layout>
    )
}

export default Page1