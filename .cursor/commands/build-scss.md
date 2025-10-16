# Build SCSS to CSS

Builds the SCSS files to CSS for the SmartHydra landing page with interactive options.

## Usage

```
/build-scss
```

## What it does

1. **Validates Environment**: Checks if you're in the correct repository directory
2. **Shows SCSS Structure**: Displays the current SCSS file organization
3. **Lists Build Options**: Shows all available npm build commands
4. **Interactive Menu**: Lets you choose between development and production builds
5. **Executes Build**: Runs the selected build command
6. **Provides Feedback**: Shows build status and next steps

## Build Options

### Development Build
- **Command**: `npm run dev` or `npm run watch-css`
- **Features**: 
  - Expanded CSS (readable)
  - Source maps for debugging
  - Watch mode (auto-rebuild on changes)
- **Use when**: Actively editing SCSS files

### Production Build
- **Command**: `npm run build` or `npm run build-css`
- **Features**:
  - Compressed CSS (minified)
  - No source maps
  - One-time build
- **Use when**: Ready to deploy

## SCSS File Structure

```
scss/
├── main.scss          # Main entry point
├── _variables.scss    # Colors, fonts, spacing
├── _mixins.scss       # Reusable styles and animations
├── _base.scss         # Reset, typography, layout
└── _components.scss   # UI components (buttons, cards, etc.)
```

## Build Process

1. **Input**: `scss/main.scss` (imports all partials)
2. **Compiler**: Dart Sass (via npm package)
3. **Output**: `css/main.css`
4. **Source Maps**: Generated in development mode
5. **Compression**: Applied in production mode

## Example Output

```
🎨 Building SCSS to CSS for SmartHydra Landing Page...

🔧 Available build options:

📁 SCSS Structure:
  scss/
  ├── main.scss (main entry point)
  ├── _variables.scss (colors, fonts, spacing)
  ├── _mixins.scss (reusable styles)
  ├── _base.scss (reset, typography)
  └── _components.scss (UI components)

🚀 Build Commands:

  Development (with source maps, expanded CSS):
    npm run dev
    npm run watch-css

  Production (compressed CSS, no source maps):
    npm run build
    npm run build-css

Which build would you like to run?
1) Development build (with watch mode)
2) Production build (one-time)
3) Show build commands only
```

## Troubleshooting

### Common Issues
- **SCSS syntax errors**: Check terminal output for specific error messages
- **Missing dependencies**: Run `npm install` to install required packages
- **File not found**: Verify SCSS file paths in @import statements
- **Build fails**: Check for syntax errors in SCSS files

### Manual Commands
If you prefer to run commands manually:

```bash
# Development build with watch
npm run dev

# Production build
npm run build

# Alternative commands
npm run watch-css    # Development with watch
npm run build-css    # Production build
```

## Integration with Deployment

After building CSS:
1. **Test locally**: Open `index.html` in browser
2. **Review changes**: Check the generated CSS
3. **Deploy**: Use `/deploy-landing-page` to push changes

## Related Commands

- `/deploy-landing-page` - Deploy changes to production
- `/ssh-setup` - Configure SSH for repository access
