import { useState } from 'react'
import { ThemeProvider } from './ThemeContext'
import { Header } from './Components/Header'
import { Seccion1 } from './Components/Seccion1'
import { FormCrear } from './Components/FormCrear'
import { Footer } from './Components/Footer'

function App() {


  return (
    <>
    <ThemeProvider>
      <Header/>
      <Seccion1/>
      <FormCrear/>
      <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App
