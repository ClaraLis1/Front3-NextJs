import Head from 'next/head'
import React ,{FC}from 'react'
import Navbar from '../ui/navbar/Navbar'

interface Props{
    children: React.ReactNode
}

const Layout :FC<Props> = ({children}) => {
  return (
    <>
    <Head>
        <title>Ecommerce App</title>
        <meta
					name="description"
					content="¡Encuentra tu colección de figuras Amiibo en nuestro eCommerce! Explora una amplia selección de personajes, como Mario, Zelda, Pokémon y muchos más. Conecta con tus personajes favoritos y desbloquea contenido especial en tus juegos. ¡Envío rápido y seguro garantizado!"
				/>
				<meta
					name="keywords"
					content="Figuras Amiibo, Colección Amiibo, Personajes de Videojuegos, Amiibo API, Mario, Zelda, Pokémon, Juguetes Interactivos, Desbloquear Contenido, Comprar Amiibo, Coleccionables de Juegos, Tienda de Amiibo."
				/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        {children}
      </main>
      <footer>Footer</footer>
      </>
  )
}

export default Layout