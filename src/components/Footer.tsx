import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

// Custom TikTok icon since it's not in lucide-react standard set sometimes or just to be safe
const TikTokIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Columna 1: Branding y Propuesta */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/Logo.svg"
                alt="La Parrilla de la Guayaca"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              La Parrilla de la Guayaca Loja. El auténtico sabor al carbón fusionado con la tradición de nuestra Cafetería.
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ color: '#F49D00' }}>
              Navegación
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Menú Completo', href: '/menu' },
                { label: 'Galeria', href: '/galeria' },
                { label: 'Preguntas Frecuentes', href: '/#faqs' },
                { label: 'Contacto', href: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-[#F49D00] flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F49D00] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ color: '#F49D00' }}>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#F49D00' }} />
                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Sector del Valle, 24 de Mayo, Loja, Ecuador.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#F49D00' }} />
                <a
                  href="https://wa.me/593987562799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#F49D00] transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                >
                  0987562799
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#F49D00' }} />
                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  contacto@laparrilladelaguayaca.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#F49D00' }} />
                <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  <p>Lunes a Sábado: 8:00 - 22:00</p>
                  <p>Domingo: 8:00 - 20:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ color: '#F49D00' }}>
              Síguenos
            </h3>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: TikTokIcon, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F49D00';
                      e.currentTarget.style.borderColor = '#F49D00';
                      const icon = e.currentTarget.querySelector('svg');
                      if (icon) icon.style.color = '#1A1A1A';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      const icon = e.currentTarget.querySelector('svg');
                      if (icon) icon.style.color = '#FFFFFF';
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#FFFFFF', transition: 'color 0.3s' }} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Barra de Derechos de Autor */}
        <div
          className="mt-16 pt-8 text-center text-sm border-t"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.6)'
          }}
        >
          <p>
            Diseñado por{' '}
            <a
              href="https://cesarreyesjaramillo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-[#F49D00] transition-colors"
              style={{ color: '#F49D00' }}
            >
              Cesar Reyes
            </a>
            {' '}| La Parrilla de la Guayaca {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};
