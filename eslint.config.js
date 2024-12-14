import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"], // Target JavaScript and TypeScript files
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser, // Browser environment
        ...globals.node,    // Node.js environment
        ...globals.es2021,  // ES2021 features
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier, // Include Prettier plugin
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // JavaScript recommended rules
      ...tseslint.configs.recommended.rules, // TypeScript recommended rules
      "no-console": "warn", // Example: Warn on console usage
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "off", // Allow `any` usage
      "@typescript-eslint/explicit-function-return-type": "off", // Disable explicit return type rule
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: true,
          trailingComma: "es5",
          printWidth: 80,
          tabWidth: 2,
          bracketSpacing: false, // Add bracketSpacing setting directly here
        },
      ], // Enforce Prettier formatting
    },
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"], // JavaScript-specific settings
    languageOptions: {
      parser: undefined, // Use ESLint's default parser for JS
    },
    rules: {
      "strict": ["error", "never"], // Example: Disallow `'use strict'` as it's handled by modules
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"], // TypeScript-specific settings
    rules: {
      "@typescript-eslint/no-var-requires": "off", // Allow `require` in TypeScript
    },
  },
  {
    ignores: [
      "node_modules", // Ignore node_modules
      "dist",         // Ignore build artifacts
    ],
  },
];
