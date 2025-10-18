// SmartHydra Landing Page - Preview Handler
// Handles showing coming soon page vs full landing page based on environment and URL parameters

(function() {
    'use strict';

    // Configuration
    const PREVIEW_PARAM = 'preview';
    const PREVIEW_SECRET = 'smarthydra-dev-2025'; // Change this to your secret
    const COMING_SOON_PARAM = 'coming-soon'; // For local development
    const COMING_SOON_PAGE = 'index-coming-soon.html';
    const FULL_PAGE = 'index.html';
    
    // Environment detection
    const isLocal = window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1' || 
                   window.location.hostname.includes('localhost');
    const isProduction = window.location.hostname === 'smarthydra.app';

    // Check if we should show the full landing page
    function shouldShowFullPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const previewParam = urlParams.get(PREVIEW_PARAM);
        const comingSoonParam = urlParams.get(COMING_SOON_PARAM);
        
        if (isLocal) {
            // Local development: show full page by default, coming soon only with ?coming-soon=true
            return comingSoonParam !== 'true';
        } else if (isProduction) {
            // Production: show coming soon by default, full page only with secret preview param
            return previewParam === PREVIEW_SECRET;
        } else {
            // Other environments: default to coming soon
            return previewParam === PREVIEW_SECRET;
        }
    }

    // Redirect to appropriate page
    function handlePageRouting() {
        const currentPath = window.location.pathname;
        const isFullPage = currentPath.includes(FULL_PAGE) || currentPath === '/' || currentPath === '/index.html';
        const isComingSoonPage = currentPath.includes(COMING_SOON_PAGE);
        const shouldShowFull = shouldShowFullPage();
        
        console.log('Preview Handler Debug:', {
            currentPath,
            isFullPage,
            isComingSoonPage,
            shouldShowFull,
            isLocal,
            isProduction,
            search: window.location.search
        });
        
        if (shouldShowFull) {
            // Should show full page
            if (isComingSoonPage || (currentPath === '/' && !isFullPage)) {
                // Redirect from coming soon to full page
                console.log('Redirecting to full page');
                window.location.href = FULL_PAGE + window.location.search;
            }
            // If already on full page, stay there
        } else {
            // Should show coming soon page
            if (isFullPage || (currentPath === '/' && isFullPage)) {
                // Redirect from full page to coming soon
                console.log('Redirecting to coming soon page');
                window.location.href = COMING_SOON_PAGE + window.location.search;
            }
            // If already on coming soon page, stay there
        }
    }

    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handlePageRouting);
    } else {
        handlePageRouting();
    }

    // Add preview link functionality for developers
    function addPreviewLinks() {
        // Add preview link to coming soon page
        if (window.location.pathname.includes(COMING_SOON_PAGE)) {
            const container = document.querySelector('.container');
            if (container) {
                const previewLink = document.createElement('div');
                previewLink.innerHTML = `
                    <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
                        <a href="${FULL_PAGE}?${PREVIEW_PARAM}=${PREVIEW_SECRET}" 
                           style="background: rgba(0, 188, 212, 0.2); 
                                  border: 1px solid rgba(0, 188, 212, 0.5); 
                                  color: #00BCD4; 
                                  padding: 8px 12px; 
                                  border-radius: 6px; 
                                  text-decoration: none; 
                                  font-size: 12px; 
                                  font-weight: 500;
                                  backdrop-filter: blur(10px);
                                  transition: all 0.3s ease;">
                            👁️ Preview
                        </a>
                    </div>
                `;
                document.body.appendChild(previewLink);
            }
        }
    }

    // Add preview links after page loads
    setTimeout(addPreviewLinks, 1000);

    // Console message for developers
    console.log(`
🐉 SmartHydra Landing Page Preview System

Environment: ${isLocal ? 'Local Development' : isProduction ? 'Production' : 'Other'}
Current status: ${shouldShowFullPage() ? 'Full page active' : 'Coming soon page active'}

${isLocal ? `
Local Development Mode:
• Default: Full landing page (http://localhost:8080/)
• Coming soon: Add ?coming-soon=true (http://localhost:8080/?coming-soon=true)
` : `
Production Mode:
• Default: Coming soon page (https://smarthydra.app/)
• Full page: Add ?preview=${PREVIEW_SECRET} (https://smarthydra.app/?preview=${PREVIEW_SECRET})
`}
    `);

})();
