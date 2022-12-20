import { createContext } from 'react'

type MyContext = {
    value: string
}

export const SampleContext = createContext<MyContext | null>(null)
