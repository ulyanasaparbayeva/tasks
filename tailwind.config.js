module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      container: {
        center: true,
        screens: {
          sm: '450px',
          md: '768px',
          lg: '1090px',
          xl: '1264px',
        },
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1rem",
          xl: "1rem",
        },
      },
      colors: {
        "primary": "#FFD700",
        "primary-2":"#F8F8F8",
        "primary-3":"#EEE",
        "primary-4":"#142D3F",
      },
      fontSize: {
        "custom-size": "40px",
        "custom-size-2": "26px",
        "custom-size-3": "10px"
      },
      width: {
      "custom-width":"156px",
        "custom-width-1":"151px"
      },
      borderRadius: {
        "custom-border":"30px",
        "custom-border-2":"3px"
      },
      height:{
        "custom-height":"53px",
        "custom-height-2":"170px"
      },
      gap: {
        "custom-gap":"50px",
        "custom-gap-3":"463px",
        "custom-gap-2":"110px"
      },
      padding: {
        "custom-top":"38px",
        "custom-top-2":"19px",
        "custom-top-3":"50px",
        "custom-top-4":"19px",
        "custom-top-5":"76px",
        "custom-bottom":"38px",
        "custom-left":"74px",
        "custom-bottom":"166px"
      }

    },

  },
};

