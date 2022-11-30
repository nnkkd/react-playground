import { useState } from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom'

export const Menu = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleIsOpen = () => {
        console.log('toggle called')
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className='menuArea'>
                <button className='menuButton' onClick={toggleIsOpen}>
                    menu
                </button>

                <div className={isOpen ? 'openedMenu' : 'closedMenu'}>
                    <ul>
                        <li>
                            <Link to={'/'}>go to root</Link>
                        </li>
                        <li>
                            <Link to={'/useState-effect'}>go to useState,Effect playground</Link>
                        </li>
                        <li>
                            <Link to={'/form'}>go to form</Link>
                        </li>
                        <li>
                            <Link to={'/todo'}>go to todo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
