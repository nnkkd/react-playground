import { useState } from 'react'
import './Menu.scss'

export const Menu = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleIsOpen = () => {
        console.log('toggle called')
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button className='menuButton' onClick={toggleIsOpen}>
                menu
            </button>
            <div className={isOpen ? 'openedMenu' : 'closedMenu'}>
                {' '}
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
        </div>
    )
}
