import logoLoaderOtys from '../../assets/logo-otys.png'
import '../../styles/loader.css'
function Loader() {
  return (
    <div class="loader">
      <div class="loader__border">
        <div class="loader__center"></div>
      </div>
      <div className="logoCenter">
        <img
          src={logoLoaderOtys}
          alt="Loader Logo"
          className="logoLoader souligner"
        />
      </div>
    </div>
  )
}

export default Loader
