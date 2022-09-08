import IconFight from "./IconFight";
import CartWidget from "./CartWidget";
function NavBar () {
    return(
      <header>Mecenas Fight

        <span className="icon"><IconFight /></span>
            <nav>
              <ul>
                <li><a href="">Guantes</a></li>
                <li><a href="">Protecciones</a></li>
                <li><a href="">Bolsas</a></li>
                <li><a href="">Pads</a></li>
                <li className="cart"><CartWidget /></li>
              </ul>
            </nav>
          </header>
          
    );
  }

export default NavBar
