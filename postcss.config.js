import postcssNesting from "postcss-nesting";

export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": postcssNesting,
    tailwindcss: {},
    autoprefixer: {},
  },
};
