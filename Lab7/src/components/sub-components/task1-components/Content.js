import React, { Component } from 'react';
import '../../../components-style/Content.css';

class Content extends Component {
    componentDidMount() {
        this.setupclickEvent();
    }


    setupclickEvent() {
        let first_element = document.getElementById("first_element");
        first_element.onclick = function() {
            if(first_element.className === "blue")
                first_element.className = "yellow";
            else
                first_element.className = "blue";
        }
        
        let second_element = document.querySelectorAll("p#second_element");
        second_element[0].onclick = function() {
            if(second_element[0].className === "white")
                second_element[0].className = "grey";
            else
                second_element[0].className = "white";
        }
    }



    render() {
        return(
            <div>
                <p>Дата народження: 02.07.2004<br/>Місце народження: м.Львів</p>
                <p>Освіта: Pівненський ліцей "Колегіум" м.Рівне, Ірпінський ліцей №2 м.Ірпінь, НТУУ "КПІ" м.Київ</p>

                <p>Хоббі:</p>
                <ul>
                    <li>Історія</li>
                    <li>Геополітика</li>
                    <li>Комп'ютерні ігри</li>
                    <li id = "first_element">Спорт</li>
                </ul>

                <p id="second_element">Улюблені фільми:</p>
                <ol>
                    <li>"Безславні виродки", 2009</li>
                    <li>"Бетмен: Початок", 2005</li>
                    <li>"Темний лицар", 2008</li>
                    <li>"Темний лицар повертається", 2012</li>
                </ol>

                <p>Жито́мир — місто на півночі України, розташоване на річці Тетерів. 
                    Адміністративний центр Житомирської області та Житомирського району, 
                    центр Житомирської міської об'єднаної територіальної громади.<br /> 
                    Населення міста — 261,6 тис. осіб (01.01.2022), територія — 6500 га. 
                    Місто поділяється на Богунський та Корольовський райони.
                </p>
            </div>
        )
    } 
}

export default Content;