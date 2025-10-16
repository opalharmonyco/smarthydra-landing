# SmartHydra Coming Soon System

## 🎯 Overview

The SmartHydra landing page now supports a "Coming Soon" mode that shows a beautiful coming soon page to the public while allowing developers to preview the full landing page.

## 🔧 How It Works

### Public View (Coming Soon Mode)
- **URL**: `https://smarthydra.app/`
- **Shows**: Beautiful coming soon page with email signup
- **Features**: Animated water drops, feature previews, email collection

### Developer Preview (Full Page Mode)
- **URL**: `https://smarthydra.app/?preview=smarthydra-dev-2025`
- **Shows**: Full landing page with all features
- **Access**: Only accessible with the secret preview parameter

## 🛠️ Mode Switching

### Using npm Scripts
```bash
# Set to coming soon mode (public sees coming soon page)
npm run coming-soon

# Set to full page mode (public sees full landing page)
npm run full-page

# Show preview URL for developers
npm run preview
```

### Using Node Script Directly
```bash
# Set to coming soon mode
node switch-mode.js coming-soon

# Set to full page mode  
node switch-mode.js full-page

# Show preview info
node switch-mode.js preview
```

## 🔑 Developer Access

### Preview URL
To access the full landing page while in coming soon mode:
```
https://smarthydra.app/?preview=smarthydra-dev-2025
```

### Local Development
For local testing:
```
http://localhost:8000/?preview=smarthydra-dev-2025
```

## 📁 File Structure

```
smarthydra-landing-page/
├── index.html              # Full landing page
├── coming-soon.html        # Coming soon page
├── preview-handler.js      # Handles preview logic
├── switch-mode.js          # Mode switching utility
├── vercel.json            # Vercel routing configuration
└── .gitignore             # Excludes coming-soon.html from git
```

## 🚀 Deployment Workflow

### 1. Development Phase (Coming Soon Mode)
```bash
# Set to coming soon mode
npm run coming-soon

# Deploy to production
/deploy-landing-page

# Public sees: Coming soon page
# Developers access: ?preview=smarthydra-dev-2025
```

### 2. Launch Phase (Full Page Mode)
```bash
# Set to full page mode
npm run full-page

# Deploy to production
/deploy-landing-page

# Public sees: Full landing page
```

## 🎨 Coming Soon Page Features

- **Animated Background**: Floating water drops and gradient animations
- **Brand Consistency**: Uses SmartHydra colors and styling
- **Email Collection**: Simple form to collect early interest
- **Feature Preview**: Shows key features without revealing everything
- **Responsive Design**: Works perfectly on all devices
- **Developer Preview Link**: Easy access for developers

## 🔒 Security

- **Secret Parameter**: Only developers with the secret can access full page
- **No Backend Required**: All logic handled client-side
- **Easy to Change**: Secret can be updated in `preview-handler.js`

## 📊 Analytics

The coming soon page includes:
- Email signup tracking
- Page view analytics
- Developer preview access tracking

## 🎯 Benefits

1. **Build Anticipation**: Generate interest before launch
2. **Collect Emails**: Build your launch list
3. **Test Safely**: Developers can test full page without public seeing it
4. **Easy Launch**: Switch to full page when ready
5. **Professional**: Looks polished and ready for launch

## 🔄 Switching Between Modes

### Before Launch (Coming Soon)
```bash
npm run coming-soon
/deploy-landing-page
```

### At Launch (Full Page)
```bash
npm run full-page
/deploy-landing-page
```

### Check Current Mode
```bash
npm run preview
```

## 🎉 Launch Checklist

- [ ] Set to coming soon mode
- [ ] Deploy and test coming soon page
- [ ] Test developer preview access
- [ ] Collect emails and build anticipation
- [ ] When ready to launch: switch to full page mode
- [ ] Deploy full landing page
- [ ] Announce launch!

---

**Note**: The coming soon page is automatically excluded from git and handled by Vercel routing, so you don't need to worry about it being committed to your repository.
