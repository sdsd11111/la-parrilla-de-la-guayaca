'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface MenuItem {
    title: string;
    href?: string;
    items?: MenuItem[];
}

const menuData: MenuItem[] = [
    {
        title: 'Inicio',
        href: '/',
    },
    {
        title: 'Galeria',
        href: '/galeria',
    },
    {
        title: 'Contacto',
        href: '/contact',
    },
    {
        title: 'Menú',
        items: [
            {
                title: 'Alitas',
                items: [
                    { title: 'Personal', href: '/alitas/personal' },
                    { title: 'Ideal', href: '/alitas/ideal' },
                    { title: 'Familiar', href: '/alitas/familiar' },
                ],
            },
            {
                title: 'Platos a la carta',
                items: [
                    { title: 'Caldo de Bola', href: '/menu/caldo-bola' },
                    { title: 'Costilla Familiar (Arroz blanco o moro con menestra)', href: '/menu/costilla-familiar' },
                    { title: 'Arroz con Menestra y Chuletón', href: '/menu/arroz-chuleton' },
                    { title: 'Arroz con Menestra y Pechuga', href: '/menu/arroz-pechuga' },
                    { title: 'Arroz con Menestra y Costilla 1/2 Kilo', href: '/menu/arroz-costilla-media' },
                    { title: 'Arroz con Menestra y Ubre', href: '/menu/arroz-ubre' },
                    { title: 'Arroz con Menestra y Lomo (Res)', href: '/menu/arroz-lomo' },
                    { title: 'Arroz con Menestra y Chorizo (Ternera)', href: '/menu/arroz-chorizo' },
                    { title: 'Arroz con Menestra y Picaña (Res)', href: '/menu/arroz-picana' },
                    { title: 'Arroz con Menestra y Costilla Ahumada', href: '/menu/arroz-costilla-ahumada' },
                    { title: 'Arroz con Menestra y Ribeye Steak (Res)', href: '/menu/arroz-ribeye' },
                ],
            },
            {
                title: 'Combos',
                items: [
                    { title: 'Parrillada Familiar', href: '/menu/combo-familiar' },
                    { title: 'Costilla de Kilo', href: '/menu/combo-costilla-kilo' },
                    { title: 'Parrillada Personal', href: '/menu/combo-personal' },
                ],
            },
            {
                title: 'Cafetería (Ítems de Desayuno/Merienda)',
                items: [
                    { title: 'Tigrillo', href: '/menu/tigrillo' },
                    { title: 'Tigrillo Mixto', href: '/menu/tigrillo-mixto' },
                    { title: 'Bolones (verde o madura)', href: '/menu/bolones' },
                    { title: 'Mixto (Bolón)', href: '/menu/mixto-bolon' },
                    { title: 'Empanadas', href: '/menu/empanadas' },
                    { title: 'Mote Pillo', href: '/menu/mote-pillo' },
                    { title: 'Mote con Chicharrón', href: '/menu/mote-chicharron' },
                    { title: 'Llapingacho', href: '/menu/llapingacho' },
                    { title: 'Prensados', href: '/menu/prensados' },
                ],
            },
            {
                title: 'Porciones',
                href: '/cafe',
            },
            {
                title: 'Bebidas',
                href: '/menu/bebidas',
            },
        ],
    },
];

const MenuItemComponent = ({ item, depth = 0 }: { item: MenuItem; depth?: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // If item has href, render as direct link
    if (item.href) {
        return (
            <div className={cn("border-b border-gray-800", depth > 0 && "border-none")}>
                <Link
                    href={item.href}
                    className={cn(
                        "w-full flex items-center justify-between transition-colors hover:bg-gray-800",
                        depth === 0 ? "px-6 py-4" : "px-8 py-3 text-sm"
                    )}
                    style={{
                        color: depth === 0 ? '#F49D00' : '#FFFFFF',
                        paddingLeft: depth > 0 ? `${depth * 1.5 + 1}rem` : undefined
                    }}
                    onMouseEnter={(e) => {
                        if (depth > 0) e.currentTarget.style.color = '#F49D00';
                    }}
                    onMouseLeave={(e) => {
                        if (depth > 0) e.currentTarget.style.color = '#FFFFFF';
                    }}
                >
                    <span className={cn("text-left", depth === 0 ? "font-semibold" : "")}>
                        {item.title}
                    </span>
                </Link>
            </div>
        );
    }

    // Otherwise render as accordion
    return (
        <div className={cn("border-b border-gray-800", depth > 0 && "border-none")}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                    "w-full flex items-center justify-between transition-colors hover:bg-gray-800",
                    depth === 0 ? "px-6 py-4" : "px-8 py-3 text-sm"
                )}
                style={{
                    color: depth === 0 ? '#F49D00' : '#FFFFFF',
                    paddingLeft: depth > 0 ? `${depth * 1.5 + 1}rem` : undefined
                }}
                onMouseEnter={(e) => {
                    if (depth > 0) e.currentTarget.style.color = '#F49D00';
                }}
                onMouseLeave={(e) => {
                    if (depth > 0) e.currentTarget.style.color = '#FFFFFF';
                }}
            >
                <span className={cn("text-left", depth === 0 ? "font-semibold" : "")}>
                    {item.title}
                </span>
                <ChevronDown
                    className={cn(
                        'w-5 h-5 transition-transform duration-200',
                        isExpanded && 'transform rotate-180'
                    )}
                />
            </button>

            {isExpanded && item.items && (
                <div className="bg-black bg-opacity-30">
                    {item.items.map((subItem, index) => (
                        <MenuItemComponent key={index} item={subItem} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    return (
        <>
            {/* Overlay/Backdrop */}
            <div
                className={cn(
                    'fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40',
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside
                className={cn(
                    'fixed top-0 left-0 h-full w-80 shadow-2xl transition-transform duration-300 ease-in-out z-50 flex flex-col',
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                )}
                style={{ backgroundColor: '#1A1A1A' }}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700">
                    <h2
                        className="text-lg font-bold leading-tight"
                        style={{ color: '#F49D00' }}
                    >
                        La Parrilla de la Guayaca
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg transition-colors hover:bg-gray-800"
                        style={{ color: '#FFFFFF' }}
                        aria-label="Cerrar menú"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Menu Items - Scrollable */}
                <div className="flex-1 overflow-y-auto">
                    {menuData.map((item, index) => (
                        <MenuItemComponent key={index} item={item} />
                    ))}
                </div>
            </aside>
        </>
    );
};
