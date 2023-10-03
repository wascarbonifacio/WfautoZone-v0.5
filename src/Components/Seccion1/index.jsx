import './index'
import './Seccion1.css'
import { useTheme } from "../../ThemeContext"

import { useState, useEffect } from 'react'
import { AiFillDelete } from "react-icons/ai";


export const Seccion1 = () =>{

    const seccion1 = "http://localhost:3000/posts";

    const [data, setData] = useState([]);
    const [productoAEliminar, setProductoAEliminar] = useState(null);

    const obtenerProducto = async () =>{
        
        try{
            const response = await fetch(seccion1);
            const results = await response.json();

            setData(results);
        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        obtenerProducto();
    },[]);

    const eliminarProducto = async (idProducto) => {
        // Mostrar una confirmación antes de eliminar
        const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    
        if (confirmacion) {
          try {
            await fetch(`${seccion1}/${idProducto}`, {
              method: 'DELETE',
            });
    
            // Actualizar el estado de los productos para reflejar la eliminación.
            const productosActualizados = data.filter((producto) => producto.id !== idProducto);
            setData(productosActualizados);
    
            // Limpiar el estado productoAEliminar.
            setProductoAEliminar(null);
          } catch (error) {
            console.error('Error al eliminar el producto:', error);
          }
        } else {
          // Si el usuario cancela la eliminación, no hacemos nada.
        }
      };

    const { darkMode } = useTheme();


    return(
        <>
            <div className={`titulo__seccion ${darkMode ? 'tituloOscuro__seccion' : 'titulo__seccion'}`}>
                <h1>Productos</h1>
            </div>

            <div className="seccion1">

                <section className={`container__cards ${darkMode ? 'containerOscuro__cards' : 'container__cards'}`}>

                    {data.map((item)=> (
                        <div className={`cards ${darkMode ? 'cards-oscuro' : 'cards'}`} key={item.id}>
                            <AiFillDelete key={item.id} onClick={()=> eliminarProducto(item.id)} className={`borrar ${darkMode ? 'borrarOscuro' : 'borrar'}`}/>
                            <h2 className={`titulo-card ${darkMode ? 'tituloOscuro-card' : 'titulo-card'}`} >{item.titulo}</h2>
                            <div className="container-img">
                                <img src={item.imgUrl} alt={item.titulo} className='img-card'/>
                            </div>
                            <p className={`precio-card ${darkMode ? 'precioOscuro-card' : 'precio-card'}`}>${item.precio}</p>
                            <p className={`descripsion-card ${darkMode ? 'descripsionOscuro-card' : 'descripsion-card'}`}>{item.descripcion}</p>
                            <button type='button' className={`btn ${darkMode ? 'btnOscuro' : 'btn'}`}>Comprar</button>
                        </div>                        
                    ))}

                </section>
            </div>
        </>
    );
};