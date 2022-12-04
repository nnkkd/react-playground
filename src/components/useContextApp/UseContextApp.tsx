import type { FC } from 'react'
import { useContext } from 'react'
import { SampleContext } from './context'

const Content: FC = () => {
    const ctx = useContext(SampleContext)
    return (
        <>
            <p>{ctx?.value}</p>
        </>
    )
}

export const UseContextApp = (): JSX.Element => {
    return (
        <>
            <SampleContext.Provider value={{ value: 'context in this fragment!' }}>
                <Content />
            </SampleContext.Provider>
        </>
    )
}
