document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('compatibility-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const detailsPanel = document.getElementById('details-panel');
    const detailsTitle = document.getElementById('details-title');
    const detailsScore = document.getElementById('details-score');
    const detailsDesc = document.getElementById('details-desc');

    let currentType = 'love';

    // Initialize Grid
    function renderGrid() {
        gridContainer.innerHTML = '';

        // Top-left corner (empty)
        const corner = document.createElement('div');
        corner.className = 'matrix-cell corner-cell';
        corner.textContent = '✨';
        gridContainer.appendChild(corner);

        // Header Row (Top)
        ZODIAC_SIGNS.forEach(sign => {
            const header = document.createElement('div');
            header.className = 'matrix-cell matrix-header-col';
            header.textContent = sign.substring(0, 3); // Abbreviate
            header.title = sign;
            gridContainer.appendChild(header);
        });

        // Rows
        ZODIAC_SIGNS.forEach(rowSign => {
            // Header Column (Left)
            const rowHeader = document.createElement('div');
            rowHeader.className = 'matrix-cell matrix-header-row';
            rowHeader.textContent = rowSign.substring(0, 3);
            rowHeader.title = rowSign;
            gridContainer.appendChild(rowHeader);

            // Data Cells
            ZODIAC_SIGNS.forEach(colSign => {
                const cell = document.createElement('div');
                const score = COMPATIBILITY_DATA[rowSign][colSign][currentType];

                cell.className = `matrix-cell data-cell ${getScoreClass(score)}`;
                cell.textContent = score;
                cell.dataset.row = rowSign;
                cell.dataset.col = colSign;
                cell.dataset.score = score;

                cell.addEventListener('click', () => showDetails(rowSign, colSign, score));

                gridContainer.appendChild(cell);
            });
        });
    }

    function getScoreClass(score) {
        if (score >= 80) return 'match-high';
        if (score >= 60) return 'match-medium';
        return 'match-low';
    }

    function showDetails(sign1, sign2, score) {
        detailsPanel.classList.add('visible');
        detailsTitle.textContent = `${sign1} + ${sign2}`;
        detailsScore.textContent = `${score}%`;
        detailsScore.className = `details-score ${getScoreClass(score)}`;

        // Dynamic description based on score and type
        let desc = '';
        if (currentType === 'love') {
            if (score >= 90) desc = "A match made in heaven! Soulmate potential.";
            else if (score >= 70) desc = "Strong chemistry and deep connection.";
            else if (score >= 50) desc = "Good potential, but requires effort.";
            else desc = "Challenging match, but opposites can attract!";
        } else if (currentType === 'friendship') {
            if (score >= 90) desc = "Best friends forever! You get each other perfectly.";
            else if (score >= 70) desc = "Great pals with lots of fun times.";
            else if (score >= 50) desc = "Casual friends, good for hanging out occasionally.";
            else desc = "Might not see eye to eye, but can learn from each other.";
        } else { // work
            if (score >= 90) desc = "Power team! You can achieve anything together.";
            else if (score >= 70) desc = "Productive partnership with good synergy.";
            else if (score >= 50) desc = "Can work together if roles are clearly defined.";
            else desc = "Different working styles might cause friction.";
        }
        detailsDesc.textContent = desc;

        // Scroll to details on mobile
        if (window.innerWidth < 768) {
            detailsPanel.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Filter Event Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update type and re-render
            currentType = btn.dataset.type;
            renderGrid();

            // Hide details panel when switching views
            detailsPanel.classList.remove('visible');
        });
    });

    // Initial Render
    renderGrid();
});
