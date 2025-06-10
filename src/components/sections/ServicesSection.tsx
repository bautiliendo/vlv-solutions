"use client";
import { motion } from "motion/react";
import { NavbarButton } from "@/components/ui/resizable-navbar";
import { CardDemo2 } from "../ui/card-demo";

export function ServicesSection() {
  const services = [
    {
      title: "Landing Page",
      description: "Páginas de aterrizaje optimizadas para conversión que capturan leads y generan ventas efectivamente.",
    },
    {
      title: "E-commerce",
      description: "Tiendas online completas con sistemas de pago seguros y gestión de inventario integrada.",
    },
    {
      title: "Sitio Web",
      description: "Sitios web corporativos profesionales que reflejan la identidad de tu marca y atraen clientes.",
    },
    {
      title: "Sistema a medida",
      description: "Aplicaciones web a medida diseñadas específicamente para las necesidades de tu negocio.",
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col items-center justify-center text-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
              Soluciones Digitales para Potenciar tu Negocio
            </h1>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Ofrecemos servicios de Diseño y Desarrollo Web enfocados en potenciar los ingresos de nuestros clientes. 
              Creamos soluciones digitales que convierten visitantes en clientes, priorizando la calidad y resultados.
            </p>
            
            <div className="pt-4">
              <NavbarButton 
                className="text-lg px-8 py-3"
                href="#proyects"
              >
                Ver Proyectos
              </NavbarButton>
            </div>
          </motion.div>

        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <CardDemo2 key={index} item={service} />
          ))}
        </div>
      </div>
    </section>
  );
}