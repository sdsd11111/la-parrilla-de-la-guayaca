"use client";

import { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send, ChevronDown } from 'lucide-react';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-800 relative overflow-hidden group">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F49D00] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity duration-500" />

            <h3 className="text-2xl font-bold mb-2 text-white relative z-10">Envíanos un Mensaje</h3>
            <p className="text-gray-400 mb-8 relative z-10">Completa el formulario y te responderemos a la brevedad.</p>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Nombre */}
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Nombre Completo *</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-[#F49D00]" />
                        </div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 bg-[#252525] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F49D00] focus:border-transparent transition-all outline-none"
                            placeholder="Ej: Juan Pérez"
                        />
                    </div>
                </div>

                {/* Email y Teléfono Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Correo Electrónico *</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-[#F49D00]" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-4 bg-[#252525] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F49D00] focus:border-transparent transition-all outline-none"
                                placeholder="juan@ejemplo.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-300 ml-1">Teléfono</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-[#F49D00]" />
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-4 bg-[#252525] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F49D00] focus:border-transparent transition-all outline-none"
                                placeholder="+593 XX XXX XXXX"
                            />
                        </div>
                    </div>
                </div>

                {/* Asunto */}
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">Asunto</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <MessageSquare className="h-5 w-5 text-[#F49D00]" />
                        </div>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full pl-12 pr-10 py-4 bg-[#252525] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F49D00] focus:border-transparent transition-all outline-none appearance-none cursor-pointer"
                        >
                            <option value="" disabled>Selecciona un asunto</option>
                            <option value="reserva">Reserva de mesa</option>
                            <option value="consulta">Consulta general</option>
                            <option value="eventos">Eventos privados</option>
                            <option value="trabajo">Trabaja con nosotros</option>
                            <option value="otro">Otro</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Mensaje *</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 bg-[#252525] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F49D00] focus:border-transparent transition-all outline-none resize-none"
                        placeholder="Escribe tu mensaje aquí..."
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-4 bg-[#F49D00] hover:bg-[#d68a00] text-[#1A1A1A] font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                >
                    <span>Enviar Mensaje</span>
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
            </form>
        </div>
    );
};
