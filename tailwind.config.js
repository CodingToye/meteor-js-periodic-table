/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./imports/ui/**/*.{js,jsx,ts,tsx}", "./client/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f2651d",
        blocks: {
          string: {
            base: "#71a7a7",
            comp: "#588D8D",
            highlight: "#fcc54e",
          },
          number: {
            base: "#fcc54e",
            comp: "#FBB51C",
            highlight: "#a46d8d",
          },
          array: {
            base: "#a46d8d",
            comp: "#895573",
            highlight: "#fcc54e",
          },
          object: {
            base: "#aebb8d",
            comp: "#97A86D",
            highlight: "#fcc54e",
          },
          async: {
            base: "#ef7f2e",
            comp: "#D96511",
            highlight: "#fcc54e",
          },
        },
        neutral: {
          paleGrey: "#f1f0f5",
          lightGrey: "#b0afb2",
          midGrey: "#2e2e38",
          darkGrey: "#030300",
        },
        black: "#000000",
        white: "#ffffff",
        failure: "#e56962",
        warning: "#ef842e",
        success: "#0bc144",
      },
      size: {
        modal: "30rem",
      },
      fontSize: {
        micro: "8px",
      },
      fontFamily: {
        sans: ['"Roboto",sans-serif'],
        code: ['"Inconsolata"'],
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      boxShadow: {
        "soft-primary-outline": "0 0 10px 2px #f2651d",
        "soft-secondary-outline": "inset 0 0 1px 1px rgba(255,255,255,.4)",
      },
      gridTemplateColumns: {
        blocks: "repeat(auto-fit, minmax(144px, 1fr))",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
      animation: {
        smoothPulse: "smoothPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-down": "fade-in-down 0.5s ease-out forwards",
        "fade-out-up": "fade-out-up 0.5s ease-out forwards",
        "backdrop-fade-in": "backdrop-fade-in .5s ease-out forwards",
        "backdrop-fade-out": "backdrop-fade-out .5s ease-out forwards",
      },
      keyframes: {
        smoothPulse: {
          "0%, 100%": {opacity: 1},
          "50%": {opacity: 0.6},
        },
        "fade-in-down": {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
        "backdrop-fade-in": {
          from: {opacity: "0"},
          to: {opacity: "1"},
        },
        "backdrop-fade-out": {
          from: {opacity: ".9"},
          to: {opacity: "0"},
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  safelist: [
    "bg-blocks-string-base",
    "bg-blocks-string-comp",
    "bg-blocks-string-highlight",
    "bg-blocks-number-base",
    "bg-blocks-number-comp",
    "bg-blocks-number-highlight",
    "bg-blocks-array-base",
    "bg-blocks-array-comp",
    "bg-blocks-array-highlight",
    "bg-blocks-object-base",
    "bg-blocks-object-comp",
    "bg-blocks-object-highlight",
    "bg-blocks-async-base",
    "bg-blocks-async-comp",
    "bg-blocks-async-highlight",
  ],
  plugins: [],
};
