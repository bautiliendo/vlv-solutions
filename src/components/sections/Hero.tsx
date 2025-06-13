"use client";

import ClientTypedComponent from "../ClientTypedComponent";
import { NavbarButton } from "../ui/resizable-navbar";

export function Hero() {
    return (
        <div className="min-h-screen px-4 lg:px-20 pt-28 md:pt-20 flex items-start md:items-center justify-start">
            <div className="">
                {/* Main Hero Content */}
                <div className="text-left mb-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black leading-tight mb-2">
                        Desarrollo Web y Software
                    </h1>
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-8 leading-tight">
                        <span className="inline-block mr-2 sm:mr-3 ">Adaptado a tu</span>
                        <span className="text-blue-600 font-medium inline-block min-h-[1.2em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            <ClientTypedComponent />
                        </span>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl leading-relaxed font-light mb-8">
                        Desde landing pages hasta sistemas de software personalizados,<br />
                        diseñamos soluciones para ayudar a que tu negocio crezca.
                    </p>
                    <NavbarButton
                        className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 mt-2"
                        href="https://calendly.com/bautistaliendo/30min"
                        as="a"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Agendar una llamada
                    </NavbarButton>
                </div>
            </div>
        </div>
    );
}
