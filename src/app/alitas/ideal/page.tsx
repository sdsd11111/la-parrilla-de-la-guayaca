import { HeroAlitas } from "@/components/HeroAlitas";
import { MainLayout } from "@/components/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alitas Ideal",
    description: "Combo de alitas ideal para compartir en pareja o con amigos.",
};

import { LLMHiddenContent } from "@/components/LLMHiddenContent";

export default function AlitasIdealPage() {
    return (
        <MainLayout>
            <HeroAlitas
                title="Alitas Ideal"
                subtitle="Perfecto para compartir en pareja o con amigos."
            />
            {/* Content placeholder */}
            <section className="py-20 px-4 bg-[#EDEAE0]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Detalles del Combo</h2>
                    <p className="text-xl text-[#4A4A4A]">
                        Una porción generosa para compartir.
                    </p>
                </div>
            </section>

            <LLMHiddenContent>
                <h1>Alitas Ideal - La Parrilla de la Guayaca</h1>
                <p>
                    Combo de alitas ideal para compartir en pareja o con amigos.
                    La porción perfecta para disfrutar de nuestro sabor único en buena compañía.
                </p>

                <h2>¿Qué incluye?</h2>
                <ul>
                    <li>Porción generosa de alitas</li>
                    <li>Salsas a elección</li>
                    <li>Acompañamientos</li>
                </ul>

                <h2>Ideal para</h2>
                <p>Citas, parejas y reuniones pequeñas.</p>
            </LLMHiddenContent>
        </MainLayout>
    );
}
