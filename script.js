
/**
 * Celestial Horoscope App
 */

// --- Zodiac Data ---
let zodiacSigns = [];

// --- DOM Elements ---
const gridContainer = document.getElementById('zodiac-grid');
const modal = document.getElementById('horoscope-modal');
const closeBtn = document.querySelector('.close-btn');
const modalIcon = document.getElementById('modal-icon');
const modalSignName = document.getElementById('modal-sign-name');
const modalDateRange = document.getElementById('modal-date-range');

// Tab Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Content Elements
const modalText = document.getElementById('modal-horoscope-text');
const modalElement = document.getElementById('modal-element');
const modalPlanet = document.getElementById('modal-planet');
const modalKeywords = document.getElementById('modal-keywords');
const modalTraits = document.getElementById('modal-traits');
const modalYearlyText = document.getElementById('modal-yearly-text');

// --- Functions ---

// --- Functions ---

function renderGrid() {
    gridContainer.innerHTML = '';

    // Check if data is loaded
    if (typeof HOROSCOPE_DATA === 'undefined' || !HOROSCOPE_DATA) {
        gridContainer.innerHTML = '<p style="color: white; text-align: center;">Error: Horoscope data not found.</p>';
        return;
    }

    zodiacSigns = HOROSCOPE_DATA;

    zodiacSigns.forEach(sign => {
        const card = document.createElement('div');
        card.className = 'zodiac-card';
        card.innerHTML = `
            <div class="zodiac-icon">${sign.icon}</div>
            <div class="zodiac-name">${sign.name}</div>
            <div class="zodiac-date">${sign.date}</div>
        `;
        card.addEventListener('click', () => openModal(sign));
        gridContainer.appendChild(card);
    });
}

function openModal(sign) {
    // Store current sign for sharing
    currentSign = sign;

    // Populate Header
    modalIcon.textContent = sign.icon;
    modalSignName.textContent = sign.name;
    modalDateRange.textContent = sign.date;

    // Populate Forecast Tab
    modalText.textContent = sign.horoscope;

    // Populate Profile Tab
    modalElement.textContent = sign.element || 'Unknown';
    modalPlanet.textContent = sign.ruling_planet || 'Unknown';
    modalTraits.textContent = sign.traits || 'No traits available.';

    // Populate Strengths
    const modalStrengths = document.getElementById('modal-strengths');
    modalStrengths.innerHTML = '';
    if (sign.strengths && Array.isArray(sign.strengths)) {
        sign.strengths.forEach(strength => {
            const li = document.createElement('li');
            li.textContent = strength;
            modalStrengths.appendChild(li);
        });
    }

    // Populate Weaknesses
    const modalWeaknesses = document.getElementById('modal-weaknesses');
    modalWeaknesses.innerHTML = '';
    if (sign.weaknesses && Array.isArray(sign.weaknesses)) {
        sign.weaknesses.forEach(weakness => {
            const li = document.createElement('li');
            li.textContent = weakness;
            modalWeaknesses.appendChild(li);
        });
    }

    // Populate Compatibility
    const modalCompatibility = document.getElementById('modal-compatibility');
    // Parse bold markdown for compatibility
    let compatibilityText = sign.compatibility || 'Compatibility info not available.';
    compatibilityText = compatibilityText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    modalCompatibility.innerHTML = compatibilityText;

    // Populate Yearly Tab
    // Populate Yearly Tab
    let formattedForecast = sign.yearly_forecast || 'Yearly forecast not available.';
    // Simple markdown parsing for bold and newlines
    formattedForecast = formattedForecast
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');

    modalYearlyText.innerHTML = formattedForecast;

    // Populate Keywords
    modalKeywords.innerHTML = '';
    if (sign.keywords && Array.isArray(sign.keywords)) {
        sign.keywords.forEach(keyword => {
            const span = document.createElement('span');
            span.className = 'keyword-tag';
            span.textContent = keyword;
            modalKeywords.appendChild(span);
        });
    }

    // Reset to first tab
    switchTab('forecast');

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function switchTab(tabName) {
    // Update Buttons
    tabBtns.forEach(btn => {
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update Content
    tabContents.forEach(content => {
        if (content.id === `tab-${tabName}`) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300); // Match transition duration
}

// --- Event Listeners ---
closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
    });
});

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
    initParticles();
    initShareButtons();
});

// --- Share Functionality ---
let currentSign = null;

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

async function handleShare(method) {
    if (!currentSign) return;

    const activeTab = document.querySelector('.tab-btn.active')?.dataset.tab || 'forecast';
    let title, text, icon;

    if (activeTab === 'forecast') {
        title = `${currentSign.name} Daily Horoscope`;
        text = currentSign.horoscope;
        icon = currentSign.icon;
    } else if (activeTab === 'yearly') {
        title = `${currentSign.name} 2025 Forecast`;
        text = currentSign.yearly_forecast?.substring(0, 200) + '...';
        icon = currentSign.icon;
    } else {
        title = `${currentSign.name} Personality`;
        text = currentSign.traits;
        icon = currentSign.icon;
    }

    const result = await shareContent({
        type: 'horoscope',
        title,
        text,
        icon,
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

// --- Particles.js Configuration ---
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
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
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
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
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
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
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
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

