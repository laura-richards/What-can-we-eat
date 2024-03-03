import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav
      className="nav-container"
      role="navigation"
      aria-label="main navigation"
    >
      <Link to="/">Home</Link>
      <br />
      <Link to="/addMeal">Add a Meal</Link>
      <br />
      <Link to="/">My Meals</Link>
    </nav>
  )
}

export default Nav
