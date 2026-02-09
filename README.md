# 🕰️ Ultra-Low Power PWA Clock

[![PWA](https://img.shields.io/badge/PWA-Ready-0051e0?style=flat-square&logo=pwa)](https://web.dev/progressive-web-apps/)
[![License: MIT](https://img.shields.io/badge/License-MIT-grey?style=flat-square)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square)](https://github.com/shiftcrypto69/low-power-pwa-clock/graphs/commit-activity)

A minimalist, high-efficiency digital clock designed for **OLED/AMOLED** devices. Engineered to minimize CPU wakeups and battery drain through precise DOM manipulation and PWA caching.

## 🚀 Engineering Highlights

- **Energy Efficient Design:** Uses `#000000` (True Black) background to shut down pixels on OLED screens.
- **Minimalist UI:** Grey-glow typography (`#444`) with ultra-light font weight to reduce sub-pixel activation.
- **Drift-Corrected Updates:** Instead of a fixed 1-second interval, the logic calculates the exact delay until the next minute transition to minimize CPU cycles.
- **OLED Protection:** Built-in "Anti Burn-In" drift mechanism that shifts clock position by 1-5 pixels every minute.
- **Offline First:** Full Service Worker integration for zero-latency loading and 100% offline capability.

## 🛠️ Technical Specifications

| Feature | Implementation |
| :--- | :--- |
| **Rendering** | Vanilla JavaScript (No Frameworks) |
| **Caching Strategy** | Cache-First with Force-Update Service Worker |
| **Update Frequency** | 1 per 60,000ms (Minute-based) |
| **UX** | Tap-to-Fullscreen (Full Immersive Mode) |
| **Color Palette** | Dark Grey Gradients (0.0001W theoretical simulation) |

## 📦 Installation

This is a **Progressive Web App (PWA)**. 

1. Visit the [Live Demo](https://shiftcrypto69.github.io/low-power-pwa-clock/).
2. On Mobile: Tap **"Add to Home Screen"** via the browser menu.
3. On Desktop: Click the **Install** icon in the URL bar.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Developed with focus on minimalist digital aesthetics and battery longevity.*
