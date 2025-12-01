import * as React from 'react';
import { useState } from 'react';
import { Flame, Coffee, Star, Sparkles } from 'lucide-react';

export const QuienesSomos = () => {
    const [activeTab, setActiveTab] = useState<'raices' | 'ventaja'>('raices');

    return (
        <section
            className="relative py-24 px-4 overflow-hidden"
            style={{ backgroundColor: '#EDEAE0' }}
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl opacity-30" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header with animated underline */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Sparkles className="w-6 h-6" style={{ color: '#F49D00' }} />
                        <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#F49D00' }}>
                            Nuestra Historia
                        </span>
                        <Sparkles className="w-6 h-6" style={{ color: '#F49D00' }} />
                    </div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                        style={{ color: '#1A1A1A' }}
                    >
                        El Espíritu{' '}
                        <span
                            className="relative inline-block"
                            style={{ color: '#F49D00' }}
                        >
                            Guayaca
                            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                                <path d="M0 4C50 1 100 1 200 4" stroke="#F49D00" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                        <br />
                        Adaptado al Sabor de{' '}
                        <span style={{ color: '#F49D00' }}>Loja</span>
                    </h2>
                </div>

                {/* Mobile: Tab Navigation */}
                <div className="lg:hidden mb-8">
                    <div className="flex gap-2 p-2 rounded-xl bg-white shadow-lg">
                        <button
                            onClick={() => setActiveTab('raices')}
                            className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-300 ${activeTab === 'raices'
                                    ? 'shadow-md'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            style={{
                                backgroundColor: activeTab === 'raices' ? '#F49D00' : 'transparent',
                                color: activeTab === 'raices' ? '#FFFFFF' : '#4A4A4A'
                            }}
                        >
                            Raíces Costeñas
                        </button>
                        <button
                            onClick={() => setActiveTab('ventaja')}
                            className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-300 ${activeTab === 'ventaja'
                                    ? 'shadow-md'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            style={{
                                backgroundColor: activeTab === 'ventaja' ? '#F49D00' : 'transparent',
                                color: activeTab === 'ventaja' ? '#FFFFFF' : '#4A4A4A'
                            }}
                        >
                            Único en Loja
                        </button>
                    </div>
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12">
                    <RaicesCard />
                    <VentajaCard />
                </div>

                {/* Mobile: Tab Content */}
                <div className="lg:hidden mb-12">
                    {activeTab === 'raices' && <RaicesCard />}
                    {activeTab === 'ventaja' && <VentajaCard />}
                </div>

                {/* Bottom Feature Bar */}
                <div
                    className="flex flex-wrap justify-center gap-6 md:gap-12 p-6 rounded-2xl shadow-lg"
                    style={{
                        background: 'linear-gradient(90deg, rgba(26, 26, 26, 0.95) 0%, rgba(244, 157, 0, 0.95) 100%)'
                    }}
                >
                    {[
                        { label: 'Parrilla al Carbón', icon: '🔥' },
                        { label: 'Cafetería Premium', icon: '☕' },
                        { label: 'Ambiente Lojano', icon: '🏔️' },
                        { label: 'Sabor Único', icon: '⭐' },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 group cursor-pointer">
                            <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                                {item.icon}
                            </span>
                            <span className="text-white font-semibold text-sm md:text-base">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Extracted Card Components
const RaicesCard = () => (
    <div
        className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fff5eb 100%)',
            border: '2px solid rgba(244, 157, 0, 0.1)'
        }}
    >
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />

        <div className="flex items-start gap-4 mb-6">
            <div
                className="p-4 rounded-xl shadow-md"
                style={{ backgroundColor: '#F49D00' }}
            >
                <Flame className="w-8 h-8 text-white" />
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                    Raíces Costeñas
                </h3>
                <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#F49D00' }} />
                    ))}
                </div>
            </div>
        </div>

        <div className="space-y-4 text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
            <p>
                La Parrilla de la Guayaca Loja es la casa donde la{' '}
                <span className="font-bold px-2 py-1 rounded" style={{
                    backgroundColor: 'rgba(244, 157, 0, 0.15)',
                    color: '#F49D00'
                }}>
                    Energía Costeña
                </span>{' '}
                se encuentra con la tradición lojana.
            </p>

            <p>
                Somos la única sucursal estrictamente en Loja, trayendo la promesa de un{' '}
                <span className="font-bold px-2 py-1 rounded" style={{
                    backgroundColor: 'rgba(244, 157, 0, 0.15)',
                    color: '#F49D00'
                }}>
                    sabor inconfundible al carbón
                </span>{' '}
                y una hospitalidad generosa.
            </p>

            <p className="text-lg font-medium italic">
                Nuestro viaje es llevar el sabor de la Parrilla y fusionarlo exitosamente con la cultura lojana de la Cafetería.
            </p>
        </div>
    </div>
);

const VentajaCard = () => (
    <div
        className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2d2d2d 100%)',
        }}
    >
        <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"
            style={{ background: 'radial-gradient(circle, #F49D00 0%, transparent 70%)' }}
        />

        <div className="flex items-start gap-4 mb-6">
            <div
                className="p-4 rounded-xl shadow-md bg-white"
            >
                <Coffee className="w-8 h-8" style={{ color: '#F49D00' }} />
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                    La Ventaja Dual
                </h3>
                <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: '#F49D00', color: '#FFFFFF' }}
                >
                    ÚNICO EN LOJA
                </div>
            </div>
        </div>

        <div className="space-y-4 text-base leading-relaxed text-white">
            <p>
                Nuestra Ventaja:{' '}
                <span className="font-bold text-xl" style={{ color: '#F49D00' }}>
                    La Propuesta Dual
                </span>
                .
            </p>

            <p>
                Mientras la competencia se enfoca solo en la cena formal, nosotros hemos fusionado la excelencia en{' '}
                <span className="font-bold px-2 py-1 rounded bg-white" style={{ color: '#F49D00' }}>
                    Parrilla al Carbón
                </span>{' '}
                (con cortes como Costilla y Chuleta) con un{' '}
                <span className="font-bold px-2 py-1 rounded bg-white" style={{ color: '#F49D00' }}>
                    Delicioso Servicio de Cafetería
                </span>{' '}
                (postres, café de altura).
            </p>

            <div
                className="p-4 rounded-xl mt-6"
                style={{ backgroundColor: 'rgba(244, 157, 0, 0.1)', border: '1px solid rgba(244, 157, 0, 0.3)' }}
            >
                <p className="text-lg font-semibold" style={{ color: '#F49D00' }}>
                    💫 Esto nos permite expandir el sabor cubriendo tu mañana, tarde y noche en el Sector del Valle.
                </p>
            </div>
        </div>
    </div>
);
