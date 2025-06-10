"use client";
import { motion } from "motion/react";
import { NavbarButton } from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar envío por email
    console.log('Datos del formulario:', formData);
    
    // Mostrar mensaje de confirmación temporal
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    
    // Limpiar formulario
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      mensaje: ""
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Unificado */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
            Contactanos
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            ¿Tenés un proyecto en mente? Nos encantaría conocer más sobre tu idea y ayudarte a hacerla realidad.
          </p>
          
          {/* Opciones de Contacto */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NavbarButton 
              href="https://calendly.com/bautistaliendo/30min"
              variant="primary"
              className="text-lg px-8 py-3"
              as="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Llamada Gratuita
            </NavbarButton>
            <span className="text-neutral-500 dark:text-neutral-400">o</span>
            <p className="text-neutral-600 dark:text-neutral-400">
              completa el formulario abajo
            </p>
          </div>
        </motion.div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Información del Negocio - Lado Izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                VLV Solutions
              </h2>
              {/* <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                Somos especialistas en desarrollo web y software personalizado. Nos enfocamos en crear 
                soluciones digitales que impulsen el crecimiento de tu negocio, combinando diseño moderno 
                con funcionalidad robusta.
              </p> */}
            </div>

            {/* Información de Contacto */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-[0_0_24px_rgba(255,_255,_255,_0.06),_0_1px_1px_rgba(255,_255,_255,_0.05),_0_0_0_1px_rgba(255,_255,_255,_0.04),_0_0_4px_rgba(255,_255,_255,_0.08),_0_16px_68px_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(0,_0,_0,_0.1)_inset]">
                  <MapPin className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    Ubicación
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Córdoba, Argentina
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-[0_0_24px_rgba(255,_255,_255,_0.06),_0_1px_1px_rgba(255,_255,_255,_0.05),_0_0_0_1px_rgba(255,_255,_255,_0.04),_0_0_4px_rgba(255,_255,_255,_0.08),_0_16px_68px_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(0,_0,_0,_0.1)_inset]">
                  <Phone className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    Teléfono
                  </h3>
                  <a 
                    href="https://wa.me/543512431491" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    +54 351 243 1491
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-[0_0_24px_rgba(255,_255,_255,_0.06),_0_1px_1px_rgba(255,_255,_255,_0.05),_0_0_0_1px_rgba(255,_255,_255,_0.04),_0_0_4px_rgba(255,_255,_255,_0.08),_0_16px_68px_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(0,_0,_0,_0.1)_inset]">
                  <Clock className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    Horario de Atención
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Lunes a Viernes: 9:00 - 17:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-[0_0_24px_rgba(255,_255,_255,_0.06),_0_1px_1px_rgba(255,_255,_255,_0.05),_0_0_0_1px_rgba(255,_255,_255,_0.04),_0_0_4px_rgba(255,_255,_255,_0.08),_0_16px_68px_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(0,_0,_0,_0.1)_inset]">
                  <Mail className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <a 
                    href="mailto:juanbautistaliendo1@gmail.com"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    juanbautistaliendo1@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto - Lado Derecho */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-neutral-900/50 rounded-2xl p-8 border border-gray-200 dark:border-neutral-800"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
              Completa el siguiente formulario
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              y nos pondremos en contacto contigo a la brevedad!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre y Apellido */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    required
                    value={formData.apellido}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Número de Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="+54 9 11 1234 5678"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Contanos sobre tu proyecto, qué necesitas y cualquier detalle que consideres importante..."
                />
              </div>

              {/* Botón de Envío */}
              <NavbarButton
                as="button"
                type="submit"
                variant="primary"
                className="w-full text-lg px-8 py-4"
              >
                Enviar Mensaje
              </NavbarButton>
            </form>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 text-center">
              Nos pondremos en contacto contigo dentro de las próximas 24 horas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};