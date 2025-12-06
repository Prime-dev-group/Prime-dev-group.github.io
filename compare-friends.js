document.addEventListener('DOMContentLoaded', () => {
    const sign1Select = document.getElementById('sign1-select');
    const sign2Select = document.getElementById('sign2-select');
    const compareBtn = document.getElementById('compare-btn');
    const resultsArea = document.getElementById('results-area');

    // Elements to update
    const scoreValue = document.getElementById('score-value');
    const scoreBar = document.getElementById('score-bar');
    const scoreText = document.getElementById('score-text');

    const sign1Icon = document.getElementById('sign1-icon');
    const sign1Name = document.getElementById('sign1-name');
    const sign1Horoscope = document.getElementById('sign1-horoscope');

    const sign2Icon = document.getElementById('sign2-icon');
    const sign2Name = document.getElementById('sign2-name');
    const sign2Horoscope = document.getElementById('sign2-horoscope');

    const combinedReading = document.getElementById('combined-reading');

    // Populate Select Options
    ZODIAC_SIGNS.forEach(sign => {
        const option1 = document.createElement('option');
        option1.value = sign;
        option1.textContent = sign;
        sign1Select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = sign;
        option2.textContent = sign;
        sign2Select.appendChild(option2);
    });

    // Handle Compare Click
    compareBtn.addEventListener('click', () => {
        const sign1 = sign1Select.value;
        const sign2 = sign2Select.value;

        if (!sign1 || !sign2) {
            alert("Please select both signs!");
            return;
        }

        // Show results
        resultsArea.classList.add('visible');

        // 1. Update Friendship Score
        const compatibility = COMPATIBILITY_DATA[sign1][sign2];
        const score = compatibility.friendship;

        // Animate score
        animateValue(scoreValue, 0, score, 1000);
        scoreBar.style.width = `${score}%`;

        // Score Text
        if (score >= 90) scoreText.textContent = "BFFs! A cosmic bond that can't be broken.";
        else if (score >= 70) scoreText.textContent = "Great friends with lots of fun times ahead.";
        else if (score >= 50) scoreText.textContent = "Good friends, though you may have different interests.";
        else scoreText.textContent = "An unlikely pair, but you can learn a lot from each other.";

        // 2. Update Horoscopes
        const data1 = HOROSCOPE_DATA.find(d => d.name === sign1);
        const data2 = HOROSCOPE_DATA.find(d => d.name === sign2);

        sign1Icon.textContent = data1.icon;
        sign1Name.textContent = data1.name;
        sign1Horoscope.textContent = data1.horoscope;

        sign2Icon.textContent = data2.icon;
        sign2Name.textContent = data2.name;
        sign2Horoscope.textContent = data2.horoscope;

        // 3. Generate Combined Reading
        combinedReading.textContent = generateCombinedReading(data1, data2, score);

        // Scroll to results
        resultsArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function generateCombinedReading(d1, d2, score) {
        // Simple generative logic based on elements and score
        const elem1 = d1.element;
        const elem2 = d2.element;

        let intro = "";
        if (d1.name === d2.name) {
            intro = `Two ${d1.name}s together is double the energy! You understand each other instinctively. `;
        } else {
            intro = `When ${d1.name} (${elem1}) and ${d2.name} (${elem2}) come together, `;
        }

        let dynamic = "";
        if (score > 80) {
            dynamic = "there is an effortless flow of energy. You support each other's dreams and enjoy a harmonious connection. ";
        } else if (score > 60) {
            dynamic = "you find common ground easily. While you have your differences, they often complement each other well. ";
        } else {
            dynamic = "it can be a learning experience. You challenge each other to see the world from a different perspective. ";
        }

        let advice = "";
        const keywords = [...d1.keywords, ...d2.keywords];
        const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

        advice = `Focus on being ${randomKeyword.toLowerCase()} together today. Your combined strengths can overcome any obstacle if you communicate openly.`;

        return intro + dynamic + advice;
    }
});
