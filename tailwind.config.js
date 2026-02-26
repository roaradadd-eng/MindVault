/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
            },
            colors: {
                accent: {
                    gold: '#FFD700',
                    teal: '#00CED1',
                    purple: '#8A2BE2',
                },
            },
        },
    },
    plugins: [],
}