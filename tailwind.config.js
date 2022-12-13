/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
        'xl': {'max': '1250px'}, 
        'lg': {'max': '992px'},
        'md': {'max': '768px'},
        'ss': {'max': '500px'},
        'sm': {'max': '420px'},
    },

    container: {
        padding: '20px',
        center: true
    },

    extend: {
        colors: {
            lightgreen: '#02E502',
            bgtext: '#FFFFFF33',
            bgcolor: '#181818',
            bgflex: '#1e1d1d',
            bgfooter: '#0a0a0a',
            textflex: '#ffffff81',
            borderform: '#4B4A4A',
            bgline: '#464646',
            submenubg: 'hsl(0deg 0% 4% / 90%);',
            borderdrone: '#464646',
        },
    },
    },
    plugins: [],
}
