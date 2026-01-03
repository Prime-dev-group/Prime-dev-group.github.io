document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const signName = urlParams.get('sign');
    const loadingDiv = document.getElementById('loading');
    const contentDiv = document.getElementById('content');
    const titleElement = document.getElementById('sign-title');
    const textElement = document.getElementById('characteristics-text');
    const errorDiv = document.getElementById('error-message');

    if (!signName) {
        showError('No zodiac sign specified.');
        return;
    }

    try {
        // Check if data is loaded from the script tag
        if (typeof horo_english === 'undefined' || !horo_english) {
            throw new Error('Data not loaded. Please ensure english-common.json is loaded correctly.');
        }

        const data = horo_english; // Access the global variable directly

        // The data structure is horo_english=[{ "0": { ... }, "1": { ... } }]
        // We need to access the first element of the array
        const characteristicsData = data[0];

        // Map sign names to indices 0-11
        const signMap = {
            'Aries': '0',
            'Taurus': '1',
            'Gemini': '2',
            'Cancer': '3',
            'Leo': '4',
            'Virgo': '5',
            'Libra': '6',
            'Scorpio': '7',
            'Sagittarius': '8',
            'Capricorn': '9',
            'Aquarius': '10',
            'Pisces': '11'
        };

        const signIndex = signMap[signName];

        if (signIndex === undefined || !characteristicsData[signIndex]) {
            throw new Error(`Data for ${signName} not found.`);
        }

        const signData = characteristicsData[signIndex];
        // The key inside signData corresponds to "{SignName} Common Characteristics"
        const contentKey = Object.keys(signData)[0];
        const contentHtml = signData[contentKey];

        titleElement.textContent = `${signName} Personality Profile`;
        textElement.innerHTML = contentHtml; // The JSON contains HTML tags like <p>

        loadingDiv.classList.add('hidden');
        contentDiv.classList.remove('hidden');

    } catch (error) {
        console.error('Error:', error);
        showError('Sorry, we could not load the personality profile at this time.');
    }

    function showError(message) {
        loadingDiv.classList.add('hidden');
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
    }
});
