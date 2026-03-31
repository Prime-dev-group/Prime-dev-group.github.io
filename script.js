
/**
 * Celestial Horoscope App
 */

// --- Zodiac Data ---
let zodiacSigns = [];
let currentLanguage = localStorage.getItem('astromage_lang') || 'en';

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

    const staticDB = currentLanguage === 'hi' ? ZODIAC_STATIC_DATA_HI : ZODIAC_STATIC_DATA;
    const dailyDB = currentLanguage === 'hi' ? DAILY_HOROSCOPE_DATA_HI : DAILY_HOROSCOPE_DATA;

    // Check if data is loaded
    if (typeof staticDB === 'undefined' || !staticDB) {
        gridContainer.innerHTML = '<p style="color: white; text-align: center;">Error: Horoscope data not found.</p>';
        return;
    }

    // Merge static and daily data
    zodiacSigns = staticDB.map(sign => {
        let dailyPrediction = "";
        let searchName = sign.name;
        
        // The daily_horoscope_hindi.js file uses English sign names as keys.
        // If in Hindi mode, find the English sign name using the icon.
        if (currentLanguage === 'hi' && typeof ZODIAC_STATIC_DATA !== 'undefined') {
            const engSign = ZODIAC_STATIC_DATA.find(s => s.icon === sign.icon);
            if (engSign) searchName = engSign.name;
        }

        if (typeof dailyDB !== 'undefined' && dailyDB) {
            const dailyData = dailyDB.find(d => d.name === searchName);
            if (dailyData) {
                dailyPrediction = dailyData.horoscope;
            }
        }
        return {
            ...sign,
            horoscope: dailyPrediction || "Check back soon for today's forecast!"
        };
    });

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

    // Find the English sign name for URLs to ensure data lookups work across pages
    let englishSignName = sign.name;
    if (currentLanguage === 'hi' && typeof ZODIAC_STATIC_DATA !== 'undefined') {
        const engSign = ZODIAC_STATIC_DATA.find(s => s.icon === sign.icon);
        if (engSign) englishSignName = engSign.name;
    }

    // Remove existing "Know More" button if any (to prevent duplicates on re-open)
    const existingBtn = document.getElementById('know-more-btn');
    if (existingBtn) existingBtn.remove();

    // Create "Know More" button
    const knowMoreBtn = document.createElement('a');
    knowMoreBtn.id = 'know-more-btn';
    knowMoreBtn.href = `zodiac-characteristics.html?sign=${englishSignName}`;
    knowMoreBtn.className = 'know-more-btn';
    knowMoreBtn.textContent = tr[currentLanguage].knowMore;

    // Append after traits
    modalTraits.parentNode.insertBefore(knowMoreBtn, modalTraits.nextSibling);

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
    compatibilityText = compatibilityText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    modalCompatibility.innerHTML = compatibilityText;

    // Populate Yearly Tab
    // Populate Yearly Tab
    let formattedForecast = sign.yearly_forecast || 'Yearly forecast not available.';
    // Simple markdown parsing for bold and newlines
    formattedForecast = formattedForecast
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');

    modalYearlyText.innerHTML = formattedForecast;

    // Remove existing "Know More" button for yearly if any
    const existingYearlyBtn = document.getElementById('know-more-yearly-btn');
    if (existingYearlyBtn) existingYearlyBtn.remove();

    // Create "Know More" button for Yearly
    const knowMoreYearlyBtn = document.createElement('a');
    knowMoreYearlyBtn.id = 'know-more-yearly-btn';
    knowMoreYearlyBtn.href = `yearly-horoscope-details.html?sign=${englishSignName}`;
    knowMoreYearlyBtn.className = 'know-more-btn';
    knowMoreYearlyBtn.textContent = tr[currentLanguage].fullForecast;

    // Append after yearly text
    modalYearlyText.parentNode.insertBefore(knowMoreYearlyBtn, modalYearlyText.nextSibling);

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
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
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

    // Reset Scroll
    const modalBody = document.querySelector('.modal-body');
    if (modalBody) modalBody.scrollTop = 0;
}

function closeModal() {
    modal.classList.remove('active');
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
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

// --- Language UI Translations ---
const tr = {
    en: {
        forecast: "Daily Horoscope",
        profile: "Personality Profile",
        yearly: "Yearly Forecast 2026",
        element: "Element",
        ruler: "Ruling Planet",
        strengths: "Strengths",
        weaknesses: "Weaknesses",
        compatibility: "Love Compatibility",
        knowMore: "Know More",
        fullForecast: "Read Full 2026 Forecast",
        shareTitle: "Share your horoscope",
        share: "📤 Share",
        download: "📥 Download",
        copy: "📋 Copy"
    },
    hi: {
        forecast: "दैनिक राशिफल",
        profile: "व्यक्तित्व विवरण",
        yearly: "वार्षिक भविष्यफल 2026",
        element: "तत्व",
        ruler: "स्वामी ग्रह",
        strengths: "खूबियाँ",
        weaknesses: "कमज़ोरियाँ",
        compatibility: "प्रेम संगतता",
        knowMore: "और जानें",
        fullForecast: "पूरा 2026 राशिफल पढ़ें",
        shareTitle: "अपना राशिफल शेयर करें",
        share: "📤 शेयर करें",
        download: "📥 डाउनलोड करें",
        copy: "📋 कॉपी करें"
    }
};

function updateUIText(lang) {
    const t = tr[lang];
    // tabs
    const tabForecast = document.querySelector('.tab-btn[data-tab="forecast"]');
    if (tabForecast) tabForecast.textContent = t.forecast;
    const tabProfile = document.querySelector('.tab-btn[data-tab="profile"]');
    if (tabProfile) tabProfile.textContent = t.profile;
    const tabYearly = document.querySelector('.tab-btn[data-tab="yearly"]');
    if (tabYearly) tabYearly.textContent = t.yearly;
    
    // meta labels
    const metaLabels = document.querySelectorAll('.meta-label');
    if(metaLabels.length >= 2) {
        metaLabels[0].textContent = t.element;
        metaLabels[1].textContent = t.ruler;
    }
    
    // headings in profile
    const profileSections = document.querySelectorAll('.profile-section h4');
    if(profileSections.length >= 3) {
        profileSections[0].textContent = t.strengths;
        profileSections[1].textContent = t.weaknesses;
        profileSections[2].textContent = t.compatibility;
    }
    
    // share container
    const shareTitle = document.querySelector('.share-title');
    if(shareTitle) shareTitle.textContent = t.shareTitle;
    const shareGeneric = document.getElementById('share-generic');
    if(shareGeneric) shareGeneric.textContent = t.share;
    const shareDownload = document.getElementById('share-download');
    if(shareDownload) shareDownload.textContent = t.download;
    const shareCopy = document.getElementById('share-copy');
    if(shareCopy) shareCopy.textContent = t.copy;
    
    // dynamically created buttons in modal
    const knowMoreBtn = document.getElementById('know-more-btn');
    if(knowMoreBtn) knowMoreBtn.textContent = t.knowMore;
    const knowMoreYearlyBtn = document.getElementById('know-more-yearly-btn');
    if(knowMoreYearlyBtn) knowMoreYearlyBtn.textContent = t.fullForecast;
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Set checked state of radio buttons
    const langInput = document.getElementById(`lang-${currentLanguage}`);
    if(langInput) langInput.checked = true;

    // Attach listeners to language toggle
    document.querySelectorAll('input[name="horoscope-lang"]').forEach(input => {
        input.addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            localStorage.setItem('astromage_lang', currentLanguage);
            updateUIText(currentLanguage);
            renderGrid();
        });
    });

    updateUIText(currentLanguage);
    renderGrid();
    initParticles();
    initShareButtons();
});

// --- Share Functionality ---
let currentSign = null;

function initShareButtons() {
    const shareGeneric = document.getElementById('share-generic');
    const shareDownload = document.getElementById('share-download');
    const shareCopy = document.getElementById('share-copy');

    shareGeneric?.addEventListener('click', () => handleShare('web'));
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
        title = `${currentSign.name} 2026 Forecast`;
        // Extract only the 2026 Overview (first section before double newline)
        if (currentSign.yearly_forecast) {
            const parts = currentSign.yearly_forecast.split('\n\n');
            text = parts[0]; // Gets the "**2026 Overview:** ..." part
        } else {
            text = 'Forecast not available.';
        }
        icon = currentSign.icon;
    } else {
        title = `${currentSign.name} Personality`;
        // Pass object for structured image generation & full text sharing
        text = {
            traits: currentSign.traits,
            strengths: Array.isArray(currentSign.strengths) ? currentSign.strengths.join(', ') : currentSign.strengths,
            weaknesses: Array.isArray(currentSign.weaknesses) ? currentSign.weaknesses.join(', ') : currentSign.weaknesses,
            compatibility: currentSign.compatibility
        };
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
            web: 'Shared successfully!',
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



