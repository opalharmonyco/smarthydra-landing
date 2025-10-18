# SmartHydra Landing Page - Environment Setup

This document explains how to set up the SmartHydra landing page for different environments.

## 🚀 Quick Setup

Use the deployment script to switch between environments:

```bash
# For local development
./deploy.sh local

# For production deployment
./deploy.sh production
```

## 📋 Environment Behavior

### 🏠 Local Development (`./deploy.sh local`)

**Default Behavior:**
- **Root URL** (`http://localhost:8080/`): Shows the **full landing page**
- **Coming Soon**: Add `?coming-soon=true` parameter
- **Direct Access**: `http://localhost:8080/index-coming-soon.html`

**File Structure:**
- `index.html` → Full landing page (default)
- `index-coming-soon.html` → Coming soon page

### 🏭 Production (`./deploy.sh production`)

**Default Behavior:**
- **Root URL** (`https://smarthydra.app/`): Shows the **coming soon page**
- **Full Page**: Add `?preview=smarthydra-dev-2025` parameter
- **Direct Access**: `https://smarthydra.app/index-full.html`

**File Structure:**
- `index.html` → Coming soon page (default)
- `index-full.html` → Full landing page

## 🔧 How It Works

### Environment Detection

The `preview-handler.js` automatically detects the environment:

```javascript
const isLocal = window.location.hostname === 'localhost' || 
               window.location.hostname === '127.0.0.1' || 
               window.location.hostname.includes('localhost');
const isProduction = window.location.hostname === 'smarthydra.app';
```

### URL Parameters

- **Local Development:**
  - `?coming-soon=true` → Shows coming soon page
  - Default (no params) → Shows full landing page

- **Production:**
  - `?preview=smarthydra-dev-2025` → Shows full landing page
  - Default (no params) → Shows coming soon page

## 🛠️ Development Workflow

### 1. Local Development

```bash
# Set up for local development
./deploy.sh local

# Start development server
python3 -m http.server 8080

# Access URLs:
# - Full page: http://localhost:8080/
# - Coming soon: http://localhost:8080/?coming-soon=true
```

### 2. Production Deployment

```bash
# Set up for production
./deploy.sh production

# Commit and push changes
git add .
git commit -m "Deploy to production"
git push origin main

# Vercel will automatically deploy
```

## 📁 File Structure

The deployment script manages these files:

- `index.html` - The default page served by the web server
- `index-full.html` - The full landing page
- `index-coming-soon.html` - The coming soon page
- `preview-handler.js` - Environment-aware routing logic
- `deploy.sh` - Deployment script

## 🔍 Debugging

Check the browser console for debug information:

```javascript
🐉 SmartHydra Landing Page Preview System

Environment: Local Development
Current status: Full page active

Local Development Mode:
• Default: Full landing page (http://localhost:8080/)
• Coming soon: Add ?coming-soon=true (http://localhost:8080/?coming-soon=true)
```

## 🚨 Important Notes

1. **Always run `./deploy.sh production` before pushing to production**
2. **The script renames files, so git will show file renames**
3. **Both environments use the same codebase, just different default pages**
4. **The preview handler works on both environments automatically**

## 🎯 Benefits

- ✅ **Simple local development** - Full page by default
- ✅ **Production safety** - Coming soon by default
- ✅ **Easy switching** - One command to change environments
- ✅ **No code changes** - Same files, different defaults
- ✅ **Automatic detection** - Works based on hostname
