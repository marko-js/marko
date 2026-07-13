import eslint from "@eslint/js";
import sortImportPlugin from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "!packages/runtime-class/src/node_modules",
      ".cache",
      ".sizes",
      ".vscode",
      "**/__snapshots__",
      "**/*.marko.js",
      "**/*actual*",
      "**/*dist/",
      "**/*expected*",
      "**/snapshots",
      "**/test/**/input.js",
      "coverage",
      "node_modules",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.mocha,
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "simple-import-sort": sortImportPlugin,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
);
