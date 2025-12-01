import { ContactInfo } from "@/components/ContactInfo";
import { HeroContact } from "@/components/HeroContact";
import { MainLayout } from "@/components/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto",
    description: "Contáctanos para reservas, pedidos o cualquier consulta. Estamos ubicados en Loja.",
};

export default function ContactPage() {
    return (
        <MainLayout>
            <HeroContact />
            <ContactInfo />
        </MainLayout>
    );
}
