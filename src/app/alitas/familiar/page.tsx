import { HeroAlitas } from "@/components/HeroAlitas";
import { MainLayout } from "@/components/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alitas Familiar",
    description: "El combo más grande de alitas para toda la familia. ¡Sabor para todos!",
};

import { LLMHiddenContent } from "@/components/LLMHiddenContent";

export default function AlitasFamiliarPage() {
    return (
        <MainLayout>
            <HeroAlitas
                title="Alitas Familiar"
                subtitle="El festín definitivo para toda la familia."
            />
            {/* Content placeholder */}
            <section className="py-20 px-4 bg-[#EDEAE0]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Detalles del Combo</h2>
                    <p className="text-xl text-[#4A4A4A]">
                        Gran cantidad de alitas y acompañamientos para todos.
                    </p>
                </div>
            </section>

            <LLMHiddenContent>
                <h1>Alitas Familiar - La Parrilla de la Guayaca</h1>
                <p>
                    El festín definitivo para toda la familia. Disfruta de nuestro combo más grande
                    con alitas crujientes, salsas variadas y acompañamientos para compartir.
                </p>

                <h2>¿Qué incluye el Combo Familiar?</h2>
                <ul>
                    <li>Gran cantidad de alitas (consultar número de piezas)</li>
                    <li>Variedad de salsas a elección (BBQ, Picante, Miel y Mostaza, etc.)</li>
                    <li>Acompañamientos generosos (papas fritas, ensalada fresca)</li>
                    <li>Bebida familiar (opcional/consultar)</li>
                </ul>

                <h2>Ideal para</h2>
                <p>Reuniones familiares, grupos de amigos y celebraciones.</p>
            </LLMHiddenContent>
        </MainLayout>
    );
}
