/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        albra: ["Albra", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "kompass-blue-40": "#073B5F",
        "kompass-blue-100": "#0A5182",
        "kompass-blue-120": "#073B5F",
        "kompass-blue-140": "#E0E8F7",
      },
      boxShadow: {
        "3xl": "2px 6px 10px 0px #0000000D",
      },
      fontSize: {
        xs: ["12px", "16px"], // font-size: 12px, line-height: 16px
        sm: ["14px", "20px"], // font-size: 14px, line-height: 20px
        base: ["16px", "24px"], // font-size: 16px, line-height: 24px
        lg: ["18px", "28px"], // font-size: 18px, line-height: 28px
        xl: ["20px", "28px"], // font-size: 20px, line-height: 28px
        "2xl": ["24px", "32px"], // font-size: 24px, line-height: 32px
        "3xl": ["30px", "36px"], // font-size: 30px, line-height: 36px
        "4xl": ["36px", "40px"], // font-size: 36px, line-height: 40px
        "5xl": ["48px", "1"], // font-size: 48px, line-height: 1
        "6xl": ["60px", "1"], // font-size: 60px, line-height: 1
        "7xl": ["72px", "1"], // font-size: 72px, line-height: 1
        "8xl": ["96px", "1"], // font-size: 96px, line-height: 1
        "9xl": ["128px", "1"], // font-size: 128px, line-height: 1
      },
      lineHeight: {
        3: "12px", // 0.75rem
        4: "16px", // 1rem
        5: "20px", // 1.25rem
        6: "24px", // 1.5rem
        7: "28px", // 1.75rem
        8: "32px", // 2rem
        9: "36px", // 2.25rem
        10: "40px", // 2.5rem
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "2px",
        1: "4px",
        1.5: "6px",
        2: "8px",
        2.5: "10px",
        3: "12px",
        3.5: "14px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        14: "56px",
        16: "64px",
        20: "80px",
        24: "96px",
        28: "112px",
        32: "128px",
        36: "144px",
        40: "160px",
        44: "176px",
        48: "192px",
        52: "208px",
        56: "224px",
        60: "240px",
        64: "256px",
        72: "288px",
        80: "320px",
        96: "384px",
      },

    },
  },
  plugins: [],
  important: "#abraxas-map-webcomponent",
}

