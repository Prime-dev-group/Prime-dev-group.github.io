/**
 * Moon Phase Tracker
 * Calculates current moon phase and provides zodiac-specific insights
 */

// Zodiac signs data
const ZODIAC_SIGNS = [
    { name: "Aries", icon: "♈" },
    { name: "Taurus", icon: "♉" },
    { name: "Gemini", icon: "♊" },
    { name: "Cancer", icon: "♋" },
    { name: "Leo", icon: "♌" },
    { name: "Virgo", icon: "♍" },
    { name: "Libra", icon: "♎" },
    { name: "Scorpio", icon: "♏" },
    { name: "Sagittarius", icon: "♐" },
    { name: "Capricorn", icon: "♑" },
    { name: "Aquarius", icon: "♒" },
    { name: "Pisces", icon: "♓" }
];

// DOM Elements
const moonElement = document.getElementById('moon');
const moonShadow = document.getElementById('moon-shadow');
const moonPhaseName = document.getElementById('moon-phase-name');
const moonDate = document.getElementById('moon-date');
const moonIllumination = document.getElementById('moon-illumination');
const lunarDay = document.getElementById('lunar-day');
const moonDescription = document.getElementById('moon-description');
const moonEnergy = document.getElementById('moon-energy');
const zodiacSelector = document.getElementById('zodiac-selector');
const zodiacInsightsContainer = document.getElementById('zodiac-insights-container');
const insightSignIcon = document.getElementById('insight-sign-icon');
const insightSignName = document.getElementById('insight-sign-name');
const insightAdvice = document.getElementById('insight-advice');
const insightFocus = document.getElementById('insight-focus');

// Current state
let currentMoonPhase = null;
let currentSign = null;

/**
 * Calculate moon phase based on current date
 */
function calculateMoonPhase() {
    const today = new Date();

    // Known new moon date (Jan 6, 2000)
    const knownNewMoon = new Date(2000, 0, 6, 18, 14);

    // Lunar cycle length in days
    const lunarCycle = 29.53058867;

    // Calculate days since known new moon
    const daysSinceNew = (today - knownNewMoon) / (1000 * 60 * 60 * 24);

    // Calculate lunar age (days into current cycle)
    const lunarAge = daysSinceNew % lunarCycle;

    // Calculate illumination percentage
    const illumination = Math.round((1 - Math.cos(2 * Math.PI * lunarAge / lunarCycle)) * 50);

    // Determine phase name
    let phaseName;
    if (lunarAge < 1.84566) {
        phaseName = "New Moon";
    } else if (lunarAge < 7.38264) {
        phaseName = "Waxing Crescent";
    } else if (lunarAge < 9.22830) {
        phaseName = "First Quarter";
    } else if (lunarAge < 14.76528) {
        phaseName = "Waxing Gibbous";
    } else if (lunarAge < 16.61094) {
        phaseName = "Full Moon";
    } else if (lunarAge < 22.14792) {
        phaseName = "Waning Gibbous";
    } else if (lunarAge < 23.99358) {
        phaseName = "Last Quarter";
    } else {
        phaseName = "Waning Crescent";
    }

    return {
        name: phaseName,
        age: Math.round(lunarAge * 10) / 10,
        illumination: illumination,
        lunarDay: Math.ceil(lunarAge)
    };
}

/**
 * Update moon visual based on phase
 */
function updateMoonVisual(phase) {
    const illumination = phase.illumination;

    // Calculate shadow position
    // 0% = fully dark (new moon), 100% = fully bright (full moon)
    let shadowTransform;

    if (illumination <= 50) {
        // Waxing (new to full)
        const percentage = (50 - illumination) * 2;
        shadowTransform = `translateX(${percentage}%)`;
    } else {
        // Waning (full to new)
        const percentage = (illumination - 50) * 2;
        shadowTransform = `translateX(-${percentage}%)`;
    }

    moonShadow.style.transform = shadowTransform;

    // Add glow for full moon
    if (phase.name === "Full Moon") {
        moonElement.style.boxShadow = `
            0 0 100px rgba(255, 255, 255, 0.6),
            inset 0 0 30px rgba(0, 0, 0, 0.1)
        `;
    } else if (phase.name === "New Moon") {
        moonElement.style.boxShadow = `
            0 0 30px rgba(255, 255, 255, 0.1),
            inset 0 0 50px rgba(0, 0, 0, 0.5)
        `;
    }
}

/**
 * Format current date
 */
function formatDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
}

/**
 * Display moon phase information
 */
function displayMoonPhase() {
    const phase = calculateMoonPhase();
    currentMoonPhase = phase;

    // Update text content
    moonPhaseName.textContent = phase.name;
    moonDate.textContent = formatDate();
    moonIllumination.textContent = `${phase.illumination}%`;
    lunarDay.textContent = phase.lunarDay;

    // Get phase data
    const phaseData = MOON_PHASES[phase.name];
    if (phaseData) {
        moonDescription.textContent = phaseData.description;
        moonEnergy.textContent = phaseData.energy;
    }

    // Update visual
    updateMoonVisual(phase);
}

/**
 * Render zodiac selector
 */
function renderZodiacSelector() {
    zodiacSelector.innerHTML = '';

    ZODIAC_SIGNS.forEach((sign, index) => {
        const btn = document.createElement('button');
        btn.className = 'zodiac-btn';
        btn.innerHTML = `
            <div class="zodiac-btn-icon">${sign.icon}</div>
            <div class="zodiac-btn-name">${sign.name}</div>
        `;
        btn.addEventListener('click', () => selectZodiac(index));
        zodiacSelector.appendChild(btn);
    });
}

/**
 * Select zodiac sign and show insights
 */
function selectZodiac(index) {
    const sign = ZODIAC_SIGNS[index];
    currentSign = { ...sign, index };

    // Update active state
    const btns = document.querySelectorAll('.zodiac-btn');
    btns.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Display insights
    displayZodiacInsights();

    // Save to localStorage
    localStorage.setItem('preferredZodiac', index.toString());
}

/**
 * Display zodiac-specific moon insights
 */
function displayZodiacInsights() {
    if (!currentSign || !currentMoonPhase) return;

    // Get zodiac insights for current moon phase
    const zodiacInsights = ZODIAC_MOON_INSIGHTS[currentSign.name];
    if (!zodiacInsights) return;

    const phaseInsights = zodiacInsights[currentMoonPhase.name];
    if (!phaseInsights) return;

    // Update header
    insightSignIcon.textContent = currentSign.icon;
    insightSignName.textContent = `${currentSign.name} & ${currentMoonPhase.name}`;

    // Update insights
    insightAdvice.textContent = phaseInsights.advice;
    insightFocus.textContent = phaseInsights.focus;

    // Show container
    zodiacInsightsContainer.classList.remove('hidden');

    // Scroll to insights
    setTimeout(() => {
        zodiacInsightsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

/**
 * Initialize particles background
 */
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 150,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 0.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "bubble": {
                    "distance": 200,
                    "size": 6,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                }
            }
        },
        "retina_detect": true
    });
}

/**
 * Initialize share buttons
 */
function initShareButtons() {
    const shareTwitter = document.getElementById('share-twitter');
    const shareFacebook = document.getElementById('share-facebook');
    const shareDownload = document.getElementById('share-download');
    const shareCopy = document.getElementById('share-copy');

    shareTwitter?.addEventListener('click', () => handleShare('twitter'));
    shareFacebook?.addEventListener('click', () => handleShare('facebook'));
    shareDownload?.addEventListener('click', () => handleShare('download'));
    shareCopy?.addEventListener('click', () => handleShare('copy'));
}

/**
 * Handle share functionality
 */
async function handleShare(method) {
    if (!currentSign || !currentMoonPhase) return;

    const zodiacInsights = ZODIAC_MOON_INSIGHTS[currentSign.name];
    const phaseInsights = zodiacInsights ? zodiacInsights[currentMoonPhase.name] : null;

    const title = `${currentMoonPhase.name} for ${currentSign.icon} ${currentSign.name}`;
    const text = phaseInsights
        ? `${currentMoonPhase.name} - ${formatDate()}\n\n${phaseInsights.advice}\n\nFocus: ${phaseInsights.focus}`
        : `Current moon phase: ${currentMoonPhase.name} (${currentMoonPhase.illumination}% illuminated)`;

    const result = await shareContent({
        type: 'moon-phase',
        title,
        text,
        icon: '🌙',
        method
    });

    if (result.success) {
        const messages = {
            twitter: 'Shared to Twitter!',
            facebook: 'Shared to Facebook!',
            download: 'Image downloaded!',
            copy: 'Copied to clipboard!'
        };
        showShareNotification(messages[method] || 'Shared successfully!', true);
    } else {
        showShareNotification('Failed to share. Please try again.', false);
    }
}

/**
 * Initialize page
 */
document.addEventListener('DOMContentLoaded', () => {
    // Calculate and display moon phase
    displayMoonPhase();

    // Render zodiac selector
    renderZodiacSelector();

    // Initialize particles
    initParticles();

    // Initialize share buttons
    initShareButtons();

    // Auto-select saved zodiac if exists
    const savedZodiac = localStorage.getItem('preferredZodiac');
    if (savedZodiac !== null) {
        const index = parseInt(savedZodiac);
        if (index >= 0 && index < ZODIAC_SIGNS.length) {
            selectZodiac(index);
        }
    }
});
