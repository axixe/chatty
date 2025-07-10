import { defineConfig } from "eslint/config"
import vue from 'eslint-plugin-vue';
import typescriptParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser'
import ts from 'typescript-eslint'
import js from "@eslint/js"

export default defineConfig([
  js.configs.recommended,
  ts.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    ignores: [
      'node_modules/**',
      '.nuxt/**',
    ],
  },
  {
    name: "chatty/recommended-rules",
    files: ["**/*.ts", '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        sourceType: "module",
        ecmaVersion: "latest",
        extraFileExtensions: [".vue"]
      }
    },
    plugins: {
      vue
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    }
  },
])