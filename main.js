tailwind.config = {
  theme: {
    extend: {
      colors: {
        danger: "#be2600ff",
        "black-glass": "#0000008e",
        "ghost-white": "#F9FAFB",
        "footer-bg": "#000000e8",
        "icon-bg": "#272626d4",
        "sec-title":"#f9fafb8a"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        logotranslate: {
          "0%, 100%": {
            transform: "translateY(-15px)",
            filter: "brightness(0.9)",
          },
          "50%": { transform: "translateY(20px)" },
        },
        "preloader-animation": {
          "0% ,100%": { filter: "brightness(0.2)" },
          "50%": { filter: "brightness(1)" },
        },
      },
      animation: {
        logotranslate: "logotranslate 2s infinite ease-in-out",
        "preloader-animation": "preloader-animation 1.5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
