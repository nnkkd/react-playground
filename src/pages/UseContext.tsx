import { Layout } from '../components/layouts/Layouts'
import React from 'react'
import { useContext } from 'react'

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
}

const ThemeContext = React.createContext(themes.dark)

function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

function ThemedButton() {
    const theme = useContext(ThemeContext)
    return <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>
}

export const UseContext = (): JSX.Element => {
    return (
        <>
            <Layout title='usestate/effect'>
                <ThemedButton />
            </Layout>
        </>
    )
}
export default UseContext
