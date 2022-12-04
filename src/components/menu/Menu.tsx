import { useState } from 'react'
import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'
import { PAGES } from '../../shared/pages'

export const Menu = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleIsOpen = () => {
        console.log('toggle called')
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className='menuArea'>
                <button className={styles.menuButton} onClick={toggleIsOpen}>
                    menu
                </button>

                <div className={isOpen ? styles.openedMenu : styles.closedMenu}>
                    <ul>
                        {PAGES.map((x, i) => {
                            return (
                                <li key={i}>
                                    <Link key={i} to={x.uri}>
                                        {x.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
