import React from 'react'
import '../../styles/footer.css'
import Logo from '../../assets/logo-otys.png'
import { Link } from 'react-router-dom'

function Footer() {
  ;<script
    src="https://kit.fontawesome.com/e4ab2d9fc1.js"
    crossorigin="anonymous"
  ></script>
  return (
    <footer>
      <div className="absolute">
        <Link to="/Otys-Barber/">
          <img src={Logo} alt="Logo Oty's Barber" className="footerLogo" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
