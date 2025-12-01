import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  console.log('=== Iniciando solicitud de platos activos ===');

  try {
    // Verificar variables de entorno
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Error: Faltan variables de entorno de Supabase');
      return NextResponse.json(
        { error: 'Error de configuración del servidor: Faltan credenciales de base de datos' },
        { status: 500 }
      );
    }

    // Inicializar cliente de Supabase dentro del handler para evitar errores en tiempo de construcción/inicio
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    console.log('Realizando consulta a la base de datos...');

    const { data: platos, error } = await supabase
      .from('platos')
      .select('*')
      .eq('activo', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error en la consulta de Supabase:', error);
      return NextResponse.json(
        {
          error: 'Error al obtener los platos',
          details: error.message
        },
        { status: 500 }
      );
    }

    console.log(`Se encontraron ${platos?.length || 0} platos activos`);

    return NextResponse.json(platos || []);
  } catch (error) {
    console.error('Error inesperado:', error);
    return NextResponse.json(
      {
        error: 'Error interno del servidor',
        message: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    );
  } finally {
    console.log('=== Finalizada solicitud de platos activos ===');
  }
}
