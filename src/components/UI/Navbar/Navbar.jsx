import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function logout() {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  return (
    <>
    <div className="navbar_out">
    <div  className="navbar">
      <div className="navbar__links">
        <h1 className="navigation_link"><Link to="/uunit-project/general" >Главная</Link></h1>
        <h1 className="navigation_link"><Link to="/uunit-project/about" >О нас</Link></h1>
        <h1 className="navigation_link"><Link to="/uunit-project/account" >Личный кабинет</Link></h1>
      </div>
      <h1 className="navigation_logout"><MyButton onClick={logout}>Выйти</MyButton></h1>
    </div>
      </div>
    </>
  );
}
