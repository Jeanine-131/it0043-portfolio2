(() => {
    const SETTINGS_KEY = 'portfolioSettings';

    try {
        const savedSettings = localStorage.getItem(SETTINGS_KEY);

        if (savedSettings !== null) {
            const settings = JSON.parse(savedSettings);

            if (
                settings &&
                typeof settings === 'object' &&
                settings.theme === 'dark'
            ) {
                document.documentElement.classList.add('dark-theme');
            }
        }
    } catch (error) {
        console.warn('Could not restore saved theme. Using light mode.');
    }
})();