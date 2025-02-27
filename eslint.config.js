import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import perfectionist from "eslint-plugin-perfectionist";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  perfectionist.configs["recommended-line-length"],
  eslintPluginPrettierRecommended,
  {
    rules: {
      "padding-line-between-statements": [
        "error",
        { next: ["return", "block-like", "case"], blankLine: "always", prev: "*" },
        { blankLine: "always", prev: "block-like", next: "*" },
        { blankLine: "any", prev: "case", next: "case" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "prettier/prettier": [
        "error",
        {
          arrowParens: "always",
          singleQuote: false,
          printWidth: 120,
          tabWidth: 2,
        },
        {
          usePrettierrc: false,
        },
      ],
      "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          paths: [
            {
              importNames: ["default"],
              name: "react",
            },
          ],
        },
      ],
      "object-curly-newline": [
        "off",
        {
          ObjectPattern: {
            minProperties: 2,
          },
          ObjectExpression: "always",
        },
      ],

      "react/jsx-curly-brace-presence": [
        "error",
        {
          children: "never",
          props: "never",
        },
      ],
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],

      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "object-shorthand": ["error", "properties"],

      "import/no-named-as-default-member": "off",
      "arrow-body-style": ["error", "as-needed"],
      "jsx-quotes": ["error", "prefer-double"],
      "linebreak-style": ["error", "unix"],
      "import/no-named-as-default": "off",
      "react/jsx-boolean-value": "error",

      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "no-unused-vars": "off",

      "no-debugger": "warn",
      "arrow-parens": "off",
      curly: ["error"],
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
