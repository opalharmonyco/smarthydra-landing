#!/bin/bash

# SmartHydra Landing Page Deployment Script
# Handles file renaming for different environments

set -e

echo "🚀 SmartHydra Landing Page Deployment Script"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Must be run from the landing page directory"
    echo "Expected file: index.html"
    exit 1
fi

# Check what files we have
HAS_FULL_PAGE=false
HAS_COMING_SOON=false

if [ -f "index-full.html" ]; then
    HAS_FULL_PAGE=true
fi

if [ -f "index-coming-soon.html" ]; then
    HAS_COMING_SOON=true
fi

# Get environment from first argument
ENVIRONMENT=${1:-"production"}

echo "📋 Environment: $ENVIRONMENT"
echo ""

if [ "$ENVIRONMENT" = "production" ]; then
    echo "🏭 Setting up for PRODUCTION deployment..."
    echo "• Default page: Coming Soon"
    echo "• Full page: Only with secret preview parameter"
    echo ""
    
    # For production: coming soon should be the default
    if [ "$HAS_FULL_PAGE" = true ] && [ "$HAS_COMING_SOON" = false ]; then
        echo "📁 Already set up for production"
        echo "✅ Production setup complete"
        echo "   • index.html → Coming Soon page (default)"
        echo "   • index-full.html → Full landing page"
        echo "   • coming-soon.html → Coming Soon page (for direct access)"
    elif [ "$HAS_FULL_PAGE" = false ] && [ "$HAS_COMING_SOON" = true ]; then
        echo "📁 Renaming files for production..."
        mv index.html index-full.html
        mv index-coming-soon.html index.html
        # Ensure coming-soon.html exists for direct access
        cp index.html coming-soon.html
        echo "✅ Production setup complete"
        echo "   • index.html → Coming Soon page (default)"
        echo "   • index-full.html → Full landing page"
        echo "   • coming-soon.html → Coming Soon page (for direct access)"
    else
        echo "❌ Error: Unexpected file state for production setup"
        exit 1
    fi
    
elif [ "$ENVIRONMENT" = "local" ]; then
    echo "💻 Setting up for LOCAL development..."
    echo "• Default page: Full Landing Page"
    echo "• Coming soon: Only with ?coming-soon=true parameter"
    echo ""
    
    # For local: full page should be the default
    if [ "$HAS_FULL_PAGE" = true ] && [ "$HAS_COMING_SOON" = false ]; then
        echo "📁 Renaming files for local development..."
        mv index.html index-coming-soon.html
        mv index-full.html index.html
        # Ensure coming-soon.html exists for direct access
        cp index-coming-soon.html coming-soon.html
        echo "✅ Local development setup complete"
        echo "   • index.html → Full landing page (default)"
        echo "   • index-coming-soon.html → Coming soon page"
        echo "   • coming-soon.html → Coming soon page (for direct access)"
    elif [ "$HAS_FULL_PAGE" = false ] && [ "$HAS_COMING_SOON" = true ]; then
        echo "📁 Already set up for local development"
        # Ensure coming-soon.html exists for direct access
        cp index-coming-soon.html coming-soon.html
        echo "✅ Local development setup complete"
        echo "   • index.html → Full landing page (default)"
        echo "   • index-coming-soon.html → Coming soon page"
        echo "   • coming-soon.html → Coming soon page (for direct access)"
    else
        echo "❌ Error: Unexpected file state for local setup"
        exit 1
    fi
    
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
    echo "  • Direct coming soon: http://localhost:8080/index-coming-soon.html"
else
    echo "  • Coming soon (default): https://smarthydra.app/"
    echo "  • Full page: https://smarthydra.app/?preview=smarthydra-dev-2025"
    echo "  • Direct full page: https://smarthydra.app/index-full.html"
fi

echo ""
echo "✅ Deployment setup complete!"
