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
        horoscope: "Direct your abundant energy toward something productive today. Financial discipline becomes clear as you realize the value of avoiding unnecessary spending. Reconnecting with people you don’t meet often proves refreshing. Love feels powerful and all-encompassing. Friends may drop by, adding warmth to your day, but avoid unhealthy indulgences. Your partner’s simple, genuine actions bring unexpected happiness. Enjoy conversations, but limit excessive phone chatter.\n\nBusy communication around work or family matters may feel overwhelming at first. Too many priorities arrive together—handle them one by one. Your thinking remains steady and logical, helping you navigate everything smoothly if you stay patient."
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
        horoscope: "Health deserves attention today, especially for elders. Seeking blessings from seniors before stepping out works in your favor. Time spent with friends is enjoyable, though extra care is needed while traveling. Romantic moments feel sweet and playful. Social activities and short trips keep you engaged. Something unexpected may rekindle attraction between you and your partner. A minor irritation from a stranger during travel is possible.\n\nPositive financial news sparks ideas for improving your living space. Renovation or redecorating feels tempting—just ensure excitement doesn’t lead to impulsive decisions you’ll regret later."
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
        horoscope: "Use today’s momentum to work on self-improvement. Legal or financial matters may move in your favor, bringing relief. Helping a sibling regain balance prevents unnecessary disputes. Romance feels uplifting and heartfelt. Plans to reorganize your home may remain unfinished due to time constraints. Your spouse surprises you pleasantly. Spending time with a younger sibling strengthens emotional bonds.\n\nYour mind is sharp and alert, making others seek your advice. Paperwork may feel overwhelming, but tackling it step by step ensures everything gets done efficiently."
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
        horoscope: "Listening patiently to others may help you uncover solutions to your own concerns. Financial gains are likely, especially from previously lent money. Focus on new ideas with support from close friends. Emotional longing may surface, making memories feel stronger than usual. Creative activities or mental games keep you engaged. A past shared memory helps resolve tension with your spouse—use nostalgia wisely. Choose reading or writing over boredom.\n\nSpiritual or metaphysical topics capture your attention today. While curiosity runs high, complete your responsibilities first—your sense of duty won’t allow you to ignore them for long."
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
        horoscope: "A small dose of discomfort helps you appreciate happiness more deeply today. Spend cautiously if you’re socializing with friends. Your charm attracts people effortlessly, and romance flourishes through outdoor or leisure plans. Travel prospects look promising. Emotional harmony between partners feels strong. Family members may need your presence—make time for them.\n\nA recently set goal may feel intimidating, but focus and discipline help you stay on track. Routine financial or paperwork matters require attention but pose no real challenge."
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
        horoscope: "Someone’s selfish behavior may disturb your peace, but financial matters improve significantly today. Clearing debts or loans brings relief. A change in appearance or social circle refreshes your mood. Your partner’s unspoken emotions say more than words. Religious or spiritual activities bring calm—avoid unnecessary arguments. A warm, comforting moment with your spouse lifts your spirits. Purposeful online browsing offers deeper insights.\n\nOptimism fuels your ideas, though responsibilities may delay execution. Evening hours allow you to unwind and enjoy personal freedom."
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
        horoscope: "Stress eases when you spend time with children or engage in simple joys. Business gains look promising today. Avoid sensitive topics that may spark arguments with loved ones. Romantic plans may face delays due to work, leading to frustration. Visiting a religious or spiritual place helps restore balance. Lack of quality time may strain your relationship slightly. Spiritual curiosity grows through yoga or reading.\n\nDiscussions around beliefs may surface, but avoid persuading others today. Reflect on ideas privately and postpone major decisions or travel plans."
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
        horoscope: "Be cautious with food choices today and avoid unnecessary stress. Improving income through proactive effort proves beneficial. Work pressure remains light, allowing quality family time. Romance feels different and exciting. Seek advice from experienced individuals before starting anything new. An old friend may revive pleasant memories with your spouse. Students benefit from open discussions with teachers.\n\nFriends may seek financial advice, but today isn’t ideal for offering it. Trust intuition over analysis—your ability to see beneath the surface is especially strong now."
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
        horoscope: "You have time to focus on health and appearance today. Smart savings decisions prove valuable later. Your enthusiasm helps ease family tensions. Emotional distance from your partner may feel unsettling. Reading spiritual material offers clarity. A minor misunderstanding with your spouse may arise but won’t last. Visiting relatives fulfills social responsibilities.\n\nCommunication issues with loved ones may cause frustration, but this phase passes quickly. Patience restores harmony by tomorrow."
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
        horoscope: "Avoid impulsive decisions—they may affect family interests. Financial recovery is likely through returned money. Family matters require attention; negligence may create friction. Express affection thoughtfully. Students may feel distracted by romantic thoughts. Time spent with your spouse feels deeply fulfilling. Friendly conversations help relieve boredom.\n\nPlans for travel or education excite you but may distract focus. Your discipline ensures responsibilities are handled regardless."
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
        horoscope: "Support from people around you boosts morale. Financial outflow remains steady, making saving difficult. Positive personal developments bring joy to your family. A careless remark may hurt your partner—acknowledge and fix it quickly. Making time for yourself proves valuable for long-term growth. Your spouse gives you special attention. Praise from a friend lifts your confidence.\n\nRomantic plans may be delayed by urgent responsibilities. Finish necessary tasks first—there will still be time to enjoy the evening."
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
        horoscope: "Physical health stays stable, though mental pressure may surface. Creative ideas help generate extra income. Friends provide emotional comfort. Be gentle in communication to avoid misunderstandings. Relatives may trigger minor disagreements with your spouse. Excessive talking could cause fatigue—moderation helps.\n\nYou may plan to attend a social gathering but feel held back by paperwork. Do what’s necessary, then allow yourself to enjoy the event—you’ve earned it."
    }
];
