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
        horoscope: "Your well-being improves when you surround yourself with positivity and shared happiness. Still, don’t ignore health routines, as carelessness could cause trouble later. Financial gains may come through your children, giving you a sense of pride. Friends plan something exciting that lifts your mood. Romantic efforts may not bring expected results today, so keep expectations realistic. You’ll find chances to showcase your talents, but staying focused is essential to avoid wasting time. Plans may change due to your partner’s urgent responsibilities, yet things ultimately work out for the better.\n\nSocial gatherings introduce interesting new contacts. Partnerships—especially with close friends—feel mutually beneficial. If a new business collaboration is on your mind, this is a good day to start serious discussions."
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
        horoscope: "Long-standing stress begins to ease, making this a good time to adopt healthier habits for lasting balance. Financial improvement is likely, and charitable acts bring inner peace. Home life feels calm and affectionate. If you’re considering taking a relationship to the next level, honest conversation is important—first understand where your partner stands. Move cautiously with ideas and proposals until you’re confident. Spending quiet time reflecting on personal growth helps bring positive change. Married life feels harmonious and reassuring.\n\nYour practical skills shine today. A long-term goal may finally be within reach, bringing recognition and a sense of achievement. Progress and advancement are strongly indicated."
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
        horoscope: "A fun-filled and relaxing day lies ahead. It’s a favorable time to invest in items that may appreciate in value. Tension at home may momentarily bother you, but misunderstandings in relationships dissolve quickly. Lean on your network to navigate tricky situations. Finishing work on time allows you to head home early and enjoy family moments, leaving you refreshed. Married life takes on a warmer, more affectionate tone.\n\nYour business instincts combine well with creativity, opening doors for growth. Useful information from afar proves valuable. Friendships feel cooperative, and love relationships are rewarding. Take time to unwind and enjoy yourself."
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
        horoscope: "Pay attention to your diet, especially if you’re prone to migraines—skipping meals can increase stress. If you’ve been pursuing a loan for some time, luck may finally favor you today. A short family outing or visit to a historical place refreshes everyone’s mood. Emotional understanding is key to supporting your partner. At work, colleagues may try to help, though support could feel limited. Visiting a religious or peaceful place brings calm. Taking your partner for granted could spark disagreement, so be mindful.\n\nFriends or relatives may drop by with new contacts whose expertise benefits a project you’re working on. Financial dreams are fine, but delay spending until funds are secured."
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
        horoscope: "Avoid unrealistic dreams and focus your energy on practical goals. Legal or financial matters may turn in your favor, offering relief. Family members support you during challenging moments, and observing skilled individuals helps build confidence. Strong romantic possibilities arise today. Compliments at work boost morale. While the morning may feel tiring, momentum improves as the day progresses. You find meaningful personal time later, and your bond with your spouse feels especially rewarding.\n\nA local social gathering may introduce useful information or connections that support your career growth. Optimism and motivation remain high—whatever you begin today carries strong chances of success."
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
        horoscope: "Excessive travel may leave you feeling drained, though finances improve as the day progresses. Keep personal matters private and avoid oversharing. Love brings encouraging energy, but maintain composure during business discussions—emotional speech could harm your image. The day supports long-term planning, though an unexpected guest may disrupt schedules. Your partner surprises you pleasantly, making married life feel especially fulfilling.\n\nProfessional and financial matters improve noticeably. Obstacles fade, work flows smoothly, and you feel energized, confident, and optimistic about what lies ahead."
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
        horoscope: "A lighthearted, enjoyable day awaits. Review investment offers carefully before committing. Generosity toward family strengthens bonds, and romance adds excitement to your happiness. It’s an excellent day for client negotiations, seminars, or exhibitions that expand knowledge and contacts. Married life feels especially joyful and satisfying.\n\nYou feel mentally and physically strong. Career and finances take a positive turn, love flows smoothly, and children bring added joy. This is a favorable time to plan ahead and pursue long-term ambitions."
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
        horoscope: "Starting the day with yoga or meditation keeps your energy steady. Financial gains are possible, but manage money carefully. Support from old friends proves valuable. Romance fills the air—enjoy the warmth and closeness. Short-term learning programs help sharpen your skills. Guidance from an elder or spiritual figure brings clarity. Misunderstandings with your spouse may arise, so open communication is essential to prevent deeper issues.\n\nFinancial challenges ease with advice from an experienced person. Practical thinking and intuition work together, helping you make sensible decisions."
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
        horoscope: "Patience and persistence ensure progress today. You may find it easier to raise funds, recover dues, or secure support for new plans. A younger sibling seeks your guidance. Sharing knowledge earns recognition, and your empathy helps heal emotional wounds. Value your time and avoid distractions. Your partner’s affection brings comfort and relief.\n\nImportant information you’ve been waiting for may surface. You might be asked to assist someone with financial planning—your advice proves useful and appreciated. Stay focused and productive."
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
        horoscope: "Leaving work early to enjoy personal interests refreshes you. Business profits uplift many around you. Ensure consensus before making changes at home. Romantic plans may face disappointment, but correspondence and pending tasks demand attention. Favorable planetary influences lift your mood, and your partner’s thoughtful gestures bring warmth.\n\nEfforts from recent weeks begin to pay off. Financial concerns ease, recognition may come your way, and this phase feels both rewarding and satisfying."
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
        horoscope: "Yoga and meditation help maintain physical and mental balance. Salary delays may cause temporary concern, prompting you to seek short-term help. Social events connect you with influential people. Love may feel disappointing, but don’t lose hope. Partnership ventures look promising if entered thoughtfully. Spiritual guidance offers peace if you feel disillusioned. Married life may feel dull—adding novelty helps revive excitement.\n\nTravel or relocation plans could finally move forward, though paperwork requires attention. Career advancement ideas motivate you to upgrade skills or pursue learning opportunities."
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
        horoscope: "Stay confident when interacting with influential people—self-belief is essential for success. Support from siblings brings financial benefit. Grandchildren or younger family members fill your heart with joy. Your partner keeps you in their thoughts all day. Collaborative ventures show promise. Mixed events may leave you feeling tired yet fulfilled. Romance flows easily, adding warmth to married life.\n\nCreative thinking and imagination open new financial possibilities. Practical advice blends well with intuition, helping you make smart choices. The day carries a fortunate tone for progress and growth."
    }
];
