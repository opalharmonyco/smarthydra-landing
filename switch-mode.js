#!/usr/bin/env node

// SmartHydra Landing Page - Mode Switcher
// Helps switch between coming soon and full page modes

const fs = require('fs');
const path = require('path');

const COMING_SOON_FILE = 'coming-soon.html';
const FULL_PAGE_FILE = 'index.html';
const VERCEL_CONFIG = 'vercel.json';

// Configuration
const PREVIEW_SECRET = 'smarthydra-dev-2025';

function showHelp() {
    console.log(`
🐉 SmartHydra Landing Page Mode Switcher

Usage:
  node switch-mode.js [command]

Commands:
  coming-soon    Show coming soon page to public
  full-page      Show full landing page to public
  preview        Show preview URL for developers
  help           Show this help message

Examples:
  node switch-mode.js coming-soon
  node switch-mode.js full-page
  node switch-mode.js preview
    `);
}

function setComingSoonMode() {
    console.log('🔒 Setting landing page to COMING SOON mode...');
    
    // Update vercel.json to redirect to coming soon
    const vercelConfig = {
        "rewrites": [
            {
                "source": "/",
                "destination": "/coming-soon.html"
            },
            {
                "source": "/index.html", 
                "destination": "/coming-soon.html"
            }
        ],
        "headers": [
            {
                "source": "/(.*)",
                "headers": [
                    {
                        "key": "X-Content-Type-Options",
                        "value": "nosniff"
                    },
                    {
                        "key": "X-Frame-Options",
                        "value": "DENY"
                    },
                    {
                        "key": "X-XSS-Protection",
                        "value": "1; mode=block"
                    }
                ]
            }
        ]
    };
    
    fs.writeFileSync(VERCEL_CONFIG, JSON.stringify(vercelConfig, null, 2));
    
    console.log('✅ Coming soon mode activated!');
    console.log('📝 Public will see: Coming soon page');
    console.log('🔑 Developers can preview with: ?preview=' + PREVIEW_SECRET);
}

function setFullPageMode() {
    console.log('🚀 Setting landing page to FULL PAGE mode...');
    
    // Update vercel.json to show full page
    const vercelConfig = {
        "rewrites": [
            {
                "source": "/",
                "destination": "/index.html"
            }
        ],
        "headers": [
            {
                "source": "/(.*)",
                "headers": [
                    {
                        "key": "X-Content-Type-Options",
                        "value": "nosniff"
                    },
                    {
                        "key": "X-Frame-Options",
                        "value": "DENY"
                    },
                    {
                        "key": "X-XSS-Protection",
                        "value": "1; mode=block"
                    }
                ]
            }
        ]
    };
    
    fs.writeFileSync(VERCEL_CONFIG, JSON.stringify(vercelConfig, null, 2));
    
    console.log('✅ Full page mode activated!');
    console.log('📝 Public will see: Full landing page');
}

function showPreviewInfo() {
    console.log(`
🔑 SmartHydra Developer Preview Access

To view the full landing page while in coming soon mode, use this URL:
https://smarthydra.app/?preview=${PREVIEW_SECRET}

Or for local development:
http://localhost:8000/?preview=${PREVIEW_SECRET}

Current mode: ${getCurrentMode()}
    `);
}

function getCurrentMode() {
    if (!fs.existsSync(VERCEL_CONFIG)) {
        return 'Unknown (no vercel.json)';
    }
    
    try {
        const config = JSON.parse(fs.readFileSync(VERCEL_CONFIG, 'utf8'));
        const rewrites = config.rewrites || [];
        
        for (const rewrite of rewrites) {
            if (rewrite.source === '/' && rewrite.destination === '/coming-soon.html') {
                return 'Coming Soon';
            }
            if (rewrite.source === '/' && rewrite.destination === '/index.html') {
                return 'Full Page';
            }
        }
        
        return 'Unknown';
    } catch (error) {
        return 'Error reading config';
    }
}

// Main execution
const command = process.argv[2];

switch (command) {
    case 'coming-soon':
        setComingSoonMode();
        break;
    case 'full-page':
        setFullPageMode();
        break;
    case 'preview':
        showPreviewInfo();
        break;
    case 'help':
    case '--help':
    case '-h':
        showHelp();
        break;
    default:
        console.log('❌ Unknown command. Use "help" to see available commands.');
        showHelp();
        process.exit(1);
}
