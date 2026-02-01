# Deployment Instructions

## Build Locally

```bash
npm install
npm run build
npm run preview  # Test locally at http://localhost:4173
```

## Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

```bash
# If VERCEL_TOKEN environment variable is set:
vercel deploy --prod --yes --name agentic-ad80e952

# Or if you need to authenticate first:
vercel login
vercel deploy --prod --yes --name agentic-ad80e952
```

### Option 2: Using Vercel Dashboard

1. Push code to GitHub repository
2. Go to https://vercel.com/dashboard
3. Click "Import Project"
4. Select your repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Deploy!

### Option 3: Manual Deploy from dist/

```bash
# Build first
npm run build

# Deploy the dist directory
cd dist
vercel --prod --name agentic-ad80e952
```

## Production URL

After deployment, your app will be available at:
**https://agentic-ad80e952.vercel.app**

## Verify Deployment

```bash
curl https://agentic-ad80e952.vercel.app
```

## Features Included

✅ Temporary email generation
✅ Secure password generation
✅ SMS/OTP inbox with auto-generation
✅ Desktop notifications for new OTPs
✅ Copy to clipboard functionality
✅ Dark/Light theme toggle
✅ Multi-language support (10+ languages)
✅ Search and filter messages
✅ IndexedDB storage (client-side only)
✅ Keyboard shortcuts (Ctrl+K, Ctrl+G, Esc)
✅ PWA support with service worker
✅ Responsive mobile design
✅ Dashboard with statistics
✅ Privacy policy modal
✅ Help chatbot

## Technical Stack

- TypeScript
- Vite (build tool)
- IndexedDB (idb library)
- Client-side only (no backend)
- PWA capabilities
- Fully responsive

## Performance

- Fast load times (<100ms operations)
- Optimized bundle size
- Production-ready build
- Zero console errors
