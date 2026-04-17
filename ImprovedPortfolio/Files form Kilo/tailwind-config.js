/* 
 * ===================================================================
 * TAILWIND CONFIGURATION FILE
 * ===================================================================
 * Custom theme configuration for the portfolio website
 * Includes custom colors, fonts, and spacing values
 */

tailwind.config = {
    /* Dark mode using class strategy */
    darkMode: "class",
    
    /* Theme customizations */
    theme: {
        extend: {
            /* Custom color palette */
            colors: {
                /* Primary colors (Cyan theme) */
                "primary": "#8ff5ff",
                "primary-dim": "#00deec",
                "primary-fixed": "#00eefc",
                "primary-fixed-dim": "#00deec",
                "on-primary": "#005d63",
                "on-primary-container": "#005359",
                "on-primary-fixed": "#003f43",
                "on-primary-fixed-variant": "#005e64",
                "primary-container": "#00eefc",
                "inverse-primary": "#006a71",
                
                /* Secondary colors */
                "secondary": "#00dcfc",
                "secondary-dim": "#00cdeb",
                "secondary-fixed": "#55e3ff",
                "secondary-fixed-dim": "#00d6f5",
                "on-secondary": "#004955",
                "on-secondary-container": "#ebfbff",
                "on-secondary-fixed": "#003a44",
                "on-secondary-fixed-variant": "#005967",
                "secondary-container": "#006878",
                
                /* Tertiary colors (Blue theme) */
                "tertiary": "#65afff",
                "tertiary-dim": "#4aa2f9",
                "tertiary-fixed": "#72b5ff",
                "tertiary-fixed-dim": "#51a7fe",
                "on-tertiary": "#002e52",
                "on-tertiary-container": "#00213e",
                "on-tertiary-fixed": "#001930",
                "on-tertiary-fixed-variant": "#003b68",
                "tertiary-container": "#4aa2f9",
                
                /* Surface colors (Dark theme backgrounds) */
                "surface": "#0e0e0f",
                "surface-dim": "#0e0e0f",
                "surface-bright": "#2c2c2d",
                "surface-container": "#1a191b",
                "surface-container-high": "#201f21",
                "surface-container-highest": "#262627",
                "surface-container-low": "#131314",
                "surface-container-lowest": "#000000",
                "surface-variant": "#262627",
                "surface-tint": "#8ff5ff",
                
                /* Background & On colors */
                "background": "#0e0e0f",
                "on-background": "#ffffff",
                "on-surface": "#ffffff",
                "on-surface-variant": "#adaaab",
                
                /* Error colors */
                "error": "#ff716c",
                "error-dim": "#d7383b",
                "error-container": "#9f0519",
                "on-error": "#490006",
                "on-error-container": "#ffa8a3",
                
                /* Outline colors */
                "outline": "#767576",
                "outline-variant": "#484849",
                
                /* Inverse colors */
                "inverse-surface": "#fcf8f9",
                "inverse-on-surface": "#565556",
            },
            
            /* Border radius settings */
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            
            /* Custom font families */
            fontFamily: {
                "headline": ["Space Grotesk", "sans-serif"],
                "body": ["Manrope", "sans-serif"],
                "label": ["Inter", "sans-serif"]
            },
            
            /* Custom cyan colors */
            cyan: {
                "400": "#00dcfc",
                "500": "#00b8c4"
            }
        },
    },
}