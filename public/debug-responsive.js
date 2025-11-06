// Debug script to detect horizontal overflow issues
(function() {
    'use strict';
    
    function checkHorizontalOverflow() {
        const body = document.body;
        const html = document.documentElement;
        
        const documentWidth = Math.max(
            body.scrollWidth, body.offsetWidth,
            html.clientWidth, html.scrollWidth, html.offsetWidth
        );
        
        const viewportWidth = window.innerWidth;
        
        if (documentWidth > viewportWidth) {
            console.warn('🚨 Horizontal overflow detected!');
            console.log('Document width:', documentWidth);
            console.log('Viewport width:', viewportWidth);
            console.log('Overflow amount:', documentWidth - viewportWidth, 'px');
            
            // Find elements that might be causing overflow
            const allElements = document.querySelectorAll('*');
            const overflowingElements = [];
            
            allElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.right > viewportWidth) {
                    overflowingElements.push({
                        element: el,
                        tagName: el.tagName,
                        className: el.className,
                        right: rect.right,
                        overflow: rect.right - viewportWidth
                    });
                }
            });
            
            if (overflowingElements.length > 0) {
                console.log('Elements causing overflow:');
                overflowingElements
                    .sort((a, b) => b.overflow - a.overflow)
                    .slice(0, 10)
                    .forEach(item => {
                        console.log(`- ${item.tagName}.${item.className}: ${item.overflow}px overflow`);
                        item.element.style.outline = '2px solid red';
                    });
            }
            
            // Add visual indicator
            document.body.style.borderTop = '5px solid red';
            
            return false;
        } else {
            console.log('✅ No horizontal overflow detected');
            document.body.style.borderTop = '5px solid green';
            return true;
        }
    }
    
    function addResponsiveDebugInfo() {
        const debugInfo = document.createElement('div');
        debugInfo.id = 'responsive-debug';
        debugInfo.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
            font-size: 12px;
            z-index: 9999;
            max-width: 200px;
        `;
        
        function updateDebugInfo() {
            const width = window.innerWidth;
            let breakpoint = 'xs';
            
            if (width >= 1536) breakpoint = '2xl';
            else if (width >= 1280) breakpoint = 'xl';
            else if (width >= 1024) breakpoint = 'lg';
            else if (width >= 768) breakpoint = 'md';
            else if (width >= 640) breakpoint = 'sm';
            
            const hasOverflow = !checkHorizontalOverflow();
            
            debugInfo.innerHTML = `
                <strong>Responsive Debug</strong><br>
                Width: ${width}px<br>
                Breakpoint: ${breakpoint}<br>
                Overflow: ${hasOverflow ? '❌ YES' : '✅ NO'}<br>
                <small>Press 'D' to toggle</small>
            `;
        }
        
        updateDebugInfo();
        document.body.appendChild(debugInfo);
        
        window.addEventListener('resize', updateDebugInfo);
        
        // Toggle debug info with 'D' key
        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'd') {
                debugInfo.style.display = debugInfo.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                checkHorizontalOverflow();
                addResponsiveDebugInfo();
            }, 1000);
        });
    } else {
        setTimeout(() => {
            checkHorizontalOverflow();
            addResponsiveDebugInfo();
        }, 1000);
    }
    
    // Check on resize
    window.addEventListener('resize', () => {
        setTimeout(checkHorizontalOverflow, 100);
    });
    
})();