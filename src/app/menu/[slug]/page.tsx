import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { HeroAlitas } from "@/components/HeroAlitas"; // Reusing Hero component
import { MainLayout } from "@/components/MainLayout";

// Data mapping for menu items
const menuItemsData: Record<string, { title: string; description: string; category: string }> = {
    // Platos a la carta
    'caldo-bola': {
        title: 'Caldo de Bola',
        description: 'Delicioso caldo tradicional con bola de verde rellena de carne y maní.',
        category: 'Platos a la Carta'
    },
    'costilla-familiar': {
        title: 'Costilla Familiar',
        description: 'Costilla asada al carbón, acompañada de arroz blanco o moro y menestra.',
        category: 'Platos a la Carta'
    },
    'arroz-chuleton': {
        title: 'Arroz con Menestra y Chuletón',
        description: 'Jugoso chuletón de res asado, servido con arroz y menestra.',
        category: 'Platos a la Carta'
    },
    'arroz-pechuga': {
        title: 'Arroz con Menestra y Pechuga',
        description: 'Pechuga de pollo a la parrilla, saludable y sabrosa.',
        category: 'Platos a la Carta'
    },
    'arroz-costilla-media': {
        title: 'Arroz con Menestra y Costilla 1/2 Kilo',
        description: 'Media porción de costilla para un apetito moderado.',
        category: 'Platos a la Carta'
    },
    'arroz-ubre': {
        title: 'Arroz con Menestra y Ubre',
        description: 'Ubre asada al carbón, una especialidad de la casa.',
        category: 'Platos a la Carta'
    },
    'arroz-lomo': {
        title: 'Arroz con Menestra y Lomo',
        description: 'Lomo de res tierno y jugoso.',
        category: 'Platos a la Carta'
    },
    'arroz-chorizo': {
        title: 'Arroz con Menestra y Chorizo',
        description: 'Chorizo de ternera artesanal asado.',
        category: 'Platos a la Carta'
    },
    'arroz-picana': {
        title: 'Arroz con Menestra y Picaña',
        description: 'Corte premium de picaña con su borde de grasa característico.',
        category: 'Platos a la Carta'
    },
    'arroz-costilla-ahumada': {
        title: 'Arroz con Menestra y Costilla Ahumada',
        description: 'Costilla con un toque ahumado especial.',
        category: 'Platos a la Carta'
    },
    'arroz-ribeye': {
        title: 'Arroz con Menestra y Ribeye Steak',
        description: 'El rey de los cortes, con marmoleo perfecto.',
        category: 'Platos a la Carta'
    },

    // Combos
    'combo-familiar': {
        title: 'Parrillada Familiar',
        description: 'La mejor opción para compartir: carnes variadas, embutidos y guarniciones.',
        category: 'Combos'
    },
    'combo-costilla-kilo': {
        title: 'Costilla de Kilo',
        description: 'Un kilo de pura costilla saborosa para los amantes de la carne.',
        category: 'Combos'
    },
    'combo-personal': {
        title: 'Parrillada Personal',
        description: 'Una selección de nuestras mejores carnes para una persona.',
        category: 'Combos'
    },

    // Cafetería
    'tigrillo': {
        title: 'Tigrillo',
        description: 'Verde majado con queso y huevo, un clásico lojano.',
        category: 'Cafetería'
    },
    'tigrillo-mixto': {
        title: 'Tigrillo Mixto',
        description: 'Tigrillo con chicharrón crocante.',
        category: 'Cafetería'
    },
    'bolones': {
        title: 'Bolones',
        description: 'Bolones de verde o maduro, rellenos de queso o chicharrón.',
        category: 'Cafetería'
    },
    'mixto-bolon': {
        title: 'Mixto (Bolón)',
        description: 'La combinación perfecta de verde y maduro.',
        category: 'Cafetería'
    },
    'empanadas': {
        title: 'Empanadas',
        description: 'Empanadas de viento o de verde, fritas al momento.',
        category: 'Cafetería'
    },
    'mote-pillo': {
        title: 'Mote Pillo',
        description: 'Mote revuelto con huevo y cebolla.',
        category: 'Cafetería'
    },
    'mote-chicharron': {
        title: 'Mote con Chicharrón',
        description: 'Mote cocido acompañado de crujiente chicharrón.',
        category: 'Cafetería'
    },
    'llapingacho': {
        title: 'Llapingacho',
        description: 'Tortillas de papa con chorizo y huevo frito.',
        category: 'Cafetería'
    },
    'prensados': {
        title: 'Prensados',
        description: 'Sánduches prensados calientes.',
        category: 'Cafetería'
    },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const item = menuItemsData[slug];

    if (!item) {
        return {
            title: 'Plato no encontrado',
        };
    }

    return {
        title: item.title,
        description: item.description,
    };
}

export default async function MenuDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const item = menuItemsData[slug];

    // Fallback for unknown items
    if (!item) {
        return (
            <MainLayout>
                <main className="flex-1 flex flex-col items-center justify-center text-white min-h-[50vh]">
                    <h1 className="text-4xl font-bold mb-4">Plato no encontrado</h1>
                    <p>Lo sentimos, no pudimos encontrar el plato que buscas.</p>
                </main>
            </MainLayout>
        );
    }

    import { LLMHiddenContent } from "@/components/LLMHiddenContent";

    // ... (imports remain the same)

    // ... (rest of the file until the return statement)

    return (
        <MainLayout>
            {/* Hero Section - Reusing HeroAlitas for consistency */}
            <HeroAlitas
                title={item.title}
                subtitle={`Disfruta de nuestro delicioso ${item.title} en ${item.category}.`}
            />

            {/* Content Section */}
            <section className="py-20 px-4 bg-[#EDEAE0]">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">{item.title}</h2>
                        <p className="text-xl text-[#4A4A4A] leading-relaxed mb-8">
                            {item.description}
                        </p>
                        <button className="bg-[#F49D00] text-[#1A1A1A] font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform shadow-lg">
                            Pedir por WhatsApp
                        </button>
                    </div>
                </div>
            </section>

            <LLMHiddenContent>
                <h1>{item.title} - La Parrilla de la Guayaca</h1>
                <p>{item.description}</p>
                <p>
                    Disfruta de este delicioso plato de nuestra categoría <strong>{item.category}</strong>.
                    Preparado con los mejores ingredientes y el sabor único de nuestra cocina.
                </p>

                <h2>Detalles</h2>
                <ul>
                    <li><strong>Plato:</strong> {item.title}</li>
                    <li><strong>Categoría:</strong> {item.category}</li>
                    <li><strong>Disponibilidad:</strong> Disponible en nuestro local y a domicilio.</li>
                </ul>

                <h2>¿Cómo pedir?</h2>
                <p>
                    Haz tu pedido por WhatsApp o visítanos en el Sector del Valle, Loja.
                </p>
            </LLMHiddenContent>
        </MainLayout>
    );
}
