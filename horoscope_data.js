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
    "horoscope": "Your natural charm draws attention today. Be cautious with money matters and avoid lending without careful thought, as it may create issues later. A disagreement with a neighbor could affect your mood, but staying calm will prevent escalation. Maintaining cooperation will help preserve harmony. Differences of opinion may strain personal relationships. Travel related to career growth looks promising, but seek parental approval beforehand. You may plan to enjoy your favorite activity, though an unexpected guest could disrupt it. Some tasks may be delayed due to your spouse’s health.\n\nPatience feels especially challenging today. Finding a healthy outlet for built-up frustration—such as exercise or physical activity—will help you manage the day more smoothly.",
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
    "horoscope": "Efforts toward self-improvement bring confidence and visible results today. Financial gains are likely for business owners through support from close friends, easing existing worries. Be open to receiving advice if you choose to give it. Romance carries an exciting and refreshing spark. Retailers and wholesalers benefit from favorable conditions. You may immerse yourself in a new personal interest, pushing other matters aside. Despite the outside world feeling chaotic, you’ll find comfort and closeness in your partner’s presence.\n\nPersistence finally pays off as you begin to see results from your long efforts. A fresh perspective helps you bypass obstacles that once seemed immovable. Pay attention to unconventional ideas—they may prove valuable.",
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
    "horoscope": "Fun and enjoyment dominate the day for those stepping out socially. Seeking blessings from elders before leaving home proves beneficial. Work demands may create tension in your marital relationship due to limited availability. Planting something new today is symbolically favorable. Stay alert in conversations with influential people—you may gain useful insights. Workshops and exhibitions expand your knowledge and network. Your partner’s work commitments may leave you feeling neglected.\n\nThis is a strong day to ask for what you deserve professionally. Preparation and confidence work in your favor. If recognition matters to you, take deliberate steps to be seen and heard.",
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
    "horoscope": "Your health needs a bit of attention today. Avoid extending business credit casually. This is a good time to involve parents in discussions about future plans. Your partner may struggle with your unpredictable behavior. New proposals look tempting but require careful evaluation. Humor works in your favor throughout the day. Both you and your spouse may feel the need for personal space.\n\nClearing unfinished tasks brings relief and opens doors for fresh opportunities. Financial and professional matters show positive momentum, and a long-awaited reward may finally arrive.",
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
    "horoscope": "You feel energetic and physically strong today. Past investments made on advice from unknown sources may surprisingly yield benefits. Honest communication strengthens your relationship with your spouse. Romance flows easily, making the day emotionally fulfilling. Learning from experienced individuals proves valuable. Be mindful of overspending while shopping. Physical affection plays a significant role in strengthening your marital bond.\n\nIntense communication demands may leave you mentally drained. If pressure builds up, take a personal break—something as simple as a long shower can help you reset.",
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
    "horoscope": "Managing emotions is essential today, as stress could impact your health. You gain useful insights into saving and managing money effectively. Relatives may surprise you with gifts but expect support in return. Romance may take a backseat due to your partner’s health. Work keeps you energized throughout the day, and despite being busy, you’ll find time in the evening to relax. Your spouse may reveal a less pleasant side today.\n\nThings are improving more than you realize. Recent hard work begins to show results, restoring motivation and confidence. It’s time to step forward and make your presence felt.",
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
    "horoscope": "Your energy levels feel lower than usual, so avoid taking on extra responsibilities. Secure your savings wisely for future stability. A new relationship shows long-term promise. Your partner may focus more on expressing themselves than listening, which could cause irritation. Handle workplace interactions with patience and wisdom. An unexpected visit from a distant relative may consume much of your time. Your spouse may pleasantly surprise you by the end of the day.\n\nYou’re on a long journey toward your goals. Though logistics may seem overwhelming, you have the stamina to handle them. Start small and build momentum.",
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
    "horoscope": "Avoid unnecessary stress to maintain emotional balance. Medical expenses for parents may arise, affecting finances but strengthening family bonds. You stand out socially today, though work pressure may create mental turbulence. Try to unwind later in the day. Productivity remains high, and you still manage to spend quality time with yourself. Your partner’s lack of motivation may disrupt some plans.\n\nYou’re naturally drawn toward healing and self-improvement now. Exploring wellness practices or relaxation therapies brings both physical and mental relief.",
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
    "horoscope": "Positive thinking is essential to overcome mental strain today. Financial gains favor those connected to the dairy industry. Pride and joy come from your child’s achievements. Be mindful of your partner’s preferences to avoid misunderstandings. Business matters look favorable, and sudden travel may bring success, though it could disrupt family plans. Overindulgence in food or drink may affect health.\n\nBreaking large tasks into smaller steps helps you stay focused. Once you begin, momentum builds naturally.",
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
    "horoscope": "The day brings moments of fun and relaxation. Financial support from a close friend benefits business matters. Tensions with close associates may feel challenging, forcing you to face reality in personal relationships. Workplace feedback may not be direct, so reassess your strategies if outcomes fall short. Laughter fills most of the day, and even if things don’t go exactly as planned, quality time with your partner brings warmth.\n\nProfessional duties may interrupt personal pleasures, but focusing on work now can lead to significant long-term rewards.",
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
    "horoscope": "You begin to feel relief from long-standing stress and recognize the need for lifestyle changes. Financial independence improves through self-belief and initiative. Time with relatives proves beneficial. Expressing affection in simple ways strengthens bonds. Your efficiency and problem-solving skills gain recognition. Your spouse is likely to give you special attention today.\n\nThis is an ideal time to clear emotional or practical clutter. Addressing unresolved matters now prevents future setbacks.",
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
    "horoscope": "Address health concerns early to restore harmony at home. Incoming money eases financial pressure. A good day for handling domestic matters and clearing pending chores. A sudden romantic interaction may feel confusing. Be mindful not to overextend yourself, as others may demand too much of your time. You’ll manage to carve out personal time despite social overload. Married life feels especially fulfilling today.\n\nProfessional relationships cultivated over time now bring rewards. Success flows smoothly into your personal life, creating a sense of peace and balance.",
    "yearly_forecast": "**2026 Overview:** Introspection and rebirth. As Saturn prepares to leave, you emerge more grounded, mature, and spiritually connected.\n\n**Love:** Relationships take on a deeper meaning. You seek soul connections, and casual dating loses its appeal.\n\n**Career:** Strategic planning wins the race. It's a year to balance your dreams with reality. Artistic and healing professions continue to be favored.\n\n**Health:** Support your immunity with herbal teas and adaptogens. Your sensitive nature needs extra care during this transition.\n\n**Education:** Success in creative fields. Studying abroad or travel-related subjects is highly favored.\n\n**Family & Travel:** Manage minor family tensions with communication. Travel for relaxation is key—beaches call to your water spirit."
  }
];
