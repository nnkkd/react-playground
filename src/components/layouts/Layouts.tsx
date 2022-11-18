import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children, title }: { title: string; children: React.ReactNode }): JSX.Element => {
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
