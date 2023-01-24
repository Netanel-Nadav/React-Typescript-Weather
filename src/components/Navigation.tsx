import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'


import { ThemeContext } from '../context/ThemeContext'



export const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { isDarkMode, changeTheme } = useContext(ThemeContext)

    const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (!changeTheme) return
        changeTheme(val)
    }

    
    return (
        <nav className='main-layout'>
            <div className="wrapper flex space-between align-center">
                <div className="logo-container fs-1-5">
                    Netanel Nadav
                </div>
                <ul className={`clean-list flex g-1 ${isMenuOpen ? 'show' : ''}`}>
                    <li onClick={() => setIsMenuOpen(false)}><NavLink to={'/'}>Home</NavLink></li>
                    <li onClick={() => setIsMenuOpen(false)}><NavLink to={'/favorites'}>Favorites</NavLink></li>
                    <li onClick={() => setIsMenuOpen(false)}><NavLink to={'/contact'}>Contact</NavLink></li>
                    <li>
                        <input type="radio" onChange={handleThemeChange} value="dark" name="theme" id="Dark" checked={isDarkMode ? true : false} />
                        <input type="radio" onChange={handleThemeChange} value="light" name="theme" id="Light" checked={isDarkMode ? false : true} />
                    </li>
                </ul>
                <div className="hamburger flex column" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}
