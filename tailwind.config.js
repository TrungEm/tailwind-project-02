/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            boxShadow: {
                "3xl": "0px 10px 50px rgba(0, 0, 0, 0.05)",
                "4xl": "0px 22px 50px rgba(0, 0, 0, 0.05)",
                "5xl": "0px 10px 80px rgba(0, 0, 0, 0.05)",
                "6xl": "0px 12px 80px rgba(0, 0, 0, 0.05)",
                "7xl": "0px 16px 90px rgba(0, 0, 0, 0.05)",
            },
        },
    },
    plugins: [],
};
