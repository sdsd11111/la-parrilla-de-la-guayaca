'use client';

import React, { useEffect, useState, useCallback } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

/**
 * GoogleTranslate Component (Next.js)
 * - Loads the official Google Translate script
 * - Displays two language buttons (ES / EN)
 * - Attempts to change language via .goog-te-combo
 * - Falls back to setting googtrans cookie and reloading if needed
 */

const SCRIPT_ID = "google-translate-script";
const CALLBACK_NAME = "googleTranslateElementInit";

function setCookie(name: string, value: string, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

interface GoogleTranslateProps {
  inHeader?: boolean;
}

export default function GoogleTranslate({ inHeader = false }: GoogleTranslateProps) {
  const [active, setActive] = useState<"es" | "en">(() => {
    // Try to read cookie for initial state
    if (typeof document !== 'undefined') {
      const c = getCookie("googtrans");
      if (c && c.includes("/es/en")) return "en";
    }
    return "es";
  });

  // Track initialization state
  const [isInitialized, setIsInitialized] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize Google Translate
  const initializeGoogleTranslate = useCallback(() => {
    if (!mounted || isInitialized || !window.google?.translate?.TranslateElement) return false;

    try {
      // Prevent multiple initializations
      if (document.querySelector('.goog-te-banner')) {
        console.log('Google Translate already initialized');
        setIsInitialized(true);
        return true;
      }

      // Create a container for the widget if it doesn't exist
      let container = document.getElementById('google_translate_element');
      if (!container) {
        container = document.createElement('div');
        container.id = 'google_translate_element';
        container.style.display = 'none';
        document.body.appendChild(container);
      }

      // Initialize with our options
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: 'es,en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );

      setIsInitialized(true);
      console.log('Google Translate initialized successfully');
      return true;
    } catch (err) {
      console.error('Error initializing Google Translate:', err);
      return false;
    }
  }, [isInitialized, mounted]);

  // Load Google Translate script
  useEffect(() => {
    setMounted(true);

    // Only run on client-side
    if (typeof document === 'undefined') return;

    // Prevent body scroll shift
    document.body.style.top = "0px";

    // Cleanup function
    const cleanup = () => {
      try {
        const script = document.getElementById(SCRIPT_ID);
        if (script?.parentNode) {
          script.parentNode.removeChild(script);
        }

        // @ts-ignore
        if (window[CALLBACK_NAME]) {
          // @ts-ignore
          window[CALLBACK_NAME] = undefined;
        }
      } catch (e) {
        console.error('Error during cleanup:', e);
      }
    };

    // If already loaded, initialize immediately
    if (window.google?.translate) {
      initializeGoogleTranslate();
      return cleanup;
    }

    // Skip if already loading
    if (document.getElementById(SCRIPT_ID)) {
      return cleanup;
    }

    // Create callback
    window[CALLBACK_NAME] = () => {
      // Small delay to ensure the script is fully loaded
      setTimeout(() => {
        if (window.google?.translate?.TranslateElement) {
          initializeGoogleTranslate();
        }
      }, 500);
    };

    // Load script
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `https://translate.google.com/translate_a/element.js?cb=${CALLBACK_NAME}&hl=es`;
    script.async = true;
    script.onerror = (error) => {
      console.error('Failed to load Google Translate script:', error);
      cleanup();
    };

    document.body.appendChild(script);

    return () => {
      cleanup();
      setMounted(false);
    };
  }, [initializeGoogleTranslate]);


  // Attempt to change language using Google's internal select (no page reload)
  const trySelectChange = useCallback((langCode: string) => {
    if (!mounted) return false;

    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select) return false;

    try {
      select.value = langCode;
      // Trigger event (some browsers need different events)
      const ev = new Event('change', { bubbles: true });
      select.dispatchEvent(ev);

      // Also dispatch input event as it might be needed
      const inputEv = new Event('input', { bubbles: true });
      select.dispatchEvent(inputEv);

      return true;
    } catch (error) {
      console.error('Error changing language:', error);
      return false;
    }
  }, [mounted]);

  // Robust language switching with fallback to cookie-based reload
  const setLanguage = useCallback((lang: "en" | "es") => {
    if (!mounted) return;

    // Update UI immediately for better UX
    setActive(lang);

    // Cookie value format for Google Translate
    const cookieValue = lang === "en" ? "/es/en" : "/es/es";
    setCookie("googtrans", cookieValue);

    // 1) First try to change via the Google Translate select element
    let attempts = 0;
    const maxAttempts = 5;    // Reduced from 25 to 5 attempts
    const intervalMs = 100;   // Reduced from 200ms to 100ms

    const interval = setInterval(() => {
      if (!mounted) {
        clearInterval(interval);
        return;
      }

      attempts++;
      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");

      if (select) {
        try {
          select.value = lang;
          const ev = new Event('change', { bubbles: true });
          select.dispatchEvent(ev);

          // Also try the old method for compatibility
          const oldEv = new Event('change', { bubbles: true });
          select.dispatchEvent(oldEv);

          clearInterval(interval);
          return;
        } catch (error) {
          console.error('Error dispatching language change event:', error);
        }
      }

      if (attempts >= maxAttempts) {
        clearInterval(interval);
        // If we can't find the select, fall back to page reload
        if (mounted) {
          window.location.reload();
        }
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, [mounted]);

  // Base button styles
  const btnBase: React.CSSProperties = {
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    fontSize: 14,
    transition: "all .12s ease",
  };

  // Active button style
  const activeStyle: React.CSSProperties = {
    boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
    transform: "translateY(-1px)",
  };

  // Determinar el texto del botón basado en el idioma activo
  const buttonText = active === "es" ? "English" : "Español";

  // Efecto para detectar cambios en el idioma
  useEffect(() => {
    const checkLanguage = () => {
      const cookie = document.cookie.match(/googtrans=\/([a-z]{2})\/([a-z]{2})/);
      if (cookie && cookie[2]) {
        setActive(cookie[2] as "es" | "en");
      }
    };

    // Verificar el idioma cada segundo
    const interval = setInterval(checkLanguage, 1000);
    return () => clearInterval(interval);
  }, []);

  // No renderizar el botón flotante si no está en el header
  if (!inHeader) {
    return (
      <>
        {/* Solo el contenedor oculto necesario para Google Translate */}
        <div id="google_translate_element" style={{ display: "none" }} />
      </>
    );
  }

  return (
    <>
      {/* Language toggle button integrated with header */}
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          zIndex: 10,
        }}
      >
        <button
          onClick={() => setLanguage(active === "es" ? "en" : "es")}
          className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
          style={{
            color: '#FFFFFF',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#F49D00';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
          }}
          aria-label={active === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
          title={active === "es" ? "English" : "Español"}
        >
          {/* Globe Icon SVG */}
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
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </button>
      </div>

      {/* Hidden container required by Google Translate */}
      <div id="google_translate_element" style={{ display: "none" }} />
      <style jsx global>{`
        /* === Ocultar la barra superior de Google Translate === */
        body > .skiptranslate {
          display: none !important;
        }

        /* Evitar desplazamiento extra por la barra oculta */
        body {
          top: 0 !important;
        }

        /* Ocultar el popup de opciones de Google Translate */
        .goog-te-banner-frame.skiptranslate,
        .goog-te-balloon-frame,
        .goog-te-gadget-simple,
        .VIpgJd-ZVi9od-ORHb,
        .VIpgJd-ZVi9od-ORHb * {
          display: none !important;
        }

        /* Asegurar que no se genere margen adicional */
        html,
        body {
          margin-top: 0 !important;
        }
      `}</style>
    </>
  );
}
