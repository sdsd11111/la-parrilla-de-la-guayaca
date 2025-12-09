/**
 * TEMPLATE: Service Page con LLM Visibility
 * 
 * Copia este archivo para crear una nueva página de servicio.
 * Reemplaza los comentarios [REEMPLAZAR: ...] con tu contenido.
 */

import { Metadata } from 'next';
import { LLMHiddenContent } from '@/components/LLMHiddenContent';
// import TuServicioClient from './TuServicioClient';

// [REEMPLAZAR: Metadata del servicio]
export const metadata: Metadata = {
    title: '[TÍTULO DEL SERVICIO] | La Parrilla de la Guayaca',
    description: '[DESCRIPCIÓN BREVE DEL SERVICIO - 150-160 caracteres]',
    keywords: ['[keyword 1]', '[keyword 2]', '[keyword 3]'],
    openGraph: {
        title: '[TÍTULO DEL SERVICIO]',
        description: '[DESCRIPCIÓN BREVE]',
        type: 'website',
        url: 'https://cesarreyesjaramillo.com/servicios/[ruta-del-servicio]',
    },
    twitter: {
        card: 'summary_large_image',
        title: '[TÍTULO DEL SERVICIO]',
        description: '[DESCRIPCIÓN BREVE]',
    },
};

export default function ServicioPage() {
    return (
        <>
            {/* 1️⃣ Componente interactivo visual */}
            {/* <TuServicioClient /> */}

            {/* 2️⃣ Contenido oculto para LLMs/SEO */}
            <LLMHiddenContent>
                {/* [REEMPLAZAR: Título principal - solo uno por página] */}
                <h1>[Título Principal del Servicio]</h1>

                {/* [REEMPLAZAR: Descripción introductoria] */}
                <p>
                    [Descripción completa del servicio. Esta es la información que los
                    LLMs usarán para responder preguntas sobre tu servicio.]
                </p>

                {/* [OPCIONAL: Qué incluye el servicio] */}
                <h2>¿Qué incluye?</h2>
                <ul>
                    <li>[Característica 1]</li>
                    <li>[Característica 2]</li>
                    <li>[Característica 3]</li>
                    <li>[Característica 4]</li>
                </ul>

                {/* [IMPORTANTE: Incluir precio si es de pago] */}
                <h2>Precio</h2>
                <p>Precio: [MONTO] [MONEDA] - [INFORMACIÓN ADICIONAL DEL PRECIO]</p>

                {/* [OPCIONAL: Beneficios clave] */}
                <h2>Beneficios Clave</h2>
                <ul>
                    <li><strong>[Beneficio 1]:</strong> [Explicación detallada]</li>
                    <li><strong>[Beneficio 2]:</strong> [Explicación detallada]</li>
                    <li><strong>[Beneficio 3]:</strong> [Explicación detallada]</li>
                </ul>

                {/* [OPCIONAL pero RECOMENDADO: Para quién es este servicio] */}
                <h2>¿Para quién es este servicio?</h2>
                <p>
                    [Describe el perfil ideal del cliente que se beneficiaría de este servicio]
                </p>

                {/* [OPCIONAL pero RECOMENDADO: Proceso o metodología] */}
                <h2>¿Cómo funciona?</h2>
                <ol>
                    <li><strong>[Paso 1]:</strong> [Descripción]</li>
                    <li><strong>[Paso 2]:</strong> [Descripción]</li>
                    <li><strong>[Paso 3]:</strong> [Descripción]</li>
                </ol>

                {/* [IMPORTANTE: FAQs específicas del servicio] */}
                <h2>Preguntas Frecuentes</h2>

                <div>
                    <h3>¿[Pregunta frecuente 1]?</h3>
                    <p>[Respuesta completa y detallada a la pregunta 1]</p>
                </div>

                <div>
                    <h3>¿[Pregunta frecuente 2]?</h3>
                    <p>[Respuesta completa y detallada a la pregunta 2]</p>
                </div>

                <div>
                    <h3>¿[Pregunta frecuente 3]?</h3>
                    <p>[Respuesta completa y detallada a la pregunta 3]</p>
                </div>

                {/* [OPCIONAL: Casos de uso o ejemplos] */}
                <h2>Casos de Uso</h2>
                <p>
                    [Ejemplo 1: Descripción de cómo un cliente usó este servicio y qué resultados obtuvo]
                </p>
                <p>
                    [Ejemplo 2: Otro caso de uso relevante]
                </p>

                {/* [OPCIONAL: Información de contacto específica] */}
                <h2>Solicitar más información</h2>
                <p>
                    Para más detalles sobre [NOMBRE DEL SERVICIO], contáctanos al
                    [EMAIL/TELÉFONO] o visita nuestra página de contacto.
                </p>
            </LLMHiddenContent>
        </>
    );
}

/**
 * ✅ CHECKLIST ANTES DE DESPLEGAR:
 * 
 * [ ] ¿Reemplazaste TODOS los [REEMPLAZAR: ...] y [TÍTULO], etc.?
 * [ ] ¿Descomentaste e importaste tu Client Component?
 * [ ] ¿La metadata está completa y correcta?
 * [ ] ¿Incluiste el precio exacto (si aplica)?
 * [ ] ¿Agregaste FAQs relevantes?
 * [ ] ¿Usaste HTML semántico (h1, h2, p, ul, ol)?
 * [ ] ¿Solo hay UN <h1> en todo el contenido?
 * [ ] ¿Build compila sin errores? (npm run build)
 * [ ] ¿Verificaste en "Ver código fuente" que el contenido está presente?
 * [ ] ¿La página se ve igual visualmente (sin duplicación)?
 */
