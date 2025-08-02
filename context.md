# 📱 Sapisabe - Aplicación de Reconocimiento Visual con IA

## 🎯 Descripción del Proyecto

**Sapi** es una aplicación móvil educativa desarrollada con **Expo/React Native + TypeScript** que utiliza **OpenAI Vision (GPT-4)** para analizar fotografías en tiempo real. La app está diseñada específicamente para **niños de 3 a 8 años**, permitiendo que identifiquen objetos, monumentos y ubicaciones con explicaciones adaptadas a su edad.

Nuestro personaje guía, se comunica de forma personalizada con cada niño, adaptando su lenguaje y explicaciones según la edad del usuario. Los padres pueden crear múltiples perfiles para sus hijos dentro de una sola cuenta familiar, similar al sistema de Netflix.

- **Objetos generales**: Identificación y explicación de cualquier objeto fotografiado
- **Monumentos y landmarks**: Reconocimiento de lugares famosos con información histórica y turística
- **Ubicaciones**: Análisis contextual del entorno y localización

## 🛠️ Stack Tecnológico

- **Frontend**: Expo (React Native) con TypeScript
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **IA**: OpenAI Vision API (GPT-4 Vision)
- **Cámara**: Expo Camera
- **Navegación**: Expo Router (file-based routing)
- **Estado**: React Context/Zustand
- **Estilos**: NativeWind/Tailwind CSS + Linear Gradients
- **Diseño**: Dark Elegance Premium Theme

## ✨ Funcionalidades Principales

### 🔍 Core Features
- [ ] Captura de fotos con la cámara del dispositivo
- [ ] Análisis automático de imágenes con OpenAI Vision
- [ ] Respuestas contextuales según el tipo de objeto/lugar
- [ ] Historial de análisis realizados
- [ ] Modo offline con cache local

### 👤 Gestión de Usuario
- [ ] Autenticación con Supabase Auth
- [ ] Perfil de usuario personalizable
- [ ] Sincronización de historial en la nube

### 📊 Funciones Avanzadas
- [ ] Geolocalización para contexto adicional
- [ ] Compartir resultados en redes sociales
- [ ] Favoritos y colecciones
- [ ] Modo nocturno/claro
- [ ] Múltiples idiomas

## 📁 Estructura del Proyecto Implementada

```
donde_estoy/
├── app/                          # ✅ Expo Router pages
│   ├── (tabs)/                   # ✅ Tab navigation
│   │   ├── _layout.tsx          # ✅ Layout tabs con diseño premium
│   │   ├── index.tsx            # ✅ Pantalla principal (cámara premium)
│   │   ├── history.tsx          # ✅ Historial con cards elegantes
│   │   └── profile.tsx          # ✅ Perfil con gradientes
│   ├── analysis/
│   │   └── [id].tsx             # ✅ Detalle de análisis (básico)
│   ├── auth/                     # ✅ Rutas de autenticación
│   │   ├── _layout.tsx          # ✅ Layout auth
│   │   ├── login.tsx            # ✅ Pantalla de login (básica)
│   │   └── register.tsx         # ✅ Pantalla de registro (básica)
│   └── _layout.tsx              # ✅ Layout principal con expo-dev-client
├── components/                   # ✅ Componentes reutilizables implementados
│   ├── Camera/                  # ✅ Componentes de cámara (FASE 2)
│   │   ├── CameraView.tsx       # ✅ Componente principal con expo-camera
│   │   ├── CaptureButton.tsx    # ✅ Botón de captura con haptic feedback
│   │   └── ImagePreview.tsx     # ✅ Preview con acciones aceptar/rechazar
│   ├── Analysis/                # 📁 Componentes de análisis (pendiente)
│   │   ├── ResultCard.tsx       # Tarjeta de resultado
│   │   └── LoadingAnalysis.tsx  # Loading de análisis
│   └── UI/                      # 📁 Componentes UI base (pendiente)
│       ├── Button.tsx           # Botón personalizado
│       ├── Card.tsx             # Tarjeta base
│       └── Loading.tsx          # Componente de carga
├── services/                     # 📁 Servicios y APIs (pendiente)
│   ├── openai.ts                # Cliente OpenAI
│   ├── supabase.ts              # Cliente Supabase
│   ├── camera.ts                # Funciones de cámara
│   └── storage.ts               # Almacenamiento local
├── types/                        # ✅ Tipos TypeScript implementados
│   ├── analysis.ts              # ✅ Tipos para análisis
│   ├── user.ts                  # ✅ Tipos de usuario
│   └── api.ts                   # ✅ Tipos de API
├── utils/                        # ✅ Utilidades básicas
│   ├── imageProcessing.ts       # Procesamiento de imágenes (pendiente)
│   ├── formatting.ts            # Formateo de datos (pendiente)
│   └── constants.ts             # ✅ Constantes y paleta Dark Elegance
├── hooks/                        # ✅ Custom hooks implementados
│   ├── useCamera.ts             # ✅ Hook para cámara con gestión completa de estados
│   ├── useAnalysis.ts           # Hook para análisis (pendiente)
│   └── useAuth.ts               # Hook para autenticación (pendiente)
└── context/                      # 📁 Context providers (pendiente)
    ├── AuthContext.tsx          # Contexto de autenticación
    └── AnalysisContext.tsx      # Contexto de análisis
```

## 🎨 Diseño Dark Elegance Premium Implementado

### 🌙 Paleta de Colores
- **Fondo Principal**: Negro profundo (`#0f0f23`)
- **Superficies**: Gris oscuro elegante (`#1a1a2e`, `#1e293b`)
- **Primario**: Gradiente púrpura-azul (`#6366f1` → `#8b5cf6`)
- **Acento**: Cyan brillante (`#00d4ff`)
- **Texto**: Jerarquía visual con blancos y grises

### ✨ Efectos Visuales Implementados
- **Gradientes lineales** en botones y cards
- **Glassmorphism** en overlays de cámara
- **Sombras premium** y efectos de profundidad
- **Esquinas redondeadas** elegantes (8px a 24px)
- **Iconos dinámicos** (outline/filled según estado)

### 📱 Componentes Premium Creados
- **Tab Navigation**: Altura aumentada con iconos dinámicos
- **Pantalla Cámara**: Glassmorphism con esquinas de enfoque cyan
- **Pantalla Historial**: Cards de estadísticas con gradientes
- **Pantalla Perfil**: Avatar con gradiente y stats horizontales

## 🗃️ Base de Datos (Supabase)

### Tablas Principales

#### `users`
- `id` (UUID, PK)
- `email` (string)
- `full_name` (string)
- `avatar_url` (string)
- `created_at` (timestamp)
- `updated_at` (timestamp)

#### `analyses`
- `id` (UUID, PK)
- `user_id` (UUID, FK)
- `image_url` (string)
- `prompt` (text)
- `response` (text)
- `analysis_type` (enum: 'object', 'monument', 'general')
- `confidence_score` (float)
- `location_lat` (float)
- `location_lng` (float)
- `created_at` (timestamp)

#### `favorites`
- `id` (UUID, PK)
- `user_id` (UUID, FK)
- `analysis_id` (UUID, FK)
- `created_at` (timestamp)

## 🚀 Hoja de Ruta de Desarrollo

### ✅ Fase 1: Configuración Base (COMPLETADA)
- ✅ 1.1 Inicializar proyecto Expo con TypeScript
- ✅ 1.2 Configurar estructura de carpetas completa
- ✅ 1.3 Instalar dependencias principales (15+ paquetes)
- ✅ 1.4 Configurar Expo Router con file-based routing
- ✅ 1.5 Crear layout básico con tabs premium
- ✅ 1.6 Configurar TypeScript y tipos base completos
- ✅ **BONUS**: Implementar diseño Dark Elegance premium completo
- ✅ **BONUS**: Resolver errores de desarrollo y compatibilidad
- ✅ **BONUS**: Crear rutas de autenticación y análisis básicas

**📊 Métricas Fase 1:**
- **Archivos creados**: 18+
- **Dependencias instaladas**: 15+
- **Líneas de código**: 1000+
- **Pantallas funcionales**: 6
- **Tiempo de desarrollo**: 1 sesión intensiva

### ✅ Fase 2: Funcionalidad de Cámara (COMPLETADA)
- ✅ 2.1 Configurar Expo Camera con permisos y expo-dev-client
- ✅ 2.2 Crear componente CameraView con forwardRef y useImperativeHandle
- ✅ 2.3 Implementar captura de fotos con calidad optimizada
- ✅ 2.4 Agregar permisos de cámara (ya configurados en app.json)
- ✅ 2.5 Crear UI premium para la pantalla de cámara con estados múltiples
- ✅ 2.6 Implementar preview de imagen capturada con opciones aceptar/rechazar
- ✅ **BONUS**: Hook personalizado useCamera para gestión de estados
- ✅ **BONUS**: Componente CaptureButton con haptic feedback premium
- ✅ **BONUS**: Estados múltiples (idle, active, preview, analyzing)
- ✅ **BONUS**: Botones secundarios (flash, cambiar cámara, cerrar)

**📊 Métricas Fase 2:**
- **Componentes creados**: 4 nuevos (CameraView, CaptureButton, ImagePreview, useCamera hook)
- **Funcionalidades**: Captura real de fotos, toggle flash/cámara, preview con acciones
- **Estados manejados**: 4 estados de UI (idle → active → preview → analyzing)
- **Líneas de código**: 500+ nuevas
- **Tiempo de desarrollo**: 1 sesión intensiva

### ✅ Fase 3: Integración con OpenAI (COMPLETADA + MEJORADA)
- ✅ 3.1 Configurar cliente OpenAI con modelo gpt-4o-2024-08-06
- ✅ 3.2 Crear servicio completo de análisis de imágenes con validación
- ✅ 3.3 Implementar prompts inteligentes para objetos, monumentos y análisis general
- ✅ 3.4 Manejar respuestas, errores de API y estados de carga
- ✅ 3.5 Crear componentes premium de resultado y loading con diseño elegante
- ✅ 3.6 Implementar sistema completo de estados de análisis
- ✅ **BONUS**: Procesamiento de imágenes con optimización automática
- ✅ **BONUS**: Sistema de scoring de confianza automático
- ✅ **BONUS**: Integración completa con UI existente y manejo de errores
- ✅ **MEJORA 3.7**: Prompts optimizados - Enfoque en elemento principal, respuestas concisas
- ✅ **MEJORA 3.8**: Modal premium independiente con tipografía elegante
- ✅ **MEJORA 3.9**: UI minimalista enfocada en contenido principal
- ✅ **NUEVA 3.10**: Funcionalidad de texto a voz con expo-speech
- ✅ **NUEVA 3.11**: Hook personalizado useTextToSpeech con voces en español
- ✅ **NUEVA 3.12**: Componente AudioButton premium con estados visuales

**📊 Métricas Fase 3 (Actualizada + Audio):**
- **Servicios mejorados**: OpenAI con prompts específicos y concisos
- **Componentes nuevos**: 5 (LoadingAnalysis, ResultCard, **ResultModal premium**, **AudioButton**, **useTextToSpeech**)
- **Hooks personalizados**: useAnalysis + **useTextToSpeech** con gestión completa de estados
- **Funcionalidades**: Análisis real con IA, prompts optimizados, modal premium, **texto a voz**
- **Estados manejados**: 8 estados (análisis + audio: playing/paused/stopped)
- **Dependencias agregadas**: expo-speech (gratis, nativo)
- **Líneas de código**: 1300+ nuevas (incluye modal premium + audio)
- **Tiempo de desarrollo**: 2 sesiones intensivas

### ✅ Fase 4: Autenticación y Perfiles Familiares (COMPLETADA)
- ✅ 4.1 Configurar Supabase client con timeouts optimizados
- ✅ 4.2 Crear tablas en la base de datos (parent_profiles, kid_profiles, analysis_history)
- ✅ 4.3 Implementar autenticación completa (login/registro/recuperación)
- ✅ 4.4 Crear pantallas de login/registro premium con validación
- ✅ 4.5 Configurar AuthContext completo con gestión de sesiones
- ✅ 4.6 Implementar perfiles familiares tipo Netflix para múltiples niños
- ✅ 4.7 Sistema de IA personalizada por edad (simple 3-5, avanzado 6-8)
- ✅ 4.8 Historial personalizado con navegación entre perfiles
- ✅ 4.9 Upload de fotos personalizadas a Supabase Storage
- ✅ 4.10 Persistencia automática de análisis en base de datos

**📊 Métricas Fase 4:**
- **Archivos nuevos**: 15+ (contextos, componentes, servicios)
- **Funcionalidades**: Auth completa, perfiles múltiples, IA personalizada, historial
- **Base de datos**: 4 tablas con políticas RLS
- **Líneas de código**: 3000+ nuevas
- **Tiempo de desarrollo**: 6 sesiones intensivas

### ✅ Fase 5: Sistema de Límites y Registro (COMPLETADA)
- ✅ 5.1 Implementar tabla `daily_usage_limits` en Supabase
- ✅ 5.2 Crear servicio `UsageLimitsService` con sincronización AsyncStorage + Supabase
- ✅ 5.3 Desarrollar hook `useUsageLimits` con detección de usuarios registrados
- ✅ 5.4 Integrar verificación de límites en `useAnalysis` con refresh automático
- ✅ 5.5 Crear componente `LimitReachedModal` con UX de conversión premium
- ✅ 5.6 Implementar UI específica para límites alcanzados con call-to-action
- ✅ 5.7 Sistema completo de herramientas de desarrollo (reset + indicadores)
- ✅ 5.8 Resolver race conditions y sincronización AsyncStorage ↔ Supabase
- ✅ 5.9 Testing completo del flujo invitado → registrado
- ✅ 5.10 Optimización de rendimiento y manejo de errores

**📊 Métricas Fase 5:**
- **Archivos nuevos**: 8+ (servicios, hooks, componentes, modales)
- **Funcionalidades**: Límites diarios (3 para invitados, ∞ para registrados), UX de conversión, sistema dev
- **Base de datos**: 1 tabla nueva con políticas RLS
- **Líneas de código**: 2000+ nuevas
- **Tiempo de desarrollo**: 4 sesiones intensivas

**🎯 Modelo de Conversión Implementado:**
- **Usuarios Invitados**: 3 análisis diarios gratuitos (sin registro)
- **Usuarios Registrados**: Análisis ilimitados + funciones avanzadas (GRATIS)
- **UX de Conversión**: Pantalla especial + modal premium cuando se alcanza límite
- **Sincronización Robusta**: AsyncStorage + Supabase sin conflictos
- **Herramientas Dev**: Sistema de reset completo para testing

### 🔊 Sistema de Voz en Menús (IMPLEMENTADO)
- ✅ **Toggle flotante**: Botón persistente en esquina superior derecha (54x54px)
- ✅ **Estados visuales**: 🔇 Gris (OFF), 🔊 Verde (ON), 🔴 Rojo (hablando)
- ✅ **Navegación por voz**: Explicaciones automáticas en pantallas principales
  - **index.tsx**: "¡Hola! Soy Sapi, tu coleguita explorador!"
  - **CameraView.tsx**: "¡Tiempo de explorar! Haz una foto..."
  - **ImagePreview.tsx**: "¡Perfecto! ¿Te gusta esa foto?..."
  - **LoadingAnalysis.tsx**: "¡A ver a ver, qué tenemos aquí!"
- ✅ **OpenAI TTS**: Modelo `gpt-4o-mini-tts` con voz `nova`
- ✅ **Control total**: Usuario puede activar/desactivar en cualquier momento
- ✅ **Una reproducción**: No molesta, una vez por pantalla con timing perfecto

### 📚 Fase 6: Historial y Perfil (PARCIALMENTE COMPLETADA)
- ✅ 6.1 Crear pantalla de historial funcional
- ✅ 6.2 Implementar lista de análisis anteriores  
- ✅ 6.3 Crear pantalla de perfil de usuario funcional
- [ ] 6.4 Implementar funcionalidad de favoritos
- [ ] 6.5 Agregar búsqueda en historial
- [ ] 6.6 Crear componentes de tarjetas de análisis

**📊 Métricas Fase 6 (Subfases 1-3):**
- **Funcionalidades**: Historial funcional con navegación entre perfiles, pantalla de perfil con gestión familiar
- **Componentes**: UserHistoryCard con agrupación temporal, sistema de filtros avanzados
- **Vista familiar**: Resumen para padres con estadísticas de todos los hijos

### 🎨 Fase 7: UI/UX y Pulido
- ✅ 7.1 Implementar sistema de diseño consistente (Dark Elegance)
- [ ] 7.2 Agregar animaciones y transiciones
- [ ] 7.3 Optimizar rendimiento
- ✅ 7.4 Implementar modo oscuro (tema principal)
- [ ] 7.5 Agregar feedback haptic
- [ ] 7.6 Mejorar responsive design

### 🌟 Fase 8: Funciones Avanzadas
- [ ] 8.1 Integrar geolocalización
- [ ] 8.2 Implementar compartir en redes sociales
- [ ] 8.3 Agregar configuraciones de la app
- [ ] 8.4 Implementar cache offline
- [ ] 8.5 Optimizar imágenes para almacenamiento
- [ ] 8.6 Agregar métricas y analytics

### 🚀 Fase 9: Testing y Deploy
- [ ] 9.1 Testing en dispositivos físicos
- [ ] 9.2 Optimización de rendimiento
- [ ] 9.3 Configurar EAS Build
- [ ] 9.4 Build para Android/iOS
- [ ] 9.5 Preparar para app stores
- [ ] 9.6 Documentación final

## 🔧 Dependencias Instaladas

### 📦 Dependencias de Producción
```json
{
  "@expo/vector-icons": "^14.0.3",
  "@react-native-async-storage/async-storage": "^2.1.0",
  "@supabase/supabase-js": "^2.47.10",
  "expo": "~53.0.15",
  "expo-application": "~6.0.6",
  "expo-av": "~15.1.4",
  "expo-camera": "~16.1.10",
  "expo-constants": "~17.1.6",
  "expo-dev-client": "~5.0.9",
  "expo-device": "~7.0.1",
  "expo-haptics": "~14.1.4",
  "expo-image-picker": "~16.1.10",
  "expo-linear-gradient": "~14.1.5",
  "expo-location": "~18.1.6",
  "expo-router": "~5.1.2",
  "expo-status-bar": "~2.2.3",
  "expo-system-ui": "~5.0.9",
  "nativewind": "^2.0.11",
  "openai": "^4.73.0",
  "react": "19.0.0",
  "react-native": "0.79.4",
  "react-native-reanimated": "~3.17.4",
  "react-native-safe-area-context": "5.4.0",
  "react-native-url-polyfill": "^2.0.0"
}
```

### 🛠️ Dependencias de Desarrollo
```json
{
  "@babel/core": "^7.25.2",
  "@types/node": "^22.10.2",
  "@types/react": "~19.0.10",
  "tailwindcss": "^3.4.17",
  "typescript": "~5.8.3"
}
```

## 🔑 Consideraciones Técnicas

### 🛡️ Seguridad
- Almacenar API keys en variables de entorno
- Validación de entrada en cliente y servidor
- Autenticación segura con Supabase
- Rate limiting para API calls

### ⚡ Rendimiento
- Optimización de imágenes antes del envío
- Cache de resultados anteriores
- Lazy loading de componentes
- Minimizar re-renders innecesarios

### 📱 UX/UI
- ✅ Feedback visual inmediato para acciones (implementado)
- ✅ Estados de loading intuitivos (placeholders premium)
- ✅ Manejo elegante de errores (expo-dev-client)
- ✅ Accesibilidad completa (SafeAreaView, contraste)

### 🌍 Internacionalización
- Soporte para múltiples idiomas
- Formateo de fechas y números por región
- Texto dinámico desde OpenAI en idioma local

## 📝 Notas de Desarrollo

- **Metodología**: Desarrollo iterativo por fases ✅
- **Testing**: Testing en dispositivos reales frecuente ✅
- **Versionado**: Git con commits descriptivos ✅
- **Documentación**: Actualizar context.md con cada fase completada ✅

### 🐛 Problemas Resueltos en Fase 1
- ✅ Error: `TypeError: getDevServer is not a function` → Solucionado con expo-dev-client
- ✅ Warnings de rutas inexistentes → Creadas rutas auth/ y analysis/
- ✅ Incompatibilidad de dependencias → Actualizadas a versiones Expo SDK 53
- ✅ Problemas de conexión QR → Resuelto con configuración de red

### 🎯 Configuraciones Clave
- ✅ Expo Router configurado con file-based routing
- ✅ TailwindCSS con paleta Dark Elegance personalizada
- ✅ TypeScript con tipos completos para el proyecto
- ✅ Permisos de cámara y ubicación configurados en app.json
- ✅ expo-dev-client para mejor debugging

---

**Estado Actual**: 🚀 **FASE 5 COMPLETADA + FASE 6 (3/6 SUBFASES)** - Sistema completo de autenticación, perfiles familiares, IA personalizada, **sistema de límites y registro completado**, historial funcional, pantalla de perfil y sistema de voz en menús. Continuando Fase 6 (Favoritos, Búsqueda, Componentes)

## 🎨 **MEJORAS RECIENTES - Sesión de UI/UX Premium**

### 🤖 **Optimización de Prompts de IA**
- **Problema resuelto**: Respuestas demasiado descriptivas que incluían elementos irrelevantes
- **Solución implementada**: Prompts específicos que se enfocan SOLO en el elemento principal
- **Mejoras técnicas**:
  - Límite de 3-4 líneas máximo por respuesta
  - Instrucciones claras: "Ignora el fondo y elementos secundarios"  
  - Enfoque en funcionalidad y características clave del objeto principal
  - Eliminación de descripciones contextuales innecesarias

### 📱 **Modal Premium Independiente**
- **Problema resuelto**: Tarjeta básica de resultado con diseño poco atractivo
- **Solución implementada**: Modal fullscreen independiente con tipografía premium
- **Características del nuevo modal**:
  - **Pantalla completa** con animación slide elegante
  - **Imagen principal** (40% de altura) con overlay sutil
  - **Botones flotantes** transparentes para cerrar/compartir
  - **Badge dinámico** con iconos según tipo de análisis
  - **Tipografía premium**: fontSize 18, lineHeight 28, letterSpacing 0.2
  - **Score de confianza** con emojis visuales (🎯 👍 🤔)
  - **Diseño minimalista** enfocado en la respuesta de IA

### ✨ **Impacto en la Experiencia de Usuario**
- **Respuestas más útiles**: Información concisa sobre el elemento principal
- **Diseño más elegante**: Modal premium que reemplaza tarjeta básica
- **Mejor legibilidad**: Tipografía optimizada para lectura cómoda
- **Interfaz limpia**: Eliminación de metadatos técnicos innecesarios
- **Interacción fluida**: Modal independiente que no interfiere con el flujo de cámara

### 🔊 **Funcionalidad: Texto a Voz con OpenAI TTS**

#### 🎯 **Características Implementadas**
- **OpenAI TTS API**: Uso de modelos `tts-1`, `tts-1-hd` y `gpt-4o-mini-tts` para audio de alta calidad
- **6 Voces Profesionales**: alloy, echo, fable, onyx, nova, shimmer con descripciones
- **Hook personalizado**: `useTextToSpeech` completamente reescrito para OpenAI
- **Componente premium**: `AudioButton` con 3 tamaños y variantes de diseño
- **Integración seamless**: Botón integrado en el modal de resultados
- **Auto-limpieza**: Detiene el audio automáticamente al cerrar el modal
- **Expo AV**: Reproducción de audio desde URLs/streams de OpenAI

#### ⚙️ **Configuración Técnica OpenAI TTS**
- **Modelo por defecto**: `gpt-4o-mini-tts` (modelo TTS más avanzado)
- **Voz por defecto**: `nova` (voz femenina natural)
- **Velocidad**: 0.9 (optimizada para comprensión)
- **Formato**: MP3 con calidad profesional
- **Estados**: isPlaying, isPaused, canSpeak, isInitialized, isLoading

#### 🎨 **Voces Disponibles**
- **Alloy**: Voz neutra y equilibrada
- **Echo**: Voz masculina cálida  
- **Fable**: Voz femenina expresiva
- **Onyx**: Voz masculina profunda
- **Nova**: Voz femenina joven (por defecto)
- **Shimmer**: Voz femenina suave

#### 🔧 **Dependencias Agregadas**
- **expo-av**: Para reproducción de audio desde URLs
- **OpenAI Speech API**: Integrada en `services/openai.ts`

### 📊 **Archivos Implementados en Fase 4 + Sistema de Voz**
- `context/AuthContext.tsx` - Context completo de autenticación (NUEVO)
- `services/supabase.ts` - Cliente Supabase con timeouts optimizados (NUEVO)
- `app/auth/login.tsx` - Pantalla de login premium (NUEVO)
- `app/auth/register.tsx` - Pantalla de registro premium (NUEVO)
- `components/Profile/KidProfileCard.tsx` - Tarjetas de perfiles familiares (NUEVO)
- `components/Profile/CreateKidProfile.tsx` - Modal creación de perfiles (NUEVO)
- `app/profile/select-user.tsx` - Pantalla tipo Netflix (NUEVO)
- `services/analysisHistory.ts` - Persistencia de historial (NUEVO)
- `hooks/useHistoryData.ts` - Hook de historial personalizado (NUEVO)
- `app/(tabs)/index.tsx` - Integración sistema de voz en menús
- `components/Camera/CameraView.tsx` - Narración automática agregada
- `components/Analysis/LoadingAnalysis.tsx` - Mensajes de voz integrados
- `package.json` - Dependencias Supabase, expo-av, image-picker agregadas

## 💎 **FASE 5 COMPLETADA - Sistema de Límites y Registro**

### 🎯 **Modelo de Negocio Implementado**
- **Usuarios Invitados**: 3 análisis diarios gratuitos (sin registro necesario)
- **Usuarios Registrados**: Análisis ilimitados + funciones avanzadas (100% GRATIS)
- **Estrategia**: Conversión suave mediante valor agregado, no restricciones agresivas
- **Diferenciador**: Sistema familiar con perfiles múltiples y IA personalizada por edad

### 🔧 **Sistema Técnico Robusto**
- **Tracking Dual**: AsyncStorage (local) + Supabase (remoto) con sincronización inteligente
- **Device ID Único**: Generado automáticamente usando expo-device + expo-application
- **Reset Diario**: Límites se reinician automáticamente cada medianoche
- **Sin Race Conditions**: Refresh automático antes de análisis para evitar inconsistencias
- **Política UPDATE/INSERT**: Evita conflictos de constraints en Supabase

### 🎨 **UX de Conversión Premium**
- **Pantalla Especial**: UI distinta cuando se alcanza el límite (no modal reactivo)
- **Modal de Conversión**: `LimitReachedModal` con diseño Dark Elegance premium
- **Beneficios Claros**: Lista visual de ventajas de registrarse (análisis ilimitados, perfiles, etc.)
- **Call-to-Action Suave**: Invitación elegante, no agresiva
- **Social Proof**: "Más de 1,000 familias ya disfrutan de SapiSabe"

### 🛠️ **Herramientas de Desarrollo**
- **Botón Reset**: 🔄 Verde visible solo en `__DEV__` para testing rápido
- **Indicadores Visuales**: Estado en tiempo real de límites (X/3 restantes)
- **Logs Completos**: Tracking detallado de sincronización y operaciones
- **Testing Robusto**: Flujo completo probado desde límite hasta conversión

### 📊 **Archivos Implementados en Fase 5**
- `database_setup.sql` - Tabla `daily_usage_limits` con políticas RLS (NUEVO)
- `services/usageLimits.ts` - Servicio completo de límites con sincronización (NUEVO)
- `hooks/useUsageLimits.ts` - Hook reactivo con detección de usuarios registrados (NUEVO)
- `components/Conversion/LimitReachedModal.tsx` - Modal premium de conversión (NUEVO)
- `components/UI/UsageLimitsIndicator.tsx` - Indicador visual de límites (NUEVO)
- `hooks/useAnalysis.ts` - Integrado con verificación de límites pre-análisis (MODIFICADO)
- `app/(tabs)/index.tsx` - UI específica para límites + herramientas dev (MODIFICADO)
- `package.json` - expo-device, expo-application agregadas (MODIFICADO) 

### 🎯 Funcionalidades Implementadas en Fase 3

#### 🤖 **Análisis de IA Avanzado**
- **Modelo GPT-4o Vision**: Última versión de OpenAI para análisis visual de alta calidad
- **Prompts Inteligentes**: Análisis contextual diferenciado para objetos, monumentos y análisis general
- **Score de Confianza**: Cálculo automático de precisión basado en certidumbre de la respuesta
- **Detección Automática**: Clasificación inteligente del tipo de contenido (objeto/monumento/general)

#### 🖼️ **Procesamiento de Imágenes**
- **Validación Completa**: Verificación de existencia, tamaño y formato de imágenes
- **Optimización Automática**: Conversión eficiente a base64 con límites de tamaño
- **Manejo de Errores**: Mensajes claros y específicos para cada tipo de problema
- **Metadatos Detallados**: Tracking de tamaños, tiempos de procesamiento y estadísticas

#### 📱 **Estados de Análisis Avanzados**
- **Preparing**: Validación y conversión de imagen con barra de progreso (30%)
- **Analyzing**: Envío a OpenAI y procesamiento con IA (70%)  
- **Complete**: Resultado exitoso con análisis completo y metadatos
- **Error**: Manejo elegante de errores con opciones de retry

#### 🎨 **Componentes Premium de IA**
- **LoadingAnalysis**: Componente de carga con progreso visual, iconos dinámicos y detalles técnicos
- **ResultCard**: Tarjeta elegante de resultados con imagen, badges de tipo/confianza, y acciones
- **Error States**: Pantallas de error con diseño consistente y opciones de recovery
- **Progress Tracking**: Indicadores visuales de progreso con porcentajes y mensajes contextuales

#### 🔧 **Integración Completa**
- **Hook useAnalysis**: Gestión centralizada de estados de análisis con actions y getters
- **useCamera Extendido**: Integración perfecta entre captura de fotos y análisis de IA
- **Estado Global**: Sincronización entre componentes de cámara y análisis
- **Flujo Completo**: Desde captura hasta resultado sin interrupciones 