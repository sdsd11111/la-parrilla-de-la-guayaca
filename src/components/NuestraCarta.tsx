import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, UtensilsCrossed, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubItem {
    label: string;
    href: string;
}

interface MenuCard {
    title: string;
    description: string;
    ctaText: string;
    imageUrl: string;
    subItems: SubItem[];
}

const menuCards: MenuCard[] = [
    {
        title: 'Alitas y Sabores',
        description: 'Prueba nuestros combos en tres tamaños: Personal, Ideal, y Familiar. Elige tu salsa favorita entre BBQ, MARACUYÁ, PARMESANA o HONEY MUSTARD.',
        ctaText: 'Ver Combos de Alitas',
        imageUrl: '/images/menu/alitas.jpg',
        subItems: [
            { label: 'Personal', href: '/alitas/personal' },
            { label: 'Ideal', href: '/alitas/ideal' },
            { label: 'Familiar', href: '/alitas/familiar' },
        ],
    },
    {
        title: 'Platos a la Carta (Asados)',
        description: 'Nuestros platos fuertes de Res y Pollo. Disfruta del Arroz con Menestra y Chuletón ($7,00) o nuestra Picaña (Res) ($10,00). También ofrecemos el tradicional Caldo de Bola ($5,00).',
        ctaText: 'Ver Platos Fuertes',
        imageUrl: '/images/menu/asados.jpg',
        subItems: [
            { label: 'Caldo de Bola', href: '/menu#caldo-bola' },
            { label: 'Costilla Familiar', href: '/menu#costilla-familiar' },
            { label: 'Arroz con Menestra y Chuletón', href: '/menu#arroz-chuletón' },
            { label: 'Arroz con Menestra y Pechuga', href: '/menu#arroz-pechuga' },
            { label: 'Arroz con Menestra y Costilla 1/2 Kilo', href: '/menu#arroz-costilla-media' },
            { label: 'Arroz con Menestra y Ubre', href: '/menu#arroz-ubre' },
            { label: 'Arroz con Menestra y Lomo (Res)', href: '/menu#arroz-lomo' },
            { label: 'Arroz con Menestra y Chorizo (Ternera)', href: '/menu#arroz-chorizo' },
            { label: 'Arroz con Menestra y Picaña (Res)', href: '/menu#arroz-picaña' },
            { label: 'Arroz con Menestra y Costilla Ahumada', href: '/menu#arroz-costilla-ahumada' },
            { label: 'Arroz con Menestra y Ribeye Steak (Res)', href: '/menu#arroz-ribeye' },
        ],
    },
    {
        title: 'Combos de Parrilla',
        description: 'Perfectos para compartir y celebrar. Descubre la Parrillada Familiar ($30,00), la Costilla de Kilo ($20,00) o la Parrillada Personal ($16,50). Todos incluyen arroz, menestra y patacón.',
        ctaText: 'Ver Combos Completos',
        imageUrl: '/images/menu/parrilla.jpg',
        subItems: [
            { label: 'Parrillada Familiar', href: '/menu#combo-familiar' },
            { label: 'Costilla de Kilo', href: '/menu#combo-costilla-kilo' },
            { label: 'Parrillada Personal', href: '/menu#combo-personal' },
        ],
    },
    {
        title: 'Cafetería: Desayuno y Merienda',
        description: 'La propuesta dual enfocada en el sabor local: Tigrillo ($5,50), Bolones (verde o madura) ($3,75), Mote Pillo ($4,00) y Llapingacho ($4,00). Ideales para empezar el día.',
        ctaText: 'Ir a la Cafetería',
        imageUrl: '/images/menu/cafeteria.jpg',
        subItems: [
            { label: 'Tigrillo', href: '/cafe#tigrillo' },
            { label: 'Tigrillo Mixto', href: '/cafe#tigrillo-mixto' },
            { label: 'Bolones (verde o madura)', href: '/cafe#bolones' },
            { label: 'Mixto (Bolón)', href: '/cafe#mixto-bolon' },
            { label: 'Empanadas', href: '/cafe#empanadas' },
            { label: 'Mote Pillo', href: '/cafe#mote-pillo' },
            { label: 'Mote con Chicharrón', href: '/cafe#mote-chicharron' },
            { label: 'Llapingacho', href: '/cafe#llapingacho' },
            { label: 'Prensados', href: '/cafe#prensados' },
        ],
    },
    {
        title: 'Porciones y Acompañamientos',
        description: 'Personaliza tu plato. Tenemos Papa o Choclo al Horno (bañada en salsa de queso), Menestra ($2,50), Chorizo ($3,00) o porciones extra de Lomo y Pechuga.',
        ctaText: 'Ver Porciones',
        imageUrl: '/images/menu/porciones.jpg',
        subItems: [
            { label: 'Ver Menú Completo de Porciones', href: '/menu#porciones' },
        ],
    },
    {
        title: 'Bebidas y Extras',
        description: 'Bebidas frías como Jugos Naturales, Horchata y Jamaica. También Bebidas Calientes (Café, Aromática) y Extras como Cervezas, Tinto de Verano y Copa de Vino.',
        ctaText: 'Ver Menú de Bebidas',
        imageUrl: '/images/menu/bebidas.jpg',
        subItems: [
            { label: 'Ver Menú Completo de Bebidas', href: '/menu/bebidas' },
        ],
    },
];

export const NuestraCarta = () => {
    const [expandedCards, setExpandedCards] = useState<number[]>([]);

    const toggleCard = (index: number) => {
        setExpandedCards(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section
            className="relative py-24 px-4 overflow-hidden"
            style={{ backgroundColor: '#1A1A1A' }}
        >
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#F49D00 1px, transparent 1px), linear-gradient(90deg, #F49D00 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #F49D00 0%, transparent 70%)' }} />
            <div className="absolute bottom-20 left-20 w-96 h96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #F49D00 0%, transparent 70%)' }} />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full border-2" style={{ borderColor: '#F49D00', backgroundColor: 'rgba(244, 157, 0, 0.1)' }}>
                        <UtensilsCrossed className="w-5 h-5" style={{ color: '#F49D00' }} />
                        <span className="font-bold text-sm tracking-wider uppercase" style={{ color: '#F49D00' }}>
                            Explora Nuestro Menú
                        </span>
                    </div>

                    {/* Title */}
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: '#F49D00' }}
                    >
                        Nuestra Carta
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
                        style={{ color: '#FFFFFF' }}
                    >
                        Sabores de la{' '}
                        <span className="font-bold" style={{ color: '#F49D00' }}>
                            Parrilla al Carbón
                        </span>{' '}
                        y la Tradición Cafetera de Loja
                    </p>

                    {/* Decorative line */}
                    <div className="flex justify-center mt-8">
                        <div className="w-24 h-1 rounded-full" style={{ backgroundColor: '#F49D00' }} />
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuCards.map((card, index) => {
                        const isExpanded = expandedCards.includes(index);

                        return (
                            <div
                                key={index}
                                className="group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(45, 45, 45, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)',
                                    border: '1px solid rgba(244, 157, 0, 0.2)',
                                }}
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(244, 157, 0, 0.3), rgba(244, 157, 0, 0.1))'
                                    }}
                                />

                                {/* Card content */}
                                <div className="relative">
                                    {/* Image with gradient background */}
                                    <div className="mb-6">
                                        <div
                                            className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg"
                                            style={{ backgroundColor: '#F49D00' }}
                                        >
                                            <Image
                                                src={card.imageUrl}
                                                alt={card.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-2xl font-bold mb-4"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-sm leading-relaxed mb-6 min-h-24"
                                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                    >
                                        {card.description}
                                    </p>

                                    {/* Accordion Button */}
                                    <button
                                        onClick={() => toggleCard(index)}
                                        className="group/btn flex items-center justify-between gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg w-full"
                                        style={{
                                            backgroundColor: '#F49D00',
                                            color: '#1A1A1A',
                                        }}
                                    >
                                        <span>{card.ctaText}</span>
                                        <ChevronDown
                                            className={cn(
                                                "w-4 h-4 transition-transform duration-300",
                                                isExpanded && "rotate-180"
                                            )}
                                        />
                                    </button>

                                    {/* Expandable Sub-items */}
                                    {isExpanded && (
                                        <div
                                            className="mt-4 rounded-xl overflow-hidden"
                                            style={{
                                                background: 'rgba(0, 0, 0, 0.3)',
                                                border: '1px solid rgba(244, 157, 0, 0.2)'
                                            }}
                                        >
                                            {card.subItems.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={item.href}
                                                    className="block px-4 py-3 text-sm transition-colors border-b last:border-b-0"
                                                    style={{
                                                        color: '#FFFFFF',
                                                        borderColor: 'rgba(244, 157, 0, 0.1)'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = 'rgba(244, 157, 0, 0.1)';
                                                        e.currentTarget.style.color = '#F49D00';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = 'transparent';
                                                        e.currentTarget.style.color = '#FFFFFF';
                                                    }}
                                                >
                                                    • {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Card number badge */}
                                <div
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                                    style={{
                                        backgroundColor: 'rgba(244, 157, 0, 0.2)',
                                        color: '#F49D00',
                                        border: '1px solid rgba(244, 157, 0, 0.3)'
                                    }}
                                >
                                    {index + 1}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg mb-6" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        ¿No encuentras lo que buscas?
                    </p>
                    <Link
                        href="/menu"
                        className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #F49D00 0%, #ff8c00 100%)',
                            color: '#1A1A1A',
                            boxShadow: '0 10px 40px rgba(244, 157, 0, 0.3)',
                        }}
                    >
                        <span>Ver Menú Completo</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
