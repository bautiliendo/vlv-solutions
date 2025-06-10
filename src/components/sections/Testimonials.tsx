import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export const Testimonials = () => {
  const testimonials = [
            {
            name: "Gabriela Ludueña",
            quote: "Desde el primer momento que tuve contacto con Bautista me encantó su dedicación, esmero y profesionalismo. Comprometido de lleno con el proyecto, Bautista es el socio ideal.",
            title: "Emprendedora negocio Amanecer By Bagues",
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
    <div className="bg-white dark:bg-neutral-950 my-40 max-w-4xl mx-auto">
      <InfiniteMovingCards items={items} />
    </div>
  );
};  