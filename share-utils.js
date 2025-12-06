/**
 * Share Utilities for Astromage
 * Handles social media sharing and image generation
 */

// Generate shareable image using Canvas API
function generateShareImage(data) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 1200;
    canvas.height = 630; // Optimal for social media

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1b2735');
    gradient.addColorStop(1, '#090a0f');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add overlay gradient
    const overlayGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    overlayGradient.addColorStop(0, 'rgba(157, 78, 221, 0.3)');
    overlayGradient.addColorStop(1, 'rgba(255, 215, 0, 0.1)');
    ctx.fillStyle = overlayGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add icon/emoji if provided
    if (data.icon) {
        ctx.font = 'bold 120px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(data.icon, canvas.width / 2, 150);
    }

    // Add title
    ctx.font = 'bold 60px "Cinzel", serif';
    ctx.fillStyle = '#ffd700';
    ctx.textAlign = 'center';
    ctx.fillText(data.title, canvas.width / 2, data.icon ? 250 : 150);

    // Add main text (wrap if needed)
    ctx.font = '32px "Inter", sans-serif';
    ctx.fillStyle = '#ffffff';
    const maxWidth = canvas.width - 100;
    const lineHeight = 45;
    let y = data.icon ? 320 : 220;

    if (data.text) {
        const words = data.text.split(' ');
        let line = '';

        for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + ' ';
            const metrics = ctx.measureText(testLine);

            if (metrics.width > maxWidth && i > 0) {
                ctx.fillText(line, canvas.width / 2, y);
                line = words[i] + ' ';
                y += lineHeight;

                // Limit to 4 lines
                if (y > 480) {
                    line += '...';
                    break;
                }
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, canvas.width / 2, y);
    }

    // Add score if provided (for compatibility)
    if (data.score !== undefined) {
        ctx.font = 'bold 80px "Inter", sans-serif';
        const scoreGradient = ctx.createLinearGradient(0, y + 80, 0, y + 160);
        scoreGradient.addColorStop(0, '#ff6b9d');
        scoreGradient.addColorStop(1, '#ffd700');
        ctx.fillStyle = scoreGradient;
        ctx.fillText(data.score + '%', canvas.width / 2, y + 120);
    }

    // Add branding
    ctx.font = 'bold 28px "Cinzel", serif';
    ctx.fillStyle = '#ffd700';
    ctx.fillText('✨ Astromage ✨', canvas.width / 2, canvas.height - 40);

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

    // Try Web Share API first on mobile
    if (method === 'web') {
        const shared = await shareViaWebAPI({ title, text });
        if (shared) return { success: true, method: 'web' };
    }

    // Generate shareable text
    const shareText = `${title}\n\n${text}\n\n✨ Discover your cosmic guidance at Astromage!`;

    switch (method) {
        case 'twitter':
            shareToTwitter(shareText);
            return { success: true, method: 'twitter' };

        case 'facebook':
            shareToFacebook();
            return { success: true, method: 'facebook' };

        case 'copy':
            const copied = await copyToClipboard(shareText);
            return { success: copied, method: 'copy' };

        case 'download':
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
