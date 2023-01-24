import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

// COMPONENTS & PAGES
import { Navigation } from "./components/Navigation"
import { Contact } from './pages/Contact'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'

// CONTEXT
import { ThemeContext } from './context/ThemeContext'


export const App: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div className={`${isDarkMode ? "dark" : ''} app main-layout`}>
      <header className='full'>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
