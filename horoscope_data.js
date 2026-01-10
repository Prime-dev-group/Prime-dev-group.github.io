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
    "horoscope": "Practicing yoga or meditation will help you stay physically and mentally balanced today. Financial gains connected to your children bring happiness and satisfaction. Resolving differences within the family allows you to move closer to your goals. Romance occupies your thoughts as you connect with your sweetheart. You may spend some free time unproductively, but the evening promises deep happiness with your spouse. A spiritual inclination may emerge, drawing you toward meaningful practices or teachings.\n\nIf you are traveling today, you may cross paths with someone interesting along the way. Don’t hesitate to strike up a conversation—it could make the journey enjoyable and possibly lead to a lasting connection. Stay relaxed and enjoy the experience.",
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
    "horoscope": "A heartfelt compliment from a friend lifts your mood and reminds you of the quiet support you offer others. Advice from an old friend may help improve business prospects if followed wisely. Family-oriented social activities bring joy and closeness. Love feels warm and fulfilling throughout the day. Students benefit by finishing tasks on time instead of delaying them. Physical closeness with your spouse feels especially meaningful, though unexplained sadness may surface—acknowledge it without dwelling on it.\n\nYou may spend time learning how to use new household equipment. While it might seem complicated at first, patience and persistence will make it easier—and enjoyable.",
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
    "horoscope": "Stay calm when facing challenges today, as anger could complicate matters unnecessarily. Be mindful of your belongings, since carelessness may lead to loss. Your charm helps you form new friendships. Love takes on a spiritual tone, deepening emotional bonds. After days of busyness, you finally get time to relax and enjoy simple pleasures. Spending time at home with loved ones brings comfort and warmth.\n\nAn unexpected call from someone you know may bring pleasant news and lead to a meaningful conversation. The day holds subtle but positive surprises—embrace them.",
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
    "horoscope": "Unexpected situations may cause discomfort, but maintaining composure will help you handle them wisely. Financial relief arrives, easing ongoing worries. Spending relaxed moments with family brings emotional comfort. Be cautious of secretive romantic matters, as they may affect your reputation. Despite a busy schedule, you find rare personal time today. Your partner’s work commitments may leave you feeling neglected—give the situation time to improve.\n\nAn unforeseen financial gain could come your way. Treat it carefully, seek advice if needed, and use it to strengthen your future security.",
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
    "horoscope": "Expectant mothers should move carefully today. Improved finances help clear pending dues. Strengthening your bond with children brings emotional rewards. Let go of past worries and focus on brighter days ahead. Love feels deeply immersive, and efforts to enhance your appearance bring satisfaction. Married life feels especially intimate and fulfilling. Avoid wasting time on unnecessary distractions.\n\nGroup interactions energize you, bringing stimulating conversations and fresh ideas. While meeting new people is exciting, be mindful of hidden motives before committing to future plans.",
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
    "horoscope": "Focus on improving your health instead of relying on luck. Managing weight and resuming exercise benefits you greatly. Financial discussions with your spouse help plan long-term stability. Purchases of jewelry or appliances are possible. Emotional distance may be felt, pushing you toward spiritual reflection. Spending quality time with your partner strengthens your bond. A thoughtful surprise for parents uplifts the household atmosphere.\n\nUnexpected positive developments may arise today, bringing excitement and renewed motivation. Sharing this joy with loved ones makes it even more meaningful.",
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
    "horoscope": "Celebrations bring joy and shared happiness with friends. Financial relief appears unexpectedly, easing long-standing stress. Positive news from relatives brightens the day. Romance feels sweet though brief. You feel drawn to childhood interests and hobbies. Family tensions may arise, but your spouse provides comfort and support. Valuable lessons may come from unexpected sources.\n\nAn adventurous mood encourages you to try something new. As long as risks are minimal, step forward confidently—new experiences bring clarity and peace.",
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
    "horoscope": "Focus on improving health through conscious effort rather than relying on luck. Financial strength remains steady, and new income opportunities appear. Relaxing with family brings peace. Love feels intense and fulfilling. Although plans to spend quality time with loved ones may be interrupted, romantic moments and good food keep the mood positive. Support from a friend helps you avoid a potential issue.\n\nInterest in mystical or healing subjects may grow today. Explore them with curiosity but keep a healthy sense of discernment.",
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
    "horoscope": "Encouragement from influential people boosts your confidence. Lending money to someone in need brings emotional relief. Balance studies and leisure to maintain harmony at home. Love feels eternal and reassuring today. Completing work early refreshes your mind and strengthens family bonds. After past challenges, married life feels warm and joyful. Social outings and entertainment add excitement.\n\nOpportunities for travel, possibly by air, may arise. Whether for work or learning, the journey promises memorable experiences—embrace it fully.",
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
    "horoscope": "Meditation helps restore calm today. Avoid impulsive spending, as it may lead to regret. Family interactions may feel tense—open communication helps ease misunderstandings. Romance feels exciting and uplifting. Your skills and communication impress others. Your spouse makes special efforts to support you. Creative thinking flows easily, leading to innovative ideas.\n\nVivid dreams may surface tonight. Reflect on their symbols—they may carry important personal messages worth understanding.",
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
    "horoscope": "A relaxed and cheerful mood sets the tone for the day. Loan-related matters may finally resolve in your favor. Your curiosity helps you form new friendships. Love feels blissful, blending dreams with reality. Long-awaited changes begin to unfold, bringing relief. Married life feels especially beautiful—plan a memorable evening together. Prioritize rest for overall well-being.\n\nAttending a social event could introduce exciting romantic or professional possibilities. Unless exhaustion holds you back, step out—you’ll be glad you did.",
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
    "horoscope": "Minor tensions may leave you feeling unsettled, but financial support from family brings relief. Avoid relying on empty promises from others. A sudden romantic attraction may surprise you. Despite a busy schedule, you find time for yourself and activities you enjoy. Your partner’s affection feels deeper than ever. Gardening or nature-based activities help you relax and recharge.\n\nUnexpected changes involving new tools or technology may arise. Stay calm—once familiar, you’ll adapt quickly and excel.",
    "yearly_forecast": "**2026 Overview:** Introspection and rebirth. As Saturn prepares to leave, you emerge more grounded, mature, and spiritually connected.\n\n**Love:** Relationships take on a deeper meaning. You seek soul connections, and casual dating loses its appeal.\n\n**Career:** Strategic planning wins the race. It's a year to balance your dreams with reality. Artistic and healing professions continue to be favored.\n\n**Health:** Support your immunity with herbal teas and adaptogens. Your sensitive nature needs extra care during this transition.\n\n**Education:** Success in creative fields. Studying abroad or travel-related subjects is highly favored.\n\n**Family & Travel:** Manage minor family tensions with communication. Travel for relaxation is key—beaches call to your water spirit."
  }
];
