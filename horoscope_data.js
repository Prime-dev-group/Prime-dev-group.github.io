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
    "horoscope": "A long-held wish may finally come true today, but keep your excitement balanced, as excessive joy could lead to minor issues. Be cautious with spending and avoid unreliable financial deals. Elder family members might place unreasonable demands on you. Romance looks promising, with a pleasant evening and thoughtful gestures. Joint projects may feel frustrating, especially if someone seems to have taken advantage of your trust. Share your opinion confidently when asked—you’ll be appreciated. Overall, the day has the potential to become one of the most rewarding moments in your married life.\n\nYou may feel anxious about a close relative due to limited communication. Calls or messages may go unanswered, but this is more likely a sign of recovery than trouble. Stay calm and objective—sometimes no news truly is good news.",
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
    "horoscope": "Someone close may test your patience and tolerance today. Stay grounded in your values and approach decisions logically. Your efforts to save money are likely to succeed if you remain disciplined. Bringing calm structure into your daily routine will improve family harmony. Avoid giving in to unnecessary emotional demands from your partner. Pay attention during important discussions, as you may receive valuable advice. Your quick problem-solving skills will earn recognition, and although your partner’s chatter may irritate you briefly, their thoughtful actions will make up for it.\n\nThis is not the right day to make financial commitments, even if opportunities sound appealing. Take time to research without rushing. Genuine prospects will remain available, while risky ones will fade away.",
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
    "horoscope": "This is a great day to focus on activities that lift your mood and confidence. Business dealings involving foreign connections may need extra caution, as losses are possible. Spending time with family and friends brings joy. A sudden romantic attraction could surprise you. Your energy at work remains high throughout the day, and compliments you’ve long hoped for may finally come your way. Your partner will remind you how comforting love can feel.\n\nYou may feel especially attractive today, but your partner’s absence could make it seem unnoticed. Don’t let this affect your spirits—it’s temporary. Stay engaged in activities you enjoy, and your positive energy will continue to shine.",
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
    "horoscope": "Your inner strength and courage enhance your mental clarity today. Use this momentum to stay in control of situations. Financially, things remain stable, and favorable planetary positions may open new earning opportunities. Someone at home may feel irritated by your recent behavior, so patience is advised. Romantic moments feel lighthearted and affectionate. A positive mood from your boss creates a supportive work environment. Despite a busy schedule, you’ll find valuable time for yourself, and married life brings deep emotional fulfillment.\n\nYou may feel less creative than usual, which could make demanding tasks feel heavier. Focus on routine responsibilities and postpone imaginative work if possible. Don’t hesitate to ask for help—this phase will pass.",
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
    "horoscope": "Recovery from a lingering health issue is likely. Stay alert with finances, as careless transactions could lead to losses. Supporting your children’s concerns is important today. Your partner may be emotionally affected by family matters, so gentle communication will help. Appreciation at work boosts morale, and spending time with spiritual reading can ease mental stress. Although minor irritation with your spouse may arise, their loving gesture will leave you feeling grateful.\n\nUnexpected expenses may temporarily strain your budget, even though your income remains steady. This imbalance won’t last long. Careful spending and creative budgeting will restore stability.",
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
    "horoscope": "Maintaining a healthy diet and regular exercise will benefit you today. Financial gains are possible, but avoid letting money slip away carelessly. Time spent with family brings comfort, and an unexpected call from your beloved lifts your spirits. Workplace changes work in your favor. You may prefer solitude over social interaction today, finding peace in your own company. Your partner’s affection and energy brighten your mood.\n\nTemporary distance from a romantic partner may leave you feeling uneasy, but it’s likely due to their personal responsibilities rather than any issue between you. Communication will resume soon.",
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
    "horoscope": "Optimism fills your day, helping hopes bloom beautifully. Financial support from someone of the opposite sex may benefit your work or career. Domestic matters may cause mild discomfort, and a loved one may struggle to express emotions clearly. Workplace rivals face the consequences of their actions, strengthening your position. Despite a busy schedule, you’ll find time for yourself. Overindulgence with your partner could slightly affect health.\n\nIf recent excesses leave you feeling drained, it’s best to cancel social plans and focus on rest. A calm evening and early sleep will help you recover quickly.",
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
    "horoscope": "Despite some mental pressure, your physical health remains steady. Avoid lending money casually today. Support from siblings proves stronger than expected. Love deepens, with emotionally fulfilling moments throughout the day. Your skills and determination improve earning potential. Household gatherings may consume time, but marital bonds feel especially meaningful.\n\nYou may feel caught between two friends dealing with relationship tension. Rather than taking sides, aim to listen and encourage understanding. Your balanced approach will be appreciated, even if resolution takes time.",
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
    "horoscope": "Family expectations may feel demanding today and test your patience. Avoid risky financial moves influenced by others. Cooperation at home brings harmony, while your romantic appeal works in your favor. Professionally, it’s a productive day. Focus on helping others without overstepping boundaries. Time spent with your spouse feels especially joyful.\n\nA sense of loneliness may arise due to the absence of a loved one, lowering your usual enthusiasm. Instead of passive distractions, engage your mind through reading or learning something new.",
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
    "horoscope": "Good health supports active moments with friends today. Unexpected medical expenses for parents may strain finances but strengthen emotional bonds. A family secret could surface and surprise you. Your partner feels deeply connected to you. At work, avoid underestimating seniors. Solitude feels refreshing, and your relationship brings a sense of appreciation and wonder.\n\nOverindulgence may leave you feeling sluggish, but hydration, light exercise, and rest will quickly restore balance.",
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
    "horoscope": "Your direct honesty may unintentionally hurt someone today. Financial obligations may arise suddenly, creating temporary strain—avoid borrowing. Children may test your patience, but affection will ease tensions. Miscommunication could briefly dampen your mood. Workplace conversations finally move forward. Spiritual reflection brings peace, while your partner may feel neglected due to your busy schedule.\n\nYou may be transitioning between jobs or even shifting careers entirely. Financial rewards will take time, but your efforts are leading you in the right direction.",
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
    "horoscope": "Starting the day with meditation or yoga helps maintain steady energy. Investing surplus funds wisely, especially in property, brings long-term benefits. Family matters may cause tension, and it’s best to avoid sharing sensitive emotions today. Adopting new techniques improves work efficiency and attracts positive attention. Spending time with your partner feels rewarding, though minor disagreements may arise. A partner’s health issue could slow progress in some tasks.\n\nYou may feel pulled between personal needs, family responsibilities, and professional duties, leading to stress. Stay calm—this phase will pass. Restoring balance will bring clarity and peace.",
    "yearly_forecast": "**2026 Overview:** Introspection and rebirth. As Saturn prepares to leave, you emerge more grounded, mature, and spiritually connected.\n\n**Love:** Relationships take on a deeper meaning. You seek soul connections, and casual dating loses its appeal.\n\n**Career:** Strategic planning wins the race. It's a year to balance your dreams with reality. Artistic and healing professions continue to be favored.\n\n**Health:** Support your immunity with herbal teas and adaptogens. Your sensitive nature needs extra care during this transition.\n\n**Education:** Success in creative fields. Studying abroad or travel-related subjects is highly favored.\n\n**Family & Travel:** Manage minor family tensions with communication. Travel for relaxation is key—beaches call to your water spirit."
  }
];
