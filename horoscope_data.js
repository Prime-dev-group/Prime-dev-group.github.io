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
        horoscope: "You feel energetic and agile today, with your health strongly supporting you. It’s a good time to discuss savings and investments with family, as their advice proves valuable. Someone close may feel unsettled by your unpredictable behavior, so patience is needed. Romance feels uplifting and deeply comforting. At work, support and appreciation come easily. You may wish to tend to your mother’s needs, but urgent matters could delay that, causing mild frustration. A powerful emotional realization strengthens your bond with your spouse.\n\nStrong emotions are more stable today. While assertiveness runs high, staying grounded prevents conflict. Focus on practical priorities and steady progress rather than unnecessary arguments."
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
        horoscope: "Peace of mind becomes a priority as you choose to release unnecessary worries. A fresh financial agreement brings new income, and house-related matters look favorable. Avoid forming opinions about your partner based on others’ words. Work progress may feel slow, creating mild tension. Socializing with a colleague may not be as fulfilling as expected. Overindulgence in food or drinks could slightly affect health.\n\nEmotions feel intense but manageable. Staying realistic and grounded helps you navigate tasks smoothly. Physical connection with nature brings clarity and balance."
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
        horoscope: "Workplace pressure and domestic disagreements may affect your focus today. Financially, a new deal brings inflow. Home-related tasks move smoothly. Keep romantic matters private and maintain composure when dealing with senior colleagues. Spiritual reading or quiet reflection helps reduce stress. A spouse’s health concern may interrupt your schedule, but you manage the situation effectively.\n\nYou’re filled with drive and determination. Channel this energy into meaningful goals rather than frustration. Handling practical responsibilities brings noticeable progress."
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
        horoscope: "Mental stress may interfere with happiness, but engaging your mind through reading or learning helps restore balance. Investment opportunities appear tempting but may not deliver expected returns—avoid haste. Family and children take center stage. Romance feels pleasant yet short-lived. Professional dedication earns recognition, though pending tasks may demand extra evening hours. Time spent with your spouse brings relaxation.\n\nGrounding your emotions early is essential. Balance logic with sensitivity and tackle practical responsibilities decisively to regain stability."
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
        horoscope: "Energy remains high, but extra attention is required for children’s health, which may involve expenses. Later in the day, you prefer relaxing with family. Romance feels light and refreshing, enhancing emotional warmth. Work progresses smoothly. Students may waste time on distractions, so discipline is needed. Married life feels especially cozy and affectionate.\n\nStrong emotions push you to face practical realities. Use your assertiveness wisely and avoid letting others dictate your direction."
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
        horoscope: "Consistent effort and family support bring encouraging outcomes. Savings may be used today, though expenses could dampen your mood. An enjoyable evening with friends lightens spirits. You may feel distant from love, but this phase is temporary. At work, someone you once mistrusted proves supportive. Honest communication with your partner clears emotional tension. Married life offers relief after recent strain.\n\nHeightened emotions require structure and focus. Staying organized helps you accomplish tasks efficiently without reacting impulsively."
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
        horoscope: "A pleasant evening with your partner helps you unwind. Advice from your father proves useful at work. Children seek attention but bring happiness. Playful romance adds charm to the day. Be mindful not to overcommit to others at the expense of your responsibilities. Your competitive streak helps you succeed. Minor domestic irritations may arise during routine tasks.\n\nEmotional strength and courage guide your actions. Well-planned efforts move you closer to your goals with confidence."
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
        horoscope: "Optimism rises as hope blooms. Control spending and focus on essentials. Your innocent approach helps resolve family matters. Avoid forcefulness in romance. Career efforts may be rewarded through recognition or financial benefits. Leisure time may be spent unwinding digitally. Be cautious, as a partner’s actions could cause minor losses.\n\nStaying grounded and listening carefully to others brings balance. Outcomes today reflect past actions—use this insight constructively."
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
        horoscope: "Confidence fuels productivity despite a busy schedule. Financial concerns may trouble students planning to study abroad. A close relative offers support but seeks attention. Romance feels joyful and carefree. Job seekers must apply extra effort for results. Reading helps you relax, though family distractions may persist. Passionate moments strengthen your bond with your spouse.\n\nFocusing on organization and daily chores keeps you grounded. Emotional balance enhances efficiency and accelerates progress."
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
        horoscope: "Important decisions may feel stressful, but they lead to long-term benefits. Travel may be tiring yet financially rewarding. Interfering in your partner’s affairs could spark tension—mutual respect avoids conflict. Romantic gestures uplift your mood. Gradual changes ensure success. Solitude appeals to you, and organizing your space brings calm. Married life feels deeply fulfilling.\n\nA surge of physical energy encourages emotional expression. Stand firm with quiet confidence rather than aggression."
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
        horoscope: "High energy and enthusiasm push you to seize opportunities. Financial constraints may limit savings. Your partner seeks consideration—listening helps preserve harmony. Romantic feelings are mutual. Postpone new projects and expenses. Seeking advice from experienced individuals proves beneficial. Married life brings emotional satisfaction.\n\nYour practical mindset helps you clear pending tasks. Strong determination supports steady and efficient progress."
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
        horoscope: "Letting go of stubbornness improves harmony. Investments are favorable with proper guidance. Positive developments at home bring joy to the entire family. A sweet message lifts your spirits. Professional efforts pay off in unexpected ways. Solitude and personal interests help you recharge. Emotional fulfillment flows easily in married life.\n\nStaying practical and grounded keeps you aligned with group energy. Connecting with nature restores balance and clarity."
    }
];
