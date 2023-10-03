import './Footer.css'
import { AiFillStar,AiFillGithub,AiFillInstagram,AiOutlineCrown, AiOutlineLinkedin, AiOutlineWhatsApp, AiFillMail, AiOutlineHome } from 'react-icons/ai';
import { useTheme } from "../../ThemeContext"

const numeroDeCelular = '+8099961541';
const mensajePredeterminado = 'Hola, te escribo porque vi tu E-commerce 1.0, puedes enviarme tu CV?' 

export const Footer = () =>{
    const { darkMode } = useTheme();

    const enlaceWs = `https://api.whatsapp.com/send?phone=${numeroDeCelular}&text=${encodeURIComponent(mensajePredeterminado)}`;
    const direccionCorreo = 'bonifaciowascar@gmail.com'

    return(
        <>
            <footer className={`footer ${darkMode ? 'footerOscuro' : 'footer'}`}>

                <div className="container__creador">
                    <h2 className={`creadorTT ${darkMode ? 'creadorTToscuro' : 'creadorTT'}`}><AiOutlineCrown className={`icon-creador ${darkMode ? 'icon-creadorOscuro' : 'icon-creador'}`} size={30}/><strong>Wascar Bonifacio:</strong> Programador Front-End (Junior).</h2>
                    
                </div>

                <div className="container__links">
                    <span className='spann'> <hr className='hrr'/> </span>
                    <a href="https://github.com/wascarbonifacio" target='blank' className="github">
                        <AiFillGithub size={40} className={`icon ${darkMode ? 'iconOscuro' : 'icon'}`}/>
                    </a>
                    <a href="https://www.linkedin.com/in/wascar-bonifacio-fe/" target='blank' className="linkedin">
                        <AiOutlineLinkedin size={40} className='icon' color='#0077B5'/>
                    </a>
                    <a href="https://www.instagram.com/wascar.bonifacio/" target='blank' className="ig">
                        <AiFillInstagram size={40} className='icon' color='#C13584'/>
                    </a>
                    <a href={enlaceWs} target="_blank" rel="noopener noreferrer" className='ws'>
                        <AiOutlineWhatsApp size={40} className='icon' color='green'/>
                    </a>
                    <a href={`mailto:${direccionCorreo}`} className='mail'>
                        <AiFillMail size={40} className='icon' color='#0077B5'/>
                    </a>
                    <a href="#" className="home">
                        <AiOutlineHome size={40} className={`icon ${darkMode ? 'iconOscuro' : 'icon'}`}/>
                    </a>
                    <span className='spann'> <hr className='hrr'/> </span>
                </div>

            </footer>
        </>
    )
}