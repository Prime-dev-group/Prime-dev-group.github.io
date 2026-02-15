/**
 * Daily Horoscope Data
 * Contains daily horoscope readings.
 */

const DAILY_HOROSCOPE_DATA = [
    {
        "name": "Aries",
        "horoscope": "Try leaving work a bit early and spend time doing activities you truly enjoy. Your wishes are likely to come true as blessings and good luck favor you, and the hard work from previous days begins to show results. Immediate attention may be required for some household cleaning. A romantic involvement could add excitement to your happiness. It’s a cheerful day filled with laughter, with most things unfolding as you wish. You may realize today that your marriage has never felt more beautiful. You might also share your knowledge about the importance of water with the younger generation.\n\nYour intuition, mental sharpness, and physical energy are at their peak today, Aries. You may prefer solitude to reflect on your ideas and plan how to implement them. Writing down your thoughts could be beneficial. You may also feel more attuned than usual to the emotions and ideas of those around you."
    },
    {
        "name": "Taurus",
        "horoscope": "Maintain discipline in your diet and stay active to remain fit. With assistance from a close relative, you may see progress in your business and financial gains as well. Children might bring surprising news. Romance is likely, but heightened sensual emotions could create tension in your relationship. At night, you may feel like stepping out for a walk on the terrace or in a nearby park. Your spouse could unintentionally affect your reputation today. Pampering yourself sounds like a good idea after a long week, especially if you include friends in your plans.\n\nYou may feel overflowing with energy today, Taurus. Visiting friends could be on your agenda, and conversations might provide useful insights. A fortunate opportunity could help you move closer to a long-term ambition. Expect your day to revolve around discussions and planning."
    },
    {
        "name": "Gemini",
        "horoscope": "Jealous tendencies may leave you feeling low, but remember that this distress is self-created. Instead of dwelling on it, motivate yourself to overcome it by sharing in others’ joys and sorrows. Someone with ambitious ideas may capture your interest—verify their credibility before making investments. Avoid confrontations, especially when strong opposition is present. If you must resolve a matter, do so gracefully. Love at first sight is possible. Offer help generously, but avoid interfering in issues that don’t concern you. The day could turn out to be one of the best in your married life. It’s also favorable for shopping and enjoying time with loved ones—just monitor your expenses.\n\nUnexpected visitors, perhaps invited by someone at home, could interrupt your desire for privacy, Gemini. Your mind is sharp and ideas will flow rapidly. Don’t let irritation disrupt your plans. If needed, retreat to a quiet space to gather your thoughts."
    },
    {
        "name": "Cancer",
        "horoscope": "A short temper could trigger arguments, so stay composed. Control your spending and focus only on essential purchases. Be cautious when sharing confidential matters with your spouse, as they may inadvertently disclose them. New romantic developments may lift your mood. Favorable planetary influences provide many reasons to feel content today. You are likely to enjoy memorable moments with your spouse. Simplicity in your behavior will help maintain balance in life—remember and practice this principle.\n\nYour intuitive abilities are heightened today, Cancer. You may find yourself naturally understanding others’ thoughts and emotions, even finishing each other’s sentences. Use this sensitivity to deepen relationships. Creative inspiration and career advancement may also stem from these insights."
    },
    {
        "name": "Leo",
        "horoscope": "Avoid interfering in your spouse’s matters to prevent conflict. Focus on your own responsibilities and limit unnecessary involvement. Financial assistance from an elder at home may spare you from using your own funds today. You can easily draw attention without much effort. Conduct yourself appropriately when out with your partner. After days of busyness, you’ll finally find time to relax. Excessive expectations could lead to disappointment in married life. Grooming or self-care activities may leave you feeling rejuvenated.\n\nYou may feel unstoppable today, Leo, filled with determination and strength. Goals can be achieved, ambitions realized, or a lucky opportunity may appear. It’s an excellent time to pursue a new job, request a raise, or push forward with an important project."
    },
    {
        "name": "Virgo",
        "horoscope": "Spending time playing with children can be deeply healing. Avoid overspending on entertainment or appearance. Your energy today may inspire you to organize gatherings or events. Your romantic relationship might face criticism. Despite having free time, you may struggle to find satisfaction. Your partner may irritate you, yet they will also do something thoughtful. News from someone abroad could concern you.\n\nA business or romantic partner may present opportunities for progress, Virgo. You might draft or finalize significant legal documents related to your future, possibly involving travel. Romance looks promising, and your confidence may enhance your charm. Consider planning a cozy celebration in the evening."
    },
    {
        "name": "Libra",
        "horoscope": "You feel calm and ready to enjoy the day. Financial resources may be spent on your partner’s health, but savings will support you. Focus on others’ needs, though overindulgence toward children may cause issues. Your presence brightens your beloved’s world. Spending time with a friend is likely, but avoid alcohol as it may waste valuable time. Nostalgic romantic memories with your spouse may resurface. You might feel misunderstood by family and prefer some distance today.\n\nYour dedication and smart business decisions may finally bring rewards, Libra. Positive changes at work are likely. You may feel energetic enough to clean or reorganize your home. However, don’t overexert yourself—seek help from household members."
    },
    {
        "name": "Scorpio",
        "horoscope": "Creative pursuits will help you stay relaxed. Seek financial advice from elders and apply their wisdom in daily life. It’s a favorable day for exchanging gifts with loved ones. An intriguing person may enter your life. Your charming personality will draw attention. Today you may feel assured that your marital promises were genuine—your spouse truly feels like your soulmate. If the day seems dull, try something innovative to make it interesting.\n\nPast insights may resurface and inspire you positively, Scorpio. Channel them into creative projects or practical interactions. Romance and passion are highlighted today. You might even feel inclined to shop for soft, elegant attire. Relationships are likely to feel intense and affectionate."
    },
    {
        "name": "Sagittarius",
        "horoscope": "Health issues could cause discomfort. Expenses may arise from multiple directions, so prepare a proper budget. Those at home may remain dissatisfied despite your efforts. Romance promises excitement and pleasure. Travel may prove beneficial, though costly. Your spouse may express appreciation and renewed affection. A friend could help you avoid a major problem today.\n\nYour home environment may require attention, Sagittarius. Family members might collaborate on cleaning or repairs. For complex issues like plumbing or electrical work, seek professional assistance rather than attempting it yourself."
    },
    {
        "name": "Capricorn",
        "horoscope": "You may find joy in celebrating others’ achievements. Sticking to your budget will prevent financial stress. Spend quality time with children, even if it requires extra effort. Romance may be affected by your spouse’s health concerns. You might revisit hobbies you loved in childhood. Mood swings from your partner could irritate you. A friend may help you steer clear of trouble.\n\nExpect communication from loved ones today, Capricorn—calls, messages, or letters. You may also feel like reaching out. Interesting information could prompt you to write or document your thoughts. What you learn now may hold value in the future."
    },
    {
        "name": "Aquarius",
        "horoscope": "Distracting thoughts may trouble you; engage in physical activity to keep your mind occupied. Raising funds, recovering dues, or securing investment for projects may be possible today. Someone at home could be annoyed by your recent behavior. Sweet romantic gestures are likely. Avoid pointless arguments, as they will waste your time and affect your mood. Married life may reach a joyful peak. Watching television may tempt you, but protect your eyesight.\n\nReviewing financial documents may bring pleasant surprises, Aquarius. Returns or benefits could be on the way. You might feel inclined to treat yourself or improve your home. Be mindful of impulsive purchases so that your finances remain stable."
    },
    {
        "name": "Pisces",
        "horoscope": "Avoid negativity, as it can reduce opportunities and disturb inner balance. Attempts to save money may not succeed today, but circumstances will soon improve. Unexpected good news from distant relatives may bring happiness to the family. Romance promises excitement—reach out to your beloved and make the most of it. Discovering an old item at home may inspire you to spend the day cleaning and organizing. You may experience the bliss of married life today. Instead of worrying about the future, invest your energy in thoughtfully planning it.\n\nNew information could inspire valuable ideas today, Pisces. Your intuition is especially sharp, and your insights may prove beneficial. Consider every possible scenario carefully. This knowledge could support your career and financial growth, so take time to record your thoughts."
    }
];
