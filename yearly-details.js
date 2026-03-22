document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const signName = urlParams.get('sign'); // e.g., 'aries'

    // Elements
    const loadingDiv = document.getElementById('loading');
    const gridDiv = document.getElementById('details-grid');
    const titleElement = document.getElementById('sign-title');
    const errorDiv = document.getElementById('error-message');

    // Modal Elements
    const modal = document.getElementById('details-modal');
    const closeModalBtn = modal.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-category-title');
    const modalContent = document.getElementById('modal-content-text');
    const modalIcon = document.getElementById('modal-icon');

    // Icon Mapping for Categories
    const categoryIcons = {
        "Health": "💊",
        "Education": "🎓",
        "Business": "🤝",
        "Career": "💼",
        "Finance": "💰",
        "Love": "❤️",
        "Marriage": "💍",
        "Family": "🏡",
        "Property": "🏠"
    };

    if (!signName) {
        showError('No zodiac sign specified.');
        return;
    }

    try {
        const currentLanguage = localStorage.getItem('astromage_lang') || 'en';
        const isHi = currentLanguage === 'hi';

        const tr = {
            title_en: "2026 Yearly Forecast",
            title_hi: "2026 वार्षिक भविष्यफल",
            back_en: "← Back to Horoscope",
            back_hi: "← राशिफल पर वापस जाएं",
            loading_en: "Loading forecast...",
            loading_hi: "भविष्यफल लोड हो रहा है...",
            horoscope_en: "2026 Horoscope",
            horoscope_hi: "2026 राशिफल",
            error_en: "Sorry, we could not load the yearly horoscope at this time.",
            error_hi: "क्षमा करें, हम इस समय वार्षिक राशिफल लोड नहीं कर सके।",
            click_en: "Click to read",
            click_hi: "पढ़ने के लिए क्लिक करें",
            signs_hi: { "Aries": "मेष", "Taurus": "वृषभ", "Gemini": "मिथुन", "Cancer": "कर्क", "Leo": "सिंह", "Virgo": "कन्या", "Libra": "तुला", "Scorpio": "वृश्चिक", "Sagittarius": "धनु", "Capricorn": "मकर", "Aquarius": "कुंभ", "Pisces": "मीन" },
            categories_hi: {
                "Health": "स्वास्थ्य",
                "Education": "शिक्षा",
                "Business": "व्यापार",
                "Career": "करियर",
                "Finance": "वित्त",
                "Love": "प्रेम",
                "Marriage": "विवाह",
                "Family": "परिवार",
                "Property": "संपत्ति"
            }
        };

        // Update static UI text
        document.querySelector('.subtitle').textContent = isHi ? tr.title_hi : tr.title_en;
        document.querySelector('.back-link').textContent = isHi ? tr.back_hi : tr.back_en;
        loadingDiv.textContent = isHi ? tr.loading_hi : tr.loading_en;

        const sourceData = isHi ? window.yearly_horoscope_2026_hi : window.yearly_horoscope_2026;

        if (typeof sourceData === 'undefined' || !sourceData) {
            throw new Error('Data not loaded. Please ensure data files are loaded correctly.');
        }

        // Helper to find case-insensitive key
        const dataKeys = Object.keys(sourceData);
        const matchedKey = dataKeys.find(key => key.toLowerCase() === signName.toLowerCase());

        if (!matchedKey) {
            throw new Error(`Data for ${signName} not found.`);
        }

        const signData = sourceData[matchedKey];

        // Set Page Title
        const displaySignName = isHi && tr.signs_hi[matchedKey] ? tr.signs_hi[matchedKey] : matchedKey;
        const displayHoroscope = isHi ? tr.horoscope_hi : tr.horoscope_en;
        titleElement.textContent = `${displaySignName} ${displayHoroscope}`;

        // Render Grid Tiles
        renderGrid(signData, isHi, tr);

        loadingDiv.classList.add('hidden');
        gridDiv.classList.remove('hidden');

    } catch (error) {
        console.error('Error:', error);
        const currentLang = localStorage.getItem('astromage_lang') || 'en';
        showError(currentLang === 'hi' ? "क्षमा करें, हम इस समय वार्षिक राशिफल लोड नहीं कर सके।" : 'Sorry, we could not load the yearly horoscope at this time.');
    }

    function renderGrid(data, isHi, tr) {
        gridDiv.innerHTML = ''; // Clear previous

        for (const [category, content] of Object.entries(data)) {
            // Skip empty or trivial categories
            if (!content || content.length < 10) continue;

            // Determine Icon
            let icon = categoryIcons[category] || "✨";
            const displayCategory = isHi && tr.categories_hi[category] ? tr.categories_hi[category] : category;
            const clickText = isHi ? tr.click_hi : tr.click_en;

            // Create Tile
            const card = document.createElement('div');
            card.className = 'zodiac-card';
            card.innerHTML = `
                <div class="zodiac-icon" style="font-size: 2.5rem; margin-bottom: 10px;">${icon}</div>
                <div class="zodiac-name" style="font-size: 1.1rem;">${displayCategory}</div>
                <div class="zodiac-date" style="font-size: 0.8rem; color: #a0a0c0;">${clickText}</div>
            `;

            // Add Click Event
            card.addEventListener('click', () => {
                openModal(displayCategory, content, icon);
            });

            gridDiv.appendChild(card);
        }
    }

    function openModal(category, content, icon) {
        modalTitle.textContent = category;
        modalContent.textContent = content;
        modalIcon.textContent = icon;
        modal.classList.remove('hidden');

        // Reset Scroll
        const modalBody = modal.querySelector('.modal-body');
        if (modalBody) modalBody.scrollTop = 0;

        // Small delay to allow display:flex to apply before opacity transition if needed, 
        // utilizing requestAnimationFrame for smoother transition
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });
    }

    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); // Match transition duration
    }

    // Modal Event Listeners
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    function showError(message) {
        loadingDiv.classList.add('hidden');
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
    }
});
