import { HeroAlitas } from "@/components/HeroAlitas";
import { MainLayout } from "@/components/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alitas Personal",
    description: "Combo de alitas personal, perfecto para uno. Elige tu salsa favorita.",
};

export default function AlitasPersonalPage() {
    return (
        <MainLayout>
            <HeroAlitas
                title="Alitas Personal"
                subtitle="El combo perfecto para disfrutar individualmente."
            />
            {/* Content placeholder */}
            <section className="py-20 px-4 bg-[#EDEAE0]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Detalles del Combo</h2>
                    <p className="text-xl text-[#4A4A4A]">
                        Incluye porción de alitas, papas fritas y bebida.
                    </p>
                </div>
            </section>
        </MainLayout>
    );
}
