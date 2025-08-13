/**
 * App Opener para SapiSabe
 * Maneja la apertura de la app desde el navegador web
 */

class SapiSabeAppOpener {
    constructor() {
        this.appUrls = [
            'sapisabe://', // URL scheme personalizado
            'com.sapisabe.app://', // URL scheme basado en bundle ID
            'https://sapisabe.com/app', // Deep link
            'https://sapisabe.com' // URL de respaldo
        ];
        
        this.appOpened = false;
        this.timeout = 2000; // 2 segundos para detectar si la app se abrió
    }

    /**
     * Función principal para abrir la app
     */
    openApp() {
        const isMobile = this.isMobileDevice();
        
        if (isMobile) {
            this.attemptToOpenApp();
        } else {
            this.showDesktopModal();
        }
    }

    /**
     * Detecta si el dispositivo es móvil
     */
    isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    /**
     * Intenta abrir la app en móvil
     */
    attemptToOpenApp() {
        this.setupAppDetection();
        this.tryOpenApp(0);
    }

    /**
     * Configura la detección de si la app se abrió
     */
    setupAppDetection() {
        // Detectar cuando la página pierde el foco (app se abrió)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.appOpened = true;
            }
        });

        // Detectar cuando la ventana pierde el foco
        window.addEventListener('blur', () => {
            this.appOpened = true;
        });

        // Detectar cuando el usuario sale de la página
        window.addEventListener('pagehide', () => {
            this.appOpened = true;
        });
    }

    /**
     * Intenta abrir la app con diferentes URLs
     */
    tryOpenApp(urlIndex = 0) {
        if (urlIndex >= this.appUrls.length) {
            // Si ninguna funciona, redirigir a la página de descarga
            this.fallbackToDownload();
            return;
        }

        const url = this.appUrls[urlIndex];
        this.createAndClickLink(url);

        // Verificar si la app se abrió después del timeout
        setTimeout(() => {
            if (!this.appOpened) {
                // Si no se abrió, intentar con la siguiente URL
                this.tryOpenApp(urlIndex + 1);
            }
        }, this.timeout);
    }

    /**
     * Crea y hace clic en un enlace invisible
     */
    createAndClickLink(url) {
        const link = document.createElement('a');
        link.href = url;
        link.style.display = 'none';
        document.body.appendChild(link);
        
        try {
            link.click();
        } catch (error) {
            console.log('Error al intentar abrir la app:', error);
        }
        
        document.body.removeChild(link);
    }

    /**
     * Fallback a la página de descarga
     */
    fallbackToDownload() {
        window.location.href = '../index.html#descarga';
    }

    /**
     * Muestra modal en desktop
     */
    showDesktopModal() {
        const modal = this.createModal();
        document.body.appendChild(modal);
        
        // Cerrar modal al hacer clic fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    /**
     * Crea el modal para desktop
     */
    createModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(10px);
            animation: fadeIn 0.3s ease;
        `;

        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            max-width: 400px;
            margin: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
        `;

        modalContent.innerHTML = this.getModalContent();
        modal.appendChild(modalContent);

        // Agregar estilos CSS para animaciones
        this.addModalStyles();

        return modal;
    }

    /**
     * Contenido del modal
     */
    getModalContent() {
        return `
            <h3 style="color: #1e293b; margin-bottom: 20px; font-size: 1.5rem; font-weight: 600;">
                📱 Abrir SapiSabe en tu móvil
            </h3>
            
            <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 25px; border-radius: 16px; margin: 20px 0; color: white;">
                <div style="font-size: 3rem; margin-bottom: 15px;">📸</div>
                <h4 style="margin-bottom: 10px; font-size: 1.2rem;">¡Tu aventura te espera!</h4>
                <p style="opacity: 0.9; margin-bottom: 0; font-size: 0.95rem;">
                    Escanea el código QR o visita el enlace en tu móvil
                </p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin: 20px 0;">
                <div id="qr-code" style="margin-bottom: 15px;">
                    <!-- QR Code se generará aquí -->
                </div>
                <p style="color: #64748b; margin-bottom: 15px; font-size: 0.9rem;">
                    Escanea este código QR con tu cámara para abrir SapiSabe directamente
                </p>
            </div>
            
            <div style="margin: 20px 0;">
                <a href="https://sapisabe.com" target="_blank" style="
                    display: inline-block;
                    background: #6366f1;
                    color: white;
                    text-decoration: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: 600;
                    margin: 0 10px;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='#5b5bd6'" onmouseout="this.style.background='#6366f1'">
                    🌐 Visitar SapiSabe
                </a>
                <a href="../index.html#descarga" style="
                    display: inline-block;
                    background: #f1f5f9;
                    color: #6366f1;
                    text-decoration: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: 600;
                    margin: 0 10px;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
                    📥 Descargar App
                </a>
            </div>
            
            <button onclick="this.closest('.modal').remove()" style="
                background: #6366f1;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
            " onmouseover="this.style.background='#5b5bd6'" onmouseout="this.style.background='#6366f1'">
                ✕ Cerrar
            </button>
        `;
    }

    /**
     * Agrega estilos CSS para las animaciones del modal
     */
    addModalStyles() {
        if (!document.getElementById('modal-styles')) {
            const style = document.createElement('style');
            style.id = 'modal-styles';
            style.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideIn {
                    from { 
                        opacity: 0;
                        transform: translateY(-20px) scale(0.95);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    /**
     * Genera un QR code simple (placeholder)
     * En una implementación real, usarías una librería como qrcode.js
     */
    generateQRCode() {
        const qrContainer = document.getElementById('qr-code');
        if (qrContainer) {
            // Placeholder para QR code
            qrContainer.innerHTML = `
                <div style="
                    width: 150px;
                    height: 150px;
                    background: linear-gradient(45deg, #6366f1 25%, transparent 25%), 
                                linear-gradient(-45deg, #6366f1 25%, transparent 25%), 
                                linear-gradient(45deg, transparent 75%, #6366f1 75%), 
                                linear-gradient(-45deg, transparent 75%, #6366f1 75%);
                    background-size: 20px 20px;
                    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
                    margin: 0 auto;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: bold;
                    font-size: 12px;
                    text-align: center;
                ">
                    SapiSabe<br>QR Code
                </div>
            `;
        }
    }
}

// Función global para usar desde HTML
function openApp() {
    const appOpener = new SapiSabeAppOpener();
    appOpener.openApp();
    
    // Generar QR code después de un pequeño delay
    setTimeout(() => {
        appOpener.generateQRCode();
    }, 100);
}

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SapiSabeAppOpener;
} 