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
        "horoscope": "Your health stays in good shape today. Those running a business with family members or relatives should act carefully, as careless decisions could lead to monetary loss. Concerns related to a child’s health may arise. Your heart fills with excitement as you finally meet someone you’ve long dreamed about. It’s a favorable day to execute fresh ideas and new ventures. Visiting a lawyer for legal guidance will be beneficial. You end the day sharing some of the happiest moments with your spouse.\n\nToday supports creative expression, Aries. Even though sports may excite you, there’s a strong artistic side within you as well. The satisfaction of creating something from scratch is deeply rewarding and calming. Activities like crafting, baking, gardening, or building can feel therapeutic. Make time to express yourself through hobbies that truly inspire you.",
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
        "horoscope": "Work pressure from seniors and tension at home may create stress and affect your focus today. Those dealing with loan repayments could face difficulties. Be cautious before sharing sensitive information with your spouse, as it may be unintentionally revealed. A romantic interaction may feel thrilling but could be short-lived. Past efforts finally begin to pay off with visible rewards. Don’t hesitate to share your views—they will be appreciated. Something your partner does may feel awkward initially, but you’ll later realize it was for the best.\n\nThis is a lovely day to plan something thoughtful for someone far away, Taurus. Writing a letter, sending a greeting card, or preparing a surprise package can be truly enjoyable—especially if unexpected. Photos, handmade items, sweets, or books make meaningful gifts. Even a simple card can brighten someone’s mood. Enjoy the joy of giving.",
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
        "horoscope": "Your spouse’s health may cause some worry and uneasiness today. Long-term investments such as stocks and mutual funds are recommended. Your sharp wit makes you popular in social circles. Even in a friend’s absence, their presence feels strongly around you. Positive news related to work may arrive. Though you plan to organize your home, you may not find enough free time. Your partner shows a caring and angelic side that touches your heart.\n\nThis is a great day to turn your creative ideas into reality, Gemini. Pull out your craft materials and enjoy experimenting with design and color. If you have children, include them—you may be amazed by their imaginative ideas. If you don’t already keep an “idea box” for odds and ends, start one today. It will spark inspiration when you need it most.",
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
        "horoscope": "A warm smile will help dissolve many of your worries today. You clearly realize the importance of controlling unnecessary expenses. Children may disappoint you slightly by prioritizing play over career planning. Your partner will make sincere efforts to keep you happy. If you’re taking a day off, there’s no need to worry—things will run smoothly in your absence. Travel plans might be delayed due to sudden changes. Someone’s actions may help your spouse fall in love with you all over again.\n\nTurn to music today, Cancer, especially if you’re feeling a bit alone. Music can speak as deeply as words, helping you connect with your inner emotions. Your sensitive nature finds comfort and hope through melodies. Listen, sing, or dance—whatever feels right. Allow yourself to enjoy the emotional lift it brings.",
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
        "horoscope": "Recovery from physical issues looks strong today, allowing you to participate in sports or active events. Matters related to property, land, or cultural projects deserve your attention. Family responsibilities need immediate care—neglect could prove costly. Love brings positive energy into your life. Listening to experienced individuals and applying fresh ideas at work will benefit you. Travel exposes you to new places and influential people. Your partner makes heartfelt efforts to bring happiness into your day.\n\nThis is a good day to stick closely to your shopping list, Leo. Your ability to manage money wisely is heightened, so take advantage of it. Browse discounts or coupons before heading out. If tempted to splurge, remind yourself of your priorities. Stay focused on your budget and wrap up errands efficiently.",
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
        "horoscope": "Mental stress could trigger minor health issues today, so spend time with loved ones to relax. If you wish to strengthen your financial future, begin saving from today. A surprise visit from an old friend lifts your spirits and brings nostalgic memories. Love surrounds you—just stay aware and receptive. Work conditions remain favorable, with everything aligning in your favor. Value your time and avoid draining company. Romance within marriage brings unexpected warmth throughout the day.\n\nYou’re likely to stay busy today, Virgo, feeling energized to complete pending tasks. Once responsibilities are handled, there will be time for enjoyment as well. Balance productivity with relaxation and make the most of a day that supports both work and play.",
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
        "horoscope": "Social gatherings and leisure outings keep you relaxed and cheerful. Long-term investments show promise. A deeper understanding with your spouse enhances peace and happiness at home. Love takes a beautiful turn, bringing a magical feeling of romance. You find yourself in the spotlight, with success well within reach. Free time is best used to complete pending tasks. Today reminds you how special your bond with your partner truly is.\n\nTake some well-earned rest today, Libra. Even you need a break from constant responsibilities. Handle essential matters first, then reward yourself with relaxation. Whether it’s a nap, a warm bath, or a quiet walk, focus on nurturing both your peace and productivity.",
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
        "horoscope": "An evening spent at the movies or dining with your partner keeps you relaxed and content. Financial support may come from an elder at home, easing expenses. It’s time to soften your controlling approach within the family and work together through life’s ups and downs. Your changed attitude brings joy to loved ones. Natural beauty captivates you today. Adopting new work methods improves efficiency and draws positive attention. Reassess your strengths and future goals. Your spouse rekindles memories of early romance.\n\nAn unexpected visitor may arrive today, Scorpio—someone in need of care and reassurance. Even if your schedule is full, try not to turn them away. Tasks and hobbies can wait, but offering support when someone truly needs it is invaluable. Keep both your door and heart open.",
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
        "horoscope": "Turning toward spirituality helps you manage mental stress today. Meditation and yoga strengthen inner resilience. Financial conditions improve later in the day. News of a new family member brings excitement and calls for celebration. Love may feel distant for now. IT professionals get a chance to prove their abilities—focused effort is key. After days of busyness, you finally enjoy personal time. The day remains calm and relaxed with your spouse.\n\nIt’s wise to discuss plans with those you share your space with today, Sagittarius. Even if you live alone, open communication helps avoid misunderstandings. Someone at home may have needs or expectations you weren’t aware of. Talk things through openly, and harmony will follow.",
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
        "horoscope": "Clear negative thoughts before they turn overwhelming. Engaging in charity or helping others brings peace of mind. Those planning to sell property may find a suitable buyer and secure good returns. Domestic issues may leave you feeling unsettled. New romance lifts your mood. Your work may face close scrutiny today, making attention to detail essential. Business owners may consider shifting direction. If you’ve been waiting for positive change, relief finally arrives. Affection from your spouse fulfills emotional needs.\n\nIf something weighs on your mind today, Capricorn, speak with your mother or a trusted elder. No matter how independent we become, guidance from experienced loved ones remains invaluable. Reach out, draw strength, and express gratitude for their support.",
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
        "horoscope": "Your polite and composed nature earns appreciation and praise today. It’s wise to return borrowed money to family members to avoid complications. Spending the evening with friends or shopping feels enjoyable and refreshing. Emotional discomfort in love may surface. Business owners may experience unexpected gains or profits. Business-related travel proves beneficial over time. After recent challenges, your married life finally feels lighter and more peaceful.\n\nAvoid falling into self-pity today, Aquarius. While setbacks are unavoidable, how you respond matters most. Allow yourself to process emotions, but don’t linger there. Choose growth, resilience, and kindness toward yourself as you move forward.",
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
        "horoscope": "Some may assume you’re too old to learn, but your sharp mind proves otherwise. Established business owners should invest cautiously today. Emotional reassurance comes from elders when needed. Deep, soulful love is strongly felt—make time for it. Speak thoughtfully at work to protect your image. Old investments may cause losses for business owners. Avoid people who waste your time. Differences of opinion may arise, straining relationships if not handled calmly.\n\nMake sure to carve out personal time today, Pisces. Your emotional and creative nature needs solitude to recharge. Without it, irritation or withdrawal may set in. Plan moments alone in a comfortable space—it’s essential for restoring balance and peace.",
        "yearly_forecast": "**2026 Overview:** Introspection and rebirth. As Saturn prepares to leave, you emerge more grounded, mature, and spiritually connected.\n\n**Love:** Relationships take on a deeper meaning. You seek soul connections, and casual dating loses its appeal.\n\n**Career:** Strategic planning wins the race. It's a year to balance your dreams with reality. Artistic and healing professions continue to be favored.\n\n**Health:** Support your immunity with herbal teas and adaptogens. Your sensitive nature needs extra care during this transition.\n\n**Education:** Success in creative fields. Studying abroad or travel-related subjects is highly favored.\n\n**Family & Travel:** Manage minor family tensions with communication. Travel for relaxation is key—beaches call to your water spirit."
    }
];
