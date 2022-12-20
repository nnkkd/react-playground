import { useReducer } from 'react'

type Action = 'A' | 'B'

const reducer = (state: string, action: Action): string => {
    if (action === 'A') {
        console.log('A')
        state = 'A'
    } else {
        console.log('B')
        state = 'B'
    }
    return state
}

export const UseReducerApp = (): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, 'a')

    return (
        <>
            <button onClick={() => dispatch('A')}>dispatch with A</button>
            <button onClick={() => dispatch('B')}>dispatch with B</button>
            <p>last called: {state}</p>
        </>
    )
}
