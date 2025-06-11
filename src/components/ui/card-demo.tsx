"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CardDemo() {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Background Overlays
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            This card is for some special elements, like displaying background
            gifs on hover only.
          </p>
        </div>
      </div>
    </div>
  );
}

export function CardDemo2({ item }: { item: { title: string, description: string, imageUrl?: string, url?: string } }) {
  const bgImage = item.imageUrl || 'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80';

  return (
    <div className="max-w-sm w-full group/card h-full">
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full flex flex-col">
        {/* Image Container - Adjusted for laptop mockup */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
          <Image
            src={bgImage}
            alt={item.title}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover/card:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-bold text-xl text-neutral-900 dark:text-white mb-3 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {item.description}
          </p>

          {/* Button */}
          {item.url !== "#" ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200 mt-auto  mx-auto"
            >
              Ir al sitio
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export function ServiceCard({ item }: { item: { title: string, description: string } }) {
  // Define specific details for each service type
  const getServiceDetails = (title: string) => {
    switch (title) {
      case "Landing Page":
        return {
          objective: "Generar conversiones y captar leads",
          idealFor: "Campañas publicitarias y lanzamientos",
          structure: "Una página con llamada a la acción",
          developmentSpeed: "1-2 semanas"
        };
      case "E-commerce":
        return {
          objective: "Vender productos online",
          idealFor: "Negocios con productos físicos/digitales",
          structure: "Catálogo, carrito y sistema de pagos",
          developmentSpeed: "3-4 semanas"
        };
      case "Sitio Web":
        return {
          objective: "Presentar empresa y servicios",
          idealFor: "Empresas e imagen institucional",
          structure: "Múltiples páginas informativas",
          developmentSpeed: "2-3 semanas"
        };
      case "Sistema a medida":
        return {
          objective: "Solucionar necesidades específicas",
          idealFor: "Empresas con procesos únicos",
          structure: "Funcionalidades personalizadas",
          developmentSpeed: "2-8 semanas"
        };
      default:
        return null;
    }
  };

  const details = getServiceDetails(item.title);

  return (
    <div className="group h-full">
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 h-[480px] flex flex-col transition-all duration-300 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700">
        {/* Title Section */}
        <div className="h-[100px] flex flex-col justify-start mb-4">
          <h3 className="font-bold text-xl text-neutral-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-2">
            {item.description}
          </p>
        </div>

        {/* Detailed Information */}
        {details && (
          <div className="flex-1 flex flex-col justify-between mb-4">
            <div className="text-xs mb-2 mt-4">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">Objetivo:</span>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">{details.objective}</p>
            </div>

            <div className="text-xs mb-2">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">Ideal para:</span>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">{details.idealFor}</p>
            </div>

            <div className="text-xs mb-2">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">Estructura:</span>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">{details.structure}</p>
            </div>

            <div className="text-xs">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">Tiempo:</span>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">{details.developmentSpeed}</p>
            </div>
          </div>
        )}

        {/* Button - Fixed at bottom */}
        <div className="h-[44px] flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 group-hover:scale-[1.02] w-full"
          >
            Consultar Cotización
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
