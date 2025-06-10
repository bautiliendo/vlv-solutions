'use client'
import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


export default function Footer() {

  const handleWhatsapp = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const mensaje = "Hola! Me contacto desde su página web para realizar una consulta"
    const numeroTel = '543512431491';
    const whatsappLink = `https://wa.me/${numeroTel}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappLink, '_blank')
  }

  return (
    <footer className="border-t ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-12 text-center md:text-left">

        {/* Columna 1: Logo + Descripción */}
        <div className="md:w-1/4 mx-auto md:mx-0">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
            VLV Solutions
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Desarrollo de sistemas y sitios web adaptados a tu negocio.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="md:w-1/4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="">Inicio</Link></li>
            <li><Link href="#" className="">Proyectos</Link></li>
            <li><Link href="#" className="">Nosotros</Link></li>
            <li><Link href="#" className="">Contacto</Link></li>
            <li><Link href="#" className="">Agendar una llamada</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="md:w-1/4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-3">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <button onClick={handleWhatsapp} className='hover:text-green-600 underline'>+543512431491</button>
          </ul>
        </div>

        {/* Columna 4: Redes sociales */}
        <div className="md:w-1/4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-3">Seguinos</h3>
          <div className="flex justify-center md:justify-start gap-4 ">
            <a href='https://www.instagram.com/vlvsolutions/' target="_blank" rel="noopener noreferrer">
              <li className=' hover:text-blue-500 hover:underline list-none'> <Instagram size={20} /></li>
            </a>
            <a href='https://www.linkedin.com/in/vlvsolutions/' target="_blank" rel="noopener noreferrer">
              <li className=' hover:text-blue-500 hover:underline list-none'> <Linkedin size={20} /></li>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} VLV Solutions. Todos los derechos reservados.
      </div>
    </footer>
  )
}
