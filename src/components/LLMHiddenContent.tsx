/**
 * LLMHiddenContent Component
 * 
 * Componente helper para renderizar contenido oculto visualmente
 * pero accesible para LLMs (ChatGPT, Claude, Perplexity) y crawlers de búsqueda.
 * 
 * @purpose
 * - Mejora visibilidad en AI search y SEO
 * - Permite que LLMs citen información exacta de tus servicios
 * - Zero impacto visual para usuarios
 * - Zero impacto en performance
 * 
 * @usage
 * ```tsx
 * import { LLMHiddenContent } from '@/components/LLMHiddenContent';
 * 
 * export default function ServicePage() {
 *   return (
 *     <>
 *       <ServiceClient />
 *       
 *       <LLMHiddenContent>
 *         <h1>Título del Servicio</h1>
 *         <p>Descripción completa del servicio...</p>
 *         
 *         <h2>¿Qué incluye?</h2>
 *         <ul>
 *           <li>Característica 1</li>
 *           <li>Característica 2</li>
 *         </ul>
 *         
 *         <h2>Precio</h2>
 *         <p>Precio exacto: $XXX USD</p>
 *         
 *         <h2>Preguntas Frecuentes</h2>
 *         <div>
 *           <h3>¿Pregunta 1?</h3>
 *           <p>Respuesta completa...</p>
 *         </div>
 *       </LLMHiddenContent>
 *     </>
 *   );
 * }
 * ```
 * 
 * @important
 * - Usa solo en Server Components (page.tsx)
 * - Incluye contenido semántico (h1, h2, p, ul, etc.)
 * - Mantén sincronizado con el Client Component
 * - NO uses para keyword stuffing
 */

import React from 'react';

interface LLMHiddenContentProps {
    children: React.ReactNode;
}

export function LLMHiddenContent({ children }: LLMHiddenContentProps) {
    return (
        <div
            style={{
                position: 'absolute',
                left: '-10000px',      // Fuera de pantalla (técnica aceptada por Google)
                top: 'auto',           // Mantiene accesibilidad
                width: '1px',          // Mínimo espacio
                height: '1px',         // Mínimo espacio
                overflow: 'hidden'     // Oculta desbordamiento
            }}
            aria-hidden="true"       // Screen readers ignoran (evita duplicación)
        >
            {children}
        </div>
    );
}

/**
 * CHECKLIST para implementar en una nueva página:
 * 
 * ✅ 1. ¿Es page.tsx un Server Component? (sin 'use client')
 * ✅ 2. ¿Exporta metadata correctamente?
 * ✅ 3. ¿Importó LLMHiddenContent?
 * ✅ 4. ¿Envolvió el contenido semántico?
 * ✅ 5. ¿Usó h1, h2, p, ul correctamente?
 * ✅ 6. ¿Incluyó precios si es servicio de pago?
 * ✅ 7. ¿Agregó FAQs relevantes?
 * ✅ 8. ¿Build compila sin errores?
 */
