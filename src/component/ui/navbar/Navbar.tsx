import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <Link href='/'>
                 <Image src="/mario-logo.webp" alt='logo' width={18} height={32} />      
            </Link>  
        </div>
        <ul>
            <li>
                <Link href="/contacto">Contacto</Link>
            </li>
            <li>
                <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
                <Link href="/carrito">Carrito</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar