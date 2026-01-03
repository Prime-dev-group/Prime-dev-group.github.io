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
        if (typeof yearly_horoscope_2026 === 'undefined' || !yearly_horoscope_2026) {
            throw new Error('Data not loaded. Please ensure yearly-2026-data.js is loaded correctly.');
        }

        // Helper to find case-insensitive key
        const dataKeys = Object.keys(yearly_horoscope_2026);
        const matchedKey = dataKeys.find(key => key.toLowerCase() === signName.toLowerCase());

        if (!matchedKey) {
            throw new Error(`Data for ${signName} not found.`);
        }

        const signData = yearly_horoscope_2026[matchedKey];

        // Set Page Title
        titleElement.textContent = `${matchedKey} 2026 Horoscope`;

        // Render Grid Tiles
        renderGrid(signData);

        loadingDiv.classList.add('hidden');
        gridDiv.classList.remove('hidden');

    } catch (error) {
        console.error('Error:', error);
        showError('Sorry, we could not load the yearly horoscope at this time.');
    }

    function renderGrid(data) {
        gridDiv.innerHTML = ''; // Clear previous

        for (const [category, content] of Object.entries(data)) {
            // Skip empty or trivial categories
            if (!content || content.length < 10) continue;

            // Determine Icon
            let icon = categoryIcons[category] || "✨";

            // Create Tile
            const card = document.createElement('div');
            card.className = 'zodiac-card';
            card.innerHTML = `
                <div class="zodiac-icon" style="font-size: 2.5rem; margin-bottom: 10px;">${icon}</div>
                <div class="zodiac-name" style="font-size: 1.1rem;">${category}</div>
                <div class="zodiac-date" style="font-size: 0.8rem; color: #a0a0c0;">Click to read</div>
            `;

            // Add Click Event
            card.addEventListener('click', () => {
                openModal(category, content, icon);
            });

            gridDiv.appendChild(card);
        }
    }

    function openModal(category, content, icon) {
        modalTitle.textContent = category;
        modalContent.textContent = content;
        modalIcon.textContent = icon;
        modal.classList.remove('hidden');
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
