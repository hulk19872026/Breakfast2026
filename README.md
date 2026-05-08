# Global Breakfast Bible — Railway + App Store Deploy Package

This zip contains **only the files that need to change or be added** to your existing project to enable:

- ✅ Railway deployment (auto-deploys on every git push)
- ✅ PWA (install on phone from browser — works right now)
- ✅ iOS App Store (via Capacitor + Xcode)
- ✅ Google Play Store (via Capacitor + Android Studio)

---

## Files in This Package

| File | Action | What it does |
|------|--------|-------------|
| `server.js` | **Replace** | Now serves built React app in production |
| `package.json` | **Replace** | Adds Capacitor dependencies + new scripts |
| `vite.config.js` | **Replace** | Adds production build optimization |
| `index.html` | **Replace** | Adds PWA meta tags for iOS + Android |
| `railway.json` | **Add new** | Tells Railway how to build and run |
| `capacitor.config.ts` | **Add new** | iOS + Android app configuration |
| `.env.example` | **Replace** | Adds `VITE_API_URL` for Capacitor |
| `public/manifest.json` | **Add new** | PWA manifest with all icon sizes |
| `generate-icons.mjs` | **Add new** | Script to generate app icons |
| `src/utils/claude.js` | **Replace** | Supports Railway URL for Capacitor builds |
| `DEPLOYMENT.md` | **Add new** | Full step-by-step instructions |

---

## Quick Start

```bash
# 1. Copy all files into your existing breakfast-bible repo
# 2. Install new dependencies
npm install

# 3. Generate app icons
node generate-icons.mjs

# 4. Push to GitHub (Railway auto-deploys)
git add . && git commit -m "Railway + PWA + Capacitor" && git push

# 5. Read DEPLOYMENT.md for the full step-by-step guide
```

---

## Edit Before Using

**`capacitor.config.ts`** — change the Bundle ID:
```
com.yourname.breakfastbible  →  com.YOURNAME.breakfastbible
```

**`.env`** — after Railway deploys, add your URL:
```
VITE_API_URL=https://your-actual-app.up.railway.app
```

**`DEPLOYMENT.md`** — read this completely before touching Xcode or Android Studio.
