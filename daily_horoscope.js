/**
 * Daily Horoscope Data
 * Includes daily horoscope readings.
 */

const DAILY_HOROSCOPE_DATA = [
    {
        "name": "Aries",
        "horoscope": "You will have sufficient time to focus on improving your health and appearance. Handle all commitments and financial dealings with care. A phase of stress may arise, but family support will guide you through. Love is meant to be experienced deeply and shared with your beloved. You may hold an advantage in most matters at work today. Spending too much time on TV or mobile could waste your day. The day holds something unusual and special in your married life.\n\nFinancial matters could create tension between you and a friend today, Aries. Perhaps someone owes money and is unable to repay, or it may be the other way around. If so, try to reach an arrangement that works for both sides. A win-win outcome is always possible unless anger clouds your judgment. Stay composed and centered, and everything should settle positively. Stay patient."
    },
    {
        "name": "Taurus",
        "horoscope": "A day filled with enjoyment and lighthearted moments. If you have been trying to secure a loan for a while, luck may favor you today. Family members will occupy a special space in your heart. Eyes never deceive, and your partner’s gaze may reveal something meaningful. You will be in a strong position to organize a team and move toward a shared objective. Though you wish to spend time with loved ones, circumstances may not permit it. Love, affection, and romance define the day with your partner.\n\nA social gathering may connect you with someone carrying resentment or anger, Taurus. This interaction may not be pleasant, as they might treat you as a sounding board for their frustrations. Don’t feel obligated to stay. Remain courteous but excuse yourself when needed. Other friends around you may offer far more enjoyable company."
    },
    {
        "name": "Gemini",
        "horoscope": "Keep your thoughts positive. Stay cautious of friends who borrow money and fail to return it. Unexpected duties may disturb your plans—you may find yourself prioritizing others over your own needs. Reality may demand that you momentarily set aside romantic thoughts. Practice wisdom and patience while handling workplace matters. Although you wish to spend time with those close to you, it may not happen. Your spouse’s declining health could cause you some stress.\n\nWork may feel chaotic today as a colleague prepares for an important trip, Gemini. Tension could rise and tempers may flare. Stay focused and complete your tasks calmly. You might become the steady presence that keeps others grounded, even if you feel like hiding yourself. Offer gratitude when the rush finally ends."
    },
    {
        "name": "Cancer",
        "horoscope": "Spiritual guidance from a wise person may bring peace and reassurance. Loans taken earlier may need to be repaid, which could strain finances. Friends and your spouse will bring comfort to an otherwise busy day. Sharing a candlelight meal with your beloved can create beautiful memories. Past efforts at work may be recognized, possibly leading to promotion. Businesspersons can gain valuable insights from experienced individuals. Your quick response to challenges will earn appreciation. Your partner will make heartfelt efforts to bring you happiness.\n\nThis could be an inspiring day for you, Cancer. Imagination and creativity are heightened, possibly motivating new artistic pursuits. You’ll gladly share your ideas with anyone interested. A child, close friend, or lover might feel neglected, but don’t worry—they will soon come around."
    },
    {
        "name": "Leo",
        "horoscope": "You will feel energetic and active today, with strong health supporting you. You may realize how beneficial past investments have been as returns begin to show. News about ancestral property could bring joy to the family. A close friend may comfort you emotionally. Attractive proposals may arise, but avoid rushing decisions. The morning may feel tiring, yet progress improves as the day advances. By evening, you will find personal time to reconnect with someone dear. Romance with your spouse may reach exciting heights.\n\nYour home might remain lively with visitors throughout the day, Leo. Their presence could irritate you occasionally. You may also need to calm a family member’s frustration. Be careful not to let their anger provoke yours. Staying calm and steady will help you manage everything smoothly."
    },
    {
        "name": "Virgo",
        "horoscope": "Friends will remain supportive and keep your spirits high. An exciting new development could bring financial advantage. An evening movie or dinner with your spouse will uplift your mood. Staying away from your lover may feel difficult. Avoid being overly forceful at work—consider others’ needs before making decisions. A pleasure trip may bring satisfaction. You might feel overlooked by your spouse, but later realize their efforts were meant to surprise you.\n\nA colleague may need emotional support today, Virgo. Workplace stress may push someone to their limits. Your patience could be tested. On such days, focus on completing tasks efficiently and unwind afterward with a relaxing activity."
    },
    {
        "name": "Libra",
        "horoscope": "Supportive friends will bring happiness. Financial gains may come through your children, filling you with pride. A hidden family matter could surprise you. A short getaway with your beloved may create lasting memories. Stay honest and direct—your determination and skills will gain attention. Expect interesting invitations and possibly a surprise gift. Your spouse may do something especially meaningful for you.\n\nChildren or loved ones might feel upset due to financial limitations today, Libra. They may want something that isn’t feasible at the moment. Offer reassurance that delay doesn’t mean denial. If they resist comfort, allow them time to process their emotions."
    },
    {
        "name": "Scorpio",
        "horoscope": "Friends will support you and keep your mood bright. Long-pending dues may finally be recovered. Home life will feel calm and pleasant. There’s a chance of meeting someone intriguing. Work circumstances appear favorable. Despite free time, satisfaction may remain elusive. Love from your spouse will help you forget past struggles.\n\nConcern for a family member could occupy your thoughts, Scorpio. They may be distressed about finances, work, or relationships. Offer reassurance, even if they don’t respond immediately. Your words matter more than you realize."
    },
    {
        "name": "Sagittarius",
        "horoscope": "Focus on improving your health and personality for overall growth. Previous investments may yield positive returns today. Seek approval before altering your home environment. You may prevent someone’s heartbreak. Persistent effort at work will bring rewards. Spending time with your spouse tonight will remind you of their importance. Your partner may shower you with extra care.\n\nYou may feel uneasy without a clear reason today, Sagittarius. Everything appears stable, yet subtle anxieties linger. You could be intuitively sensing the emotions of others. Trust your intuition but remain grounded. Stay steady."
    },
    {
        "name": "Capricorn",
        "horoscope": "Spiritual thoughts may inspire a visit to a sacred place for guidance. Married individuals might incur significant educational expenses for children. Spend time with children for joy and balance. Keep romantic matters private. If considering a business partnership, gather complete information before committing. Enjoy nature and fresh air today—it will keep you mentally peaceful. A relative’s surprise may disrupt your plans.\n\nA friend, possibly female, may feel upset with you today, Capricorn, possibly regarding money. Offer reassurance, then step back. Time will likely ease the misunderstanding. Focus on managing your own stress meanwhile."
    },
    {
        "name": "Aquarius",
        "horoscope": "A favorable day where relief from a prolonged illness is possible. Financial improvement is likely. Social events may introduce you to influential individuals. You may need to set aside romantic thoughts to face reality. Being overly transparent about plans could harm your project. Family discussions may address important matters—though your words may initially discomfort them, solutions will emerge. Ongoing marital tensions may finally dissolve.\n\nIf your boss is a woman, Aquarius, maintain caution today. She may not be in the best mood. Work diligently, stay diplomatic, and remain composed. Sharp remarks may arise, but consistency and focus will help you avoid major issues."
    },
    {
        "name": "Pisces",
        "horoscope": "Stay cheerful—better times are ahead, and you’ll feel energized. Attempts to save money may falter, but improvements are near. Dedicate yourself to family welfare with love and positive intention, not greed. Love creates a world of its own—you are fortunate to experience it. It’s a good day for creative expression. Though you wish to spend time with your lover, urgent responsibilities may intervene. Today highlights the joys of love and good food in married life.\n\nTravel plans could face complications today, Pisces. You might forget essential items or face delays. Protect valuables and use checklists to minimize issues. Carry entertainment for unexpected waits. Despite small disruptions, make the most of the journey."
    }
];
