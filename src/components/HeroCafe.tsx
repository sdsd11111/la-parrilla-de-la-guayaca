import * as React from 'react';

export const HeroCafe = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#1A1A1A]">
            {/* Background with gradient overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(135deg, #2C1810 0%, #1A1A1A 100%)', // Coffee-ish dark brown to black
                }}
            >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#8D6E63] blur-[128px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#F49D00] blur-[128px]" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <h1
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    style={{ color: '#FFFFFF' }}
                >
                    Nuestra Cafetería
                </h1>
                <p
                    className="text-xl md:text-2xl max-w-2xl mx-auto font-light"
                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                >
                    El aroma del mejor café lojano y la tradición de nuestros bolones y tigrillos.
                </p>

                {/* Decorative line */}
                <div className="mt-8 w-24 h-1 rounded-full bg-[#F49D00]" />
            </div>
        </section>
    );
};
