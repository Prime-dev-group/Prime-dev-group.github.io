/**
 * Numerology Data
 * Contains interpretations for all numerology numbers (1-9 and Master Numbers 11, 22, 33)
 */

const NUMEROLOGY_DATA = {
    1: {
        title: "The Leader",
        keywords: "Independence • Innovation • Courage • Ambition",
        description: "You are a natural-born leader with pioneering spirit. Independent, innovative, and courageous, you forge your own path and inspire others to follow their dreams.",
        strengths: [
            "Natural leadership abilities",
            "Strong willpower and determination",
            "Creative and innovative thinking",
            "Independent and self-reliant",
            "Courageous and confident"
        ],
        challenges: [
            "Can be overly aggressive or dominating",
            "May struggle with teamwork",
            "Tendency toward stubbornness",
            "Risk of being too self-centered"
        ],
        career: "Entrepreneur, CEO, Inventor, Military Leader, Designer, Architect, Pioneer in any field",
        lucky_color: "Red, Orange",
        lucky_gem: "Ruby, Garnet"
    },
    2: {
        title: "The Diplomat",
        keywords: "Harmony • Cooperation • Sensitivity • Balance",
        description: "You are a natural peacemaker with exceptional emotional intelligence. Diplomatic, cooperative, and sensitive to others' needs, you excel at bringing people together.",
        strengths: [
            "Excellent diplomatic skills",
            "Naturally cooperative and supportive",
            "Intuitive and empathetic",
            "Detail-oriented and patient",
            "Great mediator and counselor"
        ],
        challenges: [
            "Can be overly sensitive to criticism",
            "May struggle with indecisiveness",
            "Tendency to avoid conflict",
            "Risk of losing self in relationships"
        ],
        career: "Diplomat, Counselor, Therapist, Mediator, Teacher, Musician, Artist, Customer Service",
        lucky_color: "White, Cream, Silver",
        lucky_gem: "Moonstone, Pearl"
    },
    3: {
        title: "The Creative",
        keywords: "Expression • Joy • Creativity • Communication",
        description: "You are a born entertainer and communicator. Creative, expressive, and joyful, you have a gift for inspiring others through your words and artistic talents.",
        strengths: [
            "Highly creative and artistic",
            "Excellent communication skills",
            "Optimistic and enthusiastic",
            "Charming and sociable",
            "Natural entertainer"
        ],
        challenges: [
            "Can be scattered or unfocused",
            "May struggle with discipline",
            "Tendency toward superficiality",
            "Risk of being overly dramatic"
        ],
        career: "Writer, Artist, Performer, Speaker, Designer, Photographer, Marketing, Social Media",
        lucky_color: "Yellow, Orange, Pink",
        lucky_gem: "Topaz, Amber"
    },
    4: {
        title: "The Builder",
        keywords: "Stability • Order • Discipline • Hard Work",
        description: "You are the foundation upon which empires are built. Practical, disciplined, and hardworking, you create lasting structures and systems through dedication.",
        strengths: [
            "Extremely reliable and dependable",
            "Strong organizational skills",
            "Patient and persistent",
            "Excellent at building foundations",
            "Practical and down-to-earth"
        ],
        challenges: [
            "Can be rigid or inflexible",
            "May struggle with change",
            "Tendency toward workaholism",
            "Risk of being too cautious"
        ],
        career: "Engineer, Accountant, Manager, Builder, Analyst, Administrator, Architect, Programmer",
        lucky_color: "Green, Brown, Earth Tones",
        lucky_gem: "Emerald, Jade"
    },
    5: {
        title: "The Adventurer",
        keywords: "Freedom • Change • Adventure • Versatility",
        description: "You are a free spirit who thrives on change and adventure. Versatile, dynamic, and curious, you bring excitement and fresh perspectives wherever you go.",
        strengths: [
            "Highly adaptable and versatile",
            "Excellent communicator",
            "Adventurous and fearless",
            "Quick thinker and learner",
            "Natural networker"
        ],
        challenges: [
            "Can be restless or impulsive",
            "May struggle with commitment",
            "Tendency toward excess",
            "Risk of being scattered"
        ],
        career: "Travel Professional, Sales, Marketing, Journalist, Entrepreneur, Event Planner, Tour Guide",
        lucky_color: "Blue, Turquoise, Gray",
        lucky_gem: "Aquamarine, Turquoise"
    },
    6: {
        title: "The Nurturer",
        keywords: "Harmony • Responsibility • Nurturing • Love",
        description: "You are the ultimate caregiver with a heart of gold. Nurturing, responsible, and harmonious, you create beauty and comfort for those around you.",
        strengths: [
            "Deeply caring and compassionate",
            "Strong sense of responsibility",
            "Natural healer and counselor",
            "Creates harmony and balance",
            "Artistic and aesthetic sense"
        ],
        challenges: [
            "Can be overly protective",
            "May struggle with boundaries",
            "Tendency toward self-sacrifice",
            "Risk of being too controlling"
        ],
        career: "Teacher, Counselor, Interior Designer, Chef, Nurse, Social Worker, Artist, Parent",
        lucky_color: "Pink, Rose, Light Blue",
        lucky_gem: "Rose Quartz, Sapphire"
    },
    7: {
        title: "The Seeker",
        keywords: "Wisdom • Spirituality • Analysis • Introspection",
        description: "You are a deep thinker and spiritual seeker. Analytical, introspective, and wise, you quest for truth and meaning beyond the material world.",
        strengths: [
            "Highly analytical and intellectual",
            "Strong intuitive abilities",
            "Spiritual and philosophical",
            "Independent thinker",
            "Excellent researcher"
        ],
        challenges: [
            "Can be too isolated or aloof",
            "May struggle with emotions",
            "Tendency toward perfectionism",
            "Risk of being too skeptical"
        ],
        career: "Scientist, Researcher, Philosopher, Psychologist, Detective, Analyst, Spiritual Teacher",
        lucky_color: "Purple, Violet, Sea Green",
        lucky_gem: "Amethyst, Alexandrite"
    },
    8: {
        title: "The Powerhouse",
        keywords: "Success • Power • Abundance • Achievement",
        description: "You are destined for success and material achievement. Powerful, ambitious, and driven, you have exceptional abilities to manifest wealth and authority.",
        strengths: [
            "Natural business acumen",
            "Strong leadership abilities",
            "Goal-oriented and determined",
            "Excellent at managing resources",
            "Confident and authoritative"
        ],
        challenges: [
            "Can be materialistic or status-focused",
            "May struggle with work-life balance",
            "Tendency toward control",
            "Risk of being too ambitious"
        ],
        career: "CEO, Business Owner, Finance, Real Estate, Executive, Banker, Attorney, Politician",
        lucky_color: "Black, Dark Blue, Purple",
        lucky_gem: "Diamond, Black Onyx"
    },
    9: {
        title: "The Humanitarian",
        keywords: "Compassion • Completion • Service • Universal Love",
        description: "You are an old soul with a mission to serve humanity. Compassionate, generous, and idealistic, you seek to make the world a better place.",
        strengths: [
            "Deeply compassionate and caring",
            "Naturally generous and selfless",
            "Strong humanitarian values",
            "Artistic and creative",
            "Wise and understanding"
        ],
        challenges: [
            "Can be overly idealistic",
            "May struggle with letting go",
            "Tendency toward martyrdom",
            "Risk of being too trusting"
        ],
        career: "Humanitarian Worker, Counselor, Artist, Teacher, Healer, Non-profit Leader, Activist",
        lucky_color: "Gold, Red, Coral",
        lucky_gem: "Opal, Coral"
    },
    11: {
        title: "The Illuminator",
        keywords: "Intuition • Inspiration • Enlightenment • Vision",
        description: "You are a Master Number with special spiritual insights. Highly intuitive, inspirational, and visionary, you serve as a beacon of light and wisdom for others.",
        strengths: [
            "Exceptionally intuitive and psychic",
            "Natural spiritual teacher",
            "Visionary and inspirational",
            "Highly sensitive and empathetic",
            "Creative and innovative"
        ],
        challenges: [
            "Can be overly sensitive",
            "May struggle with practical matters",
            "Tendency toward anxiety",
            "Risk of living in ideals vs reality"
        ],
        career: "Spiritual Teacher, Psychic, Artist, Counselor, Writer, Motivational Speaker, Energy Healer",
        lucky_color: "Silver, White, Pale Yellow",
        lucky_gem: "Clear Quartz, Selenite",
        is_master: true
    },
    22: {
        title: "The Master Builder",
        keywords: "Manifestation • Building • Vision • Achievement",
        description: "You are the Master Builder who turns dreams into reality. Combining vision with practical skill, you have the power to create lasting legacies that benefit humanity.",
        strengths: [
            "Exceptional manifestation abilities",
            "Combines vision with practicality",
            "Natural leadership on grand scale",
            "Builds lasting systems and structures",
            "Inspires others through action"
        ],
        challenges: [
            "Can be overwhelmed by potential",
            "May struggle with high expectations",
            "Tendency toward burnout",
            "Risk of losing sight of bigger picture"
        ],
        career: "Architect, City Planner, Large-Scale Entrepreneur, Environmental Leader, Tech Innovator",
        lucky_color: "Coral, Rust, Gold",
        lucky_gem: "Coral, Gold Topaz",
        is_master: true
    },
    33: {
        title: "The Master Teacher",
        keywords: "Service • Teaching • Compassion • Healing",
        description: "You are the Master Teacher with a mission of selfless service. Combining the nurturing heart of 6 with master wisdom, you heal and uplift humanity through unconditional love.",
        strengths: [
            "Exceptional healing abilities",
            "Natural teacher and guide",
            "Deeply compassionate and loving",
            "Inspires transformation in others",
            "Channels universal wisdom"
        ],
        challenges: [
            "Can take on too much responsibility",
            "May struggle with boundaries",
            "Tendency toward self-sacrifice",
            "Risk of emotional overwhelm"
        ],
        career: "Spiritual Teacher, Healer, Counselor, Humanitarian Leader, Artist with Message, Life Coach",
        lucky_color: "Crimson, Gold, Sea Green",
        lucky_gem: "Bloodstone, Emerald",
        is_master: true
    }
};

// Day of week meanings for lucky days
const DAY_MEANINGS = {
    0: { name: "Sunday", ruling_planet: "Sun", energy: "Leadership, vitality, success" },
    1: { name: "Monday", ruling_planet: "Moon", energy: "Emotions, intuition, family" },
    2: { name: "Tuesday", ruling_planet: "Mars", energy: "Action, courage, competition" },
    3: { name: "Wednesday", ruling_planet: "Mercury", energy: "Communication, learning, travel" },
    4: { name: "Thursday", ruling_planet: "Jupiter", energy: "Expansion, wisdom, abundance" },
    5: { name: "Friday", ruling_planet: "Venus", energy: "Love, beauty, creativity" },
    6: { name: "Saturday", ruling_planet: "Saturn", energy: "Discipline, structure, responsibility" }
};

// Number to day mapping
const NUMBER_TO_DAY = {
    1: 0, // Sunday
    2: 1, // Monday
    3: 3, // Wednesday
    4: 4, // Thursday
    5: 5, // Friday
    6: 5, // Friday (Venus)
    7: 1, // Monday (Moon)
    8: 6, // Saturday
    9: 2, // Tuesday
    11: 1, // Monday
    22: 4, // Thursday
    33: 5  // Friday
};
