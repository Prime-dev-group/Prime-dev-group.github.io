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
        horoscope: "Extra caution is advised for expectant mothers today, especially while moving around. Creative thinking can help you generate additional income. Your sharp wit makes you stand out in social circles. Romance and social plans may distract you from pending responsibilities, so stay alert. Be mindful of your surroundings, as someone could attempt to take credit for your efforts. Communicate thoughtfully with influential people. Emotions run high, and passion with your spouse reaches an intense peak.\n\nYou may feel more aggressive than usual, but channeling this energy productively will work in your favor. A practical mindset keeps you grounded. Avoid making commitments you know you can’t fulfill—reliability matters more than grand promises."
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
        horoscope: "Steer clear of arguments, as stress could affect your health. Money matters are important, but don’t let financial sensitivity damage relationships. You’ll feel energetic and motivated to organize social gatherings. Love feels immersive and melodic today, drawing you deeply into emotional connection. Stay focused at work and avoid emotional confrontations. Despite a busy schedule, you’ll manage to carve out quality time for yourself. Your partner seems cheerful—support them to make the day special.\n\nEmotional intensity is heightened. Others look to you for stability and practicality. Keep a clear sense of direction, as your grounded approach will help people rely on you during uncertain moments."
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
        horoscope: "Managing emotions is essential today, as anxiety could impact your health if left unchecked. Past investments may finally yield returns. Differences with parents may arise—try to see things from their perspective and respond with patience. One-sided attraction brings disappointment, so avoid emotional assumptions. Keep pride aside and listen to your team’s input. Free time may be wasted if you’re not mindful. Your spouse may seem less supportive, which could feel discouraging.\n\nYou’re well-equipped to take charge today. Trust your instincts to initiate projects, gather resources, and push things forward. There’s a strong drive urging you toward accomplishment and celebration."
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
        horoscope: "Long-standing stress begins to ease, making this a good moment to improve your lifestyle for lasting peace. Avoid lending money unless repayment terms are clearly defined. Overspending or late nights could disturb domestic harmony. A sudden romantic moment may leave you confused—don’t make promises unless you’re certain. An unexpected visit from a distant relative may take up much of your day. External interference could create tension in married life.\n\nIt’s wise to speak less and listen more today. Emotional intensity is strong, and reacting impulsively may cloud judgment. Patience and observation will serve you better than quick conclusions."
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
        horoscope: "Your optimism leaves a strong impression today. Keep spending under control, as excessive generosity could be misused by others. Love feels rich and indulgent, bringing emotional satisfaction. Conversations with influential people spark useful ideas. The day may start slowly, but productivity improves steadily. You’ll find time later to connect with someone close. Your partner is eager to surprise you—meet their enthusiasm halfway.\n\nA surge of assertive energy pushes you to act. Use your insight and abilities efficiently to get things done rather than reacting impulsively."
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
        horoscope: "A cheerful mood keeps your spirits high, making strangers feel familiar. Be cautious in financial dealings with relatives, as losses are possible. Avoid rigidity at home to maintain peace. Your partner may feel affected by your low mood. Before entering any new partnership, ensure all details are clear. You may prefer solitude today and choose personal space over social interaction. Your spouse might appear a bit self-focused.\n\nStay grounded and clear about what you truly want. Emotional pressure could pull you off track if your intentions aren’t firmly set."
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
        horoscope: "You’re bursting with energy and ready to do something remarkable. Property-related deals may work in your favor. Spending time with close friends and family helps you unwind. Romantic memories dominate your thoughts. You may set very high goals today—don’t feel disheartened if outcomes take time. Your communication skills shine. Your spouse brings back playful memories from your younger days.\n\nChannel your drive constructively. You’re well-prepared and organized—trust your planning and move ahead with confidence."
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
        horoscope: "You feel relaxed and ready to enjoy the day. Be mindful of saving and spending wisely to avoid regret later. Spending time with trusted friends brings comfort. Romance flows easily, and work situations tilt in your favor. Students may struggle with focus and risk wasting time socially. Emotional realizations about married life may touch you deeply.\n\nBefore indulging in leisure, handle important responsibilities. Completing practical tasks first allows you to fully enjoy the evening without lingering stress."
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
        horoscope: "Direct your extra energy toward productive efforts for best results. Thoughtful investments bring returns if chosen wisely. A sibling proves more supportive than expected. Romantic thoughts fill your day. You may finally receive the kind of work you enjoy. Travel brings pleasure and benefits. Your partner surprises you affectionately, strengthening your bond.\n\nKeep emotions under control to avoid unnecessary conflict. Humility and restraint earn respect from others, including those in authority."
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
        horoscope: "Health requires attention today. Property-related investments show promise. Your cheerful, loving attitude spreads happiness around you. Love feels deeply spiritual and meaningful. Stay composed while negotiating major deals. Travel, entertainment, and social plans keep you engaged. The evening with your spouse turns out to be especially pleasant.\n\nIf negativity arises around you, step back and protect your peace. You’re not responsible for everyone’s happiness—focus on maintaining your own balance."
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
        horoscope: "Identify the emotions driving your actions and release negative thoughts like fear or doubt. Unexpected sources may bring financial gains. Family members’ cheerful nature lifts the home atmosphere. You express love even when it’s not reciprocated. Work conditions favor progress if you stay focused. Make time for relationships you value. Unplanned expenses may create tension with your partner.\n\nYou’re highly productive today, leaving the evening free for enjoyment. Confidence runs high—celebrate your achievements responsibly."
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
        horoscope: "Fear can dampen happiness if left unchecked—recognize it as a creation of the mind and release it early. Visiting relatives may increase expenses. Emotional changes at home make you sensitive, yet you communicate feelings clearly. Your partner may seem irritable, adding mental pressure. Travel opens new business opportunities. The day flows smoothly, ending with your partner lifting your mood through thoughtful gestures.\n\nFind balance by releasing pent-up energy before engaging with others. Once you clear emotional clutter, you approach the day with renewed clarity and calm."
    }
];
