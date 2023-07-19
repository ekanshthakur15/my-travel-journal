import Logo from './images/earth-logo.png'
function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="earth logo" className = "navbar--icon"/>
            <h2 className = "navbar--title">My travel journal</h2>
        </nav>
    )
}

export default Navbar