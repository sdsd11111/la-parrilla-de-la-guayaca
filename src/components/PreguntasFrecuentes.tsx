import * as React from 'react';
import { useState } from 'react';
import { ChevronDown, HelpCircle, MapPin, Coffee, Phone, CreditCard, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQ {
    question: string;
    answer: string;
    icon: React.ElementType;
}

const faqs: FAQ[] = [
    {
        question: '¿Dónde se encuentra exactamente "La Parrilla de la Guayaca" en Loja?',
        answer: 'Somos la sucursal oficial y única en Loja. Estamos ubicados en el Sector del Valle (24 de Mayo). Asegúrate de buscarnos como "La Parrilla de la Guayaca Loja" para evitar confusiones con otras franquicias.',
        icon: MapPin,
    },
    {
        question: '¿Solo ofrecen platos de parrilla para la cena?',
        answer: '¡Absolutamente no! Esa es nuestra Propuesta Dual. Además de nuestros cortes de carne al carbón, ofrecemos un delicioso servicio de Cafetería desde temprano con platos como Tigrillo, Bolones y café de altura, perfectos para desayunos y meriendas.',
        icon: Coffee,
    },
    {
        question: '¿Tienen servicio a domicilio o para llevar?',
        answer: 'Sí, ofrecemos servicio para llevar en el local. Para domicilio, puedes contactarnos directamente por WhatsApp al 0987562799 o encontrarnos en las principales plataformas de entrega como Rappi en la zona de Loja.',
        icon: Phone,
    },
    {
        question: '¿Cuál es el plato de carne que más recomiendan?',
        answer: 'Recomendamos probar nuestra Costilla 1/2 Kilo al Carbón o el famoso Arroz con Menestra y Chuletón ($7,00). Todos nuestros asados son 100% al carbón y vienen acompañados de nuestro inconfundible chimichurri de la casa.',
        icon: Award,
    },
    {
        question: '¿Cuáles son los métodos de pago que aceptan?',
        answer: 'Aceptamos pagos en efectivo, transferencias bancarias y todas las tarjetas de crédito y débito principales. Nuestro objetivo es hacer tu experiencia de pago lo más sencilla posible.',
        icon: CreditCard,
    },
];

export const PreguntasFrecuentes = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section
            className="relative py-24 px-4 overflow-hidden"
            style={{ backgroundColor: '#EDEAE0' }}
        >
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#F49D00' }} />
            <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#F49D00' }} />
            <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full" style={{ backgroundColor: '#F49D00', opacity: 0.3 }} />

            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full shadow-lg" style={{ backgroundColor: '#FFFFFF', border: '2px solid #F49D00' }}>
                        <HelpCircle className="w-5 h-5" style={{ color: '#F49D00' }} />
                        <span className="font-bold text-sm tracking-wider uppercase" style={{ color: '#1A1A1A' }}>
                            FAQ
                        </span>
                    </div>

                    {/* Title */}
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: '#1A1A1A' }}
                    >
                        Preguntas Frecuentes
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: '#1A1A1A' }}
                    >
                        Todo lo que Necesitas Saber{' '}
                        <span className="font-bold" style={{ color: '#F49D00' }}>
                            Antes de Visitarnos
                        </span>
                    </p>

                    {/* Decorative line */}
                    <div className="flex justify-center mt-8">
                        <div className="w-24 h-1 rounded-full" style={{ backgroundColor: '#F49D00' }} />
                    </div>
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const Icon = faq.icon;
                        const isExpanded = expandedIndex === index;

                        return (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    border: isExpanded ? '2px solid #F49D00' : '2px solid transparent',
                                }}
                            >
                                {/* Question button */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 transition-colors duration-300 hover:bg-gray-50"
                                >
                                    <div className="flex items-center gap-4 flex-1 text-left">
                                        {/* Icon */}
                                        <div
                                            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300"
                                            style={{
                                                backgroundColor: isExpanded ? '#F49D00' : 'rgba(244, 157, 0, 0.1)',
                                                transform: isExpanded ? 'scale(1.1)' : 'scale(1)',
                                            }}
                                        >
                                            <Icon
                                                className="w-6 h-6"
                                                style={{ color: isExpanded ? '#FFFFFF' : '#F49D00' }}
                                            />
                                        </div>

                                        {/* Question text */}
                                        <h3
                                            className="text-lg md:text-xl font-bold"
                                            style={{ color: '#1A1A1A' }}
                                        >
                                            {faq.question}
                                        </h3>
                                    </div>

                                    {/* Chevron icon */}
                                    <ChevronDown
                                        className={cn(
                                            "flex-shrink-0 w-6 h-6 transition-all duration-300",
                                            isExpanded && "rotate-180"
                                        )}
                                        style={{ color: '#F49D00' }}
                                    />
                                </button>

                                {/* Answer */}
                                {isExpanded && (
                                    <div
                                        className="px-6 md:px-8 pb-6 pt-2"
                                        style={{
                                            backgroundColor: 'rgba(244, 157, 0, 0.03)',
                                            borderTop: '1px solid rgba(244, 157, 0, 0.2)',
                                        }}
                                    >
                                        {/* Decorative line */}
                                        <div className="mb-4 ml-16">
                                            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#F49D00' }} />
                                        </div>

                                        {/* Answer text */}
                                        <p
                                            className="text-base md:text-lg leading-relaxed ml-16"
                                            style={{ color: '#1A1A1A' }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div
                        className="inline-block px-8 py-6 rounded-2xl shadow-xl"
                        style={{ backgroundColor: '#FFFFFF' }}
                    >
                        <p
                            className="text-lg mb-4"
                            style={{ color: '#1A1A1A' }}
                        >
                            ¿Tienes más preguntas?{' '}
                            <span className="font-bold" style={{ color: '#F49D00' }}>
                                ¡Contáctanos!
                            </span>
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/593987562799"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{
                                    backgroundColor: '#F49D00',
                                    color: '#1A1A1A',
                                }}
                            >
                                <Phone className="w-5 h-5" />
                                <span>WhatsApp: 0987562799</span>
                            </a>
                            <span style={{ color: '#1A1A1A' }}>o</span>
                            <a
                                href="tel:072588490"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-2"
                                style={{
                                    borderColor: '#F49D00',
                                    color: '#1A1A1A',
                                }}
                            >
                                <Phone className="w-5 h-5" style={{ color: '#F49D00' }} />
                                <span>072588490</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
