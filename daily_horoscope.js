/**
 * Daily Horoscope Data
 * Contains daily horoscope readings.
 */

const DAILY_HOROSCOPE_DATA = [
    {
        "name": "Aries",
        "horoscope": "You alone know what truly serves your best interests, so stay confident, make firm decisions quickly, and be ready to accept the outcomes. Today, you may meet someone at a social gathering who provides valuable advice to strengthen your financial position. Unfinished household tasks could occupy much of your time. Be cautious in romantic matters, as love may create complications. Workplace changes are likely to work in your favor. Spending quality time with your spouse tonight will remind you how important it is to prioritize them. You may find ample opportunity for intimacy today, though your health might need attention.\n\nAn emotional matter involving a family member may leave you wanting to retreat for a while, Aries. Don’t resist the urge to take space, as it may help you clear your thoughts and regain emotional balance before addressing the issue again. You could also uncover surprising realizations about yourself or revisit old wounds you believed were healed. Allow these feelings to surface and release them instead of suppressing them."
    },
    {
        "name": "Taurus",
        "horoscope": "Recognize the emotions that guide your actions and consciously release negative feelings like fear, doubt, anger, and greed, as they often attract unwanted outcomes. Investments related to property are likely to bring positive returns. Spending time with children will be especially meaningful. Lovers may show heightened sensitivity toward family concerns. Taking on new projects today could contribute to overall family prosperity. Listen carefully to advice from others if you wish to benefit. Married life may reach a particularly harmonious phase today.\n\nOld emotional patterns may cause you to feel guarded or overly sensitive today, Taurus. You might interpret harmless remarks as criticism. Try not to react impulsively. Confront lingering issues calmly or decide to handle them soon. Extend kindness to those around you, and by evening, your outlook should become more positive."
    },
    {
        "name": "Gemini",
        "horoscope": "Your health will improve when you spread happiness among others. Avoid making hurried investments, as overlooking details could lead to losses. Minor home improvements may enhance your surroundings. Offering forgiveness and creating joy will enrich your life. A positive mindset will keep you energized at work. Building new connections today may support future career growth. Creativity and enthusiasm will guide you through a productive day. You will let go of past disappointments in your marriage and focus on the present happiness.\n\nWorkplace tension could tempt you to consider quitting, Gemini, but financial concerns may hold you back. Reevaluate your situation carefully. You may possess hidden talents that could open new professional doors if developed. If you truly desire change, start planning with determination."
    },
    {
        "name": "Cancer",
        "horoscope": "Take extra care of your health, particularly if you have blood pressure issues. Property investments may yield good returns. If hosting a gathering, invite your closest friends to lift your spirits. Stay composed in romantic situations, as your partner may be sensitive today. Businesspeople might encounter sudden financial gains. Drive cautiously while returning home at night to avoid accidents that could affect your health. Financial pressures could strain your relationship with your spouse.\n\nYour confidence may feel shaken today, Cancer. Past mistakes might resurface and trigger fears of repeating them. Remain objective instead of being overly self-critical. Avoid unnecessary stress and remember that your unique strengths distinguish you from others."
    },
    {
        "name": "Leo",
        "horoscope": "Your health appears strong today, and your cheerful attitude will boost your confidence. A sibling may request financial assistance, which could temporarily strain your resources. Pleasant news from distant relatives will bring joy to the family. Romantic disappointment may be possible. Consistent effort at work will bring positive results and rewards. Avoid engaging in pointless arguments, as they may waste time and disturb your peace. You will enjoy a calm and relaxed day with your spouse.\n\nAlthough you are usually action-oriented, today you may feel drawn inward, Leo. Spiritual concepts or artistic interests may capture your attention, especially those from different cultures. You could feel more reflective than usual. Writing down your thoughts may bring clarity and insight."
    },
    {
        "name": "Virgo",
        "horoscope": "Engaging in outdoor activities will benefit both your physical and mental well-being. Excessive concern for safety and comfort may restrict personal growth and increase anxiety. Financial shortages could create tension at home, so communicate thoughtfully and seek advice before reacting. A short visit to relatives may bring comfort and relief from routine stress. Be genuine in appearance and behavior when spending time with your partner. Confidence will positively influence your professional life. A family member may demand your time, which could feel draining. Suspicion within your relationship may escalate into conflict if not handled calmly.\n\nFinancial limitations might delay the launch of a long-awaited project, Virgo. Instead of feeling discouraged, adjust your plans and explore creative alternatives. The setback is likely temporary, and your resourcefulness can help you move forward successfully."
    },
    {
        "name": "Libra",
        "horoscope": "Pay attention to your diet, especially if you are prone to migraines, as skipping meals could increase stress. Financially, you may recover pending dues or secure funds for new ventures. Your vibrant energy will brighten the atmosphere at home and ease domestic tension. External interference may create misunderstandings in relationships. Use your expertise to resolve professional matters effectively. Spending time outdoors under a clear sky will bring mental peace and clarity. Your spouse’s expectations may cause some pressure.\n\nRumors or gossip may circulate around you today, Libra. Resist the temptation to participate without knowing all the facts. Focus on your own priorities and wait until the complete picture becomes clear before forming conclusions."
    },
    {
        "name": "Scorpio",
        "horoscope": "Spending time with children can offer comfort and reduce anxiety. Financial matters may improve, bringing relief. Careless behavior could worry your parents, so involve them in your plans. Your somber mood may create tension with your spouse. Business professionals should avoid sharing confidential details about their plans. Engaging in your favorite hobbies after work will help you unwind. A relative, friend, or neighbor could unintentionally create tension in your married life.\n\nYour intuition is especially heightened today, Scorpio. You may experience vivid dreams or strong insights about yourself. Old emotional wounds might surface for healing. Record your impressions and dreams carefully, as they may provide meaningful guidance."
    },
    {
        "name": "Sagittarius",
        "horoscope": "A cherished wish may come true, but keep your excitement balanced to avoid complications. Financial planning will help you stay secure during challenging times, so consider saving and investing wisely. Your children will make efforts to bring you happiness. Interference from others may create friction. Stay alert during important conversations, as you may receive valuable information. Limit excessive screen time to avoid wasting the day. Financial strain could impact harmony with your spouse.\n\nRomance and passion may dominate your thoughts today, Sagittarius. While enjoying your desires, remain considerate of your partner’s feelings. Creative or indulgent activities may seem especially appealing."
    },
    {
        "name": "Capricorn",
        "horoscope": "Your determination will help you handle a complicated situation today. Stay calm when making emotionally charged decisions. Married individuals may gain financially through their in-laws. Someone at home may feel neglected if you overlook household duties. Romance may uplift your spirits, and recognition at work is possible. Take time to understand yourself better if you feel lost or uncertain. A sense of gratitude may replace previous frustration.\n\nA family member may seem discouraged, Capricorn, and you may feel tempted to motivate them forcefully. Avoid doing so, as it could create tension. Your own confidence may feel lower than usual. Practice fairness and patience toward yourself and others."
    },
    {
        "name": "Aquarius",
        "horoscope": "Avoid unnecessary conflicts, as they could worsen health issues. Financial improvements are likely later in the day. Your positive attitude will create a pleasant atmosphere at home. Love will color your day, though unresolved matters may lead to arguments at night. Work-related stress may limit time with loved ones. An evening walk outdoors could bring peace of mind. Interference from outsiders may disturb marital harmony.\n\nExtended reading or screen time may cause eye strain or headaches today, Aquarius. Romantic thoughts could distract you from responsibilities. Enjoy your feelings, but ensure your duties are not neglected."
    },
    {
        "name": "Pisces",
        "horoscope": "Engage in activities that both excite and relax you. Explore new investment options carefully before committing. Your innocent and gentle approach may help resolve family issues. Express affection through thoughtful gestures. The knowledge you gain today will give you an advantage in professional interactions. Recognition may come for past assistance you provided. Your partner may surprise you in a memorable and delightful way.\n\nYour intuitive abilities feel especially powerful today, Pisces. You may easily sense others’ emotions and motives. Dreams could be vivid and meaningful. Keep a record of symbols or impressions, as they may offer valuable insights into your future."
    }
];
