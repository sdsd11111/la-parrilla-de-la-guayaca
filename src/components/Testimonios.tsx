import * as React from 'react';
import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
    name: string;
    location: string;
    quote: string;
    avatar: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: 'Ana M.',
        location: 'Loja Centro',
        quote: '¡Por fin una parrilla de verdad en Loja! La Costilla Familiar al carbón es un espectáculo. El sabor de la brasa se siente en cada bocado, y el chimichurri es el toque perfecto.',
        avatar: 'AM',
        rating: 5,
    },
    {
        name: 'Carlos G.',
        location: 'Sector El Valle',
        quote: 'Me encanta la propuesta dual. Un día vengo por una Picaña para cenar y otro día por un Tigrillo y un café para desayunar. Resuelven las 24 horas del sabor en el centro de Loja.',
        avatar: 'CG',
        rating: 5,
    },
    {
        name: 'Sofía P.',
        location: 'Visitante Frecuente',
        quote: 'La atención y la calidad de la carne es 10/10, tal como dicen. Es el mejor Restaurante Loja para comer carne asada. Siempre lo recomiendo, especialmente la Chuleta.',
        avatar: 'SP',
        rating: 5,
    },
];

export const Testimonios = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section
            className="relative py-24 px-4 overflow-hidden"
            style={{ backgroundColor: '#1A1A1A' }}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#F49D00' }} />
            <div className="absolute bottom-20 right-1/3 w-3 h-3 rounded-full animate-pulse delay-150" style={{ backgroundColor: '#F49D00' }} />
            <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full animate-pulse delay-300" style={{ backgroundColor: '#F49D00' }} />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    background: 'radial-gradient(circle at 20% 30%, rgba(244, 157, 0, 0.15) 0%, transparent 50%)'
                }} />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full border-2" style={{ borderColor: '#F49D00', backgroundColor: 'rgba(244, 157, 0, 0.1)' }}>
                        <Star className="w-5 h-5 fill-current" style={{ color: '#F49D00' }} />
                        <span className="font-bold text-sm tracking-wider uppercase" style={{ color: '#F49D00' }}>
                            Testimonios Reales
                        </span>
                        <Star className="w-5 h-5 fill-current" style={{ color: '#F49D00' }} />
                    </div>

                    {/* Title */}
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: '#F49D00' }}
                    >
                        Nuestros Clientes lo Confirman
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="text-xl md:text-2xl max-w-3xl mx-auto"
                        style={{ color: '#FFFFFF' }}
                    >
                        La Calidad{' '}
                        <span
                            className="font-bold px-3 py-1 rounded-lg"
                            style={{
                                backgroundColor: '#F49D00',
                                color: '#1A1A1A'
                            }}
                        >
                            "10 de 10"
                        </span>{' '}
                        de Loja
                    </p>

                    {/* Decorative line */}
                    <div className="flex justify-center mt-8">
                        <div className="w-24 h-1 rounded-full" style={{ backgroundColor: '#F49D00' }} />
                    </div>
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>

                {/* Mobile: Slider Layout */}
                <div className="md:hidden relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={goToPrev}
                            className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                            style={{ '--tw-ring-color': '#F49D00' } as React.CSSProperties}
                            aria-label="Testimonio anterior"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={goToNext}
                            className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                            style={{ '--tw-ring-color': '#F49D00' } as React.CSSProperties}
                            aria-label="Siguiente testimonio"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 scale-110' : 'bg-white/50 hover:bg-white/70'
                                    }`}
                                style={{
                                    backgroundColor: index === currentIndex ? '#F49D00' : undefined
                                }}
                                aria-label={`Ir al testimonio ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom stats/social proof */}
                <div className="mt-16 pt-12 border-t" style={{ borderColor: 'rgba(244, 157, 0, 0.2)' }}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { number: '500+', label: 'Clientes Satisfechos' },
                            { number: '4.9/5', label: 'Calificación Promedio' },
                            { number: '100%', label: 'Carne al Carbón' },
                        ].map((stat, index) => (
                            <div key={index} className="group cursor-default">
                                <div
                                    className="text-4xl md:text-5xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110"
                                    style={{ color: '#F49D00' }}
                                >
                                    {stat.number}
                                </div>
                                <div
                                    className="text-sm md:text-base font-semibold uppercase tracking-wide"
                                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Extracted TestimonialCard component for reusability
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div
        className="group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
        style={{
            backgroundColor: '#EDEAE0',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        }}
    >
        {/* Glow effect on hover */}
        <div
            className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500"
            style={{ backgroundColor: '#F49D00' }}
        />

        {/* Card content */}
        <div className="relative">
            {/* Quote icon */}
            <div className="mb-4">
                <Quote
                    className="w-12 h-12"
                    style={{ color: '#F49D00' }}
                    strokeWidth={2.5}
                />
            </div>

            {/* Testimonial text */}
            <blockquote
                className="text-base leading-relaxed mb-6 italic"
                style={{ color: '#1A1A1A' }}
            >
                "{testimonial.quote}"
            </blockquote>

            {/* Rating stars */}
            <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                        key={i}
                        className="w-5 h-5 fill-current"
                        style={{ color: '#F49D00' }}
                    />
                ))}
            </div>

            {/* Author info */}
            <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                    className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                    style={{
                        background: 'linear-gradient(135deg, #F49D00 0%, #ff8c00 100%)',
                        color: '#FFFFFF',
                    }}
                >
                    {testimonial.avatar}
                </div>

                {/* Name and location */}
                <div>
                    <h3
                        className="font-bold text-lg mb-1"
                        style={{ color: '#1A1A1A' }}
                    >
                        {testimonial.name}
                    </h3>
                    <p
                        className="text-sm"
                        style={{ color: 'rgba(26, 26, 26, 0.7)' }}
                    >
                        📍 {testimonial.location}
                    </p>
                </div>
            </div>
        </div>

        {/* Decorative corner element */}
        <div
            className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-10"
            style={{
                background: 'radial-gradient(circle, #F49D00 0%, transparent 70%)'
            }}
        />
    </div>
);
