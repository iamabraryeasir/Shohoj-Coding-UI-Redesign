/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html", "./pages/*.html"],
    theme: {
        extend: {
            colors: {
                "shohoj-blue": "#4285F3",
                "shohoj-green": "#39C85F",
                "shohoj-red": "#EA4335",
                "shohoj-yellow": "#FABC05",
                "shohoj-black": "#101828",
                "shohoj-gray-bg": "#F8F8F8",
                "shohoj-gradient": "#FABC0512",
            },
            fontFamily: {
                "shohoj-english-light": ["Supreme-Light"],
                "shohoj-english-regular": ["Supreme-Regular"],
                "shohoj-english-medium": ["Supreme-Medium"],
                "shohoj-english-bold": ["Supreme-Bold"],
                "shohoj-bangla": ["Hind Siliguri", "serif"],
                "shohoj-secondary": ["Poppins", "serif"],
            },
        },
    },
    plugins: [],
};
