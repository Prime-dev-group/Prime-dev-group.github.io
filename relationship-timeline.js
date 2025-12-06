document.addEventListener('DOMContentLoaded', () => {
    const startDateInput = document.getElementById('start-date');
    const generateBtn = document.getElementById('generate-btn');
    const timeline = document.getElementById('timeline');

    // Stats Elements
    const statsDashboard = document.getElementById('stats-dashboard');
    const statDays = document.getElementById('stat-days');
    const statMoons = document.getElementById('stat-moons');
    const statSeasons = document.getElementById('stat-seasons');
    const statRetrogrades = document.getElementById('stat-retrogrades');
    const shareStatsBtn = document.getElementById('share-stats-btn');

    // Set max date to today
    const today = new Date();
    startDateInput.max = today.toISOString().split('T')[0];

    generateBtn.addEventListener('click', () => {
        const dateVal = startDateInput.value;
        if (!dateVal) {
            alert("Please select a start date!");
            return;
        }

        const startDate = new Date(dateVal);
        generateTimeline(startDate);
        updateStats(startDate);
    });

    shareStatsBtn.addEventListener('click', () => {
        const days = statDays.textContent;
        const text = `I've been on a cosmic journey for ${days} days! 🌌 Check your relationship timeline on Astromage.`;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = shareStatsBtn.textContent;
            shareStatsBtn.textContent = "Copied! ✅";
            setTimeout(() => shareStatsBtn.textContent = originalText, 2000);
        });
    });

    function updateStats(startDate) {
        const now = new Date();
        const diffTime = Math.abs(now - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Animate Numbers
        animateValue(statDays, 0, diffDays, 1500);

        // Approx stats
        const moons = Math.floor(diffDays / 29.5);
        animateValue(statMoons, 0, moons, 1500);

        const seasons = Math.floor(diffDays / 30.4); // Approx zodiac seasons
        animateValue(statSeasons, 0, seasons, 1500);

        const retrogrades = Math.floor(diffDays / 120); // Approx mercury retrogrades
        animateValue(statRetrogrades, 0, retrogrades, 1500);

        statsDashboard.classList.remove('hidden');
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function generateTimeline(startDate) {
        timeline.innerHTML = '';
        timeline.classList.remove('visible');

        const milestones = calculateMilestones(startDate);

        // Sort milestones by date
        milestones.sort((a, b) => a.date - b.date);

        // Render milestones
        let hasAddedTodayMarker = false;
        const now = new Date();

        milestones.forEach((m, index) => {
            // Check if we need to insert "Today" marker
            if (!hasAddedTodayMarker && m.date > now) {
                const marker = document.createElement('div');
                marker.className = 'timeline-item';
                marker.innerHTML = `<div class="timeline-marker-today">TODAY</div>`;
                timeline.appendChild(marker);
                hasAddedTodayMarker = true;
            }

            const item = document.createElement('div');
            item.className = `timeline-item ${m.date > now ? 'future' : 'past'}`;

            // Format Date
            const dateStr = m.date.toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
            });

            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="milestone-date">${dateStr}</div>
                    <h3 class="milestone-title">${m.title}</h3>
                    <p class="milestone-desc">${m.desc}</p>
                </div>
            `;

            timeline.appendChild(item);
        });

        // If all milestones are in the past, add Today at the end
        if (!hasAddedTodayMarker) {
            const marker = document.createElement('div');
            marker.className = 'timeline-item';
            marker.innerHTML = `<div class="timeline-marker-today">TODAY</div>`;
            timeline.appendChild(marker);
        }

        // Show with animation
        setTimeout(() => {
            timeline.classList.add('visible');
        }, 100);
    }

    function calculateMilestones(start) {
        const milestones = [];
        const now = new Date();
        const futureLimit = new Date(now);
        futureLimit.setFullYear(now.getFullYear() + 2); // Look 2 years ahead

        // 1. Start Date
        milestones.push({
            date: new Date(start),
            title: "The Beginning ✨",
            desc: "The stars aligned and your journey began."
        });

        // 2. Solar Returns (Anniversaries)
        let currentYear = start.getFullYear();
        const endYear = futureLimit.getFullYear();

        for (let year = currentYear + 1; year <= endYear; year++) {
            const anniversary = new Date(start);
            anniversary.setFullYear(year);

            const count = year - currentYear;
            const suffix = getOrdinalSuffix(count);

            milestones.push({
                date: anniversary,
                title: `${count}${suffix} Solar Return ☀️`,
                desc: `Your relationship completes another orbit around the Sun. A time for renewal and celebration.`
            });
        }

        // 3. Mercury Retrograde (Approx every 120 days)
        let retroDate = new Date(start);
        retroDate.setMonth(retroDate.getMonth() + 3);

        let retroCount = 1;
        while (retroDate < futureLimit) {
            const mDate = new Date(retroDate);
            const suffix = getOrdinalSuffix(retroCount);

            milestones.push({
                date: mDate,
                title: `${retroCount}${suffix} Mercury Retrograde Survival ☿️`,
                desc: "Communication might have been tricky, but you made it through!"
            });

            retroDate.setMonth(retroDate.getMonth() + 4);
            retroCount++;
        }

        // 4. Venus Return (Approx every 225 days)
        let venusDate = new Date(start);
        venusDate.setDate(venusDate.getDate() + 225);

        let venusCount = 1;
        while (venusDate < futureLimit) {
            const vDate = new Date(venusDate);
            const suffix = getOrdinalSuffix(venusCount);

            milestones.push({
                date: vDate,
                title: `${venusCount}${suffix} Venus Return ♀️`,
                desc: "A renewed cycle of love and affection. A great time for romance."
            });

            venusDate.setDate(venusDate.getDate() + 225);
            venusCount++;
        }

        // 5. 1000 Days
        const thousandDays = new Date(start);
        thousandDays.setDate(thousandDays.getDate() + 1000);

        if (thousandDays < futureLimit) {
            milestones.push({
                date: thousandDays,
                title: "1000 Days of Love 🪐",
                desc: "A significant milestone of durability and commitment."
            });
        }

        // 6. First Full Moon (Approx 14 days after start)
        const firstFullMoon = new Date(start);
        firstFullMoon.setDate(firstFullMoon.getDate() + 14);
        milestones.push({
            date: firstFullMoon,
            title: "First Full Moon Together 🌕",
            desc: "The first peak of emotional energy in your relationship."
        });

        // 7. Micro-Anniversaries (100 days)
        const hundredDays = new Date(start);
        hundredDays.setDate(hundredDays.getDate() + 100);
        milestones.push({
            date: hundredDays,
            title: "100 Days Together 💯",
            desc: "Your first triple-digit milestone!"
        });

        return milestones;
    }

    function getOrdinalSuffix(i) {
        const j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return "st";
        }
        if (j == 2 && k != 12) {
            return "nd";
        }
        if (j == 3 && k != 13) {
            return "rd";
        }
        return "th";
    }
});
