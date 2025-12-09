"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { QuienesSomos } from "@/components/QuienesSomos";
import { PruebaSocialVideo } from "@/components/PruebaSocialVideo";
import { NuestraCarta } from "@/components/NuestraCarta";
import { Testimonios } from "@/components/Testimonios";
import { PreguntasFrecuentes } from "@/components/PreguntasFrecuentes";
import { Footer } from "@/components/Footer";
import HeroPlatos from "@/components/HeroPlatos";


export default function HomeClient() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onMenuClick={() => setSidebarOpen(true)}
      />

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 flex flex-col">
        {/* Hero Section - Viewport completo */}
        <HeroPlatos />

        {/* Quiénes Somos Section */}
        <QuienesSomos />

        {/* Video Testimonial Section */}
        <PruebaSocialVideo videoId="dQw4w9WgXcQ" />

        {/* Nuestra Carta Section */}
        <NuestraCarta />

        {/* Testimonios Section */}
        <Testimonios />

        {/* Preguntas Frecuentes Section */}
        <PreguntasFrecuentes />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
