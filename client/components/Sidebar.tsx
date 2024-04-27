import Header from './Header.tsx'
import Nav from './Nav.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'

function Sidebar() {
  const { loginWithRedirect, logout, user } = useAuth0()

  return (
    <>
      <div className="sidebar">
        <IfNotAuthenticated>
          <button className="button" onClick={() => loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })}>
            Login
          </button>
        </IfNotAuthenticated>
        <IfAuthenticated>
        <button onClick={() => logout()}>Logout</button>
        </IfAuthenticated>
        <Header />
        <Nav />
      </div>
    </>
  )
}

export default Sidebar
