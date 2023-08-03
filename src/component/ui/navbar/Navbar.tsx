import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <Image src="/mario-logo.webp" alt='logo' width={18} height={32
            } />
        </div>
        <ul>
            <li>
                <a href="/contacto">Contacto</a>
            </li>
            <li>
                <a href="/nosotros">Nosotros</a>
            </li>
            <li>
                <a href="/carrito">Carrito</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar