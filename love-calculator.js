/**
 * Love Compatibility Calculator
 */

// --- Love Compatibility Calculator Functions ---

function calculateLoveScore(name1, name2) {
    // Normalize names
    const n1 = name1.toLowerCase().trim();
    const n2 = name2.toLowerCase().trim();

    if (!n1 || !n2) return 0;

    let score = 0;

    // 1. Letter Frequency Match (30 points)
    const getLetterFreq = (name) => {
        const freq = {};
        for (let char of name) {
            if (char.match(/[a-z]/)) {
                freq[char] = (freq[char] || 0) + 1;
            }
        }
        return freq;
    };

    const freq1 = getLetterFreq(n1);
    const freq2 = getLetterFreq(n2);
    const allLetters = new Set([...Object.keys(freq1), ...Object.keys(freq2)]);

    let matchScore = 0;
    allLetters.forEach(letter => {
        const f1 = freq1[letter] || 0;
        const f2 = freq2[letter] || 0;
        matchScore += Math.min(f1, f2);
    });

    score += Math.min(30, matchScore * 3);

    // 2. Name Length Harmony (20 points)
    const lengthDiff = Math.abs(n1.length - n2.length);
    const lengthScore = Math.max(0, 20 - lengthDiff * 2);
    score += lengthScore;

    // 3. Vowel Ratio (20 points)
    const countVowels = (name) => {
        return (name.match(/[aeiou]/g) || []).length;
    };

    const vowels1 = countVowels(n1);
    const vowels2 = countVowels(n2);
    const ratio1 = vowels1 / n1.length;
    const ratio2 = vowels2 / n2.length;
    const ratioDiff = Math.abs(ratio1 - ratio2);
    const vowelScore = Math.max(0, 20 - ratioDiff * 40);
    score += vowelScore;

    // 4. Character Sum Modulo (30 points)
    const charSum = (name) => {
        return name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    };

    const sum1 = charSum(n1);
    const sum2 = charSum(n2);
    const combinedSum = sum1 + sum2;
    const moduloScore = (combinedSum % 31);
    score += moduloScore;

    // Ensure score is between 0-100
    return Math.min(100, Math.max(0, Math.round(score)));
}

function getCompatibilityMessage(score) {
    if (score >= 90) return "✨ Soulmates! A cosmic match made in the stars!";
    if (score >= 80) return "💫 Incredible Connection! The universe approves!";
    if (score >= 70) return "🌟 Great Match! Strong cosmic alignment!";
    if (score >= 60) return "💕 Good Compatibility! Positive energy flows!";
    if (score >= 50) return "💗 Decent Match! Room for growth together!";
    if (score >= 40) return "💝 Moderate Connection! Effort brings rewards!";
    if (score >= 30) return "💖 Challenging but Possible! Work on understanding!";
    return "💔 Different Paths! Sometimes opposites attract!";
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

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-love');
    const name1Input = document.getElementById('name1');
    const name2Input = document.getElementById('name2');
    const resultContainer = document.getElementById('love-result');
    const scoreDisplay = document.getElementById('score-display');
    const resultMessage = document.getElementById('result-message');
    const shareContainer = document.getElementById('love-share-container');

    let currentResult = null;

    calculateBtn.addEventListener('click', () => {
        const name1 = name1Input.value.trim();
        const name2 = name2Input.value.trim();

        if (!name1 || !name2) {
            alert('Please enter both names!');
            return;
        }

        // Calculate score
        const score = calculateLoveScore(name1, name2);
        const message = getCompatibilityMessage(score);

        // Store current result for sharing
        currentResult = { name1, name2, score, message };

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

        // Update message
        setTimeout(() => {
            resultMessage.textContent = message;
            // Show share buttons after result is displayed
            if (shareContainer) {
                shareContainer.style.display = 'block';
            }
        }, 900);
    });

    // Allow Enter key to calculate
    [name1Input, name2Input].forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                calculateBtn.click();
            }
        });
    });

    // Share button event listeners
    document.getElementById('love-share-twitter')?.addEventListener('click', () => handleLoveShare('twitter'));
    document.getElementById('love-share-facebook')?.addEventListener('click', () => handleLoveShare('facebook'));
    document.getElementById('love-share-download')?.addEventListener('click', () => handleLoveShare('download'));
    document.getElementById('love-share-copy')?.addEventListener('click', () => handleLoveShare('copy'));

    async function handleLoveShare(method) {
        if (!currentResult) return;

        const { name1, name2, score, message } = currentResult;
        const title = `${name1} ❤️ ${name2}`;
        const text = `Love Compatibility: ${score}%\n${message}`;

        const result = await shareContent({
            type: 'compatibility',
            title,
            text,
            icon: '💕',
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

    // Initialize particles
    initParticles();
});
