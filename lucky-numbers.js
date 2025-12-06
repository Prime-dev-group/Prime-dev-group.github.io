/**
 * Lucky Numbers Generator
 * Generates daily lucky numbers based on zodiac sign and current date
 */

// Zodiac signs data
const ZODIAC_SIGNS = [
    { name: "Aries", icon: "♈", date: "Mar 21 - Apr 19" },
    { name: "Taurus", icon: "♉", date: "Apr 20 - May 20" },
    { name: "Gemini", icon: "♊", date: "May 21 - Jun 20" },
    { name: "Cancer", icon: "♋", date: "Jun 21 - Jul 22" },
    { name: "Leo", icon: "♌", date: "Jul 23 - Aug 22" },
    { name: "Virgo", icon: "♍", date: "Aug 23 - Sep 22" },
    { name: "Libra", icon: "♎", date: "Sep 23 - Oct 22" },
    { name: "Scorpio", icon: "♏", date: "Oct 23 - Nov 21" },
    { name: "Sagittarius", icon: "♐", date: "Nov 22 - Dec 21" },
    { name: "Capricorn", icon: "♑", date: "Dec 22 - Jan 19" },
    { name: "Aquarius", icon: "♒", date: "Jan 20 - Feb 18" },
    { name: "Pisces", icon: "♓", date: "Feb 19 - Mar 20" }
];

// DOM Elements
const zodiacSelector = document.getElementById('zodiac-selector');
const resultsContainer = document.getElementById('results-container');
const selectedSignIcon = document.getElementById('selected-sign-icon');
const selectedSignName = document.getElementById('selected-sign-name');
const resultsDate = document.getElementById('results-date');
const dateDisplay = document.getElementById('date-display');
const generalNumbers = document.getElementById('general-numbers');
const powerNumber = document.getElementById('power-number');
const luckyTime = document.getElementById('lucky-time');

// Current state
let currentSign = null;
let currentNumbers = null;

/**
 * Seeded random number generator for deterministic results
 */
class SeededRandom {
    constructor(seed) {
        this.seed = seed;
    }

    next() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }

    nextInt(min, max) {
        return Math.floor(this.next() * (max - min + 1)) + min;
    }
}

/**
 * Generate seed from date and zodiac index
 */
function generateSeed(zodiacIndex) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    // Create deterministic seed
    return year * 10000 + month * 100 + day + zodiacIndex * 777;
}

/**
 * Generate lucky numbers for a zodiac sign
 */
function generateLuckyNumbers(zodiacIndex) {
    const seed = generateSeed(zodiacIndex);
    const rng = new SeededRandom(seed);

    // Generate 5 general lucky numbers (1-50)
    const general = [];
    while (general.length < 5) {
        const num = rng.nextInt(1, 50);
        if (!general.includes(num)) {
            general.push(num);
        }
    }
    general.sort((a, b) => a - b);

    // Generate 1 power number (1-100)
    const power = rng.nextInt(1, 100);

    // Generate lucky time (1-12 hours)
    const hour = rng.nextInt(1, 12);
    const period = rng.nextInt(0, 1) === 0 ? 'AM' : 'PM';
    const timeRange = `${hour}:00 ${period} - ${hour}:59 ${period}`;

    return {
        general,
        power,
        time: timeRange
    };
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
 * Select zodiac sign and generate numbers
 */
function selectZodiac(index) {
    const sign = ZODIAC_SIGNS[index];
    currentSign = { ...sign, index };
    currentNumbers = generateLuckyNumbers(index);

    // Update active state
    const btns = document.querySelectorAll('.zodiac-btn');
    btns.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Display results
    displayResults();

    // Save to localStorage for persistence
    localStorage.setItem('preferredZodiac', index.toString());
}

/**
 * Display generated numbers
 */
function displayResults() {
    // Update header
    selectedSignIcon.textContent = currentSign.icon;
    selectedSignName.textContent = currentSign.name;
    resultsDate.textContent = `Lucky numbers for ${formatDate()}`;

    // Display general numbers
    generalNumbers.innerHTML = '';
    currentNumbers.general.forEach(num => {
        const ball = document.createElement('div');
        ball.className = 'number-ball';
        ball.textContent = num;
        generalNumbers.appendChild(ball);
    });

    // Display power number
    powerNumber.innerHTML = '';
    const powerBall = document.createElement('div');
    powerBall.className = 'number-ball';
    powerBall.textContent = currentNumbers.power;
    powerNumber.appendChild(powerBall);

    // Display lucky time
    luckyTime.textContent = currentNumbers.time;

    // Show results container
    resultsContainer.classList.remove('hidden');

    // Scroll to results
    setTimeout(() => {
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

/**
 * Initialize particles background
 */
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100,
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
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
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
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "push": {
                    "particles_nb": 4
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
    if (!currentSign || !currentNumbers) return;

    const numbersText = currentNumbers.general.join(', ');
    const title = `${currentSign.icon} ${currentSign.name} Lucky Numbers`;
    const text = `My lucky numbers for ${formatDate()}:\n${numbersText}\nPower Number: ${currentNumbers.power}\nLucky Time: ${currentNumbers.time}`;

    const result = await shareContent({
        type: 'lucky-numbers',
        title,
        text,
        icon: currentSign.icon,
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
    // Update date display
    dateDisplay.textContent = formatDate();

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
