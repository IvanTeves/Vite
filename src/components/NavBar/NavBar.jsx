import { NavLink, Outlet} from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
export const NavBar = () => {
    return(
   <>
      <header className="header" >
        <NavLink to={"/"}>
          <div className="logo"></div>

        </NavLink>
        <nav className="nav">
          <NavLink to={"/category/fantasia"} style={({isActive})=>({ background: isActive ? "red" : "blue"})}>Fantasia</NavLink>
          <NavLink to={"/category/Terror"}>Terror</NavLink>
          <NavLink to={"/category/Aventura"}>Aventura</NavLink>
          <NavLink to={"/category/fantasia"}>Fantastico</NavLink>
        </nav>
        <div id='carrito'>
          <CartWidget />
        </div>
      </header>
      <Outlet/>
      <footer></footer>
  </>   

    )
  }