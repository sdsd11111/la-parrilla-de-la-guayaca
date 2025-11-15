import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { serialize } from 'cookie';

// Credenciales válidas
const VALID_CREDENTIALS = {
  username: 'Losalmuerzos',
  password: 'Contraseña123.'
};

// Esquema de validación
const loginSchema = z.object({
  username: z.string().min(1, 'El usuario es requerido'),
  password: z.string().min(1, 'La contraseña es requerida'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validar los datos de entrada
    const result = loginSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { message: 'Datos de entrada inválidos', errors: result.error.flatten() },
        { status: 400 }
      );
    }
    
    const { username, password } = result.data;
    
    // Verificar las credenciales
    if (username !== VALID_CREDENTIALS.username || password !== VALID_CREDENTIALS.password) {
      return NextResponse.json(
        { message: 'Credenciales inválidas' },
        { status: 401 }
      );
    }
    
    // Crear una cookie de sesión segura
    const cookie = serialize('admin-session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      path: '/',
    });
    
    const response = NextResponse.json(
      { message: 'Inicio de sesión exitoso' },
      { status: 200 }
    );
    
    // Establecer la cookie en la respuesta
    response.headers.set('Set-Cookie', cookie);
    
    return response;
    
    
  } catch (error) {
    console.error('Error en el servidor:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
