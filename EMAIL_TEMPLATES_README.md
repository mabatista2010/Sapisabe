# Templates de Email de Confirmación - SapiSabe

Este directorio contiene templates HTML personalizados para los emails de confirmación de cuenta de SapiSabe, diseñados para ser coherentes con la identidad visual de tu sitio.

## Archivos Disponibles

### 1. `email-template-confirmation.html` (Recomendado)
- **Versión completa** con características destacadas
- Incluye sección de características de la app
- Diseño más elaborado con animaciones CSS
- Mejor para crear expectativa sobre la app

### 2. `email-template-confirmation-simple.html`
- **Versión minimalista** y más simple
- Diseño limpio y directo
- Mejor compatibilidad con clientes de email
- Ideal para emails que necesitan ser más concisos

## Variables Disponibles

Los templates utilizan las siguientes variables que se reemplazarán automáticamente:

- `{{ .ConfirmationURL }}` - URL de confirmación generada por el sistema
- `{{ .Email }}` - Dirección de email del usuario
- `{{ .Token }}` - Token de confirmación (si es necesario)
- `{{ .SiteURL }}` - URL base del sitio
- `{{ .RedirectTo }}` - URL de redirección después de la confirmación

## Cómo Usar con Supabase Auth

### 1. Configurar en Supabase Dashboard

1. Ve a tu proyecto de Supabase
2. Navega a **Authentication** > **Email Templates**
3. Selecciona **Confirm signup**
4. Copia el contenido del template que prefieras
5. Pega el HTML en el editor
6. Guarda los cambios

### 2. Configurar en el Código

Si estás usando la API de Supabase, puedes configurar el template así:

```javascript
// Ejemplo con Supabase Auth
const { data, error } = await supabase.auth.signUp({
  email: 'usuario@ejemplo.com',
  password: 'contraseña123',
  options: {
    emailRedirectTo: 'https://sapisabe.com/email-confirmation/'
  }
})
```

### 3. Configurar con Otros Proveedores

#### Auth0
1. Ve a **Branding** > **Universal Login** > **Email Templates**
2. Selecciona **Verification Email**
3. Copia y pega el template HTML

#### Firebase Auth
1. Ve a **Authentication** > **Templates**
2. Selecciona **Verification email**
3. Personaliza el HTML del template

## Personalización

### Colores
Los templates usan la paleta de colores de SapiSabe:
- **Primario**: `#6366f1` (púrpura)
- **Secundario**: `#8b5cf6` (violeta)
- **Acento**: `#00d4ff` (cian)
- **Fondo**: `#f8fafc` (gris claro)

### Logo
El template usa el emoji 📸 como logo. Puedes reemplazarlo con:
- Una imagen: `<img src="https://sapisabe.com/assets/logo.png" alt="SapiSabe" style="width: 80px; height: 80px;">`
- Otro emoji: `🔍`, `🌟`, `🚀`

### Texto
Puedes personalizar:
- Saludo: "¡Hola Explorador! 👋"
- Mensaje principal
- Características destacadas
- Footer y enlaces

## Compatibilidad

### Clientes de Email Soportados
- ✅ Gmail (web y móvil)
- ✅ Outlook (web y desktop)
- ✅ Apple Mail
- ✅ Yahoo Mail
- ✅ Thunderbird
- ✅ Clientes móviles nativos

### Características CSS Soportadas
- ✅ Gradientes lineales
- ✅ Border-radius
- ✅ Box-shadow
- ✅ Flexbox
- ✅ Grid (con fallbacks)
- ✅ Media queries
- ✅ Animaciones CSS (limitadas)

## Pruebas

### 1. Vista Previa
- Usa herramientas como **Email Preview** o **Litmus**
- Prueba en diferentes clientes de email
- Verifica en dispositivos móviles

### 2. Envío de Prueba
```javascript
// Enviar email de prueba
const { data, error } = await supabase.auth.signUp({
  email: 'tu-email@ejemplo.com',
  password: 'test123',
  options: {
    emailRedirectTo: 'https://sapisabe.com/email-confirmation/'
  }
})
```

## Optimización

### Rendimiento
- ✅ CSS inline para mejor compatibilidad
- ✅ Imágenes optimizadas (si las usas)
- ✅ HTML semántico
- ✅ Responsive design

### SEO y Accesibilidad
- ✅ Alt text en imágenes
- ✅ Estructura HTML semántica
- ✅ Contraste de colores adecuado
- ✅ Enlaces descriptivos

## Troubleshooting

### Problemas Comunes

1. **Los estilos no se aplican**
   - Usa CSS inline en lugar de `<style>` tags
   - Evita CSS moderno como Grid o Flexbox

2. **El botón no funciona**
   - Verifica que `{{ .ConfirmationURL }}` esté correctamente configurado
   - Asegúrate de que el enlace sea absoluto

3. **Imágenes no se cargan**
   - Usa URLs absolutas
   - Verifica que las imágenes estén en un servidor público

4. **Diseño roto en móvil**
   - Usa media queries
   - Prueba en diferentes tamaños de pantalla

## Soporte

Si tienes problemas con los templates:
1. Revisa la documentación de tu proveedor de autenticación
2. Prueba el template en diferentes clientes de email
3. Verifica que las variables estén correctamente configuradas

---

**Nota**: Estos templates están diseñados específicamente para SapiSabe y mantienen la coherencia visual con tu sitio web. Asegúrate de actualizar las URLs y enlaces según tu configuración específica. 