import * as React from 'react';
import Link from 'next/link';
import { Play, Star, Quote, ArrowRight, Youtube } from 'lucide-react';

interface PruebaSocialVideoProps {
    videoId?: string;
}

export const PruebaSocialVideo = ({ videoId = 'dQw4w9WgXcQ' }: PruebaSocialVideoProps) => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    return (
        <section
            className="relative py-24 px-4 overflow-hidden"
            style={{ backgroundColor: '#EDEAE0' }}
        >
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-4 rounded-full opacity-20" style={{ borderColor: '#F49D00' }} />
            <div className="absolute bottom-10 right-10 w-32 h-32 border-4 rounded-full opacity-10" style={{ borderColor: '#F49D00' }} />
            <div className="absolute top-1/2 right-20 w-2 h-2 rounded-full" style={{ backgroundColor: '#F49D00' }} />
            <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full" style={{ backgroundColor: '#F49D00' }} />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full shadow-lg bg-white border-2" style={{ borderColor: '#F49D00' }}>
                        <Quote className="w-5 h-5" style={{ color: '#F49D00' }} />
                        <span className="font-bold text-sm tracking-wider uppercase" style={{ color: '#1A1A1A' }}>
                            Testimonio Real
                        </span>
                        <Youtube className="w-5 h-5" style={{ color: '#F49D00' }} />
                    </div>

                    {/* Title */}
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: '#1A1A1A' }}
                    >
                        ¡Buenísimo Mi Gente!{' '}
                        <br className="hidden md:block" />
                        La Experiencia{' '}
                        <span
                            className="relative inline-block px-4 py-2 rounded-xl"
                            style={{
                                backgroundColor: '#F49D00',
                                color: '#FFFFFF'
                            }}
                        >
                            "10 de 10"
                        </span>{' '}
                        <br className="hidden md:block" />
                        que Enamora a Loja
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4"
                        style={{ color: '#1A1A1A' }}
                    >
                        No solo lo decimos nosotros. Escucha de primera mano por qué nuestra carne al carbón tiene una calidad descrita como{' '}
                        <span className="font-bold" style={{ color: '#F49D00' }}>
                            "10 de 10"
                        </span>
                        . Somos el sabor auténtico que ha conquistado el paladar lojano.
                    </p>

                    {/* Star Rating */}
                    <div className="flex justify-center gap-2 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-6 h-6 fill-current"
                                style={{ color: '#F49D00' }}
                            />
                        ))}
                    </div>
                </div>

                {/* Video Container */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div
                        className="relative group rounded-3xl overflow-hidden shadow-2xl"
                        style={{
                            background: 'linear-gradient(135deg, #1A1A1A 0%, #2d2d2d 100%)',
                            border: '4px solid',
                            borderColor: '#F49D00'
                        }}
                    >
                        {/* Glow effect */}
                        <div
                            className="absolute -inset-1 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                            style={{ background: 'linear-gradient(45deg, #F49D00, #ff8c00)' }}
                        />

                        {/* Video wrapper with aspect ratio */}
                        <div className="relative aspect-video bg-black">
                            {!isPlaying ? (
                                // Thumbnail with play button
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        className="group/play relative z-10"
                                        aria-label="Reproducir video"
                                    >
                                        <div
                                            className="absolute inset-0 rounded-full blur-2xl opacity-50 group-hover/play:opacity-75 transition-opacity"
                                            style={{ backgroundColor: '#F49D00' }}
                                        />
                                        <div
                                            className="relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all duration-300 group-hover/play:scale-110 shadow-2xl"
                                            style={{ backgroundColor: '#F49D00' }}
                                        >
                                            <Play className="w-12 h-12 md:w-16 md:h-16 text-white fill-current ml-2" />
                                        </div>
                                    </button>

                                    {/* Decorative elements */}
                                    <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black bg-opacity-50 backdrop-blur-sm">
                                        <span className="text-white text-sm font-semibold flex items-center gap-2">
                                            <Youtube className="w-4 h-4" />
                                            Video Testimonio
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                // YouTube iframe
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                    title="Testimonio de Cliente"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </div>
                    </div>

                    {/* Caption */}
                    <p className="text-center mt-6 text-sm italic" style={{ color: '#1A1A1A' }}>
                        ✨ Testimonio de cliente (Reseñas de YouTube) ✨
                    </p>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col items-center gap-4">
                        <p className="text-lg font-semibold" style={{ color: '#1A1A1A' }}>
                            ¿Listo para vivir la experiencia?
                        </p>

                        <Link
                            href="/menu"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{
                                backgroundColor: '#F49D00',
                                color: '#FFFFFF'
                            }}
                        >
                            {/* Glow effect */}
                            <div
                                className="absolute -inset-1 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity"
                                style={{ backgroundColor: '#F49D00' }}
                            />

                            <span className="relative">Ver el Menú Completo</span>
                            <ArrowRight className="w-6 h-6 relative group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {/* Social proof badges */}
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            {[
                                { icon: '🔥', text: 'Sabor Auténtico' },
                                { icon: '⭐', text: 'Calidad 10/10' },
                                { icon: '❤️', text: 'Favorito en Loja' },
                            ].map((badge, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md"
                                >
                                    <span className="text-xl">{badge.icon}</span>
                                    <span className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>
                                        {badge.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
