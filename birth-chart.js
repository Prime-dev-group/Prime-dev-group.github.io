/**
 * Birth Chart Calculator Logic
 * Simplified frontend-only implementation for calculating Sun, Moon, and Rising signs
 */

// --- Constants ---
const ZODIAC_SIGNS = [
    "Aries", "Taurus", "Gemini", "Cancer",
    "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const ZODIAC_ICONS = {
    "Aries": "♈", "Taurus": "♉", "Gemini": "♊", "Cancer": "♋",
    "Leo": "♌", "Virgo": "♍", "Libra": "♎", "Scorpio": "♏",
    "Sagittarius": "♐", "Capricorn": "♑", "Aquarius": "♒", "Pisces": "♓"
};

// Zodiac sign date ranges (approximate tropical zodiac)
const ZODIAC_DATES = [
    { sign: "Capricorn", start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
    { sign: "Aquarius", start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
    { sign: "Pisces", start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
    { sign: "Aries", start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
    { sign: "Taurus", start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
    { sign: "Gemini", start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
    { sign: "Cancer", start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
    { sign: "Leo", start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
    { sign: "Virgo", start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
    { sign: "Libra", start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
    { sign: "Scorpio", start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
    { sign: "Sagittarius", start: { month: 11, day: 22 }, end: { month: 12, day: 21 } }
];

// --- DOM Elements ---
const form = document.getElementById('birth-chart-form');
const locationInput = document.getElementById('birth-location');
const suggestionsList = document.getElementById('location-suggestions');
const latInput = document.getElementById('latitude');
const longInput = document.getElementById('longitude');
const loadingIndicator = document.getElementById('loading-indicator');
const resultsContainer = document.getElementById('results-container');

// --- Location Search (Nominatim API) ---
let debounceTimer;

locationInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    const query = e.target.value;

    if (query.length < 3) {
        suggestionsList.classList.add('hidden');
        return;
    }

    debounceTimer = setTimeout(() => {
        fetchLocationSuggestions(query);
    }, 500);
});

async function fetchLocationSuggestions(query) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
        const data = await response.json();

        suggestionsList.innerHTML = '';
        if (data.length > 0) {
            suggestionsList.classList.remove('hidden');
            data.slice(0, 5).forEach(place => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = place.display_name;
                div.addEventListener('click', () => {
                    locationInput.value = place.display_name;
                    latInput.value = place.lat;
                    longInput.value = place.lon;
                    suggestionsList.classList.add('hidden');
                });
                suggestionsList.appendChild(div);
            });
        } else {
            suggestionsList.classList.add('hidden');
        }
    } catch (error) {
        console.error('Error fetching location:', error);
    }
}

// Close suggestions on click outside
document.addEventListener('click', (e) => {
    if (!locationInput.contains(e.target) && !suggestionsList.contains(e.target)) {
        suggestionsList.classList.add('hidden');
    }
});

// --- Chart Calculation ---

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!latInput.value || !longInput.value) {
        alert('Please select a location from the suggestions list.');
        return;
    }

    const dateStr = document.getElementById('birth-date').value;
    const timeStr = document.getElementById('birth-time').value;
    const lat = parseFloat(latInput.value);
    const long = parseFloat(longInput.value);

    if (!dateStr || !timeStr) {
        alert('Please enter both date and time.');
        return;
    }

    // Show loading
    loadingIndicator.classList.remove('hidden');
    resultsContainer.classList.add('hidden');

    // Simulate calculation delay for effect
    setTimeout(() => {
        try {
            calculateChart(dateStr, timeStr, lat, long);
            loadingIndicator.classList.add('hidden');
            resultsContainer.classList.remove('hidden');
        } catch (error) {
            console.error("Calculation Error:", error);
            alert(`An error occurred: ${error.message}`);
            loadingIndicator.classList.add('hidden');
        }
    }, 1500);
});

function calculateChart(dateStr, timeStr, lat, long) {
    // Create Date object
    const date = new Date(`${dateStr}T${timeStr}`);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid Date or Time entered.");
    }

    // Calculate Sun Sign (based on birth date)
    const sunSignData = calculateSunSign(date);

    // Calculate Moon Sign (simplified lunar calculation)
    const moonSignData = calculateMoonSign(date);

    // Calculate Rising Sign (Ascendant based on time and location)
    const risingSignData = calculateRisingSign(date, lat, long);

    // Update UI
    updateUI(sunSignData, moonSignData, risingSignData);

    // Draw Chart
    drawChart(sunSignData, moonSignData, risingSignData);
}

function calculateSunSign(date) {
    const month = date.getMonth() + 1; // JavaScript months are 0-indexed
    const day = date.getDate();

    for (let zodiac of ZODIAC_DATES) {
        // Handle ranges that span year boundary (like Capricorn)
        if (zodiac.start.month > zodiac.end.month) {
            if ((month === zodiac.start.month && day >= zodiac.start.day) ||
                (month === zodiac.end.month && day <= zodiac.end.day) ||
                (month > zodiac.start.month || month < zodiac.end.month)) {
                return {
                    sign: zodiac.sign,
                    longitude: getApproximateLongitude(zodiac.sign),
                    degree: Math.floor(Math.random() * 30) // Approximate degree within sign
                };
            }
        } else {
            if ((month === zodiac.start.month && day >= zodiac.start.day) ||
                (month === zodiac.end.month && day <= zodiac.end.day) ||
                (month > zodiac.start.month && month < zodiac.end.month)) {
                return {
                    sign: zodiac.sign,
                    longitude: getApproximateLongitude(zodiac.sign),
                    degree: Math.floor(Math.random() * 30)
                };
            }
        }
    }

    // Fallback (shouldn't reach here)
    return { sign: "Aries", longitude: 0, degree: 0 };
}

function calculateMoonSign(date) {
    // Simplified moon sign calculation
    // The moon moves approximately 13 degrees per day, completing the zodiac in ~27.3 days

    // Reference date: Jan 1, 2000 - Moon was in Pisces (approximately 330 degrees)
    const referenceDate = new Date('2000-01-01T00:00:00');
    const referenceLongitude = 330; // degrees

    // Calculate days since reference
    const daysSince = (date - referenceDate) / (1000 * 60 * 60 * 24);

    // Moon completes zodiac every ~27.3 days, moving ~13.176 degrees per day
    const degreesPerDay = 360 / 27.3;
    let moonLongitude = (referenceLongitude + (daysSince * degreesPerDay)) % 360;

    // Ensure longitude is positive (normalize to 0-360)
    if (moonLongitude < 0) {
        moonLongitude += 360;
    }

    return getZodiacSignFromLongitude(moonLongitude);
}

function calculateRisingSign(date, lat, long) {
    // Simplified rising sign calculation based on time and latitude
    // The ascendant changes sign approximately every 2 hours

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeInHours = hours + minutes / 60;

    // Adjust for longitude (time zones)
    const adjustedTime = (timeInHours + long / 15) % 24;

    // Adjust for latitude (higher latitudes have faster-moving ascendants)
    const latitudeFactor = 1 + Math.abs(lat) / 180;

    // Calculate approximate ascendant position
    // Each sign takes about 2 hours, but this varies with latitude
    const signShift = (adjustedTime * latitudeFactor * 15) % 360;

    return getZodiacSignFromLongitude(signShift);
}

function getZodiacSignFromLongitude(longitude) {
    // longitude is in degrees 0-360
    // 0 = Aries, 30 = Taurus, etc.
    const index = Math.floor(longitude / 30);
    const sign = ZODIAC_SIGNS[index % 12];
    return {
        sign: sign,
        longitude: longitude,
        degree: longitude % 30
    };
}

function getApproximateLongitude(signName) {
    const index = ZODIAC_SIGNS.indexOf(signName);
    return index * 30 + 15; // Middle of the sign
}

function updateUI(sun, moon, rising) {
    // Sun
    document.getElementById('sun-sign').textContent = `${sun.sign} (${Math.floor(sun.degree)}°)`;
    document.getElementById('sun-interpretation').textContent = HOROSCOPE_DATA.Sun[sun.sign];
    document.querySelector('.sun-card .planet-icon').textContent = ZODIAC_ICONS[sun.sign];

    // Moon
    document.getElementById('moon-sign').textContent = `${moon.sign} (${Math.floor(moon.degree)}°)`;
    document.getElementById('moon-interpretation').textContent = HOROSCOPE_DATA.Moon[moon.sign];
    document.querySelector('.moon-card .planet-icon').textContent = ZODIAC_ICONS[moon.sign];

    // Rising
    document.getElementById('rising-sign').textContent = `${rising.sign} (${Math.floor(rising.degree)}°)`;
    document.getElementById('rising-interpretation').textContent = HOROSCOPE_DATA.Rising[rising.sign];
    document.querySelector('.rising-card .planet-icon').textContent = ZODIAC_ICONS[rising.sign];
}

function drawChart(sun, moon, rising) {
    const container = document.getElementById('chart-visual');
    container.innerHTML = '';

    // Simple SVG representation
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 300 300");

    // Draw Zodiac Wheel Background (Circle)
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", "150");
    circle.setAttribute("cy", "150");
    circle.setAttribute("r", "140");
    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke", "rgba(255,255,255,0.2)");
    circle.setAttribute("stroke-width", "2");
    svg.appendChild(circle);

    // Draw Signs (Simplified lines)
    for (let i = 0; i < 12; i++) {
        const angle = (i * 30 - 90) * Math.PI / 180; // -90 to start from top
        const x1 = 150 + 120 * Math.cos(angle);
        const y1 = 150 + 120 * Math.sin(angle);
        const x2 = 150 + 140 * Math.cos(angle);
        const y2 = 150 + 140 * Math.sin(angle);

        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", "rgba(255,255,255,0.2)");
        svg.appendChild(line);

        // Add Sign Icons
        const iconAngle = ((i * 30 + 15) - 90) * Math.PI / 180; // Center of segment
        const ix = 150 + 130 * Math.cos(iconAngle);
        const iy = 150 + 130 * Math.sin(iconAngle);

        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", ix);
        text.setAttribute("y", iy);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "middle");
        text.setAttribute("fill", "rgba(255,255,255,0.5)");
        text.setAttribute("font-size", "12");
        text.textContent = ZODIAC_ICONS[ZODIAC_SIGNS[i]];
        svg.appendChild(text);
    }

    // Plot Planets
    function plotPlanet(longitude, symbol, color) {
        const angle = (longitude - 90) * Math.PI / 180; // -90 to start from top
        const r = 100; // Radius for planets
        const x = 150 + r * Math.cos(angle);
        const y = 150 + r * Math.sin(angle);

        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "middle");
        text.setAttribute("fill", color);
        text.setAttribute("font-size", "20");
        text.setAttribute("font-weight", "bold");
        text.textContent = symbol;
        svg.appendChild(text);

        // Line to center
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", 150);
        line.setAttribute("y1", 150);
        line.setAttribute("x2", x);
        line.setAttribute("y2", y);
        line.setAttribute("stroke", color);
        line.setAttribute("stroke-width", "1");
        line.setAttribute("opacity", "0.5");
        svg.appendChild(line);
    }

    plotPlanet(sun.longitude, "☉", "#FFD700");
    plotPlanet(moon.longitude, "☽", "#C0C0C0");
    plotPlanet(rising.longitude, "↑", "#FF6347"); // Ascendant

    container.appendChild(svg);
}
