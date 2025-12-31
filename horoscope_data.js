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
        horoscope: "A long-cherished wish is likely to come true today. While joy surrounds you, try not to let excitement turn into carelessness. Rising expenses may briefly unsettle you. Be mindful of your words, especially with elders—sometimes silence speaks louder than excess talk. Romance looks promising, and inner confidence supports strong performance at work. Your charm draws attention effortlessly, and time with your spouse helps you forget past struggles.\n\nGroup activities or social gatherings spark enthusiasm and creative motivation. Shared goals and teamwork feel fulfilling. Move forward confidently—today favors meaningful action and joyful connection.",
        yearly_forecast: "**2025 Overview:** A powerful year for inner reflection and professional growth. Until May, Jupiter brings unexpected opportunities. Focus on self-analysis to prepare for big transformations.\n\n**Love:** Relationships deepen through shared activities. Passion is high, but communication is crucial to avoid misunderstandings.\n\n**Career:** Immense opportunities await, especially in the first half of the year. Networking and seizing unexpected offers will lead to success.\n\n**Health:** Prioritize sleep and stress management. Improved productivity depends on balancing your energy.\n\n**Education:** An above-average year. Success in competitive exams is likely until May. Students in tourism or media will thrive.\n\n**Family & Travel:** Domestic life may see mixed results; use logic to resolve conflicts. Long-distance travel between April and June brings mental peace. A trip to **Greece** is highly recommended!"
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
        horoscope: "Physical activity or sports help maintain your stamina today. Creative thinking may open a door to extra income. Grandchildren or younger family members bring happiness. Amid daily chaos, you realize how fortunate you are in love. Avoid making promises you may struggle to keep. Seniors may reconnect with old friends, and married life feels especially harmonious.\n\nYou may finally begin a long-pending project. Be gentle with yourself—perfection isn’t required. Treat your work with the same fairness you offer others.",
        yearly_forecast: "**2025 Overview:** A spectacular year of stability and prosperity. Surprises from Uranus fade, leaving room for a \"fresh start\" in personal life and finances.\n\n**Love:** Meaningful connections flourish. It's a time to build a partnership that feels like home, moving away from fleeting flings.\n\n**Career:** Financially prosperous! Jupiter boosts income and lifestyle, but caution against overspending is advised. Investments look promising.\n\n**Health:** Watch for digestive issues; proactive check-ups are key. Mental peace comes from a stable routine.\n\n**Education:** Academic performance peaks from January to March. High school students may relocate for better opportunities.\n\n**Family & Travel:** Family life requires patience due to dynamic shifts. Step out of your comfort zone—a cultural trip to the **Netherlands** or **Tanzania** will be transformative."
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
        horoscope: "A new acquaintance introduced by friends may influence your thinking. Keep expenses under control today. Your cheerful energy uplifts others, even if romance brings mixed emotions. Workplace matters remain stable in your absence, so don’t stress over taking time off. Avoid unnecessary arguments—they waste energy and affect your mood. Domestic tension may briefly impact your well-being.\n\nPlans for an exciting trip or vacation may take shape. The experience promises both enjoyment and learning—something to truly look forward to.",
        yearly_forecast: "**2025 Overview:** One of your luckiest years! Major developments in love and career await as Uranus enters your sign mid-year, sparking independence.\n\n**Love:** New, meaningful relationships form early. Intellectual connection is vital—if the mind isn't engaged, the heart won't follow.\n\n**Career:** Major professional development is on the horizon. Your unique voice and ideas are your greatest assets.\n\n**Health:** Balance nervous energy with breathwork or yoga. Mental wellness is as important as physical fitness this year.\n\n**Education:** Excellent for competitive exams. Creativity is high, but managing time is essential for success.\n\n**Family & Travel:** Married life starts happily. Travel for work and exploration is favored—consider visiting **Italy** or **Scotland** to feed your curiosity."
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
        horoscope: "Engaging in relaxing or enjoyable activities keeps you balanced today. Wise financial advice brings success. It’s a favorable day to complete household tasks. Love feels deeply spiritual and fulfilling. Your dedication at work begins to pay off. You finally find time to act on long-delayed personal plans. Romance colors everything brighter today.\n\nPositive news related to finances or career may arrive through informal channels. Agreements or contracts signed today are likely to work in your favor.",
        yearly_forecast: "**2025 Overview:** A transformative year. Career struggles fade after March, leading to a lucky cycle when Jupiter enters your sign in June.\n\n**Love:** A roller-coaster start leads to blossoming romance by late January. Jupiter boosts joy in family and secure bonding.\n\n**Career:** A great period for finding work or launching projects. Trust your gut—your visibility and influence are increasing.\n\n**Health:** Vitality is good initially, but avoid overworking. Support your emotional well-being with nutrient-rich foods.\n\n**Education:** Self-discovery is key. Admissions to prestigious universities are possible, but discipline is required.\n\n**Family & Travel:** Focus on domestic peace early in the year. Travel for business expansion is likely—**Belize** is a spiritual and beautiful destination for you."
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
        horoscope: "Hope and optimism guide you today. Educational expenses may require attention, but avoid questionable ventures for peace of mind. Romance flows easily, and financial ideas show promise. An unexpected trip may disrupt family plans. Still, the day ends on a calm, loving note with your partner.\n\nA sudden attraction or emotional spark could arise. Whether you pursue it or not, enjoy the excitement—it reminds you of your magnetic presence.",
        yearly_forecast: "**2025 Overview:** A fulfilled journey from slow starts to summer popularity. The second half invites you to retreat and prepare for a 2026 reinvention.\n\n**Love:** Excellent shape early in the year. It's an ideal time to gain clarity and strengthen bonds with your partner.\n\n**Career:** Partnerships drive success. Teamwork is your golden ticket, so share the spotlight to achieve your big goals.\n\n**Health:** Protect your heart health with cardio. Seasonal minor issues may arise, but overall vitality is strong.\n\n**Education:** A year of development and leadership in potential student roles. Good results are expected.\n\n**Family & Travel:** Family feels secure and harmonious. You crave luxury with adventure—**New Zealand** or **Tanzania** will offer the grand memories you seek."
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
        horoscope: "A positive mindset keeps you open to good outcomes. Financial advice from elders proves useful. Celebrate your partner’s achievements sincerely. Your warmth eases emotional tension. Networking helps resolve professional challenges. Travel or learning opportunities expand your perspective. Efforts in married life bring rewards beyond expectations.\n\nEnergy levels are high today—perfect for launching new initiatives. Multiple opportunities may appear; choose wisely and stay focused.",
        yearly_forecast: "**2025 Overview:** Important lessons and big wins. Eclipses shake up relationships, challenging you to find joy in your inner world.\n\n**Love:** Commitment is tested. Whether single or attached, focus on relationships that support your personal growth and joy.\n\n**Career:** Saturn tests patience, but consistent effort pays off. Expect recognition for your efficiency in the second half.\n\n**Health:** Avoid overworking your digestive system. Schedule lighter meals and ensure you take mental breaks.\n\n**Education:** Hard work is needed after May. Organization is your superpower and will lead to success.\n\n**Family & Travel:** Family life may need extra effort after May. You prefer organized trips—traditional festivals in **Italy** or the history of **Greece** will delight you."
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
        horoscope: "A special encounter introduced by friends influences your thinking. Innovative ideas help boost income. Social plans energize you, though unnecessary tasks may eat into free time. Work feels under control, and your partner’s affection stands out.\n\nPreparations for gatherings or celebrations keep you busy. Communication reconnects you with friends—turning work into pleasure.",
        yearly_forecast: "**2025 Overview:** Big changes and new horizons! Adventure and travel call in the first half, followed by career expansion.\n\n**Love:** March turns up the heat. Drop illusions and communicate clearly. Boundaries will actually bring you closer to true intimacy.\n\n**Career:** A major level-up awaits. A new role aligning with your values is likely, especially after June.\n\n**Health:** Hydration is key for skin and kidney health. Recovery from past ailments looks very favorable.\n\n**Education:** Collaborative learning brings success. February is the ideal month for educational planning.\n\n**Family & Travel:** Family bonds strengthen after mid-May. Travel for growth is indicated—a retreat in **Kerala, India** could offer the balance you seek."
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
        horoscope: "Minor discomfort may unsettle you initially, but energy returns quickly. Financial conditions improve steadily. Support from loved ones lifts your spirits. Romance thrives, though convincing others to align with your plans may take effort. Clearing old belongings brings a sense of renewal. Married life feels deeply rewarding today.\n\nComplete routine work early to free up time for passions that motivate you later in the day.",
        yearly_forecast: "**2025 Overview:** A dynamic mix of opportunities. Cosmic shifts alter your course, bringing meaningful growth early in the year.\n\n**Love:** Singles might find someone special early. Existing relationships strengthen, with serious commitments like marriage possible.\n\n**Career:** Education and new skills are highlighted. It's a fantastic year to learn something that adds value to your toolkit.\n\n**Health:** Generally robust physical health. Minor ailments will be short-lived, so stay active.\n\n**Education:** Hard work pays off for exam takers. Travel for education may bring clarity.\n\n**Family & Travel:** Harmony prevails in the first half. Travel with friends or family is encouraged—explore the **Dampier Archipelago, Australia** for adventure."
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
        horoscope: "Your courteous nature earns appreciation. Secure investments help generate extra income. A short trip with relatives brings relaxation. Travel or pleasure plans rejuvenate you. Stay mindful of speech at work to protect your reputation. Learning events expand your network. Married life feels especially joyful.\n\nCreative energy flows freely—ideal for writing, speaking, or artistic pursuits. Conversations stimulate your mind throughout the day.",
        yearly_forecast: "**2025 Overview:** A supportive start with Jupiter aiding plans. You must balance your free spirit with Saturn’s demand for discipline.\n\n**Love:** Professional life may distract initially, but Venus brings rewards later. Stability becomes more attractive than fleeting fun.\n\n**Career:** Mixed outcomes lead to success if you persist. Hard work is non-negotiable, but new avenues open after May.\n\n**Health:** Optimistic outlook, but watch for mental pressure. Meditation or yoga will help keep your fire balanced.\n\n**Education:** Unconventional fields call to you. Internships abroad will expand your horizons.\n\n**Family & Travel:** Mutual support strengthens family bonds. Your adventurous spirit will love festivals in **Italy** or the landscapes of **Vietnam**."
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
        horoscope: "Maintain a positive mindset to support your health. Monitor spending habits carefully. Avoid unnecessary conflicts with loved ones. Romantic misunderstandings may arise, so patience is key. Professional performance remains strong. Family outings bring comfort, though emotional support from your partner may feel limited today.\n\nYou may discover a new talent related to property, design, or nature. Explore it thoughtfully—it could hold long-term potential.",
        yearly_forecast: "**2025 Overview:** Big transitions in every area. The pressure gives way to evolution and financial refinement.\n\n**Love:** Social expansion brings joy. Existing partnerships flourish, and singles may find stable, long-term prospects.\n\n**Career:** Financial growth is the focus. Saturn helps you solidify plans, and collaboration becomes your path to the top.\n\n**Health:** Strengthen your bones with Vitamin D and resistance training to match your strong ambition.\n\n**Education:** Consistent success. Good for long-term goals and certifications due to strong concentration.\n\n**Family & Travel:** Good news from maternal relatives is likely. You prefer structured trips—relaxing in **Monaco** or hiking in **Argentina** fits your style."
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
        horoscope: "Personal development efforts boost confidence. Business advice from an old friend proves valuable. Children or family bring joy. Emotional understanding strengthens love bonds. Workplace appreciation motivates you. Even with responsibilities, you manage to carve out personal time and explore a new interest. Shared moments with your spouse become lasting memories.\n\nHigh energy makes you crave social interaction. Light exercise or movement helps balance excitement.",
        yearly_forecast: "**2025 Overview:** A year to shine! Significant growth in career and finances. The first half is for planning; the second brings breakthroughs.\n\n**Love:** Communication is your lifeline. Long-distance or online connections could surprise you. Patience is key in matters of the heart.\n\n**Career:** Saturn gives you control over your path, while Jupiter offers expansion. Property investments and financial gains look favorable.\n\n**Health:** Improve circulation with movement breaks. Consistent activity keeps your innovative mind sharp.\n\n**Education:** Excellent prospects for research and higher education, especially after May.\n\n**Family & Travel:** Family tension fades after mid-year. Professional changes in spring might inspire travel—consider the cool vibes of **Oslo, Norway**."
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
        horoscope: "A fulfilling day brings emotional satisfaction. Keep future plans and investments private. Attention flows your way, making choices feel overwhelming. Love feels rewarding—don’t take it for granted. You manage an early exit from work and enjoy quality family time. Intimacy with your spouse becomes the highlight of the day.\n\nA chance to earn extra income may arise unexpectedly. Learn steadily and avoid overexertion—balance ensures success.",
        yearly_forecast: "**2025 Overview:** Introspection and rebirth. As Saturn prepares to leave, you emerge more grounded, mature, and spiritually connected.\n\n**Love:** Relationships take on a deeper meaning. You seek soul connections, and casual dating loses its appeal.\n\n**Career:** Strategic planning wins the race. It's a year to balance your dreams with reality. Artistic and healing professions continue to be favored.\n\n**Health:** Support your immunity with herbal teas and adaptogens. Your sensitive nature needs extra care during this transition.\n\n**Education:** Success in creative fields. Studying abroad or travel-related subjects is highly favored.\n\n**Family & Travel:** Manage minor family tensions with communication. Travel for relaxation is key—the beaches of **Thailand** call to your water spirit."
    }
];
