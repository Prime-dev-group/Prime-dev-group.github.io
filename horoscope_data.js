/**
 * Horoscope Data
 * Contains daily horoscopes, profiles, and yearly forecasts for all 12 zodiac signs.
 */

const HOROSCOPE_DATA = [
    {
        name: "Aries",
        date: "Mar 21 - Apr 19",
        icon: "♈",
        element: "Fire",
        ruling_planet: "Mars",
        keywords: ["Courageous", "Determined", "Confident"],
        traits: "Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations.",
        strengths: ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic"],
        weaknesses: ["Impatient", "Moody", "Short-tempered", "Impulsive", "Aggressive"],
        compatibility: "**Most Compatible:** Leo, Sagittarius, Gemini, Aquarius.\n**Least Compatible:** Cancer, Capricorn.",
        horoscope: "Maintain discipline in food habits and stay active to keep your energy balanced. Someone with ambitious ideas may attract your attention—verify their intentions carefully before making any financial commitments. Family responsibilities demand sincere effort driven by care rather than material motives. A supportive and understanding friend brings comfort. Your confident and social nature places you in the spotlight. A deep, emotionally rich conversation with your spouse strengthens your bond. You may enjoy peaceful moments gazing at the open sky, making the most of quiet personal time.\n\nA gathering involving artistic or spiritually inclined people could happen at home. While the interaction feels inspiring, be mindful of someone who may provoke debates. Keeping things calm ensures the meeting ends on a positive note."
    },
    {
        name: "Taurus",
        date: "Apr 20 - May 20",
        icon: "♉",
        element: "Earth",
        ruling_planet: "Venus",
        keywords: ["Reliable", "Patient", "Practical"],
        traits: "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments, surrounded by soft sounds, soothing aromas, and succulent flavors.",
        strengths: ["Reliable", "Patient", "Practical", "Devoted", "Responsible", "Stable"],
        weaknesses: ["Stubborn", "Possessive", "Uncompromising"],
        compatibility: "**Most Compatible:** Virgo, Capricorn, Cancer, Pisces.\n**Least Compatible:** Leo, Aquarius.",
        horoscope: "A positive day brings relief from lingering health concerns. Financial matters improve as a new deal finalizes, boosting cash flow. Guests bring warmth and liveliness to your home. However, unpredictable behavior from your partner may disrupt romantic moods. Someone from your past may reconnect, stirring memories. Disagreements with your spouse over major expenses are possible. Express reassurance and affection—words of encouragement can strengthen love and rebuild harmony.\n\nAn opportunity to enroll in a desired course may arise, though minor technical delays could test patience. Stay persistent—these hurdles are temporary and well worth pushing through."
    },
    {
        name: "Gemini",
        date: "May 21 - Jun 20",
        icon: "♊",
        element: "Air",
        ruling_planet: "Mercury",
        keywords: ["Adaptable", "Outgoing", "Intelligent"],
        traits: "Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity.",
        strengths: ["Gentle", "Affectionate", "Curious", "Adaptable", "Ability to learn quickly"],
        weaknesses: ["Nervous", "Inconsistent", "Indecisive"],
        compatibility: "**Most Compatible:** Libra, Aquarius, Aries, Leo.\n**Least Compatible:** Virgo, Pisces.",
        horoscope: "Leisure and relaxation take priority today. You may splurge while spending time with family, but emotional satisfaction makes it worthwhile. Your partner remains supportive, and originality enhances romantic moments. Leaving work early allows you to plan a short outing with loved ones. Married life feels nostalgic as you relive sweet courtship memories. In some cases, it’s better to maintain distance from a loved one today to avoid unnecessary disagreements.\n\nMarket fluctuations could cause momentary concern regarding savings or investments. Remember that unseen factors are at play and the situation is temporary—stability will return soon."
    },
    {
        name: "Cancer",
        date: "Jun 21 - Jul 22",
        icon: "♋",
        element: "Water",
        ruling_planet: "Moon",
        keywords: ["Tenacious", "Imaginative", "Loyal"],
        traits: "Cancer is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore, representing Cancer’s ability to exist in both emotional and material realms.",
        strengths: ["Tenacious", "Highly imaginative", "Loyal", "Emotional", "Sympathetic", "Persuasive"],
        weaknesses: ["Moody", "Pessimistic", "Suspicious", "Manipulative", "Insecure"],
        compatibility: "**Most Compatible:** Scorpio, Pisces, Taurus, Virgo.\n**Least Compatible:** Aries, Libra.",
        horoscope: "Mental stress may weigh on you, but engaging in reading or learning helps ease the pressure. Spend cautiously while socializing, as expenses may rise. Younger individuals may seek your guidance for academic matters. Love feels deeply emotional and fulfilling today. An unexpected visit from a distant relative may occupy much of your time. Repeated arguments could test your relationship—don’t give up easily. Better planning allows you to reclaim free time and stay productive.\n\nYour partner may seem distracted; avoid assumptions. They may be facing personal challenges, and your support could bring clarity and reassurance."
    },
    {
        name: "Leo",
        date: "Jul 23 - Aug 22",
        icon: "♌",
        element: "Fire",
        ruling_planet: "Sun",
        keywords: ["Creative", "Passionate", "Generous"],
        traits: "Roll out the red carpet, because Leo has arrived. Leo is represented by the lion, and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate.",
        strengths: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful", "Humorous"],
        weaknesses: ["Arrogant", "Stubborn", "Self-centered", "Lazy", "Inflexible"],
        compatibility: "**Most Compatible:** Aries, Sagittarius, Gemini, Libra.\n**Least Compatible:** Taurus, Scorpio.",
        horoscope: "Energy levels remain high, though work pressure may cause irritation. Financial stability stays intact as long as you avoid unnecessary spending. Children lend a helping hand at home. A sudden romantic encounter brightens the day. Plans to reorganize your living space may get postponed due to lack of time. Married life feels nostalgic and affectionate, and a thoughtful surprise meal from your partner helps you unwind completely.\n\nTechnical or equipment-related issues could slow progress. Seek help instead of stressing—support from others restores confidence and efficiency."
    },
    {
        name: "Virgo",
        date: "Aug 23 - Sep 22",
        icon: "♍",
        element: "Earth",
        ruling_planet: "Mercury",
        keywords: ["Loyal", "Analytical", "Kind"],
        traits: "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that reflects Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life.",
        strengths: ["Loyal", "Analytical", "Kind", "Hardworking", "Practical"],
        weaknesses: ["Shyness", "Worry", "Overly critical of self and others", "All work and no play"],
        compatibility: "**Most Compatible:** Taurus, Capricorn, Cancer, Scorpio.\n**Least Compatible:** Gemini, Sagittarius.",
        horoscope: "A cheerful mindset aids recovery from ongoing health issues. Be mindful of spending while socializing. Coordinating with your spouse helps clear pending household tasks. New romantic energy uplifts your mood. You may prefer solitude today to reflect and regain clarity. Emotional moments deepen appreciation for married life. Watching a movie with loved ones offers comfort and relaxation.\n\nA friend’s silence may trigger doubts, but their distance isn’t personal. They are likely dealing with their own challenges and will reconnect when ready."
    },
    {
        name: "Libra",
        date: "Sep 23 - Oct 22",
        icon: "♎",
        element: "Air",
        ruling_planet: "Venus",
        keywords: ["Cooperative", "Diplomatic", "Gracious"],
        traits: "Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.",
        strengths: ["Cooperative", "Diplomatic", "Gracious", "Fair-minded", "Social"],
        weaknesses: ["Indecisive", "Avoids confrontations", "Will carry a grudge", "Self-pity"],
        compatibility: "**Most Compatible:** Gemini, Aquarius, Leo, Sagittarius.\n**Least Compatible:** Cancer, Capricorn.",
        horoscope: "Focus your energy on personal growth today. Property-related investments should be avoided for now. Your enthusiasm helps you organize social gatherings effortlessly. Romantic appeal works in your favor. You may plan health or fitness routines but struggle to execute them. Married life feels especially rewarding today. Pay attention to health concerns and consult a professional if needed.\n\nA friend may temporarily withdraw to reflect on personal matters. Though worrying, trust that they are safe and simply need space. Patience brings reassurance."
    },
    {
        name: "Scorpio",
        date: "Oct 23 - Nov 21",
        icon: "♏",
        element: "Water",
        ruling_planet: "Pluto",
        keywords: ["Resourceful", "Brave", "Passionate"],
        traits: "Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm.",
        strengths: ["Resourceful", "Brave", "Passionate", "Stubborn", "A true friend"],
        weaknesses: ["Distrusting", "Jealous", "Secretive", "Violent"],
        compatibility: "**Most Compatible:** Cancer, Pisces, Virgo, Taurus.\n**Least Compatible:** Leo, Aquarius.",
        horoscope: "You find time to focus on improving both health and appearance. Businesspersons should be cautious when lending money to family members. It’s a good moment to soften your approach at home and work collaboratively. Romantic prospects look strong, and personal charm attracts attention. Unintentional actions from your partner may leave a lasting impression. Students should manage anger carefully, especially in interactions with seniors.\n\nAn unexpected message or call may cause confusion. Verify facts before reacting or sharing information, as details may be exaggerated or misleading."
    },
    {
        name: "Sagittarius",
        date: "Nov 22 - Dec 21",
        icon: "♐",
        element: "Fire",
        ruling_planet: "Jupiter",
        keywords: ["Generous", "Idealistic", "Funny"],
        traits: "Represented by the archer, Sagittarius is always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.",
        strengths: ["Generous", "Idealistic", "Great sense of humor"],
        weaknesses: ["Promises more than can deliver", "Very impatient", "Will say anything no matter how undiplomatic"],
        compatibility: "**Most Compatible:** Aries, Leo, Libra, Aquarius.\n**Least Compatible:** Virgo, Pisces.",
        horoscope: "Your kind-hearted nature spreads joy today. Safe financial investments may bring small but steady gains. Consult elders before making changes at home to avoid friction. Romantic feelings intensify as evening approaches. Time may slip away while browsing online—be mindful of distractions. Your spouse’s affection makes the day feel special. Visiting relatives brings comfort, but avoid revisiting unpleasant past topics.\n\nIf finances feel overwhelming, gather facts calmly. Reviewing actual figures helps you realize the situation is manageable."
    },
    {
        name: "Capricorn",
        date: "Dec 22 - Jan 19",
        icon: "♑",
        element: "Earth",
        ruling_planet: "Saturn",
        keywords: ["Responsible", "Disciplined", "Self-control"],
        traits: "The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.",
        strengths: ["Responsible", "Disciplined", "Self-control", "Good managers"],
        weaknesses: ["Know-it-all", "Unforgiving", "Condescending", "Expecting the worst"],
        compatibility: "**Most Compatible:** Taurus, Virgo, Scorpio, Pisces.\n**Least Compatible:** Aries, Libra.",
        horoscope: "Important decisions may create tension, but guidance from an experienced friend improves business prospects. Social events offer opportunities to connect with influential individuals. Emotional closeness with your partner deepens as you express your feelings openly. Married life feels vibrant and fulfilling. Concerns related to children may arise briefly but can be managed with patience.\n\nCreative ideas flow freely, though they may feel scattered. Let them develop naturally before committing to any one direction."
    },
    {
        name: "Aquarius",
        date: "Jan 20 - Feb 18",
        icon: "♒",
        element: "Air",
        ruling_planet: "Uranus",
        keywords: ["Progressive", "Original", "Independent"],
        traits: "Despite the \"aqua\" in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign.",
        strengths: ["Progressive", "Original", "Independent", "Humanitarian"],
        weaknesses: ["Runs from emotional expression", "Temperamental", "Uncompromising", "Aloof"],
        compatibility: "**Most Compatible:** Gemini, Libra, Aries, Sagittarius.\n**Least Compatible:** Taurus, Scorpio.",
        horoscope: "Energy fluctuates even as success draws closer. Offering financial help to someone in need brings inner peace. Neglecting household duties may annoy those you live with. Be cautious of flattery from a partner and respond thoughtfully. You manage to carve out quality personal time despite a busy day. Married life feels especially harmonious, and sharing emotions with a trusted friend provides relief.\n\nA close person may seem uneasy due to professional uncertainties. Listen patiently and offer perspective—your support helps ease their concerns."
    },
    {
        name: "Pisces",
        date: "Feb 19 - Mar 20",
        icon: "♓",
        element: "Water",
        ruling_planet: "Neptune",
        keywords: ["Compassionate", "Artistic", "Intuitive"],
        traits: "Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality.",
        strengths: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise", "Musical"],
        weaknesses: ["Fearful", "Overly trusting", "Sad", "Desire to escape reality"],
        compatibility: "**Most Compatible:** Cancer, Scorpio, Taurus, Capricorn.\n**Least Compatible:** Gemini, Sagittarius.",
        horoscope: "Leaving work early allows you to focus on activities you truly enjoy. Visiting relatives may strain finances slightly. Balance office and home life carefully to maintain harmony. Love brings optimism, though minor conflicts with strangers may affect your mood during outings. Romantic nostalgia strengthens your bond with your partner, who may surprise you with a comforting gesture at home.\n\nA partner’s temporary absence or silence could cause worry. Avoid assumptions—give space and trust that clarity will return naturally."
    }
];
