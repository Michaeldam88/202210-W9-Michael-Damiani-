import { App } from "./components/app.js";


(() => {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            new App();
        } catch (error) {
            console.error(error)
        }
    });
})();
