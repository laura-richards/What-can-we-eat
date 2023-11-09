import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav
      className="nav-container"
      role="navigation"
      aria-label="main navigation"
    >
      <Link to='/'>Home</Link>
      
    </nav>
  )
}

export default Nav
