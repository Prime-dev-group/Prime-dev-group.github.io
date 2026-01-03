/**
 * Share Utilities for Astromage
 * Handles social media sharing and image generation
 */

// Generate shareable image using Canvas API
function generateShareImage(data) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // 1. Calculate Required Height
    // We need a temporary context to measure text
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    const maxWidth = 1080 - 160; // 1080 width - padding

    // Header height (Icon + Title)
    let contentHeight = 400;

    // Measure Text Height
    let textHeight = 0;

    // Helper to measure text height without drawing
    function measureTextHeight(ctx, text, maxWidth, fontSize, font) {
        ctx.font = `${fontSize}px ${font}`;
        const words = text.split(' ');
        let line = '';
        let lineCount = 1;

        for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + ' ';
            const metrics = ctx.measureText(testLine);
            if (metrics.width > maxWidth && i > 0) {
                line = words[i] + ' ';
                lineCount++;
            } else {
                line = testLine;
            }
        }
        // Approx height: lines * line-height (assuming slightly more than font size)
        return lineCount * (fontSize * 1.5);
    }

    if (typeof data.text === 'object') {
        const profile = data.text;
        // Estimate height for profile sections (approximate logic)
        // Traits
        if (profile.traits) textHeight += measureTextHeight(tempCtx, profile.traits, maxWidth, 40, '"Inter", sans-serif') + 40;
        // Strengths
        if (profile.strengths) textHeight += 100 + measureTextHeight(tempCtx, profile.strengths, maxWidth, 40, '"Inter", sans-serif');
        // Weaknesses
        if (profile.weaknesses) textHeight += 100 + measureTextHeight(tempCtx, profile.weaknesses, maxWidth, 40, '"Inter", sans-serif');
        // Compatibility
        if (profile.compatibility) textHeight += 100 + measureTextHeight(tempCtx, profile.compatibility.replace(/\*\*/g, '').replace(/\n/g, ' '), maxWidth, 40, '"Inter", sans-serif');
    } else if (data.text) {
        // Daily/Yearly Text
        textHeight += measureTextHeight(tempCtx, data.text, maxWidth, 42, '"Inter", sans-serif') + 60;
    }

    if (data.score !== undefined) contentHeight += 160;

    const footerHeight = 250; // Branding + Link

    // Set Canvas Size
    canvas.width = 1080;
    // Base height 1350, but expand if text is long
    canvas.height = Math.max(1350, contentHeight + textHeight + footerHeight);

    // 2. Draw Background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1b2735');
    gradient.addColorStop(1, '#090a0f');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const overlayGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    overlayGradient.addColorStop(0, 'rgba(157, 78, 221, 0.2)');
    overlayGradient.addColorStop(1, 'rgba(255, 215, 0, 0.05)');
    ctx.fillStyle = overlayGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 3. Draw Content
    let y = 150;

    // Icon
    if (data.icon) {
        // Fallback font stack with standard system fonts
        ctx.font = '150px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff'; // Ensure white fill for non-colored glyphs
        ctx.fillText(data.icon, canvas.width / 2, y);
        y += 120;
    }

    // Title
    ctx.font = 'bold 70px "Cinzel", serif';
    ctx.fillStyle = '#ffd700';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(data.title, canvas.width / 2, y);
    y += 100;

    // Main Content
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    const lineHeight = 50; /* slightly relaxed line height */

    const wrapText = (text, x, y, maxWidth, lineHeight, fontSize, font, color = '#ffffff') => {
        ctx.font = `${fontSize}px ${font}`;
        ctx.fillStyle = color;
        const words = text.split(' ');
        let line = '';
        let currentY = y;

        for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + ' ';
            const metrics = ctx.measureText(testLine);
            if (metrics.width > maxWidth && i > 0) {
                ctx.fillText(line, x, currentY);
                line = words[i] + ' ';
                currentY += lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, currentY);
        return currentY + lineHeight;
    };

    if (typeof data.text === 'object') {
        const profile = data.text;

        if (profile.traits) {
            y = wrapText(profile.traits, canvas.width / 2, y, maxWidth, 50, 40, '"Inter", sans-serif', '#e0e0e0');
            y += 40;
        }

        const drawSection = (title, content, color) => {
            if (!content) return;
            ctx.fillStyle = color;
            ctx.font = 'bold 45px "Cinzel", serif';
            ctx.fillText(title, canvas.width / 2, y);
            y += 60;
            y = wrapText(content, canvas.width / 2, y, maxWidth, 50, 40, '"Inter", sans-serif');
            y += 40;
        };

        drawSection('Strengths', profile.strengths, '#ffd700');
        drawSection('Weaknesses', profile.weaknesses, '#ff6b9d');

        if (profile.compatibility) {
            const cleanComp = profile.compatibility.replace(/\*\*/g, '').replace(/\n/g, ' ');
            drawSection('Compatibility', cleanComp, '#9d4edd');
        }

    } else if (data.text) {
        // Daily / Yearly / General Text
        y = wrapText(data.text, canvas.width / 2, y, maxWidth, 60, 42, '"Inter", sans-serif');
    }

    // Score (for Crush Compatibility)
    if (data.score !== undefined) {
        y += 80; // Add breathing room between text and score
        ctx.font = 'bold 150px "Inter", sans-serif'; // Bigger score
        const scoreGradient = ctx.createLinearGradient(0, y, 0, y + 150);
        scoreGradient.addColorStop(0, '#ff6b9d');
        scoreGradient.addColorStop(1, '#ffd700');
        ctx.fillStyle = scoreGradient;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(data.score + '%', canvas.width / 2, y);
    }

    // Add Branding & App Link at the bottom
    // Place footer at the bottom margin
    const bottomY = canvas.height - 180;

    ctx.font = 'bold 45px "Cinzel", serif';
    ctx.fillStyle = '#ffd700';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic'; // Reset baseline
    ctx.fillText('✨ Astromage ✨', canvas.width / 2, bottomY);

    // Split "Download App" and URL to prevent cropping
    ctx.font = '30px "Inter", sans-serif';
    ctx.fillStyle = '#e0e0e0';
    ctx.fillText('Download App:', canvas.width / 2, bottomY + 60);

    ctx.font = '24px "Inter", sans-serif'; // Smaller for URL to ensure it fits (1080px wide)
    ctx.fillStyle = '#a0a0c0';
    const cleanLink = APP_LINK;
    ctx.fillText(cleanLink, canvas.width / 2, bottomY + 100);

    return canvas;
}

// Download image
function downloadImage(canvas, filename) {
    const link = document.createElement('a');
    link.download = filename || 'astromage-share.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Share using Web Share API (mobile-friendly)
async function shareViaWebAPI(data) {
    if (!navigator.share) {
        return false;
    }

    try {
        await navigator.share({
            title: data.title,
            text: data.text,
            url: window.location.href
        });
        return true;
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.error('Share failed:', err);
        }
        return false;
    }
}

// Share to Twitter
function shareToTwitter(text, url) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url || window.location.href)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
}

// Share to Facebook
function shareToFacebook(url) {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url || window.location.href)}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
}

// Copy to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        } catch (err) {
            document.body.removeChild(textArea);
            return false;
        }
    }
}

// App Link Constant
const APP_LINK = 'https://play.google.com/store/apps/details?id=com.prime.astromage';

// Main share function
async function shareContent(options) {
    const {
        type, // 'horoscope', 'compatibility', 'general'
        title,
        text,
        icon,
        score,
        method // 'web', 'twitter', 'facebook', 'copy', 'download'
    } = options;

    // Generate shareable text string for Copy/Social methods
    let textContent = text;
    if (typeof text === 'object') {
        const cleanComp = text.compatibility ? text.compatibility.replace(/\*\*/g, '').replace(/\n/g, ' ') : '';
        // Create a nice formatted string for social/copy
        textContent = `${text.traits || ''}\n\nStrengths: ${text.strengths}\n\nWeaknesses: ${text.weaknesses}\n\nCompatibility: ${cleanComp}`;
    }

    const shareText = `${title}\n\n${textContent}\n\n📲 Download the app: ${APP_LINK}\n\n✨ Discover your cosmic guidance at Astromage!`;

    // Try Web Share API first on mobile
    if (method === 'web') {
        const shared = await shareViaWebAPI({
            title,
            text: shareText,
            url: APP_LINK
        });
        if (shared) return { success: true, method: 'web' };
    }

    switch (method) {
        case 'twitter':
            shareToTwitter(shareText, APP_LINK);
            return { success: true, method: 'twitter' };

        case 'facebook':
            shareToFacebook(APP_LINK);
            return { success: true, method: 'facebook' };

        case 'copy':
            const copied = await copyToClipboard(shareText);
            return { success: copied, method: 'copy' };

        case 'download':
            // For download, generateShareImage handles the object logic directly
            const canvas = generateShareImage({ title, text, icon, score });
            downloadImage(canvas, `astromage-${type}-${Date.now()}.png`);
            return { success: true, method: 'download' };

        default:
            return { success: false, error: 'Unknown share method' };
    }
}

// Show share notification
function showShareNotification(message, success = true) {
    const notification = document.createElement('div');
    notification.className = `share-notification ${success ? 'success' : 'error'}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => notification.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
