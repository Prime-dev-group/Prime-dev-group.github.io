/**
 * Crush Compatibility Calculator
 * Anonymous compatibility testing with localStorage support
 */

// Reuse the love score calculation from love-calculator.js
function calculateLoveScore(name1, name2) {
    if (!name1 || !name2) return 0;

    name1 = name1.toLowerCase().trim();
    name2 = name2.toLowerCase().trim();

    // Factor 1: Name length compatibility (20%)
    const lengthDiff = Math.abs(name1.length - name2.length);
    const lengthScore = Math.max(0, 100 - (lengthDiff * 10));

    // Factor 2: Common letters (30%)
    const letters1 = new Set(name1.split(''));
    const letters2 = new Set(name2.split(''));
    const commonLetters = [...letters1].filter(letter => letters2.has(letter));
    const commonScore = (commonLetters.length / Math.max(letters1.size, letters2.size)) * 100;

    // Factor 3: Vowel harmony (25%)
    const vowels = 'aeiou';
    const vowelCount1 = name1.split('').filter(char => vowels.includes(char)).length;
    const vowelCount2 = name2.split('').filter(char => vowels.includes(char)).length;
    const vowelDiff = Math.abs(vowelCount1 - vowelCount2);
    const vowelScore = Math.max(0, 100 - (vowelDiff * 15));

    // Factor 4: Name numerology (25%)
    const getNameValue = (name) => {
        return name.split('').reduce((sum, char) => {
            return sum + char.charCodeAt(0);
        }, 0);
    };

    const value1 = getNameValue(name1) % 100;
    const value2 = getNameValue(name2) % 100;
    const numerologyDiff = Math.abs(value1 - value2);
    const numerologyScore = Math.max(0, 100 - numerologyDiff);

    // Weighted average
    const finalScore = Math.round(
        (lengthScore * 0.2) +
        (commonScore * 0.3) +
        (vowelScore * 0.25) +
        (numerologyScore * 0.25)
    );

    return Math.min(100, Math.max(0, finalScore));
}

function getCompatibilityMessage(score) {
    if (score >= 90) return "💖 Soulmates! The stars are aligned!";
    if (score >= 80) return "💕 Amazing Match! You two are perfect together!";
    if (score >= 70) return "💗 Great Chemistry! This could be something special!";
    if (score >= 60) return "💓 Good Potential! Worth exploring!";
    if (score >= 50) return "💝 Decent Match! Give it a chance!";
    if (score >= 40) return "💘 It's Complicated! But love finds a way!";
    if (score >= 30) return "💔 Different Paths! Sometimes opposites attract!";
    return "💙 Just Friends! But friendship is beautiful too!";
}

function getTips(score) {
    if (score >= 80) {
        return "Your compatibility is off the charts! The cosmic energies between you two are incredibly strong. This is a rare connection - don't let it slip away. Be confident and authentic when you interact with them.";
    } else if (score >= 60) {
        return "You have solid potential together! While you might have some differences, these can actually make your relationship more interesting. Focus on your common interests and be yourself. Good communication will be key.";
    } else if (score >= 40) {
        return "There's definitely something there, but it might take some effort. Don't be discouraged - many great relationships start with lower compatibility scores. Focus on building a friendship first and see where it naturally leads.";
    } else {
        return "The stars suggest you might be better as friends, but remember - compatibility calculators are just for fun! If you really like them, go for it. Sometimes the best relationships are the unexpected ones. Be genuine and see what happens!";
    }
}

// LocalStorage management
const STORAGE_KEY = 'crushCompatibilityResults';

function saveResult(yourName, crushName, score, message) {
    const results = getStoredResults();
    const newResult = {
        id: Date.now(),
        yourName,
        crushName,
        score,
        message,
        date: new Date().toISOString()
    };

    results.unshift(newResult); // Add to beginning

    // Keep only last 10 results
    if (results.length > 10) {
        results.pop();
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
    return newResult;
}

function getStoredResults() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function deleteResult(id) {
    const results = getStoredResults();
    const filtered = results.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

function clearAllResults() {
    localStorage.removeItem(STORAGE_KEY);
}

function renderSavedResults() {
    const results = getStoredResults();
    const savedSection = document.getElementById('saved-section');
    const savedList = document.getElementById('saved-list');

    if (results.length === 0) {
        savedSection.classList.add('hidden');
        return;
    }

    savedSection.classList.remove('hidden');
    savedList.innerHTML = '';

    results.forEach(result => {
        const item = document.createElement('div');
        item.className = 'saved-item';

        const date = new Date(result.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        item.innerHTML = `
            <div class="saved-info">
                <div class="saved-names">${result.yourName} 💕 ${result.crushName}</div>
                <div class="saved-score">${result.score}%</div>
                <div class="saved-date">${formattedDate}</div>
            </div>
            <button class="delete-btn" data-id="${result.id}">🗑️ Delete</button>
        `;

        savedList.appendChild(item);
    });

    // Add delete event listeners
    savedList.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            deleteResult(id);
            renderSavedResults();
            showShareNotification('Result deleted', true);
        });
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-crush');
    const yourNameInput = document.getElementById('your-name');
    const crushNameInput = document.getElementById('crush-name');
    const resultContainer = document.getElementById('crush-result');
    const scoreDisplay = document.getElementById('score-display');
    const resultMessage = document.getElementById('result-message');
    const tipsText = document.getElementById('tips-text');
    const shareContainer = document.getElementById('crush-share-container');
    const saveBtn = document.getElementById('save-result');
    const newBtn = document.getElementById('new-calculation');
    const clearAllBtn = document.getElementById('clear-all');

    let currentResult = null;

    // Calculate compatibility
    calculateBtn.addEventListener('click', () => {
        const yourName = yourNameInput.value.trim();
        const crushName = crushNameInput.value.trim();

        if (!yourName || !crushName) {
            showShareNotification('Please enter both names!', false);
            return;
        }

        // Calculate score
        const score = calculateLoveScore(yourName, crushName);
        const message = getCompatibilityMessage(score);
        const tips = getTips(score);

        // Store current result for sharing and saving
        currentResult = { yourName, crushName, score, message };

        // Display result with animation
        resultContainer.classList.remove('hidden');
        resultContainer.classList.add('show');

        // Animate score counting up
        let currentScore = 0;
        const increment = score / 30;
        const timer = setInterval(() => {
            currentScore += increment;
            if (currentScore >= score) {
                currentScore = score;
                clearInterval(timer);
            }
            scoreDisplay.textContent = Math.round(currentScore) + '%';
        }, 30);

        // Update message and tips
        setTimeout(() => {
            resultMessage.textContent = message;
            tipsText.textContent = tips;

            // Show share buttons after result is displayed
            if (shareContainer) {
                shareContainer.style.display = 'block';
            }
        }, 900);

        // Scroll to result
        setTimeout(() => {
            resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    });

    // Allow Enter key to calculate
    [yourNameInput, crushNameInput].forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                calculateBtn.click();
            }
        });
    });

    // Save result
    saveBtn.addEventListener('click', () => {
        if (!currentResult) return;

        const { yourName, crushName, score, message } = currentResult;
        saveResult(yourName, crushName, score, message);
        renderSavedResults();
        showShareNotification('Result saved! 💾', true);
    });

    // New calculation
    newBtn.addEventListener('click', () => {
        yourNameInput.value = '';
        crushNameInput.value = '';
        resultContainer.classList.remove('show');
        setTimeout(() => {
            resultContainer.classList.add('hidden');
        }, 300);
        yourNameInput.focus();
    });

    // Clear all results
    clearAllBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete all saved results?')) {
            clearAllResults();
            renderSavedResults();
            showShareNotification('All results cleared', true);
        }
    });

    // Share button event listeners
    document.getElementById('crush-share-twitter')?.addEventListener('click', () => handleCrushShare('twitter'));
    document.getElementById('crush-share-facebook')?.addEventListener('click', () => handleCrushShare('facebook'));
    document.getElementById('crush-share-download')?.addEventListener('click', () => handleCrushShare('download'));
    document.getElementById('crush-share-copy')?.addEventListener('click', () => handleCrushShare('copy'));

    async function handleCrushShare(method) {
        if (!currentResult) return;

        const { score, message } = currentResult;
        // Share anonymously without names
        const title = 'Crush Compatibility Result';
        const text = `I just checked my crush compatibility and got ${score}%! ${message}`;

        const result = await shareContent({
            type: 'compatibility',
            title,
            text,
            icon: '💘',
            score,
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

    // Initialize
    initParticles();
    renderSavedResults();
});

// Particles.js Configuration
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#9d4edd' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#9d4edd',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
}
