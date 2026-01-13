const app = {
    init() {
        console.log('JV Corp Digital Card Initialized');
        // Handle back button overrides if necessary
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.section) {
                this.navigateTo(event.state.section, false);
            } else {
                this.navigateTo('hub', false);
            }
        });
    },

    currentSection: 'hub',

    navigateTo(sectionId, pushState = true) {
        console.log(`Navigating to: ${sectionId}`);

        // Hide all sections
        document.querySelectorAll('.page-section').forEach(el => {
            el.classList.remove('active');
        });

        // Show target section
        const target = document.getElementById(sectionId);
        if (target) {
            target.classList.add('active');
            this.currentSection = sectionId;

            // Scroll to top
            window.scrollTo(0, 0);

            // Handle URL state
            if (pushState) {
                history.pushState({ section: sectionId }, '', `#${sectionId}`);
            }

            // Navbar Logic
            const nav = document.getElementById('bottom-nav');
            if (sectionId === 'hub') {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
            }
        }
    }
};

// Global Exposure for inline clicks
window.navigateTo = (id) => app.navigateTo(id);

window.updateBeforeAfter = (val) => {
    const foreground = document.getElementById('ba-foreground');
    const button = document.getElementById('ba-button');
    if (foreground && button) {
        foreground.style.width = `${val}%`;
        button.style.left = `${val}%`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();

    // Check initial hash
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        app.navigateTo(hash, false);
    }
});
