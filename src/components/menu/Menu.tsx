import { useState } from "react"
import "./Menu.css"

export const Menu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleIsOpen = () => {
        console.log('toggle called')
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button onClick={toggleIsOpen}>button</button>
            <div className={isOpen ? 'openedMenu' : 'closedMenu'}>                <ul>
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

