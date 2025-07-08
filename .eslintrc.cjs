// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },

  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    jsxPragma: "react",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    //eslint
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-var": "error", // Allows `let` and `const` declarations instead of `var`
    "no-unexpected-multiline": "off", // 禁止出现多行
    "no-useless-escape": "error", // Prevents common escape sequences

    //typeScript
    "@typescript-eslint/no-unused-vars": "error", // Prohibit unused variable warnings
    //"@typescript-eslint/ban-ts-comment": "off", // Prohibit the use of the ts-comment rules from Type
    "@tycpt-eslint/no-explicit-any": "off", // Prohibit explicit type annotations
    "@typescript-eslint/no-non-null-assertion": "off", // Prohibit `!` operator
    "@typescript-eslint/non-namespace": "off", // Prohibit namespace keywords
    "typescript-eslint/semi": "off", // Prohibit semicolons
    "@typescript-eslint/prefer-ts-expect-error": "off", // Prohibit expect error

    // Vue
    "vue/multi-word-component-names": "off", // Prohibit using multi-word component names
    "vue/script-setup-uses-vars": "error", // Prohibit using vars from setup
    "vue/no-mutating-props": "error", // Prohibit mutating props in Vue components
    "vue/attribute-hyphenation": "off", // Prohibit hyphens in attribute names
  },
};
