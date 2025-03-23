// Initial influencer data
const influencers = [
    {
        id: 1,
        name: "wacaflow",
        handle: "@wacaflow",
        twitterUrl: "https://x.com/wacaflow",
        profileImage: "images/influencers/waca.jpg", 
        tags: ["Crypto"],
        media: [
            { type: "image", url: "images/portfolio/wacaflow/ava.jpg", description: "Custom avatar for X profile" },
            { type: "video", url: "images/portfolio/wacaflow/gm.mp4", description: "Animated promo for GM" },
            { type: "video", url: "images/portfolio/wacaflow/gn.mp4", description: "Animated promo for GN" },
            { type: "video", url: "images/portfolio/wacaflow/bullish.mp4", description: "Animated promo for BULLISH" },
            { type: "video", url: "images/portfolio/wacaflow/dips.mp4", description: "Animated promo for BEARISH" },
            { type: "video", url: "images/portfolio/wacaflow/SGA1.mp4", description: "Animated promo for Solana" },
            { type: "video", url: "images/portfolio/wacaflow/SGA2.mp4", description: "Animated promo for Solana" },
            { type: "video", url: "images/portfolio/wacaflow/SGA3.mp4", description: "Animated promo for Solana" },
            { type: "video", url: "images/portfolio/wacaflow/hustle.mp4", description: "Animated promo for Hustle" },
            { type: "video", url: "images/portfolio/wacaflow/focus.mp4", description: "Animated promo for Focus" },
            { type: "video", url: "images/portfolio/wacaflow/candle.mp4", description: "Animated promo for Green Candle" }
        ]
    },

    {
        id: 2,
        name: "0xDeflect",
        handle: "@0xDeflect",
        twitterUrl: "https://x.com/0xDeflect",
        profileImage: "images/influencers/0xDeflect.jpg", 
        tags: ["Crypto", "Web3", "BlueMoonW3"],
        media: [
            { type: "video", url: "images/portfolio/0xDeflect/GM.mp4", description: "Animated promo for GM" },
            { type: "video", url: "images/portfolio/0xDeflect/GN.mp4", description: "Animated promo for GN" },
            { type: "video", url: "images/portfolio/0xDeflect/GN2.mp4", description: "Animated promo for GM" }
        ]
    },

    {
        id: 3,
        name: "rasmr_eth",
        handle: "@rasmr_eth",
        twitterUrl: "https://x.com/rasmr_eth",
        profileImage: "images/influencers/rasmr_eth.jpg", 
        tags: ["Crypto", "DeFi", "NovaTradeBot"],
        media: [
            { type: "image", url: "images/portfolio/rasmr/rasmr_eth_1.jpg", description: "Custom banner for crypto collection" },
            { type: "image", url: "images/portfolio/rasmr/dance1.mp4", description: "Custom banner for crypto collection" },
            { type: "image", url: "images/portfolio/rasmr/dance2.mp4", description: "Custom banner for crypto collection" },
            { type: "video", url: "images/portfolio/rasmr/placeholder_video.mp4", description: "Animated promo for DeFi project" }
        ]
    }
    // To add a new influencer, copy the object above and paste it here
];

// DOM elements
const orderBtn = document.getElementById('orderBtn');
const orderModal = document.getElementById('orderModal');
const closeOrderModal = document.getElementById('orderClose');
const influencerCardsContainer = document.getElementById('influencerGrid');
const mediaGalleryContainer = document.getElementById('mediaGallery');
const closeGallery = document.getElementById('closeGallery');
const mediaGalleryContent = document.getElementById('mediaGrid');
const mediaGalleryTitle = document.getElementById('galleryTitle');

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    renderInfluencerCards();
    initializeEventListeners();
    
    // Add animation to elements
    animateOnScroll();
    
    // Animate banner text on load
    const bannerHighlight = document.querySelector('.banner-highlight');
    if (bannerHighlight) {
        bannerHighlight.classList.add('fade-in');
    }
    
    // Add decorative animations
    animateElements();
});

// Add decorative animations
function animateElements() {
    // Apply random positions and delays to pixel decorations
    document.querySelectorAll('.pixel-decoration').forEach((element, index) => {
        const randomX = Math.floor(Math.random() * 80);
        const randomY = Math.floor(Math.random() * 80);
        const randomDelay = Math.random() * 5;
        const randomDuration = 5 + Math.random() * 5;
        
        element.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
        
        // Change position based on index to ensure they're spread out
        if (index === 0) {
            element.style.top = `${randomY}px`;
            element.style.left = `${randomX}px`;
        } else if (index === 1) {
            element.style.top = `${randomY}px`;
            element.style.right = `${randomX}px`;
        } else if (index === 2) {
            element.style.bottom = `${randomY}px`;
            element.style.left = `${randomX}px`;
        } else {
            element.style.bottom = `${randomY}px`;
            element.style.right = `${randomX}px`;
        }
    });
}

// Add scroll animation
function animateOnScroll() {
    const elements = document.querySelectorAll('.influencer-card, .section-title, .cta-section, .banner-text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        // Add opacity 0 initially
        element.style.opacity = '0';
        observer.observe(element);
    });
}

function initializeEventListeners() {
    // Order modal
    if (orderBtn) {
        orderBtn.addEventListener('click', () => {
            orderModal.style.display = 'block';
        });
    }
    
    if (closeOrderModal) {
        closeOrderModal.addEventListener('click', () => {
            orderModal.style.display = 'none';
        });
    }
    
    // Gallery close
    if (closeGallery) {
        closeGallery.addEventListener('click', (e) => {
            e.preventDefault();
            mediaGalleryContainer.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    }
    
    // Close modals when clicking outside of them
    window.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            orderModal.style.display = 'none';
        }
        if (e.target === mediaGalleryContainer) {
            mediaGalleryContainer.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
}

// Functions
function renderInfluencerCards() {
    influencerCardsContainer.innerHTML = '';
    
    influencers.forEach((influencer, index) => {
        const card = document.createElement('div');
        card.className = 'influencer-card';
        card.dataset.influencerId = influencer.id;
        
        // Add a small delay for each card to create a staggered effect
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${influencer.profileImage}" alt="${influencer.name}" class="influencer-image" onerror="this.src='images/influencers/placeholder.jpg'">
            </div>
            <div class="influencer-info">
                <h3 class="influencer-name">${influencer.name}</h3>
                <a href="${influencer.twitterUrl}" target="_blank" class="influencer-handle">${influencer.handle}</a>
                <div class="tags">
                    ${influencer.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Set up click event for the card
        card.addEventListener('click', (e) => {
            if (!e.target.closest('a')) {
                openMediaGallery(influencer);
            }
        });
        
        influencerCardsContainer.appendChild(card);
    });
}

function openMediaGallery(influencer) {
    // Update gallery title
    mediaGalleryTitle.textContent = `${influencer.name} PORTFOLIO`;
    
    // Clear previous content
    mediaGalleryContent.innerHTML = '';
    
    // Populate with influencer media
    influencer.media.forEach((item, index) => {
        const mediaItem = document.createElement('div');
        mediaItem.className = 'media-item';
        mediaItem.style.opacity = '0';
        mediaItem.style.transform = 'translateY(20px)';
        mediaItem.style.transition = 'all 0.3s ease';
        mediaItem.style.transitionDelay = `${index * 0.1}s`;
        
        if (item.type === 'image') {
            mediaItem.innerHTML = `
                <div class="media-item-inner">
                    <img class="media-content" src="${item.url}" alt="${item.description}" onerror="this.src='images/portfolio/placeholder_image.jpg'">
                    <p class="media-description">${item.description}</p>
                </div>
            `;
        } else if (item.type === 'video') {
            mediaItem.innerHTML = `
                <div class="media-item-inner">
                    <div class="video-container">
                        <video class="media-content" preload="metadata" playsinline loop>
                            <source src="${item.url}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div class="play-button-overlay">
                            <div class="play-icon"></div>
                        </div>
                    </div>
                    <p class="media-description">${item.description}</p>
                </div>
            `;
            
            // Get video elements
            const videoContainer = mediaItem.querySelector('.video-container');
            const video = mediaItem.querySelector('video');
            const playButton = mediaItem.querySelector('.play-button-overlay');
            
            // Make video element properly styled
            if (video) {
                // Clean up styling to match image cards
                video.style.width = '100%';
                video.style.height = '100%';
                video.style.objectFit = 'contain';
                
                // Load initial frame immediately so video is visible while paused
                video.addEventListener('loadeddata', function() {
                    // Show the first frame by seeking to a specific time
                    if (video.readyState >= 2) {
                        video.currentTime = 0.1;
                    }
                });
                
                // Handle video click to play/pause
                videoContainer.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    if (video.paused) {
                        // Play video
                        video.play().catch(err => {
                            console.error('Video playback failed:', err);
                        });
                        playButton.classList.add('hidden');
                    } else {
                        // Pause video
                        video.pause();
                        playButton.classList.remove('hidden');
                    }
                });
                
                // Show play button when video ends
                video.addEventListener('ended', function() {
                    playButton.classList.remove('hidden');
                    video.currentTime = 0;
                });
            }
        }
        
        mediaGalleryContent.appendChild(mediaItem);
        
        // Trigger a reflow to enable the animation
        setTimeout(() => {
            mediaItem.style.opacity = '1';
            mediaItem.style.transform = 'translateY(0)';
        }, 50);
    });
    
    // Show the gallery with a fade-in effect
    mediaGalleryContainer.style.display = 'flex';
    mediaGalleryContainer.style.opacity = '0';
    
    // Prevent scrolling the main content but allow gallery scrolling
    document.body.style.overflow = 'hidden';
    mediaGalleryContainer.style.overflow = 'auto';
    
    // Reset scroll position to top
    mediaGalleryContainer.scrollTop = 0;
    
    // Trigger animation
    setTimeout(() => {
        mediaGalleryContainer.style.opacity = '1';
        mediaGalleryContainer.style.transition = 'opacity 0.3s ease';
    }, 50);
}

// Theme Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const root = document.documentElement;
    
    // Theme color configurations
    const themes = {
        degen: {
            primary: '#FFC107', // Gold
            primaryLight: '#FFD54F', // Light Gold
            accent1: '#FF9800', // Orange
            accent2: '#4CAF50', // Green
            secondary: '#2C3E50', // Dark Blue
            secondaryLight: '#34495E', // Darker Blue
            accent: '#FFEB3B', // Yellow
            success: '#1B5E20', // Dark Green
            background: '#0F1015', // Very dark blue-black
            backgroundPattern: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='2' fill='%23FFC107' opacity='0.15' x='0' y='0'/%3E%3Crect width='2' height='2' fill='%23FF9800' opacity='0.1' x='6' y='6'/%3E%3Crect width='2' height='2' fill='%234CAF50' opacity='0.1' x='12' y='12'/%3E%3Crect width='2' height='2' fill='%232C3E50' opacity='0.1' x='18' y='18'/%3E%3C/svg%3E\")"
        },
        dollcore: {
            primary: '#EC407A', // Pink
            primaryLight: '#F48FB1', // Light Pink
            accent1: '#9C27B0', // Purple
            accent2: '#7E57C2', // Light Purple
            secondary: '#3F51B5', // Indigo
            secondaryLight: '#7986CB', // Light Indigo
            accent: '#FF80AB', // Pink Accent
            success: '#D81B60', // Dark Pink
            background: '#0F0A12', // Very dark purple-black
            backgroundPattern: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='2' fill='%23EC407A' opacity='0.15' x='0' y='0'/%3E%3Crect width='2' height='2' fill='%239C27B0' opacity='0.1' x='6' y='6'/%3E%3Crect width='2' height='2' fill='%233F51B5' opacity='0.1' x='12' y='12'/%3E%3Crect width='2' height='2' fill='%237E57C2' opacity='0.1' x='18' y='18'/%3E%3C/svg%3E\")"
        },
        yacht: {
            primary: '#1E88E5', // Blue
            primaryLight: '#64B5F6', // Light Blue
            accent1: '#FFC107', // Gold
            accent2: '#03A9F4', // Light Blue
            secondary: '#0D47A1', // Dark Blue
            secondaryLight: '#1976D2', // Medium Blue
            accent: '#FFCA28', // Amber
            success: '#0288D1', // Blue
            background: '#0A101B', // Dark navy
            backgroundPattern: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='2' fill='%231E88E5' opacity='0.15' x='0' y='0'/%3E%3Crect width='2' height='2' fill='%23FFC107' opacity='0.1' x='6' y='6'/%3E%3Crect width='2' height='2' fill='%2303A9F4' opacity='0.1' x='12' y='12'/%3E%3Crect width='2' height='2' fill='%230D47A1' opacity='0.1' x='18' y='18'/%3E%3C/svg%3E\")"
        },
        y2k: {
            primary: '#FF4081', // Pink
            primaryLight: '#FF80AB', // Light Pink
            accent1: '#673AB7', // Purple
            accent2: '#00BCD4', // Cyan
            secondary: '#9C27B0', // Purple
            secondaryLight: '#BA68C8', // Light Purple
            accent: '#40C4FF', // Light Blue
            success: '#00B0FF', // Blue
            background: '#0D0F17', // Dark background with blue tint
            backgroundPattern: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='2' fill='%23FF4081' opacity='0.15' x='0' y='0'/%3E%3Crect width='2' height='2' fill='%23673AB7' opacity='0.1' x='6' y='6'/%3E%3Crect width='2' height='2' fill='%2300BCD4' opacity='0.1' x='12' y='12'/%3E%3Crect width='2' height='2' fill='%239C27B0' opacity='0.1' x='18' y='18'/%3E%3C/svg%3E\")"
        },
        ape: {
            primary: '#608B30', // Darker BAYC Green
            primaryLight: '#7BA636', // Muted jungle green
            accent1: '#D68227', // Muted BAYC yellow/banana
            accent2: '#3955C4', // Darker BAYC blue
            secondary: '#5D4037', // Darker Brown
            secondaryLight: '#795548', // Brown
            accent: '#BF9B30', // Darker Gold
            success: '#1B5E20', // Very Dark green
            background: '#0A0C11', // Darker BAYC background
            backgroundPattern: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='2' fill='%235D4037' opacity='0.15' x='0' y='0'/%3E%3Crect width='2' height='2' fill='%23608B30' opacity='0.1' x='6' y='6'/%3E%3Crect width='2' height='2' fill='%23D68227' opacity='0.1' x='12' y='12'/%3E%3Crect width='2' height='2' fill='%233955C4' opacity='0.1' x='18' y='18'/%3E%3C/svg%3E\")"
        },
        neochibi: {
            primary: '#9C27B0', // Purple
            primaryLight: '#CE93D8', // Light Purple
            accent1: '#E91E63', // Pink
            accent2: '#9575CD', // Light Purple
            secondary: '#7B1FA2', // Dark Purple
            secondaryLight: '#AB47BC', // Medium Purple
            accent: '#F06292', // Pink
            success: '#8E24AA', // Purple
            background: '#0A090F', // Very dark purple-black
            backgroundPattern: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='2' fill='%239C27B0' opacity='0.15' x='0' y='0'/%3E%3Crect width='2' height='2' fill='%23E91E63' opacity='0.1' x='6' y='6'/%3E%3Crect width='2' height='2' fill='%239575CD' opacity='0.1' x='12' y='12'/%3E%3Crect width='2' height='2' fill='%237B1FA2' opacity='0.1' x='18' y='18'/%3E%3C/svg%3E\")"
        }
    };
    
    // Apply theme function
    function applyTheme(theme) {
        const themeColors = themes[theme];
        if (!themeColors) return;
        
        // Update CSS custom properties
        root.style.setProperty('--primary', themeColors.primary);
        root.style.setProperty('--primary-light', themeColors.primaryLight);
        root.style.setProperty('--accent-1', themeColors.accent1);
        root.style.setProperty('--accent-2', themeColors.accent2);
        root.style.setProperty('--secondary', themeColors.secondary);
        root.style.setProperty('--secondary-light', themeColors.secondaryLight);
        root.style.setProperty('--accent', themeColors.accent);
        root.style.setProperty('--success', themeColors.success);
        root.style.setProperty('--bg', themeColors.background);
        root.style.setProperty('--bg-pattern', themeColors.backgroundPattern);
        
        // Update the gradient variables based on the new colors
        root.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.accent1} 100%)`);
        root.style.setProperty('--gradient-secondary', `linear-gradient(135deg, ${themeColors.accent2} 0%, ${themeColors.secondary} 100%)`);
        
        // Update active state for buttons
        themeButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.theme === theme) {
                btn.classList.add('active');
            }
        });
        
        // Create animation for the transition
        document.body.style.animation = 'none';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10);
    }
    
    // Add click event listeners to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.theme;
            applyTheme(theme);
        });
    });
    
    // Apply default theme (if needed)
    const defaultTheme = 'ape'; // Change this to your preferred default
    const activeTheme = document.querySelector('.theme-btn.active');
    if (activeTheme) {
        applyTheme(activeTheme.dataset.theme);
    } else {
        applyTheme(defaultTheme);
    }
});

// Mobile enhancements
function initMobileEnhancements() {
    // Prepare mobile videos for immediate viewing
    const prepareVideosForMobile = () => {
        // Find all video containers
        const videoContainers = document.querySelectorAll('.video-container');
        
        videoContainers.forEach(container => {
            const video = container.querySelector('video');
            const playOverlay = container.querySelector('.play-button-overlay');
            
            if (video) {
                // Make sure video is ready with proper attributes for mobile
                video.setAttribute('playsinline', '');
                video.preload = 'metadata';
                
                // Load first frame for instant preview
                video.addEventListener('loadedmetadata', function() {
                    // Make sure video content is visible initially
                    video.currentTime = 0.1;
                });
                
                // Add special touch handling for mobile
                container.addEventListener('touchend', function(e) {
                    // Only prevent default if the event is cancelable
                    if (e.cancelable) {
                        e.preventDefault();
                    }
                    
                    if (video.paused) {
                        // Play video
                        playOverlay.classList.add('hidden');
                        video.play().catch(err => {
                            console.error('Mobile video playback failed:', err);
                            // Show overlay again if playback fails
                            playOverlay.classList.remove('hidden');
                        });
                    } else {
                        // Pause video
                        video.pause();
                        playOverlay.classList.remove('hidden');
                    }
                });
            }
        });
    };
    
    // Run initially and whenever gallery opens
    prepareVideosForMobile();
    
    // When media gallery opens
    if (typeof mediaGalleryContainer !== 'undefined') {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'style' && 
                    mediaGalleryContainer.style.display === 'flex') {
                    setTimeout(prepareVideosForMobile, 100); // Small delay to ensure DOM is ready
                }
            });
        });
        
        observer.observe(mediaGalleryContainer, { attributes: true });
    }

    // Ensure proper scrolling behavior on mobile
    document.addEventListener('touchmove', function(e) {
        if (mediaGalleryContainer.style.display === 'flex') {
            // Allow scrolling within the gallery
            if (!e.target.closest('.media-gallery-container') && e.cancelable) {
                e.preventDefault();
            }
        }
    }, { passive: false });

    // Fix iOS scroll to top issue
    closeGallery.addEventListener('click', function(e) {
        if (e.cancelable) {
            e.preventDefault();
        }
        
        // Stop any playing videos when gallery closes
        const videos = mediaGalleryContent.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
        });
        
        mediaGalleryContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
        window.scrollTo(0, window.scrollY); // Maintain scroll position
    });
}

// Call the mobile enhancements function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Existing initializations
    renderInfluencerCards();
    initializeEventListeners();
    animateOnScroll();
    
    // Add mobile-specific enhancements
    initMobileEnhancements();
    
    // Animate banner text on load
    const bannerHighlight = document.querySelector('.banner-highlight');
    if (bannerHighlight) {
        bannerHighlight.classList.add('fade-in');
    }
    
    // Add decorative animations
    animateElements();
});
