function Footer() {
  return (
    <footer className="footer">
      <h3>Positivus</h3>

      <div className="footer-content">
        <div>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
        </div>

        <div>
          <input placeholder="Email" />
          <button className="subscribe-btn">Subscribe to news</button>
        </div>
      </div>

      <p className="copyright">
        © 2023 Positivus. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer