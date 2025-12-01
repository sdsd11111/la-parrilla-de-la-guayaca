'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import dynamic from 'next/dynamic';

const GoogleTranslate = dynamic(
  () => import('./GoogleTranslate'),
  { ssr: false }
);

interface HeaderProps {
  logo?: string;
  className?: string;
  onMenuClick?: () => void;
}

export const Header = ({ logo = '/Logo.png', className, onMenuClick }: HeaderProps) => {

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        className
      )}
      style={{
        backgroundColor: '#1A1A1A',
        height: '70px'
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left Section: Logo + Title */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {/* Logo */}
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                src={logo}
                alt="La Parrilla de la Guayaca Logo"
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  // Fallback si no existe el logo
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            {/* Title */}
            <h1
              className="text-white text-lg md:text-xl font-bold leading-tight"
              style={{ color: '#FFFFFF' }}
            >
              La Parrilla de la Guayaca{' '}
              <span className="hidden md:inline font-extrabold text-orange-500" style={{ color: '#F49D00' }}>
                Loja
              </span>
            </h1>
          </Link>

          {/* Right Section: Language Button + Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher Button */}
            <GoogleTranslate inHeader={true} />

            {/* Hamburger Menu Button */}
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                color: '#F49D00',
              }}
              aria-label="Abrir menú"
              title="Menú"
            >
              <Menu className="w-7 h-7" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }} />
    </header>
  );
};
