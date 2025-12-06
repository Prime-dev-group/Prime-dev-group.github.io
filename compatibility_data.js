/**
 * Compatibility Data
 * Contains compatibility scores (0-100) for all zodiac pairs across Love, Friendship, and Work.
 */

const ZODIAC_SIGNS = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

// Helper to generate symmetric matrix data
// In a real app, this would be manually curated or based on astrological algorithms.
// Here we use a fixed set of relationships based on element compatibility and traditional astrology.

const ELEMENT_MAP = {
    "Aries": "Fire", "Leo": "Fire", "Sagittarius": "Fire",
    "Taurus": "Earth", "Virgo": "Earth", "Capricorn": "Earth",
    "Gemini": "Air", "Libra": "Air", "Aquarius": "Air",
    "Cancer": "Water", "Scorpio": "Water", "Pisces": "Water"
};

const COMPATIBILITY_DATA = {};

ZODIAC_SIGNS.forEach(sign1 => {
    COMPATIBILITY_DATA[sign1] = {};
    ZODIAC_SIGNS.forEach(sign2 => {
        let loveScore = 50;
        let friendshipScore = 50;
        let workScore = 50;

        const elem1 = ELEMENT_MAP[sign1];
        const elem2 = ELEMENT_MAP[sign2];

        // Basic Element Logic
        if (elem1 === elem2) {
            // Same element: High compatibility
            loveScore = 85 + Math.floor(Math.random() * 10);
            friendshipScore = 90 + Math.floor(Math.random() * 10);
            workScore = 80 + Math.floor(Math.random() * 10);
        } else if (
            (elem1 === "Fire" && elem2 === "Air") || (elem1 === "Air" && elem2 === "Fire") ||
            (elem1 === "Earth" && elem2 === "Water") || (elem1 === "Water" && elem2 === "Earth")
        ) {
            // Compatible elements
            loveScore = 80 + Math.floor(Math.random() * 15);
            friendshipScore = 85 + Math.floor(Math.random() * 10);
            workScore = 75 + Math.floor(Math.random() * 15);
        } else {
            // Incompatible elements
            loveScore = 40 + Math.floor(Math.random() * 30);
            friendshipScore = 50 + Math.floor(Math.random() * 30);
            workScore = 45 + Math.floor(Math.random() * 30);
        }

        // Specific Adjustments (Traditional Astrology Nuances)
        // Opposites attract (6 signs apart)
        const idx1 = ZODIAC_SIGNS.indexOf(sign1);
        const idx2 = ZODIAC_SIGNS.indexOf(sign2);
        const distance = Math.abs(idx1 - idx2);

        if (distance === 6) {
            loveScore = 90 + Math.floor(Math.random() * 10); // Intense attraction
            workScore = 60; // Can clash
        }

        // Squares (3 signs apart) - Tension
        if (distance === 3 || distance === 9) {
            loveScore = Math.min(loveScore, 60);
            workScore = Math.min(workScore, 50);
        }

        // Self compatibility
        if (sign1 === sign2) {
            loveScore = 80;
            friendshipScore = 95;
            workScore = 85;
        }

        COMPATIBILITY_DATA[sign1][sign2] = {
            love: loveScore,
            friendship: friendshipScore,
            work: workScore
        };
    });
});

// Ensure symmetry (A->B should equal B->A)
ZODIAC_SIGNS.forEach((sign1, i) => {
    for (let j = i + 1; j < ZODIAC_SIGNS.length; j++) {
        const sign2 = ZODIAC_SIGNS[j];
        COMPATIBILITY_DATA[sign2][sign1] = COMPATIBILITY_DATA[sign1][sign2];
    }
});
