# Configuración de Deep Linking - SapiSabe

Este documento explica cómo configurar el Deep Linking para que los usuarios puedan abrir directamente la app SapiSabe desde el email de confirmación.

## 🎯 ¿Qué es Deep Linking?

El Deep Linking permite abrir directamente tu app desde un enlace web, saltándose la tienda de aplicaciones. Si la app no está instalada, redirige automáticamente a la tienda correspondiente.

## 📱 Configuración para iOS (React Native / Expo)

### 1. Configurar URL Scheme

En tu `app.json` (Expo) o `Info.plist` (React Native):

```json
{
  "expo": {
    "scheme": "sapisabe",
    "ios": {
      "bundleIdentifier": "com.sapisabe.app",
      "infoPlist": {
        "CFBundleURLTypes": [
          {
            "CFBundleURLName": "SapiSabe",
            "CFBundleURLSchemes": ["sapisabe"]
          }
        ]
      }
    }
  }
}
```

### 2. Manejar Deep Links en la App

```javascript
// App.js o donde manejes la navegación
import { Linking } from 'react-native';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Manejar deep links cuando la app ya está abierta
    const handleDeepLink = (url) => {
      if (url) {
        // Parsear la URL y navegar según el parámetro
        const route = url.replace('sapisabe://', '');
        handleNavigation(route);
      }
    };

    // Escuchar deep links
    const subscription = Linking.addEventListener('url', (event) => {
      handleDeepLink(event.url);
    });

    // Manejar deep link inicial (cuando se abre la app desde el link)
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink(url);
      }
    });

    return () => subscription?.remove();
  }, []);

  const handleNavigation = (route) => {
    switch (route) {
      case 'open':
        // Navegar a la pantalla principal
        navigation.navigate('Home');
        break;
      case 'confirm-email':
        // Navegar a pantalla de confirmación exitosa
        navigation.navigate('EmailConfirmed');
        break;
      default:
        // Ruta por defecto
        navigation.navigate('Home');
    }
  };

  return (
    // Tu componente principal
  );
}
```

## 🤖 Configuración para Android (React Native / Expo)

### 1. Configurar Intent Filters

En `android/app/src/main/AndroidManifest.xml`:

```xml
<activity
  android:name=".MainActivity"
  android:exported="true"
  android:launchMode="singleTop">
  
  <intent-filter>
    <action android:name="android.intent.action.MAIN" />
    <category android:name="android.intent.category.LAUNCHER" />
  </intent-filter>
  
  <!-- Deep Linking -->
  <intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="sapisabe" />
  </intent-filter>
  
  <!-- App Links (opcional, para URLs web) -->
  <intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="https" 
          android:host="sapisabe.com" />
  </intent-filter>
</activity>
```

### 2. Configurar App Links (Opcional)

Para que `https://sapisabe.com` también abra la app, crea un archivo `.well-known/assetlinks.json` en tu servidor:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.sapisabe.app",
    "sha256_cert_fingerprints": ["TU_SHA256_FINGERPRINT"]
  }
}]
```

## 🔧 URLs de Deep Linking Disponibles

### URLs Básicas
- `sapisabe://open` - Abrir la app normalmente
- `sapisabe://confirm-email` - Navegar a pantalla de confirmación exitosa
- `sapisabe://profile` - Navegar a perfil del usuario
- `sapisabe://settings` - Navegar a configuración

### URLs con Parámetros
- `sapisabe://explore?category=nature` - Explorar categoría específica
- `sapisabe://photo?id=123` - Ver foto específica
- `sapisabe://lesson?topic=animals` - Iniciar lección específica

## 🧪 Probar Deep Linking

### 1. En Desarrollo (iOS Simulator)
```bash
# Abrir app con deep link
xcrun simctl openurl booted "sapisabe://open"
```

### 2. En Desarrollo (Android Emulator)
```bash
# Abrir app con deep link
adb shell am start -W -a android.intent.action.VIEW -d "sapisabe://open" com.sapisabe.app
```

### 3. En Dispositivo Físico
- Enviar email de prueba con el botón
- Hacer clic en el botón desde el dispositivo
- Verificar que la app se abra correctamente

## 🚀 Implementación en el Email

El código JavaScript en `email-confirmation/index.html` ya está configurado para:

1. **Detectar la plataforma** (iOS/Android/Desktop)
2. **Intentar abrir la app** con múltiples estrategias
3. **Redirigir a la tienda** si la app no está instalada
4. **Mostrar mensaje informativo** en desktop

## 📋 Checklist de Implementación

### ✅ Configuración Básica
- [ ] URL scheme configurado en iOS (`sapisabe://`)
- [ ] Intent filters configurados en Android
- [ ] Manejo de deep links en la app
- [ ] Navegación según el parámetro recibido

### ✅ Testing
- [ ] Probar en iOS Simulator
- [ ] Probar en Android Emulator
- [ ] Probar en dispositivos físicos
- [ ] Probar con app instalada y sin instalar

### ✅ Producción
- [ ] App Links configurados (opcional)
- [ ] URLs de tienda actualizadas
- [ ] Fallbacks funcionando correctamente
- [ ] Analytics configurados para tracking

## 🔍 Troubleshooting

### Problemas Comunes

1. **La app no se abre desde el email**
   - Verificar que el URL scheme esté configurado correctamente
   - Comprobar que la app esté instalada
   - Revisar logs de la consola

2. **Redirección incorrecta a la tienda**
   - Verificar URLs de las tiendas
   - Comprobar que los IDs de app sean correctos
   - Testear en diferentes dispositivos

3. **No funciona en iOS**
   - Verificar configuración en `Info.plist`
   - Comprobar que el bundle identifier sea correcto
   - Revisar permisos de la app

4. **No funciona en Android**
   - Verificar `AndroidManifest.xml`
   - Comprobar que el package name sea correcto
   - Revisar intent filters

## 📞 Soporte

Si tienes problemas con la implementación:

1. Revisa los logs de la consola
2. Verifica la configuración paso a paso
3. Prueba en diferentes dispositivos
4. Consulta la documentación de React Native/Expo

---

**Nota**: Asegúrate de reemplazar `com.sapisabe.app` y `6748133807` con los valores reales de tu app en las tiendas. 