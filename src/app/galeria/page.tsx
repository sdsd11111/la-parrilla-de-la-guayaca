import { GalleryGrid } from "@/components/GalleryGrid";
import { HeroGallery } from "@/components/HeroGallery";
import { MainLayout } from "@/components/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galería",
    description: "Explora nuestra galería de imágenes y antoja tu paladar con nuestros deliciosos platos.",
};

export default function GalleryPage() {
    return (
        <MainLayout>
            <HeroGallery />
            <GalleryGrid />
        </MainLayout>
    );
}
