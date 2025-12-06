/**
 * Theme Customizer Logic
 * Handles theme switching, accessibility toggles, and UI injection.
 */

document.addEventListener('DOMContentLoaded', () => {
    injectThemeUI();
    loadSavedSettings();
});

// Fallback: If DOM is already ready (e.g. script loaded late), run immediately
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    injectThemeUI();
    loadSavedSettings();
}

function injectThemeUI() {
    // Create Settings Button
    const btn = document.createElement('div');
    btn.className = 'theme-settings-btn';
    btn.innerHTML = '⚙️';
    btn.title = 'Customize Theme';
    document.body.appendChild(btn);

    // Create Panel
    const panel = document.createElement('div');
    panel.className = 'theme-panel';
    panel.innerHTML = `
        <div class="panel-header">
            <span class="panel-title">Customization</span>
            <span class="close-panel" style="cursor:pointer;">&times;</span>
        </div>
        
        <div class="panel-section">
            <div class="section-title">Color Theme</div>
            <div class="theme-options">
                <div class="theme-option" data-theme="cosmic" title="Cosmic Purple (Default)"></div>
                <div class="theme-option" data-theme="solar" title="Solar Gold (Light)"></div>
                <div class="theme-option" data-theme="lunar" title="Lunar Silver (High Contrast)"></div>
            </div>
        </div>

        <div class="panel-section">
            <div class="section-title">Accessibility</div>
            <div class="toggle-row">
                <span class="toggle-label">Reduced Motion</span>
                <label class="toggle-switch">
                    <input type="checkbox" id="reduce-motion-toggle">
                    <span class="slider"></span>
                </label>
            </div>
            <div class="toggle-row">
                <span class="toggle-label">Large Text</span>
                <label class="toggle-switch">
                    <input type="checkbox" id="large-text-toggle">
                    <span class="slider"></span>
                </label>
            </div>
        </div>
    `;
    document.body.appendChild(panel);

    // Event Listeners
    btn.addEventListener('click', () => {
        panel.classList.toggle('active');
    });

    panel.querySelector('.close-panel').addEventListener('click', () => {
        panel.classList.remove('active');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && !btn.contains(e.target) && panel.classList.contains('active')) {
            panel.classList.remove('active');
        }
    });

    // Theme Switching
    const themeOptions = panel.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            setTheme(theme);
        });
    });

    // Accessibility Toggles
    // Accessibility Toggles
    const motionToggle = document.getElementById('reduce-motion-toggle');
    motionToggle.addEventListener('change', (e) => {
        document.body.classList.toggle('reduce-motion', e.target.checked);
        localStorage.setItem('reduceMotion', e.target.checked);
        toggleParticlesMotion(e.target.checked);
    });

    const textToggle = document.getElementById('large-text-toggle');
    textToggle.addEventListener('change', (e) => {
        document.documentElement.classList.toggle('large-text', e.target.checked);
        localStorage.setItem('largeText', e.target.checked);
    });
}

function toggleParticlesMotion(isReduced) {
    if (window.pJSDom && window.pJSDom.length > 0) {
        // Access the first particles instance
        const pJS = window.pJSDom[0].pJS;
        if (pJS) {
            pJS.particles.move.enable = !isReduced;
            // Force a refresh if available, otherwise the loop should pick it up
            if (pJS.fn && pJS.fn.particlesRefresh) {
                pJS.fn.particlesRefresh();
            }
        }
    }
}

function setTheme(themeName) {
    // Remove existing theme classes
    document.body.classList.remove('theme-solar', 'theme-lunar');

    // Add new theme class if not default
    if (themeName === 'solar') {
        document.body.classList.add('theme-solar');
        // Update particles for light mode
        updateParticles('#fdf6e3', '#2c3e50');
    } else if (themeName === 'lunar') {
        document.body.classList.add('theme-lunar');
        updateParticles('#000000', '#ffffff');
    } else {
        // Default Cosmic
        updateParticles('#050714', '#ffffff');
    }

    // Update active state in UI
    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.theme === themeName);
    });

    // Save to localStorage
    localStorage.setItem('theme', themeName);
}

function loadSavedSettings() {
    // Load Theme
    const savedTheme = localStorage.getItem('theme') || 'cosmic';
    setTheme(savedTheme);

    // Load Accessibility
    const reduceMotion = localStorage.getItem('reduceMotion') === 'true';
    const largeText = localStorage.getItem('largeText') === 'true';

    if (reduceMotion) {
        document.body.classList.add('reduce-motion');
        const toggle = document.getElementById('reduce-motion-toggle');
        if (toggle) toggle.checked = true;
        toggleParticlesMotion(true);
    }

    if (largeText) {
        document.documentElement.classList.add('large-text');
        const toggle = document.getElementById('large-text-toggle');
        if (toggle) toggle.checked = true;
    }
}

function updateParticles(bgColor, particleColor) {
    // If particlesJS is loaded, we can try to update it.
    // Since particles.js doesn't have a simple update method, 
    // we might need to reload it or just change the container background.
    // The CSS variable --bg-color handles the background.
    // For the particles themselves, it's complex to update without re-init.
    // For now, we'll rely on CSS for background and let particles remain white/default 
    // or we can try to re-initialize if pJSDom exists.

    if (window.pJSDom && window.pJSDom.length > 0) {
        // Simple hack: reload page if theme changes? No, too disruptive.
        // We will just accept white particles on light background for now (they might be invisible).
        // Better: Re-init particles with new color.

        const config = {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": particleColor },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": particleColor, "opacity": 0.4, "width": 1 },
                "move": { "enable": !document.body.classList.contains('reduce-motion'), "speed": 2 }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } }
            },
            "retina_detect": true
        };

        // Clear existing
        const container = document.getElementById('particles-js');
        if (container) {
            // Remove canvas
            const canvas = container.querySelector('canvas');
            if (canvas) canvas.remove();
            // Reset library instance
            window.pJSDom = [];
            // Re-init
            particlesJS('particles-js', config);
        }
    }
}
