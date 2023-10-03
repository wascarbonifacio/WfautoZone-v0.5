import './FormCrear.css'
import { useState } from 'react'
import { useTheme } from "../../ThemeContext"


export const FormCrear = () =>{
    const { darkMode } = useTheme();

    //url del fake api
    const url = "http://localhost:3000/posts";

    //datos optenidos desde los inputs
    const [data, setData] = useState({
        titulo: '',
        imgUrl: '',
        precio: '',
        descripcion: '',
        id: ''
    });

    //funcion para enviar los datos a la fake api
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if(response.ok){
                const data1 = await response.json();

                setTimeout(() => {
                    window.location.reload();
                }, 1000);

            } else{
                console.log("Error al enviar datos");
            }

        } catch(error){
            console.log("Error:", error);
        }
    }

    //funcion para cambiar el estado de (data) apartir de los inputs
    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.id]: e.target.value,
        });
    };

    //funcion para mostrar el formulario
    const [mostrar, setMostrar] = useState(false);

    const [textButtonn, setTextButton] = useState("Crear producto");

    const mostrarForm = () =>{
        setMostrar(!mostrar);
        setTextButton(mostrar ? "Crear producto" : "Ocultar formulario")
    }


    return(
        <>
            <div className="container">

                <div className={`container-btn ${darkMode ? 'containerOscuro-btn' : 'container-btn'}`}>
                    <button type="button" className='crear__producto' onClick={mostrarForm}>
                        {textButtonn}
                    </button>
                </div>
                
                {mostrar ?

                    <form className={`container__formulario ${darkMode ? 'container__formularioOscuro' : 'container__formulario'}`}
                    onSubmit={(e) => handleSubmit(e)}
                    >
                
                        <h2>Crear producto</h2>
                
                        <input type="text" id='titulo'
                        placeholder='Nombre del producto'
                        onChange={(e)=> handleChange(e)}
                        value={data.titulo}
                        className={`form-input ${darkMode ? 'form-inputOscuro' : 'form-input'}`}
                        />
                
                        <input type="text" id='imgUrl'
                        placeholder='URL de la imagen'
                        onChange={(e)=> handleChange(e)}
                        value={data.imgUrl}
                        className={`form-input ${darkMode ? 'form-inputOscuro' : 'form-input'}`}
                        />
                
                        <input type="text" id='precio'
                        placeholder='Precio del producto'
                        onChange={(e)=> handleChange(e)}
                        value={data.precio}
                        className={`form-input ${darkMode ? 'form-inputOscuro' : 'form-input'}`}
                        />
                
                        <input type="text" id='descripcion'
                        placeholder='Descripcion del producto'
                        onChange={(e)=> handleChange(e)}
                        value={data.descripcion}
                        className={`form-input ${darkMode ? 'form-inputOscuro' : 'form-input'}`}
                        />
                
                        {/* <input type="text" id='id'
                        placeholder='Id del producto'
                        onChange={(e)=> handleChange(e)}
                        value={data.id}
                        className='form-input'
                        /> */}
                
                        <button id='enviar'>Enviar</button>
                    </form> : null}

            </div>
        </>
    )
}