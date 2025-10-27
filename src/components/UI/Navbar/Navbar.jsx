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
        <h1 className="navigation_link"><Link to="/uunit-project/posts" >Главная</Link></h1>
        <h1 className="navigation_link"><Link to="/uunit-project/about" >О нас</Link></h1>
        <h1 className="navigation_link"><Link to="/uunit-project/account" >Личный кабинет</Link></h1>
      </div>
      <h1 className="navigation_logout"><MyButton onClick={logout}>Выйти</MyButton></h1>
    </div>
    <div className="navbar__links navbar_links_margin">
        <h1 className="navigation_link"><Link to="/uunit-project/audience" >Аудитории</Link></h1>
        <h1 className="navigation_link"><Link to="/uunit-project/grants" >Стипендии</Link></h1>
        <h1 className="navigation_link"><Link to="/uunit-project/dormitory" >Общежитие</Link></h1>
        <h1 className="navigation_link"><Link to="/uunit-project/events" >Мероприятия</Link></h1>
        <h1 className="navigation_link"><Link to="/uunit-project/sections" >Кружки</Link></h1>
      </div>
      </div>
    </>
  );
}
