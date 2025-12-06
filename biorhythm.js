/**
 * Biorhythm Calculator
 * Calculates physical, emotional, and intellectual cycles and displays wave visualizations
 */

// Biorhythm cycle lengths (in days)
const CYCLES = {
    physical: 23,
    emotional: 28,
    intellectual: 33
};

// DOM Elements
const birthDateInput = document.getElementById('birth-date');
const calculateBtn = document.getElementById('calculate-btn');
const resultsSection = document.getElementById('results-section');
const daysAliveText = document.getElementById('days-alive-text');
const canvas = document.getElementById('biorhythm-canvas');
const ctx = canvas?.getContext('2d');

// Cycle display elements
const physicalPercentage = document.getElementById('physical-percentage');
const physicalFill = document.getElementById('physical-fill');
const physicalState = document.getElementById('physical-state');
const physicalDescription = document.getElementById('physical-description');

const emotionalPercentage = document.getElementById('emotional-percentage');
const emotionalFill = document.getElementById('emotional-fill');
const emotionalState = document.getElementById('emotional-state');
const emotionalDescription = document.getElementById('emotional-description');

const intellectualPercentage = document.getElementById('intellectual-percentage');
const intellectualFill = document.getElementById('intellectual-fill');
const intellectualState = document.getElementById('intellectual-state');
const intellectualDescription = document.getElementById('intellectual-description');

// Current biorhythm data
let currentBiorhythm = null;

/**
 * Calculate days between two dates
 */
function calculateDaysBetween(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;
    const diff = date2 - date1;
    return Math.floor(diff / oneDay);
}

/**
 * Calculate biorhythm value for a cycle
 */
function calculateCycleValue(daysAlive, cycleLength) {
    // Biorhythm formula: sin(2π × days / cycle_length)
    const radians = (2 * Math.PI * daysAlive) / cycleLength;
    const value = Math.sin(radians);

    // Convert to percentage (0-100%)
    const percentage = Math.round(((value + 1) / 2) * 100);

    return {
        value: value,
        percentage: percentage
    };
}

/**
 * Get cycle state based on percentage
 */
function getCycleState(percentage) {
    if (percentage >= 75) {
        return { state: 'HIGH', color: '#4ade80' };
    } else if (percentage >= 50) {
        return { state: 'GOOD', color: '#60a5fa' };
    } else if (percentage >= 25) {
        return { state: 'NEUTRAL', color: '#fbbf24' };
    } else {
        return { state: 'LOW', color: '#f87171' };
    }
}

/**
 * Get cycle description based on type and percentage
 */
function getCycleDescription(cycleType, percentage) {
    const descriptions = {
        physical: {
            high: "Your physical energy is at its peak! Great day for sports, workouts, and physical challenges.",
            good: "Above average physical energy. Good time for moderate physical activities.",
            neutral: "Transitioning phase. Balance activity with rest as your body adjusts.",
            low: "Recharging phase. Focus on rest, recovery, and gentle activities. Listen to your body."
        },
        emotional: {
            high: "Emotional peak! Your mood is uplifted, creativity flows, and relationships thrive.",
            good: "Positive emotional state. Good time for social connections and creative work.",
            neutral: "Emotional balance. Take time to process feelings and maintain equilibrium.",
            low: "Recharging emotionally. Practice self-care, introspection, and gentle self-compassion."
        },
        intellectual: {
            high: "Mental clarity at maximum! Perfect for learning, problem-solving, and analytical tasks.",
            good: "Sharp thinking and good concentration. Ideal for mental work and study.",
            neutral: "Mental transition. Mix challenging tasks with lighter activities.",
            low: "Mental recharge phase. Avoid major decisions. Focus on routine tasks and rest your mind."
        }
    };

    let level;
    if (percentage >= 75) level = 'high';
    else if (percentage >= 50) level = 'good';
    else if (percentage >= 25) level = 'neutral';
    else level = 'low';

    return descriptions[cycleType][level];
}

/**
 * Calculate all biorhythms for a birth date
 */
function calculateBiorhythms(birthDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const birth = new Date(birthDate);
    birth.setHours(0, 0, 0, 0);

    const daysAlive = calculateDaysBetween(birth, today);

    const physical = calculateCycleValue(daysAlive, CYCLES.physical);
    const emotional = calculateCycleValue(daysAlive, CYCLES.emotional);
    const intellectual = calculateCycleValue(daysAlive, CYCLES.intellectual);

    return {
        daysAlive: daysAlive,
        birthDate: birth,
        physical: physical,
        emotional: emotional,
        intellectual: intellectual
    };
}

/**
 * Draw biorhythm waves on canvas
 */
function drawBiorhythmWaves(biorhythm) {
    if (!canvas || !ctx) return;

    // Set canvas size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const centerY = height / 2;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;

    // Horizontal center line
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // Horizontal grid lines
    ctx.beginPath();
    ctx.moveTo(0, centerY - height / 4);
    ctx.lineTo(width, centerY - height / 4);
    ctx.moveTo(0, centerY + height / 4);
    ctx.lineTo(width, centerY + height / 4);
    ctx.stroke();

    // Vertical grid lines
    for (let i = 0; i <= 4; i++) {
        const x = (width / 4) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    // Calculate days to display (30 days: 15 past, today, 14 future)
    const daysToShow = 30;
    const startDay = biorhythm.daysAlive - 15;

    // Draw cycles
    const cycles = [
        { name: 'physical', length: CYCLES.physical, color: '#ff6b6b', lineWidth: 3 },
        { name: 'emotional', length: CYCLES.emotional, color: '#4ecdc4', lineWidth: 3 },
        { name: 'intellectual', length: CYCLES.intellectual, color: '#95e1d3', lineWidth: 3 }
    ];

    cycles.forEach(cycle => {
        ctx.strokeStyle = cycle.color;
        ctx.lineWidth = cycle.lineWidth;
        ctx.beginPath();

        for (let i = 0; i < daysToShow; i++) {
            const day = startDay + i;
            const x = (width / (daysToShow - 1)) * i;

            const radians = (2 * Math.PI * day) / cycle.length;
            const value = Math.sin(radians);
            const y = centerY - (value * (height / 2.5));

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.stroke();
    });

    // Draw current day marker
    const currentDayX = width / 2;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(currentDayX, 0);
    ctx.lineTo(currentDayX, height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw "TODAY" label
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = 'bold 12px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('TODAY', currentDayX, 15);
}

/**
 * Display biorhythm results
 */
function displayResults(biorhythm) {
    // Update days alive text
    daysAliveText.textContent = `You have been alive for ${biorhythm.daysAlive.toLocaleString()} days`;

    // Physical cycle
    physicalPercentage.textContent = `${biorhythm.physical.percentage}%`;
    physicalFill.style.width = `${biorhythm.physical.percentage}%`;
    const physicalStateData = getCycleState(biorhythm.physical.percentage);
    physicalState.textContent = physicalStateData.state;
    physicalState.style.color = physicalStateData.color;
    physicalDescription.textContent = getCycleDescription('physical', biorhythm.physical.percentage);

    // Emotional cycle
    emotionalPercentage.textContent = `${biorhythm.emotional.percentage}%`;
    emotionalFill.style.width = `${biorhythm.emotional.percentage}%`;
    const emotionalStateData = getCycleState(biorhythm.emotional.percentage);
    emotionalState.textContent = emotionalStateData.state;
    emotionalState.style.color = emotionalStateData.color;
    emotionalDescription.textContent = getCycleDescription('emotional', biorhythm.emotional.percentage);

    // Intellectual cycle
    intellectualPercentage.textContent = `${biorhythm.intellectual.percentage}%`;
    intellectualFill.style.width = `${biorhythm.intellectual.percentage}%`;
    const intellectualStateData = getCycleState(biorhythm.intellectual.percentage);
    intellectualState.textContent = intellectualStateData.state;
    intellectualState.style.color = intellectualStateData.color;
    intellectualDescription.textContent = getCycleDescription('intellectual', biorhythm.intellectual.percentage);

    // Draw waves
    drawBiorhythmWaves(biorhythm);

    // Show results
    resultsSection.classList.remove('hidden');

    // Scroll to results
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

/**
 * Handle calculate button click
 */
function handleCalculate() {
    const birthDate = birthDateInput.value;

    if (!birthDate) {
        alert('Please enter your birth date');
        return;
    }

    // Validate birth date is not in future
    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {
        alert('Birth date cannot be in the future');
        return;
    }

    // Calculate biorhythms
    currentBiorhythm = calculateBiorhythms(birthDate);

    // Display results
    displayResults(currentBiorhythm);

    // Save to localStorage
    localStorage.setItem('birthDate', birthDate);
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
    if (!currentBiorhythm) return;

    const title = '📈 My Biorhythm Cycles';
    const text = `Physical: ${currentBiorhythm.physical.percentage}%\nEmotional: ${currentBiorhythm.emotional.percentage}%\nIntellectual: ${currentBiorhythm.intellectual.percentage}%\n\nDays alive: ${currentBiorhythm.daysAlive.toLocaleString()}`;

    const result = await shareContent({
        type: 'biorhythm',
        title,
        text,
        icon: '📈',
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
 * Set max date for birth date input
 */
function setMaxDate() {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    birthDateInput.setAttribute('max', dateString);
}

/**
 * Initialize page
 */
document.addEventListener('DOMContentLoaded', () => {
    // Set max date
    setMaxDate();

    // Initialize particles
    initParticles();

    // Initialize share buttons
    initShareButtons();

    // Add event listener to calculate button
    calculateBtn.addEventListener('click', handleCalculate);

    // Auto-load saved birth date
    const savedBirthDate = localStorage.getItem('birthDate');
    if (savedBirthDate) {
        birthDateInput.value = savedBirthDate;
        handleCalculate();
    }

    // Redraw canvas on window resize
    window.addEventListener('resize', () => {
        if (currentBiorhythm) {
            drawBiorhythmWaves(currentBiorhythm);
        }
    });
});
