function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Positivus</h2>

      <div className="nav-links">
        <a>About us</a>
        <a>Services</a>
        <a>Use Cases</a>
        <a>Pricing</a>
        <a>Blog</a>
        <button className="quote-btn">Request a quote</button>
      </div>
    </nav>
  )
}

export default Navbar