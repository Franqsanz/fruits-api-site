module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb", "prettier", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-alert": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/react-in-jsx-scope": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-cycle": 0,
    "no-unused-vars": 1,
    "import/prefer-default-export": 0
  },
};
