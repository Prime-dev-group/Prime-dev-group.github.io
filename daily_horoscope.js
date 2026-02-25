/**
 * Daily Horoscope Data
 * Includes everyday horoscope predictions.
 */

const DAILY_HOROSCOPE_DATA = [
    {
        "name": "Aries",
        "horoscope": "Your kindness will turn out to be a hidden blessing, freeing you from negative traits such as doubt, disloyalty, depression, lack of faith, greed, attachment, ego, and jealousy. Those who invested money based on advice from an unfamiliar source are likely to see gains today. This is also a favorable time to confide in your parents about new plans and ventures. Today you will realize that your partner’s love is enduring and unconditional. Your boss’s positive mood may create a lively atmosphere at work. However, unfinished tasks from the past could invite criticism from seniors, and you may spend your free time clearing pending assignments. You’ll feel like the wealthiest person alive as your spouse treats you with exceptional affection.\n\nAvoid getting drawn into meaningless gossip today, Aries. Rumors may circulate, and it’s wise to stay out of them. While there may be some truth behind the stories, exaggerations have distorted the facts. Feelings could easily be hurt, so if you wish to protect your peace, stay away from idle chatter."
    },
    {
        "name": "Taurus",
        "horoscope": "Channel your thoughts and energy toward what you truly want to manifest instead of merely wishing for it. Imagining alone achieves nothing without action. With support from a close relative, you can perform well in business today and gain financially. Approach personal matters with generosity, but speak carefully to avoid hurting loved ones. Be mindful of your partner’s emotions. If you remain focused, your accomplishments may exceed expectations. Use your spare time to complete tasks that have been pending. You may rediscover romantic feelings for your spouse today.\n\nHopefully you’re comfortable with progress, Taurus, because today may bring advancement in your career. Your dedication over recent months seems to be paying off. Accept new responsibilities confidently. If there are unresolved matters at work, honesty will earn you respect from superiors."
    },
    {
        "name": "Gemini",
        "horoscope": "Some may think it’s too late for you to learn something new, but that’s far from accurate. Your sharp intellect enables you to grasp new skills easily. Invest surplus funds wisely in secure avenues that promise future returns. Cooperation at home will foster harmony. Love may blur the line between dreams and reality today. Workplace conditions appear favorable. Refrain from gossip, as it wastes valuable time. Married life looks especially delightful, as your spouse has planned something memorable.\n\nYou may feel ready for fresh challenges, Gemini. It’s not dissatisfaction but a craving for stimulation. Taking on added responsibilities or enrolling in new courses could satisfy this urge. Any new pursuit will energize your active mind."
    },
    {
        "name": "Cancer",
        "horoscope": "Exercise caution while driving, particularly on sharp turns, as someone else’s carelessness could create trouble. Today you may better understand the value of money when faced with financial needs and limited resources. Plan something enjoyable for the latter part of the day. Avoid being overly forceful in romantic matters. Small business owners might face setbacks, but continued effort in the right direction will bring eventual success. You may choose to spend some quiet time alone outside, though your thoughts will remain active. Tension with your spouse could trouble you.\n\nYour strong intuition has both benefits and drawbacks. Today unusual thoughts may cross your mind. Whether they are true insights or mere imagination remains uncertain. For now, it’s best not to overanalyze them. Life is too brief to dwell endlessly on possibilities."
    },
    {
        "name": "Leo",
        "horoscope": "A friend may challenge your tolerance and open-mindedness. Stand firm in your principles and make balanced decisions. New agreements may appear profitable but might not deliver expected returns, so avoid impulsive investments. Family revelations could surprise you. Emotional instability may surface. Being overly assertive at work could raise tempers—consider others’ perspectives before acting. Overall, the day sparkles with laughter as events unfold largely in your favor. Stress from your spouse, however, may impact your health.\n\nThough your enthusiasm is high, your stamina might be lower than usual, Leo. Avoid overextending yourself socially. Rest is essential if you wish to enjoy the lively pace of your current schedule."
    },
    {
        "name": "Virgo",
        "horoscope": "Social gatherings and outings will uplift your spirits. Success today depends on investing wisely with guidance from experienced and innovative individuals. You may find yourself the center of attention with many options to choose from. Romance fills your heart—plan something meaningful with your beloved. Strategic efforts at work will bring recognition and timely completion of projects, making it a suitable period to initiate new assignments. Visiting a park could refresh you, though minor disputes with strangers are possible. Someone’s actions may reignite affection between you and your spouse.\n\nWorkplace tension may be noticeable today, Virgo. Choose your words with care. Constructive criticism might not be well received, so maintain diplomacy and avoid stirring conflict."
    },
    {
        "name": "Libra",
        "horoscope": "Professional pressure could create stress. Financial conditions improve as overdue payments arrive. Unexpected gifts from loved ones bring joy. Your romantic life may improve significantly. Those in creative professions might face challenges and realize the importance of stable work. Invitations and perhaps a surprise gift may brighten your day. Your parents may bless your spouse with something meaningful, strengthening your marital bond.\n\nAn intriguing day awaits, Libra. Encounters with new individuals may spark ideas of travel or adventure. If a journey arises, romance could accompany it."
    },
    {
        "name": "Scorpio",
        "horoscope": "Let go of stubbornness for the sake of peace and happiness. Property investments are likely to be profitable. Good news may delight both you and your family—keep your excitement measured. Matters of the heart could feel intense. Career-related travel may materialize, but seek parental approval first. You’ll have time for socializing and hobbies. Romance shines brightly, though minor health concerns could surface.\n\nYour creative energy peaks today, Scorpio. Long-term projects benefit from your renewed determination. Take bold steps toward your aspirations without hesitation."
    },
    {
        "name": "Sagittarius",
        "horoscope": "Encourage optimism within yourself to build confidence and adaptability while releasing fear, jealousy, and resentment. Safeguard movable assets, as theft is possible. Mind your words to avoid hurting elders. Meaningful activities add purpose to life—show your loved ones that you care. A short romantic getaway could create lasting memories. Focus on improving your work methods to maintain a positive image before your boss. Offer help generously but avoid unnecessary interference. Your spouse radiates affection and vitality today.\n\nStay attentive to messages and calls, Sagittarius. Positive developments in business or romance may arrive unexpectedly, bringing favorable outcomes."
    },
    {
        "name": "Capricorn",
        "horoscope": "Your cheerful smile will help combat negative moods. Financial gains may come through your children, bringing happiness. A new addition to the family could spark celebration. Your low spirits might trouble your spouse. Competitors at work may attempt to undermine you, so remain vigilant. You might unwind by watching online content in your free time. However, your spouse’s harsh words could upset you.\n\nA friendly workplace atmosphere surrounds you today, Capricorn. While conversations may be pleasant, remain cautious and document your ideas to protect your originality."
    },
    {
        "name": "Aquarius",
        "horoscope": "Your playful, childlike side emerges today. Lending money to someone in need may bring relief despite common hesitation. Ensure your generosity isn’t exploited by children. Practice forgiveness in love. Opportunities to connect with someone important at work may finally arise. After busy days, you’ll enjoy personal time. An old disagreement with your spouse may resurface, but harmony will return by day’s end.\n\nA powerful romantic impulse stirs within you, Aquarius. Escaping routine sounds tempting. If travel isn’t possible, create a cozy retreat at home for an intimate evening."
    },
    {
        "name": "Pisces",
        "horoscope": "Supportive friends will uplift your mood. Conservative investments may bring financial gains. Some may buy jewelry or household appliances. Avoid controversial discussions during a date. Improve your work style to maintain a positive image with superiors. While caring for family, you often neglect yourself, but today you’ll find time to explore a new interest. Your spouse’s fragile health might interrupt your tasks, though you’ll manage effectively.\n\nYou may feel particularly sensual today, Pisces. Your natural charm attracts admiration. Embrace your passion and consider planning a romantic evening at home to celebrate love and connection."
    }
];