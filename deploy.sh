#!/bin/bash

# SmartHydra Landing Page Deployment Script
# Single file approach - no file renaming needed!

set -e

echo "🚀 SmartHydra Landing Page Deployment Script"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Must be run from the landing page directory"
    echo "Expected file: index.html"
    exit 1
fi

# Get environment from first argument
ENVIRONMENT=${1:-"production"}

echo "📋 Environment: $ENVIRONMENT"
echo ""

if [ "$ENVIRONMENT" = "production" ]; then
    echo "🏭 PRODUCTION deployment ready!"
    echo "• Default page: Coming Soon"
    echo "• Full page: Only with secret preview parameter"
    echo ""
    echo "✅ Single file approach - no file changes needed!"
    echo "   • index.html → Contains both coming soon and full page"
    echo "   • Environment detection via JavaScript"
    
elif [ "$ENVIRONMENT" = "local" ]; then
    echo "💻 LOCAL development ready!"
    echo "• Default page: Full Landing Page"
    echo "• Coming soon: Only with ?coming-soon=true parameter"
    echo ""
    echo "✅ Single file approach - no file changes needed!"
    echo "   • index.html → Contains both coming soon and full page"
    echo "   • Environment detection via JavaScript"
    
else
    echo "❌ Error: Unknown environment '$ENVIRONMENT'"
    echo "Usage: $0 [local|production]"
    echo ""
    echo "Examples:"
    echo "  $0 local      # Set up for local development"
    echo "  $0 production # Set up for production deployment"
    exit 1
fi

echo ""
echo "🌐 Available URLs:"
if [ "$ENVIRONMENT" = "local" ]; then
    echo "  • Full page (default): http://localhost:8080/"
    echo "  • Coming soon: http://localhost:8080/?coming-soon=true"
else
    echo "  • Coming soon (default): https://smarthydra.app/"
    echo "  • Full page: https://smarthydra.app/?preview=smarthydra-dev-2025"
fi

echo ""
echo "✅ Deployment setup complete!"
echo "🎉 Single file approach - much simpler!"