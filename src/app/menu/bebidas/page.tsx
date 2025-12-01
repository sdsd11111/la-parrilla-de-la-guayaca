import { HeroBebidas } from "@/components/HeroBebidas";
import { MainLayout } from "@/components/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bebidas",
    description: "Refresca tu comida con nuestra selección de bebidas, jugos naturales y cervezas.",
};

export default function BebidasPage() {
    return (
        <MainLayout>
            {/* Hero Section */}
            <HeroBebidas />

            {/* Content placeholder */}
            <section className="py-20 px-4 bg-[#EDEAE0]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Nuestra Selección</h2>
                    <p className="text-xl text-[#4A4A4A]">
                        Jugos naturales, gaseosas, cervezas y más.
                    </p>
                </div>
            </section>
        </MainLayout>
    );
}
