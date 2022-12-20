import { Layout } from '../components/layouts/Layouts'
import React from 'react'
import { UseContextApp } from '../components/useContextApp/UseContextApp'

export const UseContext = (): JSX.Element => {
    return (
        <>
            <Layout title='useContext'>
                <UseContextApp />
            </Layout>
        </>
    )
}
export default UseContext
