// SmartHydra Landing Page - Preview Handler
// Handles showing coming soon page vs full landing page based on URL parameters

(function() {
    'use strict';

    // Configuration
    const PREVIEW_PARAM = 'preview';
    const PREVIEW_SECRET = 'smarthydra-dev-2025'; // Change this to your secret
    const COMING_SOON_PAGE = 'coming-soon.html';
    const FULL_PAGE = 'index.html';

    // Check if we should show the full landing page
    function shouldShowFullPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const previewParam = urlParams.get(PREVIEW_PARAM);
        
        // Check if preview parameter matches our secret
        return previewParam === PREVIEW_SECRET;
    }

    // Redirect to appropriate page
    function handlePageRouting() {
        const currentPath = window.location.pathname;
        const isFullPage = currentPath.includes(FULL_PAGE) || currentPath === '/' || currentPath === '/index.html';
        const isComingSoonPage = currentPath.includes(COMING_SOON_PAGE);
        
        if (shouldShowFullPage()) {
            // User has preview access - show full page
            if (isComingSoonPage) {
                // Redirect from coming soon to full page
                window.location.href = FULL_PAGE + window.location.search;
            }
            // If already on full page, stay there
        } else {
            // User doesn't have preview access - show coming soon
            if (isFullPage) {
                // Redirect from full page to coming soon
                window.location.href = COMING_SOON_PAGE;
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

To view the full landing page, add this parameter to the URL:
?preview=${PREVIEW_SECRET}

Example: https://smarthydra.app/?preview=${PREVIEW_SECRET}

Current status: ${shouldShowFullPage() ? 'Full page access granted' : 'Coming soon page active'}
    `);

})();
