<div align="center">
  <img src="public/logo.svg" alt="Ouloulou Ice Rolls Logo" width="200"/>
  
  # Ouloulou Ice Rolls
  
  **Thai Ice Cream Rolls in Switzerland**
  
  [![Vue 3](https://img.shields.io/badge/Vue-3.5-brightgreen.svg)](https://vuejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.1-646CFF.svg)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4.svg)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-GNU-blue.svg)](LICENSE)
</div>

---

## 🍦 About

Modern, responsive website for **Ouloulou Ice Rolls** - Artisanal Thai ice cream rolls in Switzerland. Built with Vue 3, Vite, and TailwindCSS for optimal performance and user experience.

### ✨ Features

- 🎨 **Modern Design** - Beautiful UI with ice cream theme colors
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Lightning Fast** - Built with Vite for instant HMR
- 🖼️ **Rich Gallery** - 50+ photos and 20+ videos showcasing ice cream rolls
- 🤝 **Client Showcase** - Display of 30+ partner brands and events
- 🏢 **Service Pages** - Detailed pages for festivals, weddings, birthdays, corporate events
- 📧 **Contact Form** - Easy to reach form with validation
- 🌐 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant design

---

## 🚀 Local Installation

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ (included with Node.js)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/iyotee/OuloulouRolls.git
   cd OuloulouRolls
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 🌐 Infomaniak Deployment

### Method 1: Git Deployment (Recommended)

1. **Login to Infomaniak Panel**
   - Go to your Infomaniak hosting panel
   - Navigate to **Web Hosting** → **Node.js Applications**

2. **Create New Application**
   - Click **Create Application**
   - Choose **Node.js 18+**
   - Application name: `ouloulourolls`

3. **Configure Git Repository**
   - Repository URL: `https://github.com/iyotee/OuloulouRolls.git`
   - Branch: `main`
   - Build command: `npm install && npm run build`
   - Start command: `npx vite preview --host 0.0.0.0 --port 3000`
   - Port: `3000`

4. **Environment Variables** (Optional)
   ```
   NODE_ENV=production
   PORT=3000
   ```

5. **Deploy**
   - Click **Deploy**
   - Wait for build completion
   - Your site will be live at your configured domain

### Method 2: Manual Deployment via FTP

1. **Build locally**
   ```bash
   npm install
   npm run build
   ```

2. **Upload files via FTP**
   - Upload the entire `dist/` folder contents to your web root
   - Configure your domain to point to these files

### Build & Start Commands

For Infomaniak Node.js hosting configuration:

**Build Command:**
```bash
npm install && npm run build
```

**Start Command:**
```bash
npx vite preview --host 0.0.0.0 --port 3000
```

### Domain Configuration

1. **In Infomaniak DNS**
   - Type: `CNAME`
   - Name: `www`
   - Value: `your-app.infomaniak.com`

2. **SSL Certificate**
   - Enable automatic SSL in Infomaniak panel
   - Force HTTPS redirect

---

## 📁 Project Structure

```
OuloulouRolls/
├── public/                      # Static assets
│   ├── images/                  # Images
│   │   ├── gallery/             # Gallery photos (50+) and videos (20+)
│   │   └── logos/               # Partner logos (30+)
│   ├── logo.svg                 # Main logo
│   ├── icon.svg                 # Favicon
│   └── favicon.ico              # Browser favicon
├── src/                         # Source code
│   ├── components/              # Vue components
│   │   ├── Header.vue           # Navigation header
│   │   ├── Footer.vue           # Site footer
│   │   └── HelloWorld.vue       # Demo component
│   ├── views/                   # Page views
│   │   ├── Home.vue             # Homepage with hero
│   │   ├── Services.vue         # Services showcase
│   │   ├── Galerie.vue          # Photo/video gallery
│   │   ├── Confiance.vue        # Client testimonials
│   │   ├── Contact.vue          # Contact form
│   │   ├── Privacy.vue          # Privacy policy
│   │   └── Terms.vue            # Terms of service
│   ├── router/                  # Vue Router
│   │   └── index.js             # Routes configuration
│   ├── App.vue                  # Root component
│   ├── main.js                  # App entry point
│   └── style.css                # Global styles
├── index.html                   # HTML entry
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # TailwindCSS configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

---

## 🛠️ Technologies

- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vue Router](https://router.vuejs.org/)** - Official router for Vue.js
- **[PostCSS](https://postcss.org/)** - CSS transformations

---

## 🎨 Customization

### Theme Colors

The ice cream theme colors are defined in TailwindCSS configuration:

```javascript
// tailwind.config.js
colors: {
  pink: '#ff6b9d',
  mint: '#4ecdc4',
  yellow: '#ffe66d',
  orange: '#ff8a65',
  purple: '#a8e6cf',
}
```

### Modifying Content

- **Homepage**: Edit `src/views/Home.vue`
- **Services**: Edit `src/views/Services.vue`
- **Gallery**: Add images to `public/images/gallery/`
- **Partner Logos**: Add logos to `public/images/logos/`
- **Navigation**: Edit `src/components/Header.vue`
- **Footer**: Edit `src/components/Footer.vue`

---

## 🔧 Development

### Hot Module Replacement (HMR)

Vite provides instant updates during development. Changes to `.vue` files will reflect immediately without full page reload.

### Code Quality

```bash
# Install dependencies with audit fix
npm install
npm audit fix --force
```

### Performance Optimization

- **Images**: Use WebP format for better compression
- **Videos**: Compress videos before uploading
- **Lazy Loading**: Images automatically lazy-load
- **Code Splitting**: Automatic route-based splitting

---

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

This project is licensed under the **GNU General Public License**.

See [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Ouloulou Ice Rolls**  
📧 Email: contact@ouloulourolls.ch  
🌐 Website: [ouloulourolls.ch](https://ouloulourolls.ch)  
📱 Instagram: [@ouloulouicerolls](https://instagram.com/ouloulouicerolls)  
📘 Facebook: [OuloulouIceRolls](https://facebook.com/ouloulouicerolls)

---

<div align="center">
  Made with ❤️ in Switzerland 🇨🇭
  
  **Authentic Thai Ice Cream Rolls since 2019**
</div>
