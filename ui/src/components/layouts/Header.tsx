import logo from '../../logo.svg'
import './Header.scss'
import { Menu } from '../menu/Menu'

export const Header = (): JSX.Element => {
    return (
        <header className='App-header'>
            <Menu />
            <img src={logo} className='App-logo' alt='logo' />
            my react playground
        </header>
    )
}

// footerの作成
// layout.tsx
