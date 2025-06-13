"use client";
import { motion } from "motion/react";
import { CardDemo2 } from "../ui/card-demo";
import { NavbarButton } from "@/components/ui/resizable-navbar";

export default function Proyects() {
  const projects = [
    {
      title: "E-commerce - Renovarte",
      description: "Desarrollo de una tienda online para Renovarte, una empresa de venta de electrodomesticos.",
      imageUrl: "/renov.png",
      url: "https://renovarte.com.ar"
    },
    {
      title: "Sitio web Corporativo - Clusterbaf",
      description: "Diseño y desarrollo de un sitio web corporativo para la empresa Clusterbaf.",
      imageUrl: "/cluster.png",
      url: "https://clusterbaf.com"
    },
    // {
    //   title: "Landing Page - Amanecer by Bagues",
    //   description: "Diseño y desarrollo de una landing page para la marca Amanecer by Bagues, una marca de ropa y accesorios.",
    //   imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    // },
    {
      title: "Sistema de gestión de historia clínica",
      description: "Diseño y desarrollo de un sistema de gestión de historia clínica de pacientes para un dentista.",
      imageUrl: "/sist.png",
      url: "#" // Sistema privado, sin URL pública
    }
  ];

  return (
    <section id="proyects" className="min-h-screen bg-white dark:bg-neutral-950 pt-26">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center justify-center items-center flex flex-col">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
                    Nuestros Proyectos Destacados
                </h1>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    Aquí puedes ver una selección de nuestros trabajos más recientes. Cada proyecto es una historia de éxito que hemos construido junto a nuestros clientes.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                {projects.map((project, index) => (
                    <CardDemo2 key={index} item={project} />
                ))}
            </div>
             <div className="mt-16">
              <NavbarButton 
                className="text-lg px-8 py-3 mb-4"
                href="#contact"
              >
                ¿Tenes un proyecto en mente?
              </NavbarButton>
            </div>
        </div>
    </section>
  );
}