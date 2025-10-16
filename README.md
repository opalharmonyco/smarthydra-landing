# SmartHydra Landing Page

The official landing page for SmartHydra - Your smart hydration guardian with AI-powered reminders.

## 🎯 Overview

This landing page is designed to convert visitors into app downloads through:

- **Compelling Hero Section** with clear value proposition
- **Feature Benefits** highlighting SmartHydra's unique AI-powered approach
- **Social Proof** with testimonials and statistics
- **Clear Pricing** with free and premium tiers
- **Strong CTAs** optimized for conversion
- **Mobile-First Design** with responsive layout

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2196F3` (Material Blue 500)
- **Water Blue**: `#00BCD4` (Cyan 500) - Main brand color
- **Success Green**: `#4CAF50` (Green 500)
- **Premium Gold**: `#FFCA28` (Amber 600) - Premium features
- **Dark Background**: `#121212` (Dark mode default)

### Typography
- **Primary Font**: Roboto (body text)
- **Display Font**: Google Sans (headings)
- **Scale**: Material 3 typography scale

### Spacing
- **Base Unit**: 4px system
- **Consistent spacing** throughout all components

## 🛠 Development

### Prerequisites
- Node.js (v14 or higher)
- npm

### Setup
```bash
# Install dependencies
npm install

# Development (watch mode)
npm run dev

# Build for production
npm run build

# Build CSS only
npm run build-css
```

### Project Structure
```
smarthydra-landing-page/
├── scss/                 # SCSS source files
│   ├── _variables.scss   # Design tokens & variables
│   ├── _mixins.scss      # Reusable mixins
│   ├── _base.scss        # Base styles & reset
│   ├── _components.scss  # Component styles
│   └── main.scss         # Main SCSS file
├── css/                  # Compiled CSS
├── js/                   # JavaScript files
├── index.html            # Main HTML file
└── package.json          # Dependencies & scripts
```

## 📱 Features

### Responsive Design
- **Mobile-first** approach
- **Breakpoints**: 640px, 768px, 1024px, 1280px
- **Flexible grid** system
- **Touch-friendly** interactions

### Performance
- **Optimized images** with lazy loading
- **Minified CSS** for production
- **Efficient animations** with GPU acceleration
- **Fast loading** with preloaded resources

### Accessibility
- **WCAG 2.1 AA** compliant
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** mode support
- **Focus management** for mobile menu

### SEO
- **Semantic HTML** structure
- **Meta tags** optimized
- **Open Graph** tags for social sharing
- **Structured data** for search engines
- **Fast loading** for better rankings

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `.` (root)
4. Deploy automatically on push

### Manual Deployment
1. Run `npm run build` to compile CSS
2. Upload all files to your web server
3. Ensure `index.html` is in the root directory

## 📊 Analytics

The landing page includes tracking for:
- **Button clicks** (Download CTAs)
- **Section views** (scroll tracking)
- **Mobile menu** interactions
- **Form submissions** (when added)

### Google Analytics 4
Add your GA4 tracking ID to enable analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Customization

### Colors
Update colors in `scss/_variables.scss`:
```scss
$primary-blue: #2196F3;
$water-blue: #00BCD4;
$premium-gold: #FFCA28;
```

### Content
- **Hero section**: Update in `index.html`
- **Features**: Modify feature cards
- **Pricing**: Update pricing tiers
- **Testimonials**: Replace with real testimonials

### Styling
- **Components**: Modify in `scss/_components.scss`
- **Layout**: Update in `scss/_base.scss`
- **Animations**: Customize in `scss/main.scss`

## 📈 Conversion Optimization

### A/B Testing Opportunities
- **Hero headlines** and subheadlines
- **CTA button** text and colors
- **Pricing** presentation
- **Feature** order and descriptions
- **Testimonial** placement

### Performance Metrics
- **Page load time** < 3 seconds
- **First Contentful Paint** < 1.5 seconds
- **Largest Contentful Paint** < 2.5 seconds
- **Cumulative Layout Shift** < 0.1

## 🔧 Maintenance

### Regular Updates
- **Content updates** for new features
- **Performance monitoring** and optimization
- **Analytics review** and improvement
- **A/B test** results implementation

### Browser Support
- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 📞 Support

For questions or issues:
- **Email**: feedback@smarthydra.app
- **GitHub Issues**: Create an issue in this repository

## 📄 License

© 2024 SmartHydra. All rights reserved.