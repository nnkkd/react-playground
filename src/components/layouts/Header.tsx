import logo from '../../logo.svg';
import '../../App.css';
import { Menu } from '../menu/Menu';

export const Header = () => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            this is header
            <Menu />
        </header>)
}

// footerの作成
// layout.tsx