import { HeroAlitas } from "@/components/HeroAlitas";
import { MainLayout } from "@/components/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alitas Familiar",
    description: "El combo más grande de alitas para toda la familia. ¡Sabor para todos!",
};

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
        </MainLayout>
    );
}
