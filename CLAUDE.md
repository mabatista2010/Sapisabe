# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SapiSabe is a multilingual educational landing page and web application for children ages 3-8, built with vanilla HTML/CSS/JavaScript. The app uses AI (GPT-4 Vision) to analyze photos and provide educational explanations tailored to children's ages.

## Common Development Commands

### Local Development
```bash
# No build step required - static HTML/CSS/JS
# Use any local server like:
python3 -m http.server 8000
# or
npx serve .
# or VS Code Live Server extension
```

### Deployment
- The site auto-deploys to Vercel from the main branch
- Production URL: https://sapisabe.com

## Architecture & Structure

### Core Technologies
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Glassmorphism effects, CSS animations, responsive grid layouts
- **i18n**: Custom translation system in `js/translations.js` and `js/legal-translations.js`
- **Deployment**: Vercel (configured via `vercel.json`)

### Key Files & Components

#### Landing Page (`index.html`)
- Multi-section landing with hero, features, testimonials, pricing
- Language switcher integrated
- App opening system for mobile devices

#### Legal Pages
- `/privacy.html`, `/privacy/index.html` - Privacy policy
- `/terms.html`, `/terms/index.html` - Terms of service  
- `/cookies.html`, `/cookies/index.html` - Cookie policy
- `/legal.html`, `/legal/index.html` - Combined legal page
- All legal pages support multilingual content via `legal-translations.js`

#### Email Templates
- `email-template-confirmation.html` - Full-featured confirmation email
- `email-template-confirmation-simple.html` - Minimal confirmation email
- `/email-confirmation/index.html` - Confirmation success page

#### App Integration (`app-opener.js`)
- Detects device type (mobile/desktop)
- Attempts to open native app via URL schemes
- Falls back to app store links
- Shows QR code for desktop users

#### Analysis Page (`analisis.html`)
- Displays AI analysis results with confidence scores
- Image preview with analysis type badges
- Share functionality

### Translation System
The site implements a custom internationalization system:
- Translations stored in JavaScript objects
- Language detection via browser settings
- Persistent language selection in localStorage
- Dynamic content updates without page reload
- Supports: Spanish, English, French, German, Italian, Portuguese

### Design System
- **Color Palette**: 
  - Primary: #6366f1 (purple) → #8b5cf6 (violet gradient)
  - Accent: #00d4ff (cyan)
  - Dark backgrounds: #0f0f23, #1a1a2e
- **Effects**: Glassmorphism, gradient overlays, smooth animations
- **Typography**: System fonts with fallbacks
- **Responsive**: Mobile-first design with breakpoints at 768px, 1024px

## Key Implementation Details

### Mobile App Detection
The `app-opener.js` implements a multi-method approach:
1. Tries custom URL schemes (`sapisabe://`)
2. Falls back to bundle ID schemes
3. Uses deep links as backup
4. Detects app opening via visibility/blur events

### SEO & Meta Tags
Comprehensive meta tags for:
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- WhatsApp/Telegram preview
- App Store/Google Play smart banners

### Performance Optimizations
- WebP images with fallbacks
- Deferred script loading
- CSS animations use `transform` and `opacity` for GPU acceleration
- Intersection Observer for lazy loading testimonials

## Important Notes

- **No build step**: This is a static site - changes to HTML/CSS/JS are immediate
- **Image paths**: Use absolute paths from root (`/assets/...`)
- **Translations**: When adding new content, update both `translations.js` and `legal-translations.js` as needed
- **Mobile testing**: Test app opening functionality on actual devices
- **Browser compatibility**: Target modern browsers (Chrome 90+, Safari 14+, Firefox 88+)