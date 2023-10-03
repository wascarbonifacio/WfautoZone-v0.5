import "./Header.css"
import {AiOutlineSearch} from 'react-icons/ai'
import MaterialUISwitch from "../Switch"
import { useTheme } from "../../ThemeContext"
import { alertTitleClasses } from "@mui/material"
import { useState } from "react"
import { Seccion1 } from "../Seccion1"

export const Header = () => {
    const { darkMode } = useTheme();

    
    return(
        <>
            <div className={`header__container ${darkMode ? 'headerOscuro__container' : 'header__container'}`}>

                <div className={`tt-container ${darkMode ? 'ttOscuro-container' : 'tt-container'}`}>
                    <h1>Wf AutoZone</h1>
                </div>

                <form className="buscador-container" >
                    <input
                     type="text" className={`buscador ${darkMode ? 'buscadorOscuro' : 'buscador'}`} placeholder="Buscar..." />

                    <button type="submit" className="btn-submit">
                        <AiOutlineSearch size={25}/>
                    </button>
                </form>

                <div className="modoC-modoO">
                    <MaterialUISwitch/>
                </div>

            </div>
        </>
    )
}