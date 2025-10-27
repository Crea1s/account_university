import React from 'react'
import classes from '../styles/General.module.css'
import { Link } from "react-router-dom";

export default function General() {
  return (
    <div className={classes.general}>
    <div className={classes.account}>
        <img src=''/>
        <div>
            <h3>Имя пользователя</h3>
            
        </div>
    </div>
    <div className={classes.conteiners}>
        
        <div><Link to="/uunit-project/">Главная</Link></div>
        <div>Успеваемость</div>
        <div>Библиотека</div>
        <div>Учебный план</div>
        <div>Моё портфолио</div>
        <div>Моя группа</div>
        <div></div>
        <div></div>
        <div>Заявки</div>
    </div>
    </div>
  )
}
