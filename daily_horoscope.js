/**
 * Daily Horoscope Data
 * Contains daily horoscope readings.
 */

const DAILY_HOROSCOPE_DATA = [
    {
        "name": "Aries",
        "horoscope": "A favorable day to focus on activities that enhance your health. Participating in large gatherings will be very enjoyable, though your expenses may rise. Dedicate adequate time to your family and make them feel valued. Spend meaningful moments with them and avoid giving them any reason to complain. Your partner may ask something of you today that you might not be able to fulfill, which could leave them disappointed. Subordinates or colleagues will be very supportive. Travel may bring benefits but will be costly. After a challenging period in your married life, today brings relief and happiness.\n\nYou may hear an unsettling rumor about someone you know or about your workplace. Don’t be surprised if several people reach out to share details. However, this information may not be reliable and could be based on speculation or even falsehoods. Try to verify the facts before letting it disturb your peace of mind."
    },
    {
        "name": "Taurus",
        "horoscope": "You will feel pleased as those around you offer their support. If you aim to build financial stability, begin saving from today itself. Spend some calm and pleasant moments with your family. A third person might interfere in your love life today. You are likely to manage situations smoothly and emerge successful. People of this sign should avoid alcohol and cigarettes today, as they may consume much of your time. Taking your spouse out on a romantic outing will improve your relationship.\n\nPersonal or professional ventures may seem to progress slower than you’d like today. You might question whether you’re doing something wrong, but that’s unlikely. It’s simply a temporary slowdown in momentum, which should improve soon. Continue your efforts and avoid unnecessary stress. Let things flow naturally."
    },
    {
        "name": "Gemini",
        "horoscope": "Your personality will spread positivity like a fragrance today. Your hard work and dedication will be recognized and may bring financial gains. Visiting relatives will turn out better than expected. You may sense the presence of a friend even in their absence. A positive shift at work is possible. An unexpected trip may disrupt your plans to spend time with family. Overall, your married life will feel joyful today.\n\nYou might feel restricted by your current circumstances and consider changing jobs or relocating. While these thoughts may be valid, today is not suitable for making firm decisions. Your perspective may not be fully objective right now. Give yourself a few days before reconsidering; your viewpoint may shift."
    },
    {
        "name": "Cancer",
        "horoscope": "Pay attention to your health to prevent complications. Expenses may increase, but a rise in income will help manage your bills. Friends and loved ones will offer their support. Emotional unrest may trouble you. Pending correspondence requires immediate attention. You may carve out time to spend with your partner, though minor disagreements could arise. A small lie from your spouse might upset you today.\n\nTrying to learn a new software program or high-tech tool might feel frustrating. You could doubt your abilities, but persistence is key. With focus and determination, you will overcome these challenges. Seeking help from someone experienced could also prove beneficial."
    },
    {
        "name": "Leo",
        "horoscope": "Practicing meditation and yoga will benefit both your mind and body. Savings from the past may come in handy today, though expenses might dampen your mood. Your children may teach you valuable lessons through their innocence and positivity. Avoid emotionally manipulating your partner. It’s a productive day for traders. Communication will be your strength. Domestic issues may create stress in married life, possibly related to daily necessities.\n\nThe rapid progress you’ve been making might feel overwhelming. You may need a pause to process recent developments. New connections and opportunities are abundant, yet you could question your ability to handle them. Instead of resisting these feelings, work through them patiently."
    },
    {
        "name": "Virgo",
        "horoscope": "Cultivate positive thinking. Businesspersons should be cautious about lending money to family members who may not repay it. It’s an auspicious day for exchanging gifts with loved ones. A sudden shift in your romantic mood may disturb you. Your professional skills will be put to the test, requiring focused effort. Travel may not yield immediate rewards but will benefit you later. Interference from in-laws might disturb marital harmony.\n\nThe momentum that has driven you forward may slow today, causing temporary concern. You might feel slightly low, but this pause is natural after rapid progress. The pace will pick up again soon, giving you time to regain balance."
    },
    {
        "name": "Libra",
        "horoscope": "Spiritual wisdom from a saintly figure may bring peace and comfort. Handle financial matters and commitments with care. Socializing or shopping with friends will be enjoyable. Love will make everything appear brighter and more beautiful. Those involved in foreign trade may achieve desired outcomes. Professionals can showcase their talents effectively at work. Friends may visit your home, but avoid indulging in harmful substances. Married life will feel especially warm and comforting.\n\nYou might experience a brief phase of self-doubt, questioning your progress and beliefs. Even if things are going well, you may feel you haven’t reached your desired goals. Distract yourself with reading or entertainment. This temporary mood will soon pass."
    },
    {
        "name": "Scorpio",
        "horoscope": "Patience combined with steady effort and wisdom will ensure success. Long-pending payments may finally be received. A festive atmosphere at home will reduce stress; participate actively rather than remaining passive. Your sincere love carries a creative power. You may understand the reason behind your boss’s harsh behavior, which will bring relief. Take time to reflect and understand yourself better. Married life may bring an unusual yet memorable experience today.\n\nYou may disagree with a group’s current direction but find them too enthusiastic to heed your concerns. Doubts about your own long-term goals may arise. Stay patient; some achievements simply take time, and success is still possible."
    },
    {
        "name": "Sagittarius",
        "horoscope": "Your health will remain strong, and your cheerful mindset will boost confidence. Financial improvement is likely. Guests may fill your home, creating a delightful evening. Avoid overly sentimental remarks to your partner. Seize opportunities that come your way. Use your free time to complete unfinished tasks. A relative may surprise you, possibly disrupting your plans.\n\nPlans with friends or a romantic partner might need postponement due to work responsibilities. Though disappointing, this won’t have lasting effects on your relationships. Focus on completing your tasks and plan enjoyment for another time."
    },
    {
        "name": "Capricorn",
        "horoscope": "Spiritual inclinations may lead you to seek blessings at a religious place. Expenses may rise, but increased income will balance them. Children’s achievements will fill you with pride. Avoid submissive behavior in love. Support from seniors will boost your confidence. You may finally find time for yourself and explore a new hobby. Differences in opinion could lead to arguments with your partner.\n\nDespite recent good health, you may feel slightly unwell today, likely due to stress. Continuous hard work may have taken a toll. Take a break and allow yourself to rest without guilt."
    },
    {
        "name": "Aquarius",
        "horoscope": "Your charisma will draw attention. If you wish to earn extra income, consider safe financial investments. You may receive unexpected gifts from loved ones. A new and pleasant side of your partner may surprise you. Newly acquired knowledge will give you an advantage among peers. Travel plans might be delayed due to sudden schedule changes. Tension with your partner could create serious strain in your marriage.\n\nAn exciting plan with friends or a romantic interest may need to be postponed due to unforeseen circumstances. Though frustrating, there is little you can do. Reschedule and keep yourself engaged with something enjoyable in the meantime."
    },
    {
        "name": "Pisces",
        "horoscope": "Trust your judgment, be courageous, and make swift decisions, accepting their outcomes. Monitor your expenses carefully to avoid future difficulties. Friends may plan something exciting to lift your spirits. You will experience sincere and pure love. Believing you can manage important tasks alone may be a mistake; collaboration could be necessary. You may prefer solitude today and use your free time to tidy your home. Efforts to improve your married life will bring better-than-expected results.\n\nDisturbances in your surroundings, whether major or minor, may affect your family’s mood. Though inconvenient, patience is required. Consider uplifting everyone’s spirits with a spontaneous gathering at home."
    }
];