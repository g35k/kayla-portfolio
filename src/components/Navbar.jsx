import { NavLink, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className="navbar">
      <div className={`navbar-inner-wrap container ${isHome ? '' : 'has-logo'}`}>
        {!isHome && (
          <NavLink to="/" className="navbar-logo">Kayla Garibay</NavLink>
        )}
        <nav className="nav-pills">
          <NavLink to="/work"    className={({ isActive }) => `nav-pill${isActive  ? ' active' : ''}`}>My Work</NavLink>
          <NavLink to="/about"   className={({ isActive }) => `nav-pill${isActive  ? ' active' : ''}`}>About Me</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-pill${isActive  ? ' active' : ''}`}>Contact Me</NavLink>
        </nav>
      </div>
    </header>
  )
}