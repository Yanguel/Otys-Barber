import React from 'react'
import '../../styles/footer.css'
import Logo from '../../assets/logo-otys.png'

function Footer() {
  ;<script
    src="https://kit.fontawesome.com/e4ab2d9fc1.js"
    crossorigin="anonymous"
  ></script>
  return (
    <footer>
      <div className="absolute">
        <img src={Logo} alt="Logo Oty's Barber" className="footerLogo" />
      </div>
      <div>
        <ul className="socialMedia">
          <a href="#">
            <li>
              {' '}
              <i className="fa-brands fa-instagram fa-bounce fa-2xl"></i>
            </li>
          </a>
          <a href="https://www.facebook.com/otysbarber/">
            <li>
              <i className="fa-brands fa-facebook fa-bounce fa-2xl"></i>
            </li>
          </a>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
