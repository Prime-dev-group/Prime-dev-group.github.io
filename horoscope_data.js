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
        horoscope: "Excessive stress and worry may take a toll on your health, so focus on staying mentally clear and calm. Avoid confusion when it comes to financial matters—research investment options thoroughly and consult experts before committing. Family and children take center stage today. A sudden wave of romantic feelings may surface by evening. Although you have free time, you might not use it wisely, which could affect your mood. Married life feels joyful and fulfilling. A challenging situation reminds you of the value of true friendships.\n\nYour creativity is heightened today, making it a great time for artistic expression like writing or painting. Inspiration may come from revisiting the past—art, music, or cultural spaces could spark meaningful insights. Trust your intuition and jot down any powerful impressions.",
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
        horoscope: "Engaging in sports or physical activity helps you stay youthful and energized. Be cautious of friends who ask for loans and fail to repay. It’s a favorable day to reconnect with people you don’t meet often. Romance may feel complicated, but your persuasive skills bring success professionally. Be gentle with your partner, as minor physical discomfort is possible. Spending time with children brings emotional calm and happiness.\n\nYour curiosity is strong today, especially in imaginative or creative pursuits. Artistic expression or spiritual exploration helps bridge logic and intuition. Fiction, art, or esoteric studies feel more rewarding than practical routines.",
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
        horoscope: "You finally feel relief from lingering stress, making this a good time to adopt lasting lifestyle changes. Keep a close watch on expenses, as finances may feel tight. Hosting or attending a gathering with close friends lifts your spirits. Your love carries a powerful creative energy, and your charm naturally draws people in. Your spouse does something truly special today. Volunteering or helping others boosts your vitality.\n\nEmotions may cloud judgment, making decisions feel harder than usual. Give yourself permission to slow down and rest—clarity returns soon.",
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
        horoscope: "Despite a packed day, your health remains steady. Avoid impulsive financial decisions, especially during negotiations. Excessive spending or late nights could cause tension at home. Emotional understanding strengthens your bond with your spouse. You finally get time to work on long-pending personal tasks. Romantic memories resurface, adding warmth to married life. Extra free time may invite negative thoughts—counter them with uplifting books, movies, or outings.\n\nOptimism and forward thinking guide you today. Conversations spark ideas for personal or professional expansion. Plan carefully before making major moves.",
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
        horoscope: "Inner fears may surface, but positive thinking helps keep them under control. Investments made today strengthen long-term security. Family situations may seem exaggerated—verify facts before reacting. Romantic memories occupy your thoughts. Avoid rushed decisions you may regret. Your spouse appreciates your efforts and affection today, even if others don’t fully understand your mindset.\n\nFresh financial ideas emerge, but this isn’t the day for firm commitments. Gather information, reflect, and revisit decisions after careful consideration.",
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
        horoscope: "Lingering stress begins to fade, encouraging healthier routines. Be cautious in business dealings with relatives to avoid losses. Children may cause concern due to lack of focus. Love life brings a pleasant surprise. A chance meeting with someone from your past may stir emotions. The evening with your spouse feels warm and fulfilling. Treating employees or colleagues lifts morale.\n\nYou feel more social today and may reconnect with old friends. Let go of past conflicts instead of reopening them to keep interactions harmonious.",
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
        horoscope: "Your mental strength and confidence help you manage situations effectively. Stay alert in financial matters, especially while signing documents. Your charm makes you popular socially. A romantic gesture or gift lifts your spirits. Fitness plans may remain unexecuted, but love with your spouse feels renewed. Your qualities earn appreciation today.\n\nEnergy levels may feel low, causing restlessness. Relaxation, music, or gentle self-care helps restore balance.",
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
        horoscope: "Good news lifts your mood today, and financial gains look promising—just avoid careless spending. Your spouse remains supportive despite mood swings. A joyful message brightens the day. Make time to work on personal growth. Romance reaches an intense and satisfying peak. Your partner’s laughter and warmth bring comfort.\n\nLove matters improve through open discussion. Differences may arise, but compromise keeps harmony intact.",
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
        horoscope: "Expectant mothers should take extra care today. Pending loans or financial matters finally turn in your favor. Children may disappoint academically. Avoid overly emotional expressions in romance. Carry yourself with confidence and dignity. Minor disruptions early in the day resolve with your spouse’s support. Staying home feels comforting, though family tensions may arise.\n\nHome improvement or decoration feels appealing today. Involve family and pace yourself to avoid exhaustion.",
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
        horoscope: "Others’ demands may interfere with your need for rest—make space for self-care. Financial discipline becomes clear today. Time with loved ones brings joy, though emotional sharing with your partner may feel one-sided. Avoid alcohol and cigarettes. Romance is strong, but minor health issues may surface. Reflect on future direction as difficult phases begin to ease.\n\nUnexpected communication brings exciting news. Make the most of opportunities without overthinking—today’s choices may shape future success.",
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
        horoscope: "Support from influential people boosts confidence. Financial gains come through professional connections. Your partner remains understanding and supportive. Spend time with friends but avoid alcohol. A pleasant surprise enhances married life. Shopping or leisure with loved ones feels enjoyable—just keep expenses in check.\n\nFinancial worries may surface early, but reviewing records shows things are manageable. A practical plan restores peace of mind.",
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
        horoscope: "Time with humorous relatives lightens your mood and eases tension. Keep financial plans and investments private. Relaxed family moments bring comfort. Romance feels playful and sweet. Favorable planetary energy gives many reasons to smile. Your partner’s spontaneous gesture becomes a cherished memory. Social time with friends proves emotionally rewarding.\n\nLove and partnership feel especially warm today. Understanding deepens, turning casual connections into meaningful friendships.",
        yearly_forecast: "**2025 Overview:** Introspection and rebirth. As Saturn prepares to leave, you emerge more grounded, mature, and spiritually connected.\n\n**Love:** Relationships take on a deeper meaning. You seek soul connections, and casual dating loses its appeal.\n\n**Career:** Strategic planning wins the race. It's a year to balance your dreams with reality. Artistic and healing professions continue to be favored.\n\n**Health:** Support your immunity with herbal teas and adaptogens. Your sensitive nature needs extra care during this transition.\n\n**Education:** Success in creative fields. Studying abroad or travel-related subjects is highly favored.\n\n**Family & Travel:** Manage minor family tensions with communication. Travel for relaxation is key—the beaches of **Thailand** call to your water spirit."
    }
];
