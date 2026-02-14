/**
 * Daily Horoscope Data
 * Contains daily horoscope readings.
 */

const DAILY_HOROSCOPE_DATA = [
    {
        "name": "Aries",
        "horoscope": "Begin your morning with Yoga and meditation. This practice will benefit you and help sustain your energy throughout the day. If you are traveling, be extra cautious with your valuables, as negligence may increase the risk of theft or misplacement. Prioritizing the needs of your family members should be important today. Your heartbeat will sync with the melody of love alongside your partner. Travel may bring benefits, though it could be costly. Delightful meals and romantic experiences are indicated. Listening to your favorite music may refresh you even more than a cup of tea.\n\nIf you have been considering starting a new business partnership, Aries, today is favorable for taking constructive steps in that direction. Any venture initiated now, especially involving collaboration, carries strong potential for success. This could significantly influence the direction of your life, so be sure to prepare for possible contingencies. Aim high and embrace the journey!"
    },
    {
        "name": "Taurus",
        "horoscope": "You may devote time to sports today to maintain your physical endurance. Investments related to your home are likely to yield profits. It’s a suitable time to think about home improvement projects. Be sensitive to your partner’s emotions. You might spend much of the day resting at home, but by evening you will recognize the value of time. Your spouse will radiate affection and vitality. Grooming activities such as styling your hair or visiting a spa may occupy your time, leaving you feeling refreshed and confident.\n\nRoutine and possibly dull tasks, especially paperwork, could dominate your schedule today, Taurus. Distractions may tempt you to postpone them for something more engaging, but avoid doing so. To maintain your recent streak of success, clear the mundane responsibilities first, then move on to what excites you. Stay focused and persevere!"
    },
    {
        "name": "Gemini",
        "horoscope": "Your health is set to remain excellent today. Small business owners may receive valuable advice from close associates that can bring financial gains. It’s a day when you may receive abundant attention, with multiple options before you, making it hard to choose which path to follow. Love knows no limits—you may truly experience its depth today. While keeping pace with time is important, valuing family and spending meaningful moments with them matters equally. Your spouse may surprise you with something wonderful. Bringing your parents their favorite dish as a surprise could uplift the atmosphere at home.\n\nProjects you have long refined, possibly involving writing, speaking, or publishing, may yield positive results today, Gemini. Recognition from authority figures is likely. Take full advantage of this opportunity, as such chances may not come frequently. Move forward with confidence!"
    },
    {
        "name": "Cancer",
        "horoscope": "Stay away from confusion and irritation to preserve mental clarity. Financial inflow today may ease several monetary concerns. You may find yourself at the center of attention with many choices lined up, making decisions challenging. A special friend may comfort you in emotional moments. Shopping and various tasks could keep you engaged for most of the day. The love of your spouse may help you forget past hardships. With the right mindset and supportive people, you can steer your life as you wish.\n\nBusiness-related paperwork might be finalized today, Cancer, possibly from home. An unexpected development could leave you slightly unsettled, but gather yourself and seize the opportunity. Indications suggest promising outcomes, so allow events to unfold naturally. You may be pleasantly surprised."
    },
    {
        "name": "Leo",
        "horoscope": "You are likely to experience immense joy as you embrace life wholeheartedly. Avoid lending money today; if unavoidable, ensure repayment terms are documented. Your spouse may go out of their way to make you happy. Natural beauty might captivate you. A leisure trip could bring satisfaction. You may realize how beautiful your married life truly is. Ignore remarks from those who hold little significance in your life.\n\nProfessional success, especially in areas like writing or speaking, may come your way today, Leo. Contracts and documentation might demand attention, along with numerous calls or travel. Although this activity may feel overwhelming, your optimism and enthusiasm will remain high. Look ahead to future ventures with confidence."
    },
    {
        "name": "Virgo",
        "horoscope": "Blessings from a spiritually inclined person may bring you inner peace. Financial stability is likely to improve, and previously lent money may be returned. Spend peaceful moments with your family. Your partner’s unpredictable behavior might affect your mood. Volunteering today will benefit others and enhance your self-perception. Concerns regarding your spouse’s health could cause stress. Recovering loaned money may resolve certain financial worries.\n\nYour dedicated efforts to advance your business interests may yield results today, Virgo. Monetary gains or promising contracts could arrive, along with new prospects in writing, teaching, or publishing. Loved ones may share in your excitement—perhaps even celebrate. Take some time to relax before resuming your responsibilities."
    },
    {
        "name": "Libra",
        "horoscope": "Avoid raising your voice, as it may negatively impact your health. Borrowed funds may need repayment, potentially straining your finances. Your spouse’s efforts could fill the day with happiness. You are likely to radiate affection today. Unpleasant news from in-laws might cause sadness, leading to deep reflection. Your partner’s romantic side will be especially evident. Sharpen your photography skills—you may treasure the captured moments.\n\nYour optimism and drive are elevated today, Libra. Business dealings and partnerships have been both rewarding and profitable, and new opportunities may surface unexpectedly. After sustained effort with little visible outcome, progress may now accelerate. Stay diligent to maintain this momentum."
    },
    {
        "name": "Scorpio",
        "horoscope": "Let go of stubbornness for the sake of harmony, as it serves little purpose. New income streams may emerge through acquaintances. Family gatherings may create a relaxed and cheerful atmosphere. Your love life blossoms, reflecting meaningful actions you’ve taken. You’ll have ample personal time today—use it to pursue hobbies, read, or enjoy music. Married life may reveal its true beauty. Casual chats with friends can be enjoyable, but excessive phone conversations might cause discomfort.\n\nYour imagination and intuition are heightened today, Scorpio. Trust your instincts regarding new ventures or financial matters. Insights may surface subtly, requiring contemplation to fully understand. Allow ideas to form naturally before applying logic to determine your next steps."
    },
    {
        "name": "Sagittarius",
        "horoscope": "Strong confidence and a manageable workload will grant you time to unwind. Financial conditions are set to improve. A visit to a religious site or relative is possible. Maintain respectful behavior toward your partner. Pending matters require attention—adopt a positive mindset and begin resolving them. Disagreements involving relatives could affect your spouse. Spending extra time with family may occasionally lead to tension; strive to avoid conflict.\n\nA demanding schedule awaits, Sagittarius, with business communications occupying much of your time. These discussions may concern your goals or those of associates. Enthusiasm and optimism will guide you toward likely success. Pace yourself and remember to rest."
    },
    {
        "name": "Capricorn",
        "horoscope": "Children may brighten your evening. Planning a pleasant dinner could help you unwind from a hectic day, and their presence will rejuvenate you. Today, you may grasp the true value of money when financial needs arise. Organize a gathering—you will have the energy to lead. Your relationship may take a serious turn, with discussions about marriage requiring thoughtful consideration. A visit to the park might lead to a minor dispute, potentially affecting your mood. A satisfying dinner and restful sleep are indicated. Inner calm will help you foster harmony at home.\n\nBusiness affairs may suddenly improve, Capricorn. Important paperwork could require completion. Growing self-assurance will fuel further achievements. You may feel inclined to enhance your appearance to reflect your inner confidence. Consider refreshing your wardrobe and continue striving for success."
    },
    {
        "name": "Aquarius",
        "horoscope": "Your appealing nature will draw attention. Although money may flow out easily, favorable circumstances will keep finances steady. Support from friends and spouse will bring comfort to an otherwise slow day. You may truly feel the depth of limitless love today. If living away from home for work or studies, use free time to connect with family, possibly leading to emotional exchanges. Marriage will feel like a blessing today. Avoid exaggerating stories merely to make them more engaging.\n\nAn opportunity to travel, possibly for professional reasons, may arise today, Aquarius. Temporary adjustments in personal life could be necessary, but do not let them deter you. Career advancement appears promising and could significantly impact your future. Seize the moment."
    },
    {
        "name": "Pisces",
        "horoscope": "Health concerns may cause distress, so address them promptly to restore harmony at home. Financial improvements will enable important purchases. Maintain stable behavior, especially with your spouse, to preserve domestic peace. You may sense the presence of a friend even in their absence. Children might devote their day to sports; parents should remain attentive to prevent injuries. Meaningful conversations about shared feelings will strengthen bonds. While family demands during the weekend may feel frustrating, staying calm will serve you best.\n\nSomeone knowledgeable may present income-enhancing opportunities today, Pisces, possibly involving investments in new ventures. Evaluate each option carefully, weighing advantages and drawbacks before committing. One opportunity may align perfectly with your aspirations, while another may differ from expectations. Reflect thoroughly before deciding."
    }
];
