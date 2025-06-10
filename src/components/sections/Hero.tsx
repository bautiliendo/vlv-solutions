"use client";

import ClientTypedComponent from "../ClientTypedComponent";
import { NavbarButton } from "../ui/resizable-navbar";

export function Hero() {
    return (
        <div className="min-h-screen px-20 py-20 flex items-center justify-start">
            <div className="">
                {/* Main Hero Content */}
                <div className="text-left mb-20">
                    <h1 className="text-5xl lg:text-7xl font-light text-black leading-tight">
                        Desarrollo Web y Software
                    </h1>
                    <div className="text-5xl lg:text-7xl font-light text-black mb-8 leading-tight">
                        Adaptado a tu{" "}
                        <span className="text-blue-600 font-medium">
                            <ClientTypedComponent />
                        </span>
                    </div>
                    <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl leading-relaxed font-light">
                        Desde landing pages hasta sistemas de software personalizados,<br />
                        diseñamos soluciones para ayudar a que tu negocio crezca.
                    </p>
                    <NavbarButton
                        className="text-lg px-8 py-3 mt-10"
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
