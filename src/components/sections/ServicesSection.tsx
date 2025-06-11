"use client";
import { motion } from "motion/react";
import { ServiceCard } from "../ui/card-demo";

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

    <section id="services" className="min-h-screen bg-white dark:bg-neutral-950 pt-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center justify-center items-center flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
            Soluciones Digitales para Potenciar tu Negocio

          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Ofrecemos servicios de Diseño y Desarrollo Web enfocados en potenciar los ingresos de nuestros clientes.

          </p>
        </motion.div>


        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} item={service} />
          ))}
        </div>

      </div>
    </section >
  );
}