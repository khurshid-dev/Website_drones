/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
        'xl': {'max': '1250px'}, 
        'lg': {'max': '992px'},
        'md': {'max': '768px'},
        'ss': {'max': '500px'},
        'sm': {'max': '360px'},
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
            bgfooter: '#151515',
            textflex: '#ffffff81',
        },
    },
    },
    plugins: [],
}
