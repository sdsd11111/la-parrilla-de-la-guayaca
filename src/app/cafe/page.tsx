import { HeroCafe } from "@/components/HeroCafe";
import { MainLayout } from "@/components/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cafetería",
    description: "Disfruta de nuestros desayunos y meriendas tradicionales: tigrillo, bolones, café lojano y más.",
};

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
        </MainLayout>
    );
}
