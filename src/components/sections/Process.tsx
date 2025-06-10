"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";


const content = [
  {
    title: "Llamada Inicial",
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
    title: "Desarrollo",
    description:
      "Nuestro equipo de desarrolladores expertos trabaja en la creación de tu solución utilizando las últimas tecnologías y mejores prácticas. Mantenemos comunicación constante contigo, proporcionando actualizaciones regulares del progreso y asegurándonos de que cada funcionalidad cumpla con tus especificaciones exactas.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center">
          <div className="font-semibold">Desarrollo Profesional</div>
          <div className="text-sm mt-2 opacity-80">Tecnologías modernas</div>
        </div>
      </div>
    ),
  },
  {
    title: "Pruebas y Verificación",
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
    title: "Despliegue y Mantenimiento",
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
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
