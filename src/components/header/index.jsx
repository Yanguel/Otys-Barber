function Header() {
  ;<script
    src="https://kit.fontawesome.com/e4ab2d9fc1.js"
    crossorigin="anonymous"
  ></script>
  return (
    <header className="header">
      <div>
        <h1>Oty's BARBER</h1>
        <nav>
          <ul>
            <li>
              <i className="fa-solid fa-file-circle-question"></i> Obtenir un
              devis
            </li>
            <li>
              <i className="fa-solid fa-phone-volume"></i>Appeler maintenant
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>Itinéraire
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
