"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { motion } from "motion/react";


const content = [
  {
    title: "1. Llamada Inicial",
    description:
      "Comenzamos con una consulta personalizada donde analizamos tus necesidades específicas, objetivos de negocio y visión del proyecto. Durante esta fase, definimos el alcance, establecemos expectativas claras y creamos una propuesta detallada que se adapte perfectamente a tu presupuesto y cronograma.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <div className="text-center">
          <div className="font-semibold">Consulta Personalizada</div>
        </div>
      </div>
    ),
  },
  {
    title: "2. Desarrollo",
    description:
      "Realizamos el desarrollo de tu proyecto con código, lo que permite tener un control total sobre el proyecto y futuros cambios. Tecnologías como Next.js, Base de datos relacionales, etc.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center">
          <div className="font-semibold">Desarrollo de código</div>
          <div className="text-sm mt-2 opacity-80">Desarrollo de tu proyecto con código. Tecnologías como Next.js, Base de datos relacionales, etc.</div>
        </div>
      </div>
    ),
  },
  {
    title: "3. Pruebas y Verificación",
    description:
      "Realizamos pruebas exhaustivas de funcionalidad, rendimiento y seguridad. Te involucramos activamente en el proceso de revisión, recopilamos tu feedback detallado y realizamos todos los ajustes necesarios hasta que el producto final supere tus expectativas y esté listo para el lanzamiento.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <div className="text-center">
          <div className="font-semibold">Control de Calidad</div>
          <div className="text-sm mt-2 opacity-80">Pruebas exhaustivas</div>
        </div>
      </div>
    ),
  },
  {
    title: "4. Despliegue y Mantenimiento",
    description:
      "Gestionamos el lanzamiento completo de tu proyecto, configurando todos los aspectos técnicos necesarios para un despliegue exitoso. Además, ofrecemos soporte continuo, actualizaciones de seguridad, monitoreo del rendimiento y mantenimiento proactivo para garantizar que tu solución funcione de manera óptima a largo plazo.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <div className="text-center">
          <div className="font-semibold">Lanzamiento y Soporte</div>
          <div className="text-sm mt-2 opacity-80">Mantenimiento continuo</div>
        </div>
      </div>
    ),
  },
];
export function Process() {
  return (
    <section id="process" className="min-h-screen bg-white dark:bg-neutral-950 pt-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center justify-center items-center flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
            Nuestro Proceso
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Nuestro proceso de desarrollo es transparente y colaborativo, para que puedas estar al tanto de cada etapa y tomar decisiones informadas.
          </p>
        </motion.div>
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
