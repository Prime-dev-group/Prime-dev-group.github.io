document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    const grid = document.getElementById('chinese-zodiac-grid');
    constloading = document.getElementById('loading');
    const modal = document.getElementById('details-modal');
    const detailsCloseBtn = document.querySelector('#details-modal .close-btn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Finder elements
    const findSignBtn = document.getElementById('find-sign-btn');
    const finderModal = document.getElementById('finder-modal');
    const finderClose = document.querySelector('.finder-close');
    const calcSignBtn = document.getElementById('calculate-sign-btn');

    // Zodiac Metadata
    const zodiacSigns = [
        { id: 'rat', name: 'Rat', icon: '🐀' },
        { id: 'ox', name: 'Ox', icon: '🐂' },
        { id: 'tiger', name: 'Tiger', icon: '🐅' },
        { id: 'rabbit', name: 'Rabbit', icon: '🐇' },
        { id: 'dragon', name: 'Dragon', icon: '🐉' },
        { id: 'snake', name: 'Snake', icon: '🐍' },
        { id: 'horse', name: 'Horse', icon: '🐎' },
        { id: 'goat', name: 'Goat', icon: '🐐' },
        { id: 'monkey', name: 'Monkey', icon: '🐒' },
        { id: 'rooster', name: 'Rooster', icon: '🐓' },
        { id: 'dog', name: 'Dog', icon: '🐕' },
        { id: 'pig', name: 'Pig', icon: '🐖' }
    ];

    let horoscopeData = {};

    // Load Data directly from global variable (avoids CORS issues on local file://)
    if (window.chineseHoroscopeData) {
        horoscopeData = window.chineseHoroscopeData;
        renderGrid();
        document.getElementById('loading').style.display = 'none';
        grid.classList.remove('hidden');
    } else {
        console.error('Horoscope data not found.');
        document.getElementById('loading').innerText = 'Failed to load horoscope data.';
    }

    function renderGrid() {
        grid.innerHTML = '';
        zodiacSigns.forEach(sign => {
            const card = document.createElement('div');
            card.className = 'zodiac-card';
            card.dataset.sign = sign.id;

            card.innerHTML = `
                <div class="zodiac-icon">${sign.icon}</div>
                <div class="zodiac-name">${sign.name}</div>
                <div class="zodiac-date">Click for Details</div>
            `;

            card.addEventListener('click', () => {
                openModal(sign.id);
            });
            grid.appendChild(card);
        });
    }

    function openModal(signId) {
        const signData = horoscopeData[signId];
        const signMeta = zodiacSigns.find(s => s.id === signId);

        if (!signData || !signMeta) return;

        // Header
        document.getElementById('modal-icon').innerText = signMeta.icon;
        document.getElementById('modal-sign-name').innerText = signMeta.name;
        document.getElementById('modal-years').innerText = 'Chinese Zodiac';

        // Helper to format text (replace newlines with <br>)
        const format = (text) => {
            if (!text) return 'Information not available.';
            // Strip outer div if present
            let clean = text.replace(/^<div>|<\/div>$/g, '');
            // Remove double brs
            clean = clean.replace(/<br\s*\/?>\s*<br\s*\/?>/gi, '');
            // Remove newlines that might cause issues with pre-wrap
            clean = clean.replace(/\n/g, '');
            return clean;
        };

        // --- Overview ---
        document.getElementById('modal-year-text').innerHTML = format(signData['Years & Associated Elements'] || signData['Year']);
        document.getElementById('modal-famous-people').innerHTML = format(signData['Famous People Born']);


        // Traits Grid
        const traitsContainer = document.getElementById('modal-zodiac-traits');
        traitsContainer.innerHTML = '';

        let traitsData = signData['Chinese Zodiac Traits'];

        // Helper to format a single line
        // Helper to format a single line
        const formatLine = (text) => {
            const parts = text.split(':');
            const label = parts.shift().trim();
            let val = parts.join(':').trim();
            // Remove trailing colon if present (artifact from data)
            if (val.endsWith(':')) val = val.slice(0, -1);
            return `<span style="color: var(--accent-gold); font-weight: 700; margin-right: 5px;">${label}:</span> <span style="color: var(--text-primary);">${val}</span>`;
        }

        const commonUlStyles = "list-style: none !important; margin: 0; padding: 0; text-align: left; width: 100%;";

        if (Array.isArray(traitsData)) {
            const ul = document.createElement('ul');
            ul.className = 'zodiac-traits-list';
            ul.style.cssText = commonUlStyles;

            traitsData.forEach(item => {
                // Convert item to strong if it's an object
                let text = (typeof item === 'object') ? `${item.key}: ${item.value}` : item;

                // Check for hidden keywords in the value
                const keywords = ["Lucky Directions", "Lucky Flowers", "Lucky Birth Time", "Lucky Months", "Best Compatibility", "Worst Compatibility", "Unlucky Colors", "Unlucky Numbers"];

                // Split text by these keywords if they appear in the middle
                // We'll replace keyword with |SPLIT|keyword
                let processedText = text;
                keywords.forEach(kw => {
                    if (processedText.includes(kw + ':') && !processedText.startsWith(kw)) {
                        processedText = processedText.replace(kw + ':', `|SPLIT|${kw}:`);
                    }
                });

                const lines = processedText.split('|SPLIT|');
                lines.forEach(line => {
                    const li = document.createElement('li');
                    li.style.marginBottom = '6px'; // Reduced spacing
                    li.innerHTML = formatLine(line);
                    ul.appendChild(li);
                });
            });
            traitsContainer.appendChild(ul);
        } else if (typeof traitsData === 'object') {
            // Fallback object rendering
            const ul = document.createElement('ul');
            ul.className = 'zodiac-traits-list fallback-list';
            ul.style.cssText = commonUlStyles;

            Object.entries(traitsData).forEach(([k, v]) => {
                const li = document.createElement('li');
                li.className = 'fallback-list-item';
                li.style.marginBottom = '6px'; // Reduced spacing
                li.innerHTML = `<span style="color: var(--accent-gold); font-weight: 700; margin-right: 5px;">${k}:</span> <span style="color: var(--text-primary);">${v}</span>`;
                ul.appendChild(li);
            });
            traitsContainer.appendChild(ul);
        }
        // --- Personality ---
        document.getElementById('modal-traits').innerHTML = format(signData['Personality Traits']);

        const createTags = (text) => {
            if (!text) return 'Information not available.';

            // 1. Check for bullet points (common in this dataset)
            if (text.includes('- ') || text.includes('• ')) {
                const lines = text.split('\n');
                let html = '';
                let collectedTags = [];

                lines.forEach(line => {
                    let trimmed = line.trim();
                    if (!trimmed) return;

                    // Identify list items
                    if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
                        // Clean the bullet
                        const tagContent = trimmed.replace(/^[-•]\s*/, '').trim();
                        collectedTags.push(tagContent);
                    } else {
                        // If we have collected tags before this text line, flush them
                        if (collectedTags.length > 0) {
                            html += `<div class="tags-container" style="margin-bottom: 1rem;">${collectedTags.map(p => `<span class="tag-pill">${p}</span>`).join('')}</div>`;
                            collectedTags = [];
                        }
                        // Render text paragraph
                        html += `<p class="yearly-text">${trimmed}</p>`;
                    }
                });

                // Flush remaining tags
                if (collectedTags.length > 0) {
                    html += `<div class="tags-container">${collectedTags.map(p => `<span class="tag-pill">${p}</span>`).join('')}</div>`;
                }
                return html;
            }

            // 2. Fallback: Check if it's a simple comma-separated list (short items) vs a sentence
            // Heuristic: If it has commas but no periods (or very few), and chunks are short (< 30 chars approx)
            if (text.includes(',') && !text.includes('.')) {
                const parts = text.split(/,|;/).map(s => s.trim()).filter(s => s.length > 0);
                return `<div class="tags-container">${parts.map(p => `<span class="tag-pill">${p}</span>`).join('')}</div>`;
            }

            // 3. Default: Just text
            return format(text);
        };

        document.getElementById('modal-strengths').innerHTML = createTags(signData['Strengths']);
        document.getElementById('modal-weaknesses').innerHTML = createTags(signData['Weaknesses']);


        // --- Life ---
        document.getElementById('modal-career').innerHTML = format(signData['Career & Work Life']);
        document.getElementById('modal-education').innerHTML = format(signData['Education & Learning Style']);
        document.getElementById('modal-love').innerHTML = format(signData['Love & Relationships']);
        document.getElementById('modal-family').innerHTML = format(signData['Family and Social Life']);
        document.getElementById('modal-compatibility').innerHTML = format(signData['Zodiac Compatibility']);
        document.getElementById('modal-wealth').innerHTML = format(signData['Wealth & Money Mindset']);
        document.getElementById('modal-health').innerHTML = format(signData['Health Tendencies']);

        // --- Insight Card Previews (Generate from content) ---
        const setPreview = (id, html) => {
            const el = document.getElementById(id);
            if (!el) return;
            const tmp = document.createElement('div');
            tmp.innerHTML = html || '';
            let text = tmp.textContent || tmp.innerText || '';
            // Get first sentence or truncate
            text = text.replace(/\s+/g, ' ').trim();
            if (text.length > 90) text = text.substring(0, 90).split(' ').slice(0, -1).join(' ') + '...';
            el.innerText = text;
        };

        setPreview('preview-career', signData['Career & Work Life']);
        setPreview('preview-education', signData['Education & Learning Style']);
        setPreview('preview-love', signData['Love & Relationships']);
        setPreview('preview-family', signData['Family and Social Life']);
        setPreview('preview-compatibility', signData['Zodiac Compatibility']);
        setPreview('preview-wealth', signData['Wealth & Money Mindset']);
        setPreview('preview-health', signData['Health Tendencies']);

        setPreview('preview-year', signData['Years & Associated Elements'] || signData['Year']);
        setPreview('preview-famous', signData['Famous People Born']);
        setPreview('preview-traits', signData['Personality Traits']);
        setPreview('preview-strengths', signData['Strengths']);
        setPreview('preview-weaknesses', signData['Weaknesses']);

        // Custom preview for Zodiac Traits since it's an array/grid
        const traitsPreviewEl = document.getElementById('preview-zodiac-traits');
        if (traitsPreviewEl) {
            traitsPreviewEl.innerText = "Explore your lucky colors, numbers, flowers, and directions...";
        }

        modal.classList.remove('hidden');
        modal.classList.add('active');
        document.body.classList.add('modal-open');

        // Reset tabs
        switchTab('overview');

        // Reset Accordion State: For each tab, open first, close rest
        document.querySelectorAll('.tab-content').forEach(tab => {
            const collapsibles = tab.querySelectorAll('.collapsible');
            collapsibles.forEach((c, index) => {
                if (index === 0) c.classList.add('active');
                else c.classList.remove('active');
            });
            const cards = tab.querySelectorAll('.insight-card');
            if (cards.length > 0) {
                cards.forEach(c => c.classList.remove('active'));
                // Optionally open first card? No, usually closed or first open.
                // let's leave them closed or open the first one?
                // Blueprint implies closed usually, or user preference.

                // Ensure preview is visible
            }
        });



    } // This is the closing brace for the openModal function.

    function closeModal() {
        modal.classList.remove('active');
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }

    function switchTab(tabId) {
        tabBtns.forEach(btn => {
            if (btn.dataset.tab === tabId) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        tabContents.forEach(content => {
            if (content.id === `tab-${tabId}`) content.classList.add('active');
            else content.classList.remove('active');
        });

        // Reset Scroll to Top
        const modalBody = document.querySelector('.modal-body');
        if (modalBody) modalBody.scrollTop = 0;
    }

    // --- Finder Logic ---
    function openFinder() {
        finderModal.classList.remove('hidden');
        finderModal.classList.add('active');
    }

    function closeFinder() {
        finderModal.classList.remove('active');
        finderModal.classList.add('hidden');
    }

    function calculateAndShowSign() {
        const birthDateInput = document.getElementById('birth-date-input');
        const dateStr = birthDateInput.value;
        if (!dateStr) {
            alert('Please select your birth date.');
            return;
        }

        const signId = getChineseZodiac(new Date(dateStr));
        if (signId) {
            closeFinder();
            // Verify data exists
            if (horoscopeData[signId]) {
                // Small timeout for better UX transition
                setTimeout(() => openModal(signId), 300);
            } else {
                alert(`Sign: ${signId}. Detailed data not loaded.`);
            }
        }
    }

    /* 
       Chinese Zodiac Calculation 
       Since Chinese New Year logic is complex (lunar calendar), strict date check is needed.
       This table defines the Start Date of the Zodiac for each year.
       Format: Year -> [Month, Day, ZodiacIndex]
       0=Rat, 1=Ox, 2=Tiger, 3=Rabbit, 4=Dragon, 5=Snake, 6=Horse, 7=Goat, 8=Monkey, 9=Rooster, 10=Dog, 11=Pig
    */

    // Start date of the Chinese New Year for 1924 - 2043 (Cycle of 12 starting 1924=Rat)
    // Source: General Lunisolar Calendar Tables

    const lunarNewYearStarts = {
        1924: [2, 5], 1925: [1, 24], 1926: [2, 13], 1927: [2, 2], 1928: [1, 23], 1929: [2, 10], 1930: [1, 30],
        1931: [2, 17], 1932: [2, 6], 1933: [1, 26], 1934: [2, 14], 1935: [2, 4], 1936: [1, 24], 1937: [2, 11],
        1938: [1, 31], 1939: [2, 19], 1940: [2, 8], 1941: [1, 27], 1942: [2, 15], 1943: [2, 5], 1944: [1, 25],
        1945: [2, 13], 1946: [2, 2], 1947: [1, 22], 1948: [2, 10], 1949: [1, 29], 1950: [2, 17], 1951: [2, 6],
        1952: [1, 27], 1953: [2, 14], 1954: [2, 3], 1955: [1, 24], 1956: [2, 12], 1957: [1, 31], 1958: [2, 18],
        1959: [2, 8], 1960: [1, 28], 1961: [2, 15], 1962: [2, 5], 1963: [1, 25], 1964: [2, 13], 1965: [2, 2],
        1966: [1, 21], 1967: [2, 9], 1968: [1, 30], 1969: [2, 17], 1970: [2, 6], 1971: [1, 27], 1972: [2, 15],
        1973: [2, 3], 1974: [1, 23], 1975: [2, 11], 1976: [1, 31], 1977: [2, 18], 1978: [2, 7], 1979: [1, 28],
        1980: [2, 16], 1981: [2, 5], 1982: [1, 25], 1983: [2, 13], 1984: [2, 2], 1985: [2, 20], 1986: [2, 9],
        1987: [1, 29], 1988: [2, 17], 1989: [2, 6], 1990: [1, 27], 1991: [2, 15], 1992: [2, 4], 1993: [1, 23],
        1994: [2, 10], 1995: [1, 31], 1996: [2, 19], 1997: [2, 7], 1998: [1, 28], 1999: [2, 16], 2000: [2, 5],
        2001: [1, 24], 2002: [2, 12], 2003: [2, 1], 2004: [1, 22], 2005: [2, 9], 2006: [1, 29], 2007: [2, 18],
        2008: [2, 7], 2009: [1, 26], 2010: [2, 14], 2011: [2, 3], 2012: [1, 23], 2013: [2, 10], 2014: [1, 31],
        2015: [2, 19], 2016: [2, 8], 2017: [1, 28], 2018: [2, 16], 2019: [2, 5], 2020: [1, 25], 2021: [2, 12],
        2022: [2, 1], 2023: [1, 22], 2024: [2, 10], 2025: [1, 29], 2026: [2, 17], 2027: [2, 6], 2028: [1, 26],
        2029: [2, 13], 2030: [2, 3]
    };

    // Signs in order. Cycle starts with Rat.
    // 1924 was Year of the Rat.
    const signsOrder = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];

    function getChineseZodiac(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 1-12
        const day = date.getDate();

        if (year < 1924 || year > 2030) {
            // Fallback for simple modulo if out of table range, assuming Jan 1 switch which is inaccurate but better than nothing
            const offset = (year - 1924) % 12;
            let idx = offset < 0 ? offset + 12 : offset;
            return signsOrder[idx];
        }

        const start = lunarNewYearStarts[year];
        const startMonth = start[0];
        const startDay = start[1];

        let zodiacYear = year;

        // If date is before Chinese New Year, it belongs to previous zodiac year
        if (month < startMonth || (month === startMonth && day < startDay)) {
            zodiacYear = year - 1;
        }

        // 1924 is reference Year of Rat (Index 0)
        // (ZodiacYear - 1924) % 12
        let index = (zodiacYear - 1924) % 12;
        if (index < 0) index += 12;

        return signsOrder[index];
    }

    // Event Listeners
    if (detailsCloseBtn) detailsCloseBtn.addEventListener('click', closeModal);

    // Collapsible Logic
    // We use event delegation since content might be updated, though elements are static, safe to attach now.
    // Collapsible Logic (Standard Accordion for Overview/Profile)
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            const section = header.parentElement;
            const parentTab = section.parentElement;
            const wasActive = section.classList.contains('active');

            // Close all collapsibles within the same tab
            parentTab.querySelectorAll('.collapsible').forEach(c => c.classList.remove('active'));

            if (!wasActive) section.classList.add('active');
        });
    });

    // --- Insight Card Logic (Blueprint Design for Life Tab) ---
    const handleCardToggle = (card) => {
        const parentTab = card.parentElement;
        const wasActive = card.classList.contains('active');

        // Close siblings
        parentTab.querySelectorAll('.insight-card').forEach(c => c.classList.remove('active'));

        if (!wasActive) {
            card.classList.add('active');
        }
    };

    document.querySelectorAll('.insight-card .card-header').forEach(header => {
        header.addEventListener('click', (e) => {
            e.stopPropagation();
            handleCardToggle(header.closest('.insight-card'));
        });
    });

    document.querySelectorAll('.insight-card .read-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            handleCardToggle(btn.closest('.insight-card'));
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
        if (e.target === finderModal) closeFinder();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeFinder();
        }
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    if (findSignBtn) findSignBtn.addEventListener('click', openFinder);
    if (finderClose) finderClose.addEventListener('click', closeFinder);
    if (calcSignBtn) calcSignBtn.addEventListener('click', calculateAndShowSign);
});
