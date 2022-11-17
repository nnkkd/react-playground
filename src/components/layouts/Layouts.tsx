import type { VFC } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children, title }: { title: string, children: React.ReactNode; }) => {
    return (
        <div>
            <Header />
            <main>
                <p>{title}</p>
                {children}
            </main>
            <Footer />
        </div>
    )
}