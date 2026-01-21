document.addEventListener('DOMContentLoaded', () => {
    const letterGrid = document.getElementById('letter-grid');
    const resultContainer = document.getElementById('result-container');
    const cardsContainer = document.getElementById('cards-container');
    const resultTitle = document.getElementById('selected-letter-title');
    const closeBtn = document.getElementById('close-result');

    // Section mapping for icons/titles
    const sectionConfig = {
        'career': { title: 'Career & Business', icon: '💼' },
        'finance': { title: 'Finances', icon: '💰' },
        'love': { title: 'Love Life', icon: '❤️' },
        'marriage': { title: 'Married Life', icon: '💍' },
        'education': { title: 'Education', icon: '🎓' },
        'health': { title: 'Health', icon: '⚕️' }
    };

    // Generate A-Z buttons
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    alphabet.forEach(letter => {
        const btn = document.createElement('button');
        btn.classList.add('letter-btn');
        btn.textContent = letter.toUpperCase();
        btn.dataset.letter = letter;

        btn.addEventListener('click', () => handleLetterClick(letter, btn));

        letterGrid.appendChild(btn);
    });

    closeBtn.addEventListener('click', () => {
        resultContainer.classList.add('hidden');
        document.querySelectorAll('.letter-btn').forEach(b => b.classList.remove('active'));
    });

    function handleLetterClick(letter, btn) {
        // Handle UI state
        document.querySelectorAll('.letter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Fetch data
        const data = window.letterHoroscopeData ? window.letterHoroscopeData[letter] : null;

        if (!data) {
            alert(`Sorry, horoscope data for letter ${letter.toUpperCase()} is unavailable at the moment.`);
            return;
        }

        // Render Cards
        cardsContainer.innerHTML = '';
        resultTitle.textContent = `Horoscope for Letter ${letter.toUpperCase()}`;

        // Order of display preferences
        const order = ['career', 'finance', 'love', 'marriage', 'education', 'health'];

        order.forEach(key => {
            if (data[key]) {
                const card = createCard(key, data[key]);
                cardsContainer.appendChild(card);
            }
        });

        // Show result
        resultContainer.classList.remove('hidden');
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function createCard(type, content) {
        const config = sectionConfig[type] || { title: type, icon: '✨' };

        const card = document.createElement('div');
        card.classList.add('insight-card');

        // Prepare preview text
        let previewText = content.replace(/\s+/g, ' ').trim();
        if (previewText.length > 90) {
            previewText = previewText.substring(0, 90).split(' ').slice(0, -1).join(' ') + '...';
        }

        card.innerHTML = `
            <div class="card-header">
                <div class="header-left">
                    <span class="card-icon" style="font-size: 1.2rem;">${config.icon}</span>
                    <h4>${config.title}</h4>
                </div>
                <span class="toggle-icon">▼</span>
            </div>
            <div class="card-preview">
                <p class="preview-text">${previewText}</p>
                <span class="read-more">Read full insight ></span>
            </div>
            <div class="card-content">
                <p class="yearly-text">${content}</p>
            </div>
        `;

        // Add Toggle Logic
        const header = card.querySelector('.card-header');
        const readMore = card.querySelector('.read-more');

        const toggleCard = (e) => {
            e.stopPropagation();
            const wasActive = card.classList.contains('active');
            if (wasActive) {
                card.classList.remove('active');
            } else {
                card.classList.add('active');
            }
        };

        header.addEventListener('click', toggleCard);
        readMore.addEventListener('click', toggleCard);

        return card;
    }
});
