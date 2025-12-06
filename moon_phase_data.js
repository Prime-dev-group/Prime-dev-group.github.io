/**
 * Moon Phase Data
 * Contains moon phase descriptions and zodiac-specific interpretations
 */

// Moon phase general information
const MOON_PHASES = {
    "New Moon": {
        description: "A time of new beginnings and fresh starts. The moon is hidden, inviting you to turn inward and set intentions for the cycle ahead.",
        energy: "Introspection, Planning, New Intentions"
    },
    "Waxing Crescent": {
        description: "The first sliver of light appears, symbolizing hope and growth. This is a time to take initial steps towards your goals.",
        energy: "Momentum, Growth, Action"
    },
    "First Quarter": {
        description: "Half the moon is illuminated, creating a balance between darkness and light. Decision-making and commitment are highlighted.",
        energy: "Decision, Commitment, Balance"
    },
    "Waxing Gibbous": {
        description: "The moon grows fuller, building energy and anticipation. Refinement and adjustment of your plans are key now.",
        energy: "Refinement, Preparation, Anticipation"
    },
    "Full Moon": {
        description: "The moon reaches its peak illumination, bringing clarity, culmination, and heightened emotions. Time to celebrate achievements.",
        energy: "Culmination, Clarity, Release"
    },
    "Waning Gibbous": {
        description: "After the peak, energy begins to recede. This is a time for gratitude, sharing wisdom, and letting go of what no longer serves.",
        energy: "Gratitude, Sharing, Reflection"
    },
    "Last Quarter": {
        description: "Half the moon remains, prompting review and release. Let go of old patterns and make space for the new.",
        energy: "Release, Forgiveness, Surrender"
    },
    "Waning Crescent": {
        description: "The final sliver before darkness returns. Rest, recuperate, and prepare for the next cycle. Spiritual connection deepens.",
        energy: "Rest, Healing, Spiritual Connection"
    }
};

// Zodiac-specific moon phase insights
const ZODIAC_MOON_INSIGHTS = {
    "Aries": {
        "New Moon": {
            advice: "Channel your natural leadership energy into setting bold, ambitious goals. This is your time to initiate new projects.",
            focus: "Courage, Initiative, Self-Discovery"
        },
        "Waxing Crescent": {
            advice: "Your enthusiasm is contagious! Take decisive action on your goals, but remember to pace yourself.",
            focus: "Action, Momentum, Confidence"
        },
        "First Quarter": {
            advice: "Face challenges head-on with your characteristic bravery. Your determination will overcome obstacles.",
            focus: "Courage, Perseverance, Strength"
        },
        "Waxing Gibbous": {
            advice: "Refine your strategies with patience. Your competitive spirit needs direction right now.",
            focus: "Strategy, Focus, Preparation"
        },
        "Full Moon": {
            advice: "Your passions are at their peak! Celebrate your victories but channel excess energy constructively.",
            focus: "Achievement, Passion, Leadership"
        },
        "Waning Gibbous": {
            advice: "Share your victories with others. Your natural leadership shines when you mentor and inspire.",
            focus: "Teaching, Sharing, Generosity"
        },
        "Last Quarter": {
            advice: "Release impatience and impulsiveness. Make peace with delays and trust the timing of the universe.",
            focus: "Patience, Acceptance, Inner Peace"
        },
        "Waning Crescent": {
            advice: "Rare quiet time for the Ram. Rest and recharge your fiery spirit before your next adventure.",
            focus: "Solitude, Restoration, Meditation"
        }
    },
    "Taurus": {
        "New Moon": {
            advice: "Plant seeds for financial and material growth. Your practical nature excels at long-term planning now.",
            focus: "Stability, Resources, Foundation"
        },
        "Waxing Crescent": {
            advice: "Slow and steady wins the race. Build towards your goals with your characteristic patience and persistence.",
            focus: "Persistence, Growth, Determination"
        },
        "First Quarter": {
            advice: "Your natural stubbornness becomes strength. Stand firm in your values and commitments.",
            focus: "Values, Commitment, Reliability"
        },
        "Waxing Gibbous": {
            advice: "Perfect your plans with attention to detail. Your eye for beauty and quality is heightened.",
            focus: "Refinement, Quality, Aesthetics"
        },
        "Full Moon": {
            advice: "Harvest the fruits of your labor. Indulge in life's pleasures and enjoy your material achievements.",
            focus: "Abundance, Pleasure, Gratitude"
        },
        "Waning Gibbous": {
            advice: "Share your resources and wisdom generously. Your stability helps ground others.",
            focus: "Generosity, Grounding, Support"
        },
        "Last Quarter": {
            advice: "Release attachment to material possessions or rigid thinking. Embrace change and flexibility.",
            focus: "Flexibility, Non-attachment, Change"
        },
        "Waning Crescent": {
            advice: "Indulge in self-care and creature comforts. Pamper yourself as you prepare for renewal.",
            focus: "Self-care, Comfort, Rejuvenation"
        }
    },
    "Gemini": {
        "New Moon": {
            advice: "Set intentions for learning and communication. Start that course, blog, or conversation you've been considering.",
            focus: "Learning, Communication, Curiosity"
        },
        "Waxing Crescent": {
            advice: "Network and connect! Your social butterfly nature is amplified. Make new contacts and exchange ideas.",
            focus: "Networking, Ideas, Connections"
        },
        "First Quarter": {
            advice: "Choose which projects deserve your focus. Your versatile mind needs direction now.",
            focus: "Focus, Decisions, Clarity"
        },
        "Waxing Gibbous": {
            advice: "Refine your message and polish your communication. Quality over quantity in your words.",
            focus: "Communication, Refinement, Expression"
        },
        "Full Moon": {
            advice: "Your mind is buzzing with insights! Write, speak, and share your brilliant ideas with the world.",
            focus: "Expression, Insight, Sharing"
        },
        "Waning Gibbous": {
            advice: "Teach what you've learned. Your gift for explanation helps others understand complex concepts.",
            focus: "Teaching, Sharing, Wisdom"
        },
        "Last Quarter": {
            advice: "Release mental clutter and overthinking. Practice mindfulness and give your busy mind a rest.",
            focus: "Simplicity, Mindfulness, Clarity"
        },
        "Waning Crescent": {
            advice: "Quiet the chatter. Enjoy silence and introspection before your next phase of activity.",
            focus: "Silence, Introspection, Peace"
        }
    },
    "Cancer": {
        "New Moon": {
            advice: "Honor your emotions and set intentions for home and family. This lunar energy resonates deeply with you.",
            focus: "Home, Family, Emotional Foundation"
        },
        "Waxing Crescent": {
            advice: "Nurture your dreams like you nurture others. Small acts of self-love build momentum.",
            focus: "Self-nurturing, Growth, Care"
        },
        "First Quarter": {
            advice: "Balance caring for others with caring for yourself. Set healthy emotional boundaries.",
            focus: "Boundaries, Balance, Self-care"
        },
        "Waxing Gibbous": {
            advice: "Prepare your emotional foundation. Create a sanctuary at home that supports your well-being.",
            focus: "Sanctuary, Preparation, Comfort"
        },
        "Full Moon": {
            advice: "Your ruling planet reaches full power! Emotions run high—honor them all with compassion.",
            focus: "Emotions, Intuition, Compassion"
        },
        "Waning Gibbous": {
            advice: "Share your nurturing gifts with your community. Your empathy heals others.",
            focus: "Nurturing, Healing, Community"
        },
        "Last Quarter": {
            advice: "Release old emotional patterns and family wounds. Forgiveness frees your tender heart.",
            focus: "Forgiveness, Healing, Release"
        },
        "Waning Crescent": {
            advice: "Retreat into your shell for restoration. Your sensitive soul needs quiet time to recharge.",
            focus: "Solitude, Restoration, Introspection"
        }
    },
    "Leo": {
        "New Moon": {
            advice: "Set intentions for creative expression and leadership. The world needs your unique light.",
            focus: "Creativity, Leadership, Self-expression"
        },
        "Waxing Crescent": {
            advice: "Take center stage in your own life story. Build confidence and let your personality shine.",
            focus: "Confidence, Performance, Joy"
        },
        "First Quarter": {
            advice: "Lead with your heart. Your natural charisma inspires others to follow their dreams too.",
            focus: "Leadership, Inspiration, Heart"
        },
        "Waxing Gibbous": {
            advice: "Perfect your craft and polish your presentation. You're preparing for your spotlight moment.",
            focus: "Craft, Excellence, Preparation"
        },
        "Full Moon": {
            advice: "Bask in recognition and celebrate your achievements! Your dramatic flair is perfectly suited to this energy.",
            focus: "Recognition, Celebration, Drama"
        },
        "Waning Gibbous": {
            advice: "Share the spotlight generously. Your warmth and encouragement help others shine too.",
            focus: "Generosity, Encouragement, Warmth"
        },
        "Last Quarter": {
            advice: "Release the need for constant applause. Find validation within your own proud heart.",
            focus: "Inner Validation, Humility, Reflection"
        },
        "Waning Crescent": {
            advice: "Even royalty needs rest. Recharge your radiant energy away from the public eye.",
            focus: "Rest, Privacy, Restoration"
        }
    },
    "Virgo": {
        "New Moon": {
            advice: "Set precise, detailed goals for health and improvement. Your analytical mind thrives in planning mode.",
            focus: "Organization, Health, Improvement"
        },
        "Waxing Crescent": {
            advice: "Take methodical steps towards your goals. Your attention to detail ensures quality progress.",
            focus: "Method, Detail, Quality"
        },
        "First Quarter": {
            advice: "Make practical decisions based on facts and analysis. Trust your discerning judgment.",
            focus: "Practicality, Analysis, Discernment"
        },
        "Waxing Gibbous": {
            advice: "Perfect and refine your systems. This is your element—organization and optimization!",
            focus: "Optimization, Systems, Efficiency"
        },
        "Full Moon": {
            advice: "Acknowledge your achievements, even if they seem 'small.' Your consistent effort creates remarkable results.",
            focus: "Achievement, Recognition, Results"
        },
        "Waning Gibbous": {
            advice: "Share your organizational wisdom. Your practical advice helps others bring order to chaos.",
            focus: "Service, Wisdom, Helpfulness"
        },
        "Last Quarter": {
            advice: "Release perfectionism and self-criticism. You are enough, exactly as you are.",
            focus: "Self-acceptance, Letting Go, Peace"
        },
        "Waning Crescent": {
            advice: "Rest your analytical mind. Sometimes not organizing is the ultimate act of self-care.",
            focus: "Rest, Acceptance, Stillness"
        }
    },
    "Libra": {
        "New Moon": {
            advice: "Set intentions for relationships and balance. Envision the harmony you wish to create.",
            focus: "Relationships, Balance, Harmony"
        },
        "Waxing Crescent": {
            advice: "Take steps to create beauty and balance in your environment. Your aesthetic sense guides you.",
            focus: "Beauty, Balance, Aesthetics"
        },
        "First Quarter": {
            advice: "Make decisions in partnerships. Your diplomatic nature helps navigate conflicts gracefully.",
            focus: "Diplomacy, Partnership, Decisions"
        },
        "Waxing Gibbous": {
            advice: "Refine your relationships and social connections. Quality interactions over quantity.",
            focus: "Connection, Quality, Refinement"
        },
        "Full Moon": {
            advice: "Relationships reach peak intensity. Balance your needs with others' while maintaining your center.",
            focus: "Relationships, Balance, Fulfillment"
        },
        "Waning Gibbous": {
            advice: "Share your gift for creating harmony. Your mediation skills bring peace to conflicts.",
            focus: "Mediation, Peace, Sharing"
        },
        "Last Quarter": {
            advice: "Release codependency and people-pleasing. Your peace shouldn't depend on others' approval.",
            focus: "Independence, Self-worth, Release"
        },
        "Waning Crescent": {
            advice: "Find balance in solitude. True harmony starts with inner peace, not external validation.",
            focus: "Solitude, Inner Peace, Reflection"
        }
    },
    "Scorpio": {
        "New Moon": {
            advice: "Dive deep into transformation and rebirth. Set powerful intentions for profound personal change.",
            focus: "Transformation, Depth, Rebirth"
        },
        "Waxing Crescent": {
            advice: "Your intense focus drives powerful progress. Channel your passion into meaningful action.",
            focus: "Intensity, Passion, Power"
        },
        "First Quarter": {
            advice: "Face your shadows with courage. Your willpower overcomes any obstacle, internal or external.",
            focus: "Courage, Willpower, Truth"
        },
        "Waxing Gibbous": {
            advice: "Prepare for breakthrough. Your investigative nature uncovers hidden truths and opportunities.",
            focus: "Investigation, Discovery, Preparation"
        },
        "Full Moon": {
            advice: "Emotional intensity peaks! Transform raw emotions into creative or spiritual power.",
            focus: "Intensity, Transformation, Power"
        },
        "Waning Gibbous": {
            advice: "Share your hard-won wisdom about transformation. Your depth helps others heal.",
            focus: "Healing, Wisdom, Sharing"
        },
        "Last Quarter": {
            advice: "Release control and trust the process. Even Scorpio must surrender sometimes.",
            focus: "Surrender, Trust, Release"
        },
        "Waning Crescent": {
            advice: "Rest in the darkness—it's your natural element. Spiritual renewal happens in the void.",
            focus: "Darkness, Renewal, Spirituality"
        }
    },
    "Sagittarius": {
        "New Moon": {
            advice: "Set intentions for adventure and expansion. Where will your arrows fly in this new cycle?",
            focus: "Adventure, Growth, Expansion"
        },
        "Waxing Crescent": {
            advice: "Take the first steps on your journey. Your optimism and enthusiasm create momentum.",
            focus: "Optimism, Journey, Enthusiasm"
        },
        "First Quarter": {
            advice: "Commit to your path with confidence. Your philosophical nature finds meaning in challenges.",
            focus: "Commitment, Philosophy, Growth"
        },
        "Waxing Gibbous": {
            advice: "Prepare for your next adventure by gathering knowledge and resources. Study and explore!",
            focus: "Learning, Exploration, Preparation"
        },
        "Full Moon": {
            advice: "Your quest reaches a milestone! Celebrate the wisdom gained and vistas explored.",
            focus: "Wisdom, Celebration, Achievement"
        },
        "Waning Gibbous": {
            advice: "Share your adventures and inspire others to expand their horizons. You're a natural teacher!",
            focus: "Teaching, Inspiration, Sharing"
        },
        "Last Quarter": {
            advice: "Release rigid beliefs and dogma. Stay open to new perspectives and truths.",
            focus: "Openness, Flexibility, Release"
        },
        "Waning Crescent": {
            advice: "Even explorers need rest. Recharge before your next grand adventure begins.",
            focus: "Rest, Reflection, Preparation"
        }
    },
    "Capricorn": {
        "New Moon": {
            advice: "Set ambitious long-term goals. Your disciplined nature excels at building lasting structures.",
            focus: "Ambition, Structure, Goals"
        },
        "Waxing Crescent": {
            advice: "Climb your mountain one step at a time. Consistent effort yields substantial results.",
            focus: "Discipline, Progress, Persistence"
        },
        "First Quarter": {
            advice: "Make responsible decisions that honor your commitments. Your integrity is your strength.",
            focus: "Responsibility, Integrity, Commitment"
        },
        "Waxing Gibbous": {
            advice: "Refine your professional strategies. Success comes through careful planning and execution.",
            focus: "Strategy, Professionalism, Excellence"
        },
        "Full Moon": {
            advice: "Reach the summit and acknowledge your achievements. Your hard work deserves recognition!",
            focus: "Achievement, Success, Recognition"
        },
        "Waning Gibbous": {
            advice: "Mentor others on their climb. Your experience and wisdom help them avoid pitfalls.",
            focus: "Mentorship, Wisdom, Leadership"
        },
        "Last Quarter": {
            advice: "Release workaholism and excessive control. Success means nothing without life balance.",
            focus: "Balance, Release, Perspective"
        },
        "Waning Crescent": {
            advice: "Rest and reflect on lessons learned. Even mountains need time to settle before the next season.",
            focus: "Rest, Reflection, Restoration"
        }
    },
    "Aquarius": {
        "New Moon": {
            advice: "Envision innovative solutions and social change. Your revolutionary ideas need this fresh start energy.",
            focus: "Innovation, Change, Vision"
        },
        "Waxing Crescent": {
            advice: "Connect with your community and fellow visionaries. Collaboration amplifies your impact.",
            focus: "Community, Collaboration, Progress"
        },
        "First Quarter": {
            advice: "Commit to your unique path, even if others don't understand. Your originality is your gift.",
            focus: "Individuality, Authenticity, Freedom"
        },
        "Waxing Gibbous": {
            advice: "Refine your ideas and innovations. Technology and humanitarian efforts align perfectly now.",
            focus: "Innovation, Refinement, Technology"
        },
        "Full Moon": {
            advice: "Your revolutionary ideas reach full expression! Share your vision for a better future.",
            focus: "Revolution, Vision, Expression"
        },
        "Waning Gibbous": {
            advice: "Share your knowledge freely with humanity. Your progressive ideas inspire collective evolution.",
            focus: "Sharing, Progress, Humanity"
        },
        "Last Quarter": {
            advice: "Release detachment and intellectualization. Connect with your emotions and heart.",
            focus: "Emotion, Connection, Vulnerability"
        },
        "Waning Crescent": {
            advice: "Process your experiences in solitude. Even the Water Bearer needs to refill their own cup.",
            focus: "Solitude, Processing, Renewal"
        }
    },
    "Pisces": {
        "New Moon": {
            advice: "Set intentions through meditation and dreams. Your intuitive nature receives cosmic downloads now.",
            focus: "Intuition, Dreams, Spirituality"
        },
        "Waxing Crescent": {
            advice: "Trust your creative and spiritual impulses. Let your imagination guide your next steps.",
            focus: "Creativity, Imagination, Trust"
        },
        "First Quarter": {
            advice: "Balance dreams with practical action. Your compassion needs grounded expression.",
            focus: "Balance, Compassion, Action"
        },
        "Waxing Gibbous": {
            advice: "Refine your artistic or spiritual practice. Your connection to the divine deepens through dedication.",
            focus: "Art, Spirituality, Practice"
        },
        "Full Moon": {
            advice: "Your psychic abilities peak! Trust your visions and honor your deep emotional wisdom.",
            focus: "Psychic Ability, Emotion, Wisdom"
        },
        "Waning Gibbous": {
            advice: "Share your spiritual gifts and artistic creations. Your empathy heals collective wounds.",
            focus: "Healing, Art, Empathy"
        },
        "Last Quarter": {
            advice: "Release victim mentality and escapism. Ground your spiritual insights in reality.",
            focus: "Grounding, Reality, Release"
        },
        "Waning Crescent": {
            advice: "Merge with the cosmic ocean through rest and meditation. This is your most natural state.",
            focus: "Meditation, Surrender, Oneness"
        }
    }
};
