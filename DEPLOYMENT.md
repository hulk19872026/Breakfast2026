# 🚀 Deployment Guide — Railway + App Stores

Complete instructions to go from GitHub repo → live web app → App Store + Play Store.

---

## STEP 1 — Merge these files into your existing project

Copy every file from this zip into your `breakfast-bible/` repo, replacing any that already exist:

```
server.js              ← replaces old version (now serves built React in prod)
package.json           ← replaces old version (adds Capacitor deps)
vite.config.js         ← replaces old version
index.html             ← replaces old version (adds PWA meta tags)
railway.json           ← NEW
capacitor.config.ts    ← NEW
.env.example           ← replaces old version
public/manifest.json   ← NEW (PWA manifest)
generate-icons.mjs     ← NEW (icon generator script)
src/utils/claude.js    ← replaces old version (supports Railway URL)
```

Then commit and push:

```bash
cd breakfast-bible
git add .
git commit -m "Add Railway + PWA + Capacitor config"
git push
```

---

## STEP 2 — Deploy to Railway

### 2a. Create your Railway account
Go to **railway.app** → Sign up with GitHub (uses the same account).

### 2b. Create a new project
1. Click **New Project**
2. Click **Deploy from GitHub repo**
3. Authorize Railway to access your repos
4. Select **breakfast-bible**
5. Click **Deploy Now**

Railway reads `railway.json` and knows how to build and start your app.

### 2c. Add environment variables
In your Railway project dashboard:
1. Click your service (the box that appeared)
2. Click **Variables** tab
3. Click **New Variable** and add:

| Variable | Value |
|----------|-------|
| `ANTHROPIC_API_KEY` | your key from console.anthropic.com |
| `NODE_ENV` | `production` |

4. Railway auto-redeploys when you save variables.

### 2d. Get your URL
After deployment (2–3 min), click **Settings** → **Domains**.
You'll see a URL like: `breakfast-bible-production.up.railway.app`

✅ **Your web app is now live.** Every `git push` auto-redeploys in ~2 min.

### 2e. Custom domain (optional)
In Railway → Settings → Domains → Add Custom Domain.
Point your DNS CNAME to the Railway-provided address.

---

## STEP 3 — Make It a PWA (Install on Phone Without App Stores)

This is the fastest path — works on both iPhone and Android right now.

### Generate your icons first
```bash
npm install canvas --save-dev   # only needed for icon generation
node generate-icons.mjs          # creates all sizes in public/icons/
```

OR go to **realfavicongenerator.net** → upload any 512×512 PNG → download all sizes → place in `public/icons/`.

### Test it
After `git push` and Railway redeploys:

**On iPhone (Safari):**
1. Open your Railway URL in Safari
2. Tap the Share button (box with arrow)
3. Tap "Add to Home Screen"
4. Tap "Add"
→ App icon appears on your home screen. Launches fullscreen, no browser chrome.

**On Android (Chrome):**
1. Open your Railway URL in Chrome
2. Chrome shows "Add to Home Screen" banner automatically
3. Or: tap the three-dot menu → "Install app"
→ App installs like a native app.

---

## STEP 4 — Wrap for App Stores with Capacitor

### 4a. Install dependencies
```bash
npm install
```

### 4b. Initialize Capacitor (first time only)
```bash
npx cap init "Global Breakfast Bible" "com.yourname.breakfastbible" --web-dir dist
```

Replace `yourname` with your actual name or company name.
This Bundle ID must be unique across all of Apple's App Store.

### 4c. Update your .env for the Capacitor build
Create `.env` (copy from `.env.example`):
```
VITE_API_URL=https://your-actual-app.up.railway.app
```

The Capacitor app runs on the user's phone and needs to reach your Railway server.

### 4d. Build the web app and sync to native projects
```bash
npm run build          # builds React → dist/
npx cap add ios        # creates ios/ folder (first time only)
npx cap add android    # creates android/ folder (first time only)
npx cap sync           # copies dist/ and plugins into both native projects
```

After this, whenever you change code:
```bash
npm run build && npx cap sync
```

---

## STEP 5 — iOS App Store

### Requirements
- A **Mac** (Xcode only runs on macOS — required)
- **Xcode** installed (free from Mac App Store)
- **Apple Developer Program**: $99/year at developer.apple.com/programs

### 5a. Open in Xcode
```bash
npx cap open ios
```

### 5b. Configure signing in Xcode
1. Click your project name in the left panel
2. Click **Signing & Capabilities** tab
3. Under Team: select your Apple Developer account
4. Bundle Identifier: `com.yourname.breakfastbible`
5. Let Xcode manage signing automatically ✅

### 5c. Set version numbers
Still in the project settings:
- Version: `1.0.0`
- Build: `1`

### 5d. Test on your phone
Connect your iPhone via USB.
In Xcode top bar, select your phone from the device dropdown.
Click ▶ Run.
The app installs and opens on your phone.

### 5e. Create the App Store build
1. In Xcode menu: **Product → Archive**
2. Wait for the archive to complete (2–5 min)
3. The Organizer window appears. Click **Distribute App**
4. Choose **App Store Connect** → Next
5. Choose **Upload** → Next → let Xcode handle everything automatically
6. Click **Upload**

### 5f. Set up in App Store Connect
Go to **appstoreconnect.apple.com**:

1. Click **My Apps** → **+** → **New App**
2. Platform: iOS
3. Name: `Global Breakfast Bible`
4. Primary Language: English
5. Bundle ID: select `com.yourname.breakfastbible`
6. SKU: `breakfastbible001`

Fill in the listing:
- **Subtitle**: `770 Recipes · 72 Countries · AI-Powered`
- **Description**: Write 3–4 paragraphs about the app
- **Keywords**: breakfast, recipes, cooking, international, world food, morning
- **Support URL**: your Railway URL
- **Screenshots**: Required sizes are **6.7 inch** (iPhone 15 Pro Max) and **12.9 inch** (iPad)
  - Easiest method: run the app in iPhone 15 Pro Max simulator in Xcode, take screenshots with Cmd+S

7. Age Rating: **4+** (no objectionable content)
8. Pricing: **Free**
9. Select your uploaded build under **Build**
10. Click **Submit for Review**

Apple reviews take **1–3 business days**. They email you the result.

### What Apple needs to see (to avoid rejection)
The app must demonstrate native value beyond a plain web browser. These Capacitor plugins (already in package.json) add native features:

- **Camera** — Let users take a photo of their fridge to get recipe suggestions
- **Share** — Share recipes via native iOS share sheet  
- **Haptics** — Gentle vibration when saving a favorite

Ask Claude Code to wire these up before submitting.

---

## STEP 6 — Google Play Store

### Requirements
- **Android Studio** (free from developer.android.com/studio)
- **Java JDK 17+** (comes bundled with Android Studio)
- **Google Play Developer Account**: $25 one-time fee at play.google.com/console

### 6a. Open in Android Studio
```bash
npx cap open android
```

### 6b. Wait for Gradle sync
Android Studio will sync dependencies automatically (takes 2–5 min first time).

### 6c. Create your signing keystore (one-time, keep this file forever)
In Android Studio menu:
**Build → Generate Signed Bundle/APK**

1. Choose **Android App Bundle** (AAB) → Next
2. Click **Create new...** under Key store path
3. Choose a safe location — `~/my-release-key.jks`
4. Fill in all the fields and set a strong password
5. **BACK UP THIS FILE SOMEWHERE SAFE — you need it for every future update**

### 6d. Build the signed AAB
After creating the keystore:
1. Complete the Generate Signed Bundle wizard
2. Choose **Release** build variant
3. Click **Finish**
4. The `.aab` file appears in `android/app/release/`

### 6e. Set up in Google Play Console
Go to **play.google.com/console**:

1. Click **Create app**
2. App name: `Global Breakfast Bible`
3. Default language: English
4. App or Game: **App**
5. Free or paid: **Free**
6. Accept declarations → **Create app**

Fill in the store listing:
- Short description (80 chars): `AI-powered breakfast recipes from 72 countries`
- Full description: Write about the ingredient search, country explorer, favorites
- **Screenshots**: Upload for Phone (min 2), 7-inch tablet, 10-inch tablet
- Feature graphic: **1024×500 PNG** — required, shows at top of listing
- App icon: **512×512 PNG** — use your generated icon

7. Content rating questionnaire: answer honestly (recipe app = very low rating)
8. Target audience: **18+** (or 13+ if you want younger users)

Upload your build:
1. Go to **Production** → **Releases** → **Create new release**
2. Upload your `.aab` file
3. Add release notes: `Initial release — 556 recipes, 72 countries, AI search`
4. Click **Review release** → **Start rollout to Production**

Google reviews the first submission in **1–3 days**. Updates after approval usually go live within hours.

---

## DEPLOYMENT CHEAT SHEET

```
📝 Code change
     ↓
git push  →  Railway auto-redeploys in ~2 min  →  Web app updated

📱 App Store update
npm run build && npx cap sync
→ Open Xcode → Archive → Upload to App Store Connect
→ Submit new build for review → 1-3 days

🤖 Play Store update
npm run build && npx cap sync
→ Open Android Studio → Generate new signed AAB
→ Upload to Play Console → usually live within hours
```

---

## COSTS

| Service | Cost |
|---------|------|
| Railway Hobby plan | $5/month (free tier available) |
| Anthropic API | ~$0.003 per AI search |
| Apple Developer | $99/year |
| Google Play | $25 one-time |
| **Total to launch** | **~$125 first year** |

---

## SUPPORT

- Railway docs: docs.railway.app
- Capacitor docs: capacitorjs.com/docs
- App Store Connect help: developer.apple.com/help
- Google Play help: support.google.com/googleplay/android-developer
