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
        horoscope: "Unchecked anger could escalate small matters and disturb family harmony. The wiser choice is to consciously calm yourself before reacting. Pay special attention to your children’s health today, as unexpected medical expenses are possible. Household concerns require prompt action, and emotional distance may be felt in love matters. At work, support from colleagues may be limited, so rely on your own efforts. Business owners may prefer spending quality time with family, strengthening bonds. External interference may arise, but your marital connection remains resilient.\n\nEmotions feel intense but more manageable today. If you stay grounded and avoid unnecessary confrontations, productivity improves. Focus on practical responsibilities and channel your drive into meaningful action."
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
        horoscope: "Your energy levels remain high, making it a good day to plan finances with your spouse and think long-term. Avoid unnecessary involvement in others’ matters. The evening is ideal for romance and leisure. While entertainment is favored, professionals should carefully review business decisions. You’ll finally find time to complete tasks you’ve been postponing. Your partner’s support and affection remind you of their importance in your life.\n\nStrong emotions demand a steady and realistic approach. Practical thinking works best today—keep things simple, grounded, and connected to tangible results."
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
        horoscope: "This is a favorable day to restart health routines. Property-related investments look promising. Time spent with friends brings enjoyment and sparks travel ideas. Love matters may feel complicated, so avoid impulsive reactions. Embracing new work techniques boosts efficiency and draws attention to your unique style. You may choose solitude for reflection, with many thoughts running through your mind. A past issue may surface and slightly upset your spouse.\n\nYou’re filled with strong motivation today. Use this drive to tackle career goals and practical concerns rather than feeling overwhelmed by responsibilities."
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
        horoscope: "Attending a social gathering lifts your mood. You gain insight into saving and managing money wisely. Concerns over your daughter’s health may cause worry—your care and emotional support aid her recovery. Romantic realities may require acceptance. Professionally, circumstances work in your favor. Though busy, you’ll find time in the evening for activities you enjoy. Married life may feel routine—introducing small changes helps revive excitement.\n\nEmotional balance is essential today. Ground yourself early and approach tasks with sensitivity and determination. Handling practical matters head-on brings stability."
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
        horoscope: "A relaxed mood allows you to enjoy leisure. Business gains bring satisfaction and should be shared with family. Be mindful of your words, as harsh speech could disturb romantic harmony. Unexpected intellectual input from a colleague surprises you. Avoid pointless arguments, as they only drain your energy. A partner’s actions may disrupt plans—patience is key.\n\nIt’s time to deal with practical responsibilities you may have avoided. Use emotional intensity constructively and don’t let others influence decisions that don’t align with your goals."
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
        horoscope: "Minor tensions and differing opinions may cause irritation. Avoid investments today. Sharing concerns with family lightens your emotional load, though ego may hold you back—open communication helps. Persistence brings favorable results. Influential interactions offer valuable ideas. Use time wisely while also honoring family commitments. Passion in married life feels intense and fulfilling.\n\nEmotions run strong today. Stay organized and grounded to make the most of your energy. Avoid impulsive reactions if challenged."
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
        horoscope: "Sharing happiness enhances your health. Long-term investments look favorable. Your curiosity helps you form new friendships. Let go of minor resentments in love. Business matters progress smoothly, and travel yields positive outcomes. A quiet nighttime walk brings clarity. Efforts to improve married life exceed expectations.\n\nConfidence and emotional strength support your plans. Well-laid strategies begin showing results, pushing you closer to your goals."
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
        horoscope: "A positive day for improving health habits. Stay calm at work—anger could affect job security. Loved ones visit, making the evening pleasant. Romance feels sweet but brief. Finish pending tasks before management notices. Seniors may reconnect with old friends. A romantic mood prevails, though minor health issues could surface.\n\nStay grounded and allow others to express themselves. Listening more than speaking brings clarity. Today’s outcomes reflect past actions—use this awareness wisely."
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
        horoscope: "Determination helps you overcome a tricky situation. Financial gains arrive later in the day. Handle sensitive family matters tactfully, avoiding outside interference. Career changes you’ve considered may now be implemented. Construction or long-term work progresses well. A partner’s assertive side may feel uncomfortable—patience is required.\n\nFocus on organizing your surroundings and completing chores. Staying grounded boosts efficiency and accelerates progress."
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
        horoscope: "Fear may affect ambitions today—seeking guidance helps. Avoid lending money casually. Ensure consensus before altering home plans. Forgiveness strengthens romantic bonds. Superiors notice your work quality. Nostalgic activities bring joy. Marital life offers relief after recent strain.\n\nPhysical energy surges, encouraging emotional expression. Assert yourself calmly and confidently—inner strength speaks louder than aggression."
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
        horoscope: "Ambitions may feel influenced by fear—thoughtful advice brings clarity. Savings made today prove useful later. Children require attention yet offer emotional support. Love takes a serious turn with discussions about commitment. Work responsibilities increase, but personal time remains available. Romance with your partner feels rewarding.\n\nYour practical approach shines today. A strong inner drive supports completing detailed and overdue tasks efficiently."
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
        horoscope: "You feel calm and content today. Finances remain stable, but avoid unnecessary spending. It’s a good day to complete household tasks. Emotional understanding strengthens your bond with your partner. Work continues smoothly even in your absence. Children stay active—ensure their safety. Married life reveals its brighter side.\n\nPractical thinking is essential today. Stay focused on collective efforts and contribute where needed. Connecting with nature restores balance."
    }
];
