/**
 * Horoscope Data
 * Contains daily horoscopes, profiles, and yearly forecasts for all 12 zodiac signs.
 */

const HOROSCOPE_DATA = [
  {
    "name": "Aries",
    "date": "Mar 21 - Apr 19",
    "icon": "♈",
    "element": "Fire",
    "ruling_planet": "Mars",
    "keywords": ["Courageous", "Determined", "Confident"],
    "traits": "Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations.",
    "strengths": ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic"],
    "weaknesses": ["Impatient", "Moody", "Short-tempered", "Impulsive", "Aggressive"],
    "compatibility": "**Most Compatible:** Leo, Sagittarius, Gemini, Aquarius.\n**Least Compatible:** Cancer, Capricorn.",
    "horoscope": "Begin your day with light physical activity to uplift your mood and build consistency around self-care. You may need to spend money fixing a faulty electronic item. Using spare time to enhance your home will be appreciated by your family. Emotional closeness with your partner brings comfort. Focus on completing responsibilities on time, as someone at home is counting on you. The evening favors romance, music, candles, and good food with your spouse. Late-night conversations with a close confidant help you reflect on personal matters.\n\nA rise in income brings joy and positivity into your household. While you may wonder how long this momentum will last, current signs suggest stability. Consider cautious investments to strengthen long-term financial security.",
    "yearly_forecast": "**2026 Overview:** A powerful year for inner reflection and professional growth. Planetary transits bring unexpected opportunities. Focus on self-analysis to prepare for big transformations.\n\n**Love:** Relationships deepen through shared activities. Passion is high, but communication is crucial to avoid misunderstandings.\n\n**Career:** Immense opportunities await. Networking and seizing unexpected offers will lead to success.\n\n**Health:** Prioritize sleep and stress management. Improved productivity depends on balancing your energy.\n\n**Education:** An above-average year. Success in competitive exams is likely. Students in tourism or media will thrive.\n\n**Family & Travel:** Domestic life may see mixed results; use logic to resolve conflicts. Long-distance travel brings mental peace."
  },

  {
    "name": "Taurus",
    "date": "Apr 20 - May 20",
    "icon": "♉",
    "element": "Earth",
    "ruling_planet": "Venus",
    "keywords": ["Reliable", "Patient", "Practical"],
    "traits": "Taurus is an earth sign represented by the bull...",
    "strengths": ["Reliable", "Patient", "Practical", "Devoted", "Responsible", "Stable"],
    "weaknesses": ["Stubborn", "Possessive", "Uncompromising"],
    "compatibility": "**Most Compatible:** Virgo, Capricorn, Cancer, Pisces.\n**Least Compatible:** Leo, Aquarius.",
    "horoscope": "Practices like meditation or yoga help you stay balanced both mentally and physically. Keep a close watch on expenses and avoid unnecessary splurges. Pleasant news later in the day lifts the mood of the entire household. One-sided attraction may bring disappointment, so remain grounded. Rediscovering an old object at home may stir nostalgic memories. Your partner may seem overly focused on themselves today, yet you’ll realize how deeply your loved ones contribute to your happiness.\n\nYou may spend considerable time discussing future business possibilities with friends or contacts. Gathering complete information before making decisions proves wise and rewarding.",
    "yearly_forecast": "**2026 Overview:** A spectacular year of stability and prosperity. Fresh opportunities in personal life and finances emerge.\n\n**Love:** Meaningful connections flourish. It's a time to build a partnership that feels like home, moving away from fleeting flings.\n\n**Career:** Financially prosperous! Jupiter boosts income and lifestyle, but caution against overspending is advised. Investments look promising.\n\n**Health:** Watch for digestive issues; proactive check-ups are key. Mental peace comes from a stable routine.\n\n**Education:** Academic performance peaks early in the year. High school students may relocate for better opportunities.\n\n**Family & Travel:** Family life requires patience due to dynamic shifts. Step out of your comfort zone—cultural trips are transformative."
  },

  {
    "name": "Gemini",
    "date": "May 21 - Jun 20",
    "icon": "♊",
    "element": "Air",
    "ruling_planet": "Mercury",
    "keywords": ["Adaptable", "Outgoing", "Intelligent"],
    "traits": "Have you ever been so busy that you wished you could clone yourself...",
    "strengths": ["Gentle", "Affectionate", "Curious", "Adaptable", "Ability to learn quickly"],
    "weaknesses": ["Nervous", "Inconsistent", "Indecisive"],
    "compatibility": "**Most Compatible:** Libra, Aquarius, Aries, Leo.\n**Least Compatible:** Virgo, Pisces.",
    "horoscope": "Despite a demanding schedule, your health remains strong today. Financial discipline becomes important—begin saving or investing to safeguard against future challenges. Family members may not meet your expectations, so adjusting your approach helps maintain harmony. Letting go of past mistakes brings emotional relief. Meditation or quiet reflection during free time restores mental peace. Your partner’s affection makes you feel valued. Avoid outside food, as it may upset your digestion.\n\nRecent professional gains boost confidence and optimism. If you maintain this mindset and continue working diligently, prosperity and fulfilling relationships follow naturally.",
    "yearly_forecast": "**2026 Overview:** One of your luckiest years! Major developments in love and career await as planetary shifts spark independence.\n\n**Love:** New, meaningful relationships form early. Intellectual connection is vital—if the mind isn't engaged, the heart won't follow.\n\n**Career:** Major professional development is on the horizon. Your unique voice and ideas are your greatest assets.\n\n**Health:** Balance nervous energy with breathwork or yoga. Mental wellness is as important as physical fitness this year.\n\n**Education:** Excellent for competitive exams. Creativity is high, but managing time is essential for success.\n\n**Family & Travel:** Married life flourishes. Travel for work and exploration is favored—consider visiting Italy or Scotland to feed your curiosity."
  },

  {
    "name": "Cancer",
    "date": "Jun 21 - Jul 22",
    "icon": "♋",
    "element": "Water",
    "ruling_planet": "Moon",
    "keywords": ["Tenacious", "Imaginative", "Loyal"],
    "traits": "Cancer is a cardinal water sign...",
    "strengths": ["Tenacious", "Highly imaginative", "Loyal", "Emotional", "Sympathetic", "Persuasive"],
    "weaknesses": ["Moody", "Pessimistic", "Suspicious", "Manipulative", "Insecure"],
    "compatibility": "**Most Compatible:** Scorpio, Pisces, Taurus, Virgo.\n**Least Compatible:** Aries, Libra.",
    "horoscope": "Support from friends keeps your spirits high. Limit spending and focus on essentials. You may struggle to satisfy your parents’ expectations—understanding their viewpoint brings better outcomes. Emotional fluctuations may surface. Engaging in games or leisure activities helps, but remain alert to avoid accidents. Your partner may feel overlooked due to your busy schedule and express frustration later. A colleague’s advice could be useful, even if it initially feels uncomfortable.\n\nProfessional achievements may inspire you to celebrate with close friends. Confidence, charm, and romance flow easily—reward yourself for your hard work.",
    "yearly_forecast": "**2026 Overview:** A transformative year. Career struggles fade, leading to a lucky cycle when Jupiter enters your sign mid-year.\n\n**Love:** Early challenges lead to blossoming romance. Jupiter boosts joy in family and secure bonding.\n\n**Career:** A great period for finding work or launching projects. Trust your gut—your visibility and influence are increasing.\n\n**Health:** Vitality is good initially, but avoid overworking. Support your emotional well-being with nutrient-rich foods.\n\n**Education:** Self-discovery is key. Admissions to prestigious universities are possible, but discipline is required.\n\n**Family & Travel:** Focus on domestic peace early in the year. Travel for business expansion is likely."
  },

  {
    "name": "Leo",
    "date": "Jul 23 - Aug 22",
    "icon": "♌",
    "element": "Fire",
    "ruling_planet": "Sun",
    "keywords": ["Creative", "Passionate", "Generous"],
    "traits": "Roll out the red carpet, because Leo has arrived...",
    "strengths": ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful", "Humorous"],
    "weaknesses": ["Arrogant", "Stubborn", "Self-centered", "Lazy", "Inflexible"],
    "compatibility": "**Most Compatible:** Aries, Sagittarius, Gemini, Libra.\n**Least Compatible:** Taurus, Scorpio.",
    "horoscope": "Pay attention to your health today. Long-pending payments may finally be recovered. Your wit and charm attract attention at social gatherings. Personal relationships feel delicate, so handle them gently. A chance encounter with someone from your past may stir old emotions. Minor misunderstandings with your spouse could arise but won’t last long. Singing or expressing affection creatively can strengthen your romantic bond.\n\nWarm connections with loved ones bring comfort and reassurance. Financial stability fuels optimism and encourages you to continue on your current path with calm confidence.",
    "yearly_forecast": "**2026 Overview:** A fulfilled journey from slow starts to mid-year popularity. Prepare for personal reinvention.\n\n**Love:** Excellent shape early in the year. It's an ideal time to gain clarity and strengthen bonds with your partner.\n\n**Career:** Partnerships drive success. Teamwork is your golden ticket, so share the spotlight to achieve your big goals.\n\n**Health:** Protect your heart health with cardio. Seasonal minor issues may arise, but overall vitality is strong.\n\n**Education:** A year of development and leadership in potential student roles. Good results are expected.\n\n**Family & Travel:** Family feels secure and harmonious. You crave luxury with adventure—grand travel memories await."
  },

  {
    "name": "Virgo",
    "date": "Aug 23 - Sep 22",
    "icon": "♍",
    "element": "Earth",
    "ruling_planet": "Mercury",
    "keywords": ["Loyal", "Analytical", "Kind"],
    "traits": "Virgo is an earth sign historically represented by the goddess of wheat...",
    "strengths": ["Loyal", "Analytical", "Kind", "Hardworking", "Practical"],
    "weaknesses": ["Shyness", "Worry", "Overly critical of self and others", "All work and no play"],
    "compatibility": "**Most Compatible:** Taurus, Capricorn, Cancer, Scorpio.\n**Least Compatible:** Gemini, Sagittarius.",
    "horoscope": "Starting the day with yoga or meditation helps sustain your energy. Handle banking and financial matters with caution. Exchanging gifts with loved ones brings warmth. You may struggle to express emotions to your partner today. Leaving work early allows quality time with family, whether through a movie or outdoor activity. Your spouse’s busy schedule may cause mild disappointment. Begin tasks with clarity instead of overthinking outcomes.\n\nAfter long efforts, you may feel inspired to reward yourself. Travel plans that once felt distant now seem achievable and promise valuable learning experiences.",
    "yearly_forecast": "**2026 Overview:** Important lessons and big wins. Eclipses shake up relationships, challenging you to find joy in your inner world.\n\n**Love:** Commitment is tested. Whether single or attached, focus on relationships that support your personal growth and joy.\n\n**Career:** Saturn tests patience, but consistent effort pays off. Expect recognition for your efficiency in the second half.\n\n**Health:** Avoid overworking your digestive system. Schedule lighter meals and ensure you take mental breaks.\n\n**Education:** Hard work is needed after mid-year. Organization is your superpower and will lead to success.\n\n**Family & Travel:** Family life may need extra effort. You prefer organized trips—traditional festivals will delight you."
  },

  {
    "name": "Libra",
    "date": "Sep 23 - Oct 22",
    "icon": "♎",
    "element": "Air",
    "ruling_planet": "Venus",
    "keywords": ["Cooperative", "Diplomatic", "Gracious"],
    "traits": "Libra is an air sign represented by the scales...",
    "strengths": ["Cooperative", "Diplomatic", "Gracious", "Fair-minded", "Social"],
    "weaknesses": ["Indecisive", "Avoids confrontations", "Will carry a grudge", "Self-pity"],
    "compatibility": "**Most Compatible:** Gemini, Aquarius, Leo, Sagittarius.\n**Least Compatible:** Cancer, Capricorn.",
    "horoscope": "Your mindset is open and receptive today. Although travel and spending tempt you, restraint prevents regret. Maintain politeness with guests to preserve harmony. Romantic choices may feel risky, so proceed thoughtfully. Business owners may prefer family time over work, strengthening household bonds. Romance feels pleasant, though minor health concerns may surface. Staying calm during family pressure works in your favor.\n\nVisitors may include creative or professional connections, leading to stimulating discussions. Sharing your dreams openly could bring practical insights and inspiration.",
    "yearly_forecast": "**2026 Overview:** Big changes and new horizons! Adventure and travel call in the first half, followed by career expansion.\n\n**Love:** March turns up the heat. Drop illusions and communicate clearly. Boundaries will bring you closer to true intimacy.\n\n**Career:** A major level-up awaits. A new role aligning with your values is likely, especially after June.\n\n**Health:** Hydration is key for skin and kidney health. Recovery from past ailments looks very favorable.\n\n**Education:** Collaborative learning brings success. Early months are ideal for educational planning.\n\n**Family & Travel:** Family bonds strengthen after mid-year. Travel for growth is indicated."
  },

  {
    "name": "Scorpio",
    "date": "Oct 23 - Nov 21",
    "icon": "♏",
    "element": "Water",
    "ruling_planet": "Pluto",
    "keywords": ["Resourceful", "Brave", "Passionate"],
    "traits": "Scorpio is one of the most misunderstood signs...",
    "strengths": ["Resourceful", "Brave", "Passionate", "Stubborn", "A true friend"],
    "weaknesses": ["Distrusting", "Jealous", "Secretive", "Violent"],
    "compatibility": "**Most Compatible:** Cancer, Pisces, Virgo, Taurus.\n**Least Compatible:** Leo, Aquarius.",
    "horoscope": "Engaging in enjoyable activities helps you stay relaxed. Property-related investments look promising. Family gatherings place you at the center of attention. Be mindful of your tone with your partner, as emotions run sensitive. Avoid harsh words during disagreements. Your spouse may seem unsupportive at times, but brighter days are ahead. Consider redirecting your life goals as challenges begin to fade.\n\nNeighborhood interactions and social gatherings bring useful insights, particularly related to business. The respect you receive from others feels deeply rewarding.",
    "yearly_forecast": "**2026 Overview:** A dynamic mix of opportunities. Cosmic shifts alter your course, bringing meaningful growth early in the year.\n\n**Love:** Singles might find someone special early. Existing relationships strengthen, with serious commitments like marriage possible.\n\n**Career:** Education and new skills are highlighted. It's a fantastic year to learn something that adds value to your toolkit.\n\n**Health:** Generally robust physical health. Minor ailments will be short-lived, so stay active.\n\n**Education:** Hard work pays off for exam takers. Travel for education may bring clarity.\n\n**Family & Travel:** Harmony prevails in the first half. Travel with friends or family is encouraged."
  },

  {
    "name": "Sagittarius",
    "date": "Nov 22 - Dec 21",
    "icon": "♐",
    "element": "Fire",
    "ruling_planet": "Jupiter",
    "keywords": ["Generous", "Idealistic", "Funny"],
    "traits": "Represented by the archer, Sagittarius is always on a quest...",
    "strengths": ["Generous", "Idealistic", "Great sense of humor"],
    "weaknesses": ["Promises more than can deliver", "Very impatient", "Will say anything no matter how undiplomatic"],
    "compatibility": "**Most Compatible:** Aries, Leo, Libra, Aquarius.\n**Least Compatible:** Virgo, Pisces.",
    "horoscope": "Avoid dwelling on health concerns—staying engaged in work helps keep your mind positive. Refrain from alcohol, as carelessness may lead to misplaced belongings. You naturally draw attention today with minimal effort. Give your partner adequate time to avoid misunderstandings. Workplace issues may distract you, but don’t dwell on them excessively. A disagreement with your spouse resolves peacefully over dinner. Small businesses may boost morale by celebrating with their teams.\n\nSpiritual practices and meditation feel especially powerful today. Heightened intuition helps you understand others deeply—note any insights that arise.",
    "yearly_forecast": "**2026 Overview:** A supportive start with Jupiter aiding plans. You must balance your free spirit with Saturn's demand for discipline.\n\n**Love:** Professional life may distract initially, but Venus brings rewards later. Stability becomes more attractive than fleeting fun.\n\n**Career:** Mixed outcomes lead to success if you persist. Hard work is non-negotiable, but new avenues open after May.\n\n**Health:** Optimistic outlook, but watch for mental pressure. Meditation or yoga will help keep your fire balanced.\n\n**Education:** Unconventional fields call to you. Internships abroad will expand your horizons.\n\n**Family & Travel:** Mutual support strengthens family bonds. Your adventurous spirit will love international festivals."
  },

  {
    "name": "Capricorn",
    "date": "Dec 22 - Jan 19",
    "icon": "♑",
    "element": "Earth",
    "ruling_planet": "Saturn",
    "keywords": ["Responsible", "Disciplined", "Self-control"],
    "traits": "The last earth sign of the zodiac, Capricorn is represented by the sea goat...",
    "strengths": ["Responsible", "Disciplined", "Self-control", "Good managers"],
    "weaknesses": ["Know-it-all", "Unforgiving", "Condescending", "Expecting the worst"],
    "compatibility": "**Most Compatible:** Taurus, Virgo, Scorpio, Pisces.\n**Least Compatible:** Aries, Libra.",
    "horoscope": "High energy allows you to complete tasks faster than usual. Avoid overspending on entertainment or appearance. An old acquaintance may cause minor complications. Brief romantic opportunities appear but may not last. Returning home early to enjoy hobbies brings calm. Your partner offers emotional comfort. Use time productively—learning a new language could enhance communication skills.\n\nRelationships flow smoothly today, fostering warmth and support. New professional contacts may open doors to fresh opportunities. Social gatherings contribute positively to personal growth.",
    "yearly_forecast": "**2026 Overview:** Big transitions in every area. The pressure gives way to evolution and financial refinement.\n\n**Love:** Social expansion brings joy. Existing partnerships flourish, and singles may find stable, long-term prospects.\n\n**Career:** Financial growth is the focus. Saturn helps you solidify plans, and collaboration becomes your path to the top.\n\n**Health:** Strengthen your bones with Vitamin D and resistance training to match your strong ambition.\n\n**Education:** Consistent success. Good for long-term goals and certifications due to strong concentration.\n\n**Family & Travel:** Good news from maternal relatives is likely. You prefer structured trips—relaxing or hiking adventures fit your style."
  },

  {
    "name": "Aquarius",
    "date": "Jan 20 - Feb 18",
    "icon": "♒",
    "element": "Air",
    "ruling_planet": "Uranus",
    "keywords": ["Progressive", "Original", "Independent"],
    "traits": "Despite the \"aqua\" in its name, Aquarius is actually the last air sign...",
    "strengths": ["Progressive", "Original", "Independent", "Humanitarian"],
    "weaknesses": ["Runs from emotional expression", "Temperamental", "Uncompromising", "Aloof"],
    "compatibility": "**Most Compatible:** Gemini, Libra, Aries, Sagittarius.\n**Least Compatible:** Taurus, Scorpio.",
    "horoscope": "Stick to healthy eating and stay committed to exercise. An unexpected guest may lead to unplanned expenses on household needs. Address family concerns promptly to restore harmony. Travel strengthens romantic bonds. Seek advice from experienced individuals before starting new projects. Emotional connection with your spouse deepens today. Though the morning feels sluggish, stepping out energizes you.\n\nConfidence drawn from recent successes fuels optimism. Creative efforts and relationships flourish, making the day emotionally rewarding. Treat yourself to a pleasant evening out.",
    "yearly_forecast": "**2026 Overview:** A year to shine! Significant growth in career and finances. The first half is for planning; the second brings breakthroughs.\n\n**Love:** Communication is your lifeline. Long-distance or online connections could surprise you. Patience is key in matters of the heart.\n\n**Career:** Saturn gives you control over your path, while Jupiter offers expansion. Property investments and financial gains look favorable.\n\n**Health:** Improve circulation with movement breaks. Consistent activity keeps your innovative mind sharp.\n\n**Education:** Excellent prospects for research and higher education, especially after May.\n\n**Family & Travel:** Family tension fades after mid-year. Professional changes in spring might inspire travel."
  },

  {
    "name": "Pisces",
    "date": "Feb 19 - Mar 20",
    "icon": "♓",
    "element": "Water",
    "ruling_planet": "Neptune",
    "keywords": ["Compassionate", "Artistic", "Intuitive"],
    "traits": "Pisces, a water sign, is the last constellation of the zodiac...",
    "strengths": ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise", "Musical"],
    "weaknesses": ["Fearful", "Overly trusting", "Sad", "Desire to escape reality"],
    "compatibility": "**Most Compatible:** Cancer, Scorpio, Taurus, Capricorn.\n**Least Compatible:** Gemini, Sagittarius.",
    "horoscope": "Release mental tension to regain peace. Supporting siblings financially may feel burdensome but the situation improves soon. Spending time with children brings joy and grounding. Your partner may struggle with your changing moods, so patience is key. Commitments to those who rely on you strengthen bonds. External influences may cause temporary conflict with your spouse, but compassion restores balance. Use today to plan a more secure future.\n\nPositive news from afar brightens your mood. Enjoy the moment without neglecting ongoing responsibilities. Fresh air and sunshine uplift your spirit.",
    "yearly_forecast": "**2026 Overview:** Introspection and rebirth. As Saturn prepares to leave, you emerge more grounded, mature, and spiritually connected.\n\n**Love:** Relationships take on a deeper meaning. You seek soul connections, and casual dating loses its appeal.\n\n**Career:** Strategic planning wins the race. It's a year to balance your dreams with reality. Artistic and healing professions continue to be favored.\n\n**Health:** Support your immunity with herbal teas and adaptogens. Your sensitive nature needs extra care during this transition.\n\n**Education:** Success in creative fields. Studying abroad or travel-related subjects is highly favored.\n\n**Family & Travel:** Manage minor family tensions with communication. Travel for relaxation is key—beaches call to your water spirit."
  }
];
