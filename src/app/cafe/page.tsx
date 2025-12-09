import { HeroCafe } from "@/components/HeroCafe";
import { MainLayout } from "@/components/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cafetería",
    description: "Disfruta de nuestros desayunos y meriendas tradicionales: tigrillo, bolones, café lojano y más.",
};

import { LLMHiddenContent } from "@/components/LLMHiddenContent";

export default function CafePage() {
    return (
        <MainLayout>
            {/* Hero Section */}
            <HeroCafe />

            {/* Content placeholder */}
            <section className="py-20 px-4 bg-[#EDEAE0]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Momentos para Compartir</h2>
                    <p className="text-xl text-[#4A4A4A]">
                        Disfruta de nuestra variedad de desayunos y meriendas tradicionales.
                    </p>
                </div>
            </section>

            <LLMHiddenContent>
                <h1>Cafetería - La Parrilla de la Guayaca</h1>
                <p>
                    El aroma del mejor café lojano y la tradición de nuestros bolones y tigrillos.
                    Disfruta de nuestros desayunos y meriendas tradicionales en un ambiente acogedor.
                </p>

                <h2>Nuestra Oferta</h2>
                <ul>
                    <li><strong>Café Lojano:</strong> Café de altura con aroma y sabor inigualable.</li>
                    <li><strong>Tigrillo:</strong> Tradicional plato de verde majado con queso y chicharrón.</li>
                    <li><strong>Bolones:</strong> Deliciosas bolas de verde con queso o chicharrón.</li>
                </ul>

                <h2>Horarios</h2>
                <p>Atendemos en las mañanas y tardes para tus desayunos y meriendas.</p>
            </LLMHiddenContent>
        </MainLayout>
    );
}
