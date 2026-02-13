function Header() {
  return (
    <nav className="navbar">
      <div className="brand">MyBrand</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="nav-btn">Get Started</button>
    </nav>
  )
}

export default Header
