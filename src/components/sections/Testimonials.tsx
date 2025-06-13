"use client";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "motion/react";

export const Testimonials = () => {
  const testimonials = [
            {
            name: "Gabriela Ludueña",
            quote: "Desde el primer momento que tuve contacto con Bautista me encantó su dedicación, esmero y profesionalismo. Comprometido de lleno con el proyecto, Bautista es el socio ideal.",
            title: "Emprendedora",
            },
            {
            name: "Gonzalo Comba",
            quote: "Trabajar con Bautista en la Imagen y Web de nuestra empresa fue excelente. Su puntualidad, profesionalismo, rapidez y dedicación a resultados fueron increíbles en todo el proyecto. Si buscas mejorar tu sitio web y elevar tu marca, Bautista te va a dar la mejor solución!!",
            title: "Socio Gte. Clusterbaf",
            },
            
  ];

  const items = testimonials.map((testimonial) => ({
    name: testimonial.name,
    quote: testimonial.quote,
    title: testimonial.title,
  }));

  return (
    <section id="testimonials" className=" bg-white dark:bg-neutral-950 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center justify-center items-center flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
            Lo que dicen nuestros clientes
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Descubre las experiencias reales de quienes confiaron en nosotros para llevar sus proyectos al siguiente nivel.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <InfiniteMovingCards items={items} />
        </div>
      </div>
    </section>
  );
};  