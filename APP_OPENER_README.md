# Sistema de Apertura de Apps - SapiSabe

Este sistema permite abrir la app SapiSabe directamente desde el navegador web sin necesidad de cambiar la configuración de tu aplicación.

## 🚀 Cómo Funciona

### En Dispositivos Móviles
1. **Detección automática** del tipo de dispositivo
2. **Intento de apertura** usando diferentes métodos:
   - URL schemes personalizados
   - Deep links
   - URLs de respaldo
3. **Detección inteligente** de si la app se abrió
4. **Fallback automático** a la página de descarga si falla

### En Desktop
1. **Modal informativo** con opciones
2. **QR code** para escanear con el móvil
3. **Enlaces directos** a la app store
4. **Redirección** a la página de descarga

## 📱 Métodos de Apertura

### 1. URL Schemes
```javascript
// Intentos en orden de prioridad
const appUrls = [
    'sapisabe://',           // URL scheme personalizado
    'com.sapisabe.app://',   // URL scheme basado en bundle ID
    'https://sapisabe.com/app', // Deep link
    'https://sapisabe.com'   // URL de respaldo
];
```

### 2. Detección de Apertura
```javascript
// Eventos que detectan si la app se abrió
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // App se abrió
    }
});

window.addEventListener('blur', () => {
    // App se abrió
});
```

## 🛠️ Configuración

### 1. URL Schemes Personalizados

Si quieres usar URL schemes personalizados, agrega esto a tu app:

#### iOS (Info.plist)
```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLName</key>
        <string>com.sapisabe.app</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>sapisabe</string>
        </array>
    </dict>
</array>
```

#### Android (AndroidManifest.xml)
```xml
<activity android:name=".MainActivity">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="sapisabe" />
    </intent-filter>
</activity>
```

### 2. Deep Links

Configura deep links en tu app para manejar URLs como:
- `https://sapisabe.com/app`
- `https://sapisabe.com/open`

### 3. Universal Links (iOS)

Para iOS, configura Universal Links:
```json
// apple-app-site-association
{
    "applinks": {
        "apps": [],
        "details": [{
            "appID": "TEAM_ID.com.sapisabe.app",
            "paths": ["/app/*", "/open/*"]
        }]
    }
}
```

## 📋 Uso

### 1. Incluir el Script
```html
<script src="app-opener.js"></script>
```

### 2. Llamar la Función
```html
<button onclick="openApp()">Abrir SapiSabe</button>
```

### 3. Uso Programático
```javascript
const appOpener = new SapiSabeAppOpener();
appOpener.openApp();
```

## 🎨 Personalización

### 1. Cambiar URLs
```javascript
class SapiSabeAppOpener {
    constructor() {
        this.appUrls = [
            'tuapp://',           // Tu URL scheme
            'com.tuapp://',       // Tu bundle ID
            'https://tuapp.com',  // Tu deep link
        ];
    }
}
```

### 2. Personalizar Modal
```javascript
getModalContent() {
    return `
        <h3>Tu Título Personalizado</h3>
        <!-- Tu contenido personalizado -->
    `;
}
```

### 3. Cambiar Timeout
```javascript
constructor() {
    this.timeout = 3000; // 3 segundos
}
```

## 🔧 Opciones Avanzadas

### 1. QR Code Real
Para generar QR codes reales, usa una librería como `qrcode.js`:

```javascript
// Instalar: npm install qrcode
import QRCode from 'qrcode';

generateQRCode() {
    const qrContainer = document.getElementById('qr-code');
    QRCode.toCanvas(qrContainer, 'https://sapisabe.com', {
        width: 150,
        margin: 2
    });
}
```

### 2. Analytics
```javascript
openApp() {
    // Track intento de apertura
    gtag('event', 'app_open_attempt', {
        'device_type': this.isMobileDevice() ? 'mobile' : 'desktop'
    });
    
    // Resto del código...
}
```

### 3. A/B Testing
```javascript
openApp() {
    const variant = Math.random() > 0.5 ? 'A' : 'B';
    
    if (variant === 'A') {
        this.showModal();
    } else {
        this.redirectToStore();
    }
}
```

## 🐛 Troubleshooting

### Problemas Comunes

1. **La app no se abre**
   - Verifica que los URL schemes estén configurados
   - Asegúrate de que la app esté instalada
   - Revisa los logs del navegador

2. **Modal no aparece**
   - Verifica que el script esté cargado
   - Revisa la consola del navegador
   - Asegúrate de que no haya conflictos CSS

3. **Detección incorrecta de dispositivo**
   - Actualiza la regex de detección
   - Prueba en diferentes dispositivos

### Debug
```javascript
// Habilitar logs de debug
class SapiSabeAppOpener {
    constructor() {
        this.debug = true; // Habilitar logs
    }
    
    log(message) {
        if (this.debug) {
            console.log('[SapiSabe App Opener]:', message);
        }
    }
}
```

## 📊 Métricas

### Eventos a Trackear
- `app_open_attempt` - Intento de apertura
- `app_open_success` - App se abrió exitosamente
- `app_open_fallback` - Fallback a store
- `modal_shown` - Modal mostrado en desktop

### Ejemplo con Google Analytics
```javascript
function trackAppOpen(success) {
    gtag('event', success ? 'app_open_success' : 'app_open_fallback', {
        'app_name': 'SapiSabe',
        'device_type': isMobile ? 'mobile' : 'desktop'
    });
}
```

## 🔒 Seguridad

### Consideraciones
- ✅ URLs seguras (HTTPS)
- ✅ Validación de URLs
- ✅ Sanitización de inputs
- ✅ Rate limiting (opcional)

### Implementación Segura
```javascript
validateUrl(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'https:' || urlObj.protocol === 'sapisabe:';
    } catch {
        return false;
    }
}
```

---

**Nota**: Este sistema está diseñado para funcionar sin cambios en tu app. Solo necesitas configurar URL schemes o deep links si quieres mejorar la experiencia. 