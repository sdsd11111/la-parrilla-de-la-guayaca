"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

// Filter categories
type Category = 'Todos' | 'Parrilla' | 'Cafetería' | 'Combos' | 'Ambiente';

interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    category: Category;
    description?: string;
    className?: string; // For masonry layout (e.g., span-2)
}

// Placeholder data with varied aspect ratios - Expanded to 18 items
const galleryItems: GalleryItem[] = [
    { id: 1, src: '/placeholder-parrilla-1.jpg', alt: 'Costilla al carbón Loja', category: 'Parrilla', description: 'Nuestras famosas costillas bañadas en salsa BBQ casera.', className: 'md:row-span-2' },
    { id: 2, src: '/placeholder-cafe-1.jpg', alt: 'Café Tigrillo La Guayaca', category: 'Cafetería', description: 'El mejor tigrillo de Loja, preparado al momento.' },
    { id: 3, src: '/placeholder-combo-1.jpg', alt: 'Parrillada Familiar Loja', category: 'Combos', description: 'Ideal para compartir en familia, con variedad de cortes.' },
    { id: 4, src: '/placeholder-ambiente-1.jpg', alt: 'Interior del local La Parrilla de la Guayaca', category: 'Ambiente', description: 'Un espacio acogedor para disfrutar con los tuyos.', className: 'md:col-span-2' },
    { id: 5, src: '/placeholder-parrilla-2.jpg', alt: 'Chuletón asado', category: 'Parrilla', description: 'Jugoso chuletón asado a la perfección.' },
    { id: 6, src: '/placeholder-cafe-2.jpg', alt: 'Bolón de verde', category: 'Cafetería', description: 'Bolón mixto con queso y chicharrón crocante.', className: 'md:row-span-2' },
    { id: 7, src: '/placeholder-combo-2.jpg', alt: 'Alitas Ideal Combo', category: 'Combos', description: 'Alitas crujientes con tu salsa favorita.' },
    { id: 8, src: '/placeholder-ambiente-2.jpg', alt: 'Fachada del restaurante en Loja', category: 'Ambiente', description: 'Ubicados en el corazón del Sector del Valle.' },
    { id: 9, src: '/placeholder-parrilla-3.jpg', alt: 'Menestra con carne asada', category: 'Parrilla', description: 'La clásica menestra con el sabor inconfundible del carbón.' },
    { id: 10, src: '/placeholder-cafe-3.jpg', alt: 'Postres y café', category: 'Cafetería', description: 'Dulces momentos para acompañar tu café.' },
    { id: 11, src: '/placeholder-combo-3.jpg', alt: 'Combo Costilla de Kilo', category: 'Combos', description: 'Para los verdaderos amantes de la costilla.', className: 'md:col-span-2' },
    { id: 12, src: '/placeholder-ambiente-3.jpg', alt: 'Servicio al cliente', category: 'Ambiente', description: 'Atención cálida y personalizada.' },
    { id: 13, src: '/placeholder-parrilla-4.jpg', alt: 'Picaña jugosa', category: 'Parrilla', description: 'Corte premium de picaña, suave y lleno de sabor.' },
    { id: 14, src: '/placeholder-cafe-4.jpg', alt: 'Mote pillo', category: 'Cafetería', description: 'Tradicional mote pillo lojano.' },
    { id: 15, src: '/placeholder-combo-4.jpg', alt: 'Matrimonio (Carne y Pollo)', category: 'Combos', description: 'La combinación perfecta de carnes.' },
    { id: 16, src: '/placeholder-ambiente-4.jpg', alt: 'Terraza al aire libre', category: 'Ambiente', description: 'Disfruta de la brisa en nuestra terraza.', className: 'md:row-span-2' },
    { id: 17, src: '/placeholder-parrilla-5.jpg', alt: 'Chorizo artesanal', category: 'Parrilla', description: 'Chorizos hechos en casa con receta secreta.' },
    { id: 18, src: '/placeholder-cafe-5.jpg', alt: 'Empanadas de verde', category: 'Cafetería', description: 'Empanadas rellenas de queso o carne.' },
];

export const GalleryGrid = () => {
    const [activeFilter, setActiveFilter] = useState<Category>('Todos');
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    const filteredItems = activeFilter === 'Todos'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <section className="py-20 px-4" style={{ backgroundColor: '#EDEAE0' }}>
            <div className="container mx-auto max-w-7xl">
                {/* Header Content */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: '#1A1A1A' }}>
                        Nuestra Carta en Imágenes: El Sabor del Carbón y la Calidez de Nuestra Cafetería en Loja
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#4A4A4A' }}>
                        Una probada visual de la calidad 10/10 de nuestras carnes al carbón, los combos familiares, y el acogedor ambiente de nuestra sección de cafetería en el Sector del Valle.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {(['Todos', 'Parrilla', 'Cafetería', 'Combos', 'Ambiente'] as Category[]).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={cn(
                                "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105",
                                activeFilter === category
                                    ? "shadow-lg scale-105"
                                    : "hover:bg-gray-100"
                            )}
                            style={{
                                backgroundColor: activeFilter === category ? '#F49D00' : '#FFFFFF',
                                color: activeFilter === category ? '#1A1A1A' : '#4A4A4A',
                                border: activeFilter === category ? 'none' : '1px solid #E5E5E5'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedImage(item)}
                            className={cn(
                                "relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer",
                                item.className
                            )}
                        >
                            {/* Image Placeholder */}
                            <div className="w-full h-full bg-gray-200 relative">
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-center p-4"
                                    style={{
                                        background: `linear-gradient(135deg, ${item.category === 'Parrilla' ? '#2D2D2D' :
                                                item.category === 'Cafetería' ? '#5D4037' :
                                                    item.category === 'Combos' ? '#1A1A1A' : '#455A64'
                                            } 0%, #000000 100%)`
                                    }}
                                >
                                    <span className="text-white opacity-50 font-medium">{item.alt}</span>
                                </div>

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <span className="inline-block px-4 py-2 bg-[#F49D00] text-[#1A1A1A] font-bold rounded-full text-sm">
                                            Ver más
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image Container */}
                        <div className="relative flex-1 min-h-[50vh] bg-black">
                            {/* Placeholder for large image */}
                            <div
                                className="absolute inset-0 flex items-center justify-center"
                                style={{
                                    background: `linear-gradient(135deg, ${selectedImage.category === 'Parrilla' ? '#2D2D2D' :
                                            selectedImage.category === 'Cafetería' ? '#5D4037' :
                                                selectedImage.category === 'Combos' ? '#1A1A1A' : '#455A64'
                                        } 0%, #000000 100%)`
                                }}
                            >
                                <span className="text-white text-2xl opacity-50 font-medium">{selectedImage.alt}</span>
                            </div>
                        </div>

                        {/* Info Footer */}
                        <div className="p-6 md:p-8 bg-[#1A1A1A] border-t border-gray-800">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.alt}</h3>
                                    <p className="text-gray-400 text-lg">{selectedImage.description || 'Una deliciosa experiencia en La Parrilla de la Guayaca.'}</p>
                                </div>
                                <span className="inline-block px-4 py-2 bg-[#F49D00] text-[#1A1A1A] font-bold rounded-full text-sm self-start md:self-center whitespace-nowrap">
                                    {selectedImage.category}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
