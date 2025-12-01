import * as React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const ContactInfo = () => {
    // Schema Markup for LocalBusiness
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "La Parrilla de la Guayaca Loja",
        "image": "https://laparrilladelaguayaca.com/logo.jpg", // Placeholder
        "@id": "https://laparrilladelaguayaca.com",
        "url": "https://laparrilladelaguayaca.com",
        "telephone": "+593987562799",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sector del Valle, 24 de Mayo",
            "addressLocality": "Loja",
            "addressRegion": "Loja",
            "postalCode": "110101",
            "addressCountry": "EC"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -3.99313, // Approx for Loja El Valle
            "longitude": -79.20422
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "08:00",
                "closes": "22:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "08:00",
                "closes": "20:00"
            }
        ],
        "servesCuisine": ["Parrilla", "Cafetería", "Ecuatoriana"],
        "priceRange": "$$"
    };

    return (
        <section
            className="py-20 px-4"
            style={{ backgroundColor: '#EDEAE0' }}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto max-w-7xl">
                {/* Main Title */}
                <h1
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 leading-tight"
                    style={{ color: '#1A1A1A' }}
                >
                    Contáctanos: Ubicación Oficial y Pedidos de La Parrilla de la Guayaca Loja
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                    {/* Column 1: NAP Info */}
                    <div className="space-y-10">
                        {/* Nuestra Esencia Module */}
                        <div className="border-l-4 border-[#F49D00] pl-6 py-2 mb-8">
                            <h2
                                className="text-2xl font-bold mb-4"
                                style={{ color: '#F49D00' }}
                            >
                                El Espíritu Guayaca, en el Corazón de Loja
                            </h2>
                            <p className="text-lg leading-relaxed font-medium" style={{ color: '#1A1A1A' }}>
                                Somos el único local de La Parrilla de la Guayaca en Loja, trayendo a tu mesa la promesa del sabor inconfundible al carbón. Más que un restaurante, somos tu lugar de encuentro. Aquí encontrarás la excelencia de nuestros cortes de carne y la calidez de nuestra Cafetería. ¡Estamos listos para atenderte desde el desayuno hasta la cena!
                            </p>
                        </div>

                        <div>
                            <h2
                                className="text-xl font-bold mb-4"
                                style={{ color: '#1A1A1A' }}
                            >
                                ¡Hablemos de Sabor!
                            </h2>
                            <p className="text-base mb-6" style={{ color: '#4A4A4A' }}>
                                Estamos listos para atenderte. Visítanos, haz tu pedido o envíanos un mensaje para cualquier consulta.
                            </p>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div
                                className="p-3 rounded-full flex-shrink-0"
                                style={{ backgroundColor: 'rgba(244, 157, 0, 0.1)' }}
                            >
                                <MapPin className="w-6 h-6" style={{ color: '#F49D00' }} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1" style={{ color: '#1A1A1A' }}>Ubicación</h3>
                                <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
                                    Sector del Valle, 24 de Mayo, Loja, Ecuador.
                                    <br />
                                    <span className="text-sm opacity-80 italic">
                                        (Referencia: Frente al Parque Central / Junto al Banco del Austro)
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start gap-4">
                            <div
                                className="p-3 rounded-full flex-shrink-0"
                                style={{ backgroundColor: 'rgba(244, 157, 0, 0.1)' }}
                            >
                                <Clock className="w-6 h-6" style={{ color: '#F49D00' }} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1" style={{ color: '#1A1A1A' }}>Horarios de Atención</h3>
                                <div className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
                                    <p><span className="font-semibold">Lunes - Sábado:</span> 8:00 - 22:00</p>
                                    <p><span className="font-semibold">Domingo:</span> 8:00 - 20:00</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <a
                                href="https://wa.me/593987562799"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    backgroundColor: '#F49D00',
                                    color: '#1A1A1A',
                                    boxShadow: '0 4px 14px rgba(244, 157, 0, 0.3)'
                                }}
                            >
                                <Phone className="w-6 h-6" />
                                <span>Pedir por WhatsApp Ahora</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>

                {/* Map Section - Full Width */}
                <div className="w-full">
                    <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#1A1A1A' }}>
                        Encuéntranos en el Mapa
                    </h2>
                    <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.147326846176!2d-79.20645622502685!3d-3.993685695980644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb47f9c7c6d6a7%3A0x123456789abcdef!2sSector%20El%20Valle%2C%20Loja!5e0!3m2!1ses!2sec!4v1701450000000!5m2!1ses!2sec"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Ubicación La Parrilla de la Guayaca"
                            className="absolute inset-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
